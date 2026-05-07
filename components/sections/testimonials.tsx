import { SectionHeading } from "@/components/sections/section-heading"

const lead = {
  quote:
    "Klik Logistik ни ги покрива сите релации низ Балканот. Точност на испорака близу 100% и диспечер кој одговара во рок од минути — реткост во бранша.",
  name: "Марија Стојанова",
  company: "Generic Trade DOO",
}

const others = [
  {
    quote:
      "По две години соработка, нема ниту еден пропуштен термин. Возилата се секогаш во ред, документите чисти.",
    name: "Игор Петровски",
    company: "Skopje Distrib",
  },
  {
    quote:
      "Ги префрлија нашите ADR испораки кон ЕУ за половина од времето на претходниот превозник.",
    name: "Александар Тасев",
    company: "Tasevski Group",
  },
]

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading number="05" eyebrow="Клиенти" title="Доверба од клиентите." />

        <figure className="mx-auto mt-12 max-w-[720px]">
          <blockquote className="text-[22px] leading-[34px] font-normal text-kl-ink">
            "{lead.quote}"
          </blockquote>
          <div className="mt-6 border-t border-kl-border pt-4 text-[14px] text-kl-muted">
            {lead.name} — {lead.company}
          </div>
        </figure>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {others.map((t) => (
            <figure key={t.name}>
              <blockquote className="text-[18px] leading-[28px] font-normal text-kl-ink">
                "{t.quote}"
              </blockquote>
              <div className="mt-4 border-t border-kl-border pt-3 text-[14px] text-kl-muted">
                {t.name} — {t.company}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
