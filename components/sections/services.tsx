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
    <section id="uslugi" className="bg-[#ebebeb]">
      <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionHeading
          number="01"
          eyebrow="Услуги"
          title="Што превезуваме."
          lead="Шест клучни услуги — секоја со посветен диспечер и фиксни рокови."
        />

        <div className="mt-8 grid grid-cols-12 gap-6 md:gap-10">
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
          <ul className="col-span-12 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10 xl:col-span-8">
            {services.map((s) => (
              <li key={s.n} className="min-w-0 border-t border-kl-border pt-6">
                <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-kl-muted sm:text-[12px] sm:tracking-[0.18em]">{s.n}</div>
                <h3 className="mt-3 break-words text-[20px] font-medium leading-[26px] text-kl-ink sm:text-[22px] sm:leading-[28px]">{s.title}</h3>
                <p className="mt-2 break-words text-[15px] leading-[24px] text-kl-muted sm:text-[16px] sm:leading-[26px]">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
