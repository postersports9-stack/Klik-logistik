import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function getIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return "unknown-ip";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const ip = getIp(request);
    const now = Date.now();
    const ONE_DAY = 24 * 60 * 60 * 1000;

    const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - record.lastReset > ONE_DAY) {
      record.count = 0;
      record.lastReset = now;
    }

    if (record.count >= 3) {
      return NextResponse.json(
        { ok: false, message: "Надминат е лимитот за испраќање пораки (макс. 3 дневно)." },
        { status: 429 }
      );
    }

    record.count += 1;
    rateLimitMap.set(ip, record);

    const body = await request.json();

    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const route = String(body.route || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, message: "Име и телефон се задолжителни." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Klikgroup Website" <${process.env.CONTACT_FROM}>`,
      to: process.env.CONTACT_TO,
      replyTo: email || process.env.CONTACT_FROM,
      subject: `Нова порака од klikgroup.mk - ${name}`,
      text: `
Нова порака од klikgroup.mk

Име: ${name}
Компанија: ${company || "-"}
Телефон: ${phone}
Email: ${email || "-"}
Релација: ${route || "-"}
Порака: ${message || "-"}
      `,
      html: `
        <h2>Нова порака од klikgroup.mk</h2>
        <p><strong>Име:</strong> ${escapeHtml(name)}</p>
        <p><strong>Компанија:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "-")}</p>
        <p><strong>Релација:</strong> ${escapeHtml(route || "-")}</p>
        <p><strong>Порака:</strong><br/>${escapeHtml(message || "-")}</p>
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Пораката е успешно испратена.",
    });
  } catch (error: any) {
    console.error("Contact email error:", error);

    const errorMessage = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      { ok: false, message: `Настана грешка при испраќање: ${errorMessage}` },
      { status: 500 }
    );
  }
}
