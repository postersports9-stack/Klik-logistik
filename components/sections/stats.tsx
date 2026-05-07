const stats = [
  { value: "12+", label: "години" },
  { value: "6", label: "возила" },
  { value: "14", label: "земји" },
  { value: "24/7", label: "диспечер" },
]

export function Stats() {
  return (
    <section className="bg-kl-ink text-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <div className="border-t border-white/15 pt-6">
          <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/60">
            <span className="border-b border-kl-accent pb-0.5 text-white">04</span> — Бројки
          </div>
          <h2 className="mt-6 text-[32px] leading-[40px] font-medium tracking-[-0.015em] md:text-[40px] md:leading-[48px]">
            Што правиме во бројки.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className={`px-6 ${i < 3 ? "md:border-r md:border-white/15" : ""} ${i % 2 === 0 ? "border-r border-white/15 md:border-r" : ""}`}
            >
              <div className="text-[56px] leading-[64px] font-normal tabular-nums text-kl-accent md:text-[72px] md:leading-[80px]">
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
