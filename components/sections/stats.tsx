const stats = [
  { value: "12+", label: "години" },
  { value: "6", label: "возила" },
  { value: "14", label: "земји" },
  { value: "24/7", label: "диспечер" },
]

export function Stats() {
  return (
    <section className="bg-kl-ink text-white">
      <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <div className="border-t border-white/15 pt-6">
          <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/60 sm:text-[12px] sm:tracking-[0.18em]">
            <span className="border-b border-kl-accent pb-0.5 text-white">04</span> — Бројки
          </div>
          <h2 className="mt-6 text-[32px] leading-[40px] font-medium tracking-[-0.015em] md:text-[40px] md:leading-[48px]">
            Што правиме во бројки.
          </h2>
        </div>

        <ul className="mt-8 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`px-4 sm:px-6 ${i < 3 ? "md:border-r md:border-white/15" : ""} ${i % 2 === 0 ? "border-r border-white/15 md:border-r" : ""}`}
            >
              <div className="text-[44px] leading-[52px] font-normal tabular-nums text-kl-cta sm:text-[56px] sm:leading-[64px] md:text-[72px] md:leading-[80px]">
                {s.value}
              </div>
              <div className="mt-2 text-[14px] text-white/70">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
