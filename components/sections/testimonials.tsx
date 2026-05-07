import { Star } from "lucide-react"
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

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-kl-accent stroke-kl-accent" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-[#FAF8F5]">
      <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionHeading number="05" eyebrow="Клиенти" title="Доверба од клиентите." />

        <figure className="mx-auto mt-8 max-w-[720px]">
          <Stars />
          <blockquote className="mt-4 text-[22px] leading-[34px] font-normal text-kl-ink">
            "{lead.quote}"
          </blockquote>
          <div className="mt-6 border-t border-kl-border pt-4 text-[14px] text-kl-muted">
            {lead.name} — {lead.company}
          </div>
        </figure>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {others.map((t) => (
            <figure key={t.name}>
              <Stars />
              <blockquote className="mt-3 text-[18px] leading-[28px] font-normal text-kl-ink">
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
