"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/sections/section-heading"
import { BRAND } from "@/lib/constants/brand"

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.info("[ContactForm]", data)
    await new Promise((r) => setTimeout(r, 300))
    setSubmitting(false)
    setDone(true)
  }

  return (
    <section id="kontakt" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading
          number="06"
          eyebrow="Контакт"
          title="Побарај понуда."
          lead="Одговараме во 30 минути работно време."
        />

        <div className="mt-12 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            {done ? (
              <p className="text-[16px] text-kl-ink">
                Благодариме. Ќе ве контактираме во рок од 30 минути.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input name="name" label="Име" required />
                <Input name="company" label="Компанија" />
                <Input name="phone" type="tel" label="Телефон" required />
                <Input name="email" type="email" label="Email" />
                <div className="sm:col-span-2">
                  <Input name="route" label="Релација" placeholder="Скопје → Виена" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                      Порака
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      className="mt-1 block w-full border border-kl-border bg-white px-3 py-3 text-[15px] outline-none focus:border-kl-accent"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-12 bg-black text-[14px] font-medium tracking-wide text-white transition-colors duration-100 hover:bg-black/85 disabled:opacity-60 sm:col-span-2"
                >
                  {submitting ? "Се испраќа…" : "Побарај понуда"}
                </button>
              </form>
            )}
          </div>

          <aside className="col-span-12 md:col-span-5">
            <dl className="space-y-6 text-[14px]">
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Телефон</dt>
                <dd className="mt-1">
                  <a href={BRAND.phoneHref} className="text-[22px] font-medium text-kl-ink">
                    {BRAND.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Email</dt>
                <dd className="mt-1 text-kl-ink">
                  <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Адреса</dt>
                <dd className="mt-1 text-kl-ink">{BRAND.address}</dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Работно време</dt>
                <dd className="mt-1 text-kl-ink">Пон–Саб 08:00–20:00</dd>
              </div>
            </dl>

            <div className="mt-8">
              <iframe
                title="Локација"
                src="https://www.google.com/maps?q=Skopje&output=embed"
                className="h-[320px] w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Input({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
      />
    </label>
  )
}
