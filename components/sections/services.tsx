import { SectionHeading } from "@/components/sections/section-heading"

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
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading
          number="01"
          eyebrow="Услуги"
          title="Што превезуваме."
          lead="Шест клучни услуги — секоја со посветен диспечер и фиксни рокови."
        />

        <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <li key={s.n} className="border-t border-kl-border pt-6">
              <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">{s.n}</div>
              <h3 className="mt-3 text-[22px] font-medium leading-[28px] text-kl-ink">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-[26px] text-kl-muted">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
