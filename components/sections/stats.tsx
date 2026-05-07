import { SectionHeading } from "@/components/sections/section-heading"

const stats = [
  { value: "12+", label: "години" },
  { value: "35", label: "возила" },
  { value: "14", label: "земји" },
  { value: "24/7", label: "диспечер" },
]

export function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading number="04" eyebrow="Бројки" title="Што правиме во бројки." />

        <ul className="mt-12 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`px-6 ${i < 3 ? "md:border-r md:border-kl-border" : ""} ${i % 2 === 0 ? "border-r border-kl-border md:border-r" : ""}`}
            >
              <div className="text-[56px] leading-[64px] font-normal tabular-nums text-kl-ink md:text-[72px] md:leading-[80px]">
                {s.value}
              </div>
              <div className="mt-2 text-[14px] text-kl-muted">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
