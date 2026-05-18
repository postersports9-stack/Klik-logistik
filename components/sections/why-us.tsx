import { SectionHeading } from "@/components/sections/section-heading"
import { AAPlusBadge } from "@/components/ui/aa-plus-badge"
import { SectionWatermark } from "@/components/ui/section-watermark"

const reasons = [
  {
    n: "01",
    title: "Навремена организација",
    body: "Секој транспорт го организираме брзо, одговорно и со максимална посветеност.",
  },
  {
    n: "02",
    title: "Достапност и поддршка",
    body: "Остануваме достапни и во најитните ситуации за клиентот секогаш да има решение.",
  },
  {
    n: "03",
    title: "Флексибилен пристап",
    body: "Се прилагодуваме на потребите на клиентите и секогаш бараме најдобра опција за реализација.",
  },
  {
    n: "04",
    title: "Збирен транспорт",
    body: "Организираме и збирен транспорт за помали количини роба, со флексибилна неделна организација и поекономична цена.",
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
    <section id="zoshto-nas" data-theme="light" className="relative bg-white">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="Зошто нас" position="bl" />
        <SectionHeading
          number="04"
          eyebrow="Зошто нас"
          title="Зошто да нè изберете за транспортен партнер."
        />

        <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3">
          {reasons.map((r) => (
            <li key={r.n} className="min-w-0 border-t border-kl-border pt-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                {r.n}
              </div>
              <h3 className="mt-3 text-[20px] font-medium leading-[26px] text-kl-ink sm:text-[22px] sm:leading-[28px]">
                {r.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[24px] text-kl-muted sm:text-[16px] sm:leading-[26px]">
                {r.body}
              </p>
              {r.badge && (
                <div className="mt-4">
                  <AAPlusBadge />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
