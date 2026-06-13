import { AAPlusBadge } from "@/components/ui/aa-plus-badge"
import { SectionWatermark } from "@/components/ui/section-watermark"
import { GrainOverlay } from "@/components/ui/grain-overlay"

const reasons = [
  {
    n: "01",
    title: "Транспортни Лиценци",
    body: "Поседуваме лиценци за вршење на превоз во внатрешен сообраќај и лиценца за собирање и транспорт на неопасен отпад.",
  },
  {
    n: "02",
    title: "Збирен транспорт",
    body: "Организираме и збирен транспорт за помали количини роба, со флексибилна неделна организација и поекономична цена.",
  },
  {
    n: "03",
    title: "Достапност и поддршка",
    body: "Остануваме достапни и во најитните ситуации за клиентот секогаш да има решение.",
  },
  {
    n: "04",
    title: "Флексибилен пристап",
    body: "Се прилагодуваме на потребите на клиентите и секогаш бараме најдобра опција за реализација.",
  },
  {
    n: "05",
    title: "Сигурна мрежа на партнери",
    body: "Кога е потребно, вклучуваме и партнерски компании за транспортот да се реализира без застој.",
  },
  {
    n: "06",
    title: "Потврдена доверба",
    body: "Клиентите нè одбираат за долгорочна соработка и нашата компанија е носител на AA+ сертификат од CompanyWall Business.",
    badge: true as const,
  },
]

export function WhyUs() {
  return (
    <section id="zoshto" data-theme="dark" className="relative overflow-hidden bg-kl-ink text-white">
      <GrainOverlay />
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="Зошто" position="bl" tone="dark" />

        <div className="border-t border-white/15 pt-6">
          <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/60 sm:text-[12px] sm:tracking-[0.18em]">
            <span className="border-b border-kl-accent pb-0.5 text-white">02</span> — Зошто
          </div>
          <h2 className="mt-6 text-[32px] leading-[40px] font-medium tracking-[-0.015em] md:text-[40px] md:leading-[48px]">
            Зошто да нè изберете за транспортен партнер.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
          {reasons.map((r) => (
            <li key={r.n} className="min-w-0 border-t border-white/15 pt-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                {r.n}
              </div>
              <h3 className="mt-3 text-[20px] font-medium leading-[26px] text-white sm:text-[22px] sm:leading-[28px]">
                {r.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[24px] text-white/70 sm:text-[16px] sm:leading-[26px]">
                {r.body}
              </p>
              {r.badge && (
                <div className="mt-4">
                  <AAPlusBadge variant="dark" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
