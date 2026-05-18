"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "framer-motion"
import { SectionWatermark } from "@/components/ui/section-watermark"
import { GrainOverlay } from "@/components/ui/grain-overlay"

type Stat =
  | { value: string; numeric: number; suffix?: string; label: string }
  | { value: string; numeric?: undefined; label: string }

const stats: Stat[] = [
  { value: "12+", numeric: 12, suffix: "+", label: "години" },
  { value: "6", numeric: 6, label: "возила" },
  { value: "14", numeric: 14, label: "земји" },
  { value: "24/7", label: "диспечер" },
]

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section id="brojki" data-theme="dark" className="relative overflow-hidden bg-kl-ink text-white">
      <GrainOverlay />
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="Бројки" position="br" tone="dark" />
        <div className="border-t border-white/15 pt-6">
          <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/60 sm:text-[12px] sm:tracking-[0.18em]">
            <span className="border-b border-kl-accent pb-0.5 text-white">05</span> — Бројки
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
                {typeof s.numeric === "number" ? (
                  <Counter to={s.numeric} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </div>
              <div className="mt-2 text-[14px] text-white/70">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
