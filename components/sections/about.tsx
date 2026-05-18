import { SectionHeading } from "@/components/sections/section-heading"
import { SectionWatermark } from "@/components/ui/section-watermark"

const paragraphs = [
  "Klik Logistik е логистичка компанија специјализирана за сигурен, навремен и ефикасен транспорт во Македонија. Градиме раст преку стабилна услуга и долгорочна соработка со клиенти од различни индустрии.",
  "Работиме организирано и одговорно, со јасна комуникација и фокус на секоја испорака. Обезбедуваме практични логистички решенија прилагодени на реалните потреби на клиентите, со акцент на точност и сигурност.",
  "Нашата сила е во тимот. Се грижиме за луѓето во компанијата затоа што веруваме дека добрата услуга започнува од внатре.",
  "Во следната фаза од развојот, ја прошируваме понудата кон меѓународен транспорт низ Европа.",
]

export function About() {
  return (
    <section id="za-nas" data-theme="light" className="relative bg-white">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="За нас" position="bl" />
        <SectionHeading number="02" eyebrow="За нас" title="Логистика што се држи за збор." />
        <div className="mt-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-8">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-4 max-w-[680px] text-[16px] leading-[26px] text-kl-ink/85 md:text-[17px] md:leading-[28px] first:mt-0"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
