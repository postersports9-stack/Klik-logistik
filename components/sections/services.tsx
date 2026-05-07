import Image from "next/image"
import { SectionHeading } from "@/components/sections/section-heading"
import { SITE_IMAGES } from "@/lib/constants/images"

const services = [
  {
    n: "01",
    title: "Меѓународен транспорт",
    body: "Редовни линии низ ЕУ. Палетизирани и непалетизирани товари, групажи и комплет.",
  },
  {
    n: "02",
    title: "Домашна дистрибуција",
    body: "Превоз и достава низ Македонија со фиксни дневни релации.",
  },
  {
    n: "03",
    title: "Експрес курирски",
    body: "Урген товар со точно дефиниран рок на испорака.",
  },
  {
    n: "04",
    title: "ADR и габаритни",
    body: "Опасни и вонгабаритни товари со сертифицирани возила и возачи.",
  },
  {
    n: "05",
    title: "Складирање",
    body: "Краткорочно и долгорочно складирање во магацин со 24/7 пристап.",
  },
  {
    n: "06",
    title: "Царинско застапување",
    body: "Пакет услуги од подигање до царинење на крајна дестинација.",
  },
]

export function Services() {
  return (
    <section id="uslugi" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-10 md:px-8 md:py-16">
        <SectionHeading
          number="01"
          eyebrow="Услуги"
          title="Што превезуваме."
          lead="Шест клучни услуги — секоја со посветен диспечер и фиксни рокови."
        />

        <div className="mt-8 grid grid-cols-12 gap-10">
          <div className="relative col-span-12 hidden xl:col-span-4 xl:block">
            <div className="sticky top-24 aspect-[3/4] w-full overflow-hidden bg-kl-subtle">
              <Image
                src={SITE_IMAGES.capabilities[2]}
                alt=""
                fill
                sizes="33vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>
          <ul className="col-span-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:col-span-8">
            {services.map((s) => (
              <li key={s.n} className="border-t border-kl-border pt-6">
                <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">{s.n}</div>
                <h3 className="mt-3 text-[22px] font-medium leading-[28px] text-kl-ink">{s.title}</h3>
                <p className="mt-2 text-[16px] leading-[26px] text-kl-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
