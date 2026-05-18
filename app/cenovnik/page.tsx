import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { PRICELIST, TRUCKS } from "@/lib/constants/pricelist"
import { formatDenar } from "@/lib/format"

export const metadata = {
  title: "Ценовник — Klik Logistik",
  description: "Цени за домашен транспорт со тргнување од Скопје, во денари.",
}

export default function CenovnikPage() {
  return (
    <main>
      <Header />
      <section className="bg-white">
        <div className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 md:px-8 md:py-20">
          <div className="border-t border-kl-border pt-6">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-kl-muted">
              <span className="border-b border-kl-accent pb-0.5 text-kl-ink">08</span> — Ценовник
            </div>
            <h1 className="mt-6 text-[32px] leading-[40px] font-medium tracking-[-0.015em] text-kl-ink md:text-[40px] md:leading-[48px]">
              Ценовник на услугите.
            </h1>
            <p className="mt-4 max-w-[680px] text-[16px] leading-[26px] text-kl-muted md:text-[17px] md:leading-[28px]">
              Цените се во денари и важат за тргнување од Скопје. Финалната
              понуда се потврдува по разговор со диспечер.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TRUCKS.map((t) => (
              <div key={t.id} className="rounded-[8px] border border-kl-border bg-kl-subtle p-5">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  Тип
                </div>
                <div className="mt-2 text-[20px] font-medium text-kl-ink">{t.label}</div>
                <dl className="mt-4 space-y-2 text-[14px]">
                  <div className="flex justify-between">
                    <dt className="text-kl-muted">Палети</dt>
                    <dd className="tabular-nums text-kl-ink">{t.pallets}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-kl-muted">Носивост</dt>
                    <dd className="tabular-nums text-kl-ink">{t.tonnage} т</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-kl-border text-left">
                  <th className="py-3 pr-4 text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                    Град
                  </th>
                  <th className="py-3 px-4 text-right text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                    Мал
                  </th>
                  <th className="py-3 px-4 text-right text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                    Среден
                  </th>
                  <th className="py-3 pl-4 text-right text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                    Голем
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICELIST.map((row) => (
                  <tr key={row.city} className="border-b border-kl-border/60">
                    <td className="py-3 pr-4 text-kl-ink">{row.city}</td>
                    <td className="py-3 px-4 text-right tabular-nums text-kl-ink">
                      {formatDenar(row.small)}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums text-kl-ink">
                      {formatDenar(row.medium)}
                    </td>
                    <td className="py-3 pl-4 text-right tabular-nums text-kl-ink">
                      {formatDenar(row.large)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[12px] text-kl-muted">
            Сите цени се во денари (МКД). За меѓународни релации, збирен
            транспорт или нестандардни товари — повикајте го диспечерот.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
