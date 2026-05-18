"use client"

import { motion, useInView } from "framer-motion"
import { useMemo, useRef, useState } from "react"
import { SectionHeading } from "@/components/sections/section-heading"
import { PRICELIST, TRUCKS, priceFor, type TruckSize } from "@/lib/constants/pricelist"
import { CITY_COORDS, MAP_VIEWBOX, MK_OUTLINE_PATH } from "@/lib/constants/city-coords"
import { formatDenar } from "@/lib/format"
import { SectionWatermark } from "@/components/ui/section-watermark"

const VIEW_W = MAP_VIEWBOX.w
const VIEW_H = MAP_VIEWBOX.h

type Dot = {
  city: string
  x: number
  y: number
  small: number
  medium: number
  large: number
  labelAnchor: "start" | "middle" | "end"
  labelDx: number
  labelDy: number
  major: boolean
}

const MAJOR_CITIES = new Set([
  "Битола",
  "Охрид",
  "Куманово",
  "Тетово",
  "Гевгелија",
  "Штип",
  "Прилеп",
  "Велес",
  "Струмица",
])

const LABEL_OVERRIDES: Record<string, { dx?: number; dy?: number; anchor?: "start" | "middle" | "end" }> = {
  "Скопје": { dx: 16, dy: -10, anchor: "start" },
  "Гевгелија": { dx: -14, dy: 16, anchor: "end" },
  "Дојран": { dx: 14, dy: 4, anchor: "start" },
  "Валандово": { dx: 14, dy: -6, anchor: "start" },
  "Струга": { dx: -14, dy: 4, anchor: "end" },
  "Охрид": { dx: 14, dy: 4, anchor: "start" },
  "Ресен": { dx: 14, dy: 16, anchor: "start" },
  "Битола": { dx: 14, dy: 16, anchor: "start" },
  "Крушево": { dx: -14, dy: -4, anchor: "end" },
  "Прилеп": { dx: 14, dy: -4, anchor: "start" },
  "Кавадарци": { dx: -14, dy: 14, anchor: "end" },
  "Неготино": { dx: 14, dy: -4, anchor: "start" },
  "Демир Капија": { dx: 14, dy: 4, anchor: "start" },
  "Македонски Брод": { dx: 0, dy: 22, anchor: "middle" },
  "Кичево": { dx: -14, dy: 4, anchor: "end" },
  "Маврово": { dx: -14, dy: 0, anchor: "end" },
  "Дебар": { dx: -14, dy: 4, anchor: "end" },
  "Гостивар": { dx: -14, dy: 0, anchor: "end" },
  "Тетово": { dx: -14, dy: -4, anchor: "end" },
  "Куманово": { dx: -14, dy: -4, anchor: "end" },
  "Крива Паланка": { dx: 14, dy: -4, anchor: "start" },
  "Кратово": { dx: 14, dy: -4, anchor: "start" },
  "Пробиштип": { dx: 14, dy: -4, anchor: "start" },
  "Свети Николе": { dx: -14, dy: -4, anchor: "end" },
  "Велес": { dx: -14, dy: 14, anchor: "end" },
  "Штип": { dx: 14, dy: -4, anchor: "start" },
  "Кочани": { dx: -14, dy: -4, anchor: "end" },
  "Виница": { dx: 14, dy: -10, anchor: "start" },
  "Македонска Каменица": { dx: 0, dy: -16, anchor: "middle" },
  "Делчево": { dx: 14, dy: -4, anchor: "start" },
  "Пехчево": { dx: 14, dy: -4, anchor: "start" },
  "Берово": { dx: 14, dy: 4, anchor: "start" },
  "Радовиш": { dx: 14, dy: 14, anchor: "start" },
  "Струмица": { dx: 14, dy: 4, anchor: "start" },
}

function buildDots(): Dot[] {
  return PRICELIST.filter((c) => c.city !== "Скопје локал" && c.city !== "Скопје")
    .map((row) => {
      const c = CITY_COORDS[row.city]
      if (!c) return null
      const o = LABEL_OVERRIDES[row.city] ?? {}
      return {
        city: row.city,
        x: c.x,
        y: c.y,
        small: row.small,
        medium: row.medium,
        large: row.large,
        labelAnchor: o.anchor ?? "start",
        labelDx: o.dx ?? 12,
        labelDy: o.dy ?? 4,
        major: MAJOR_CITIES.has(row.city),
      } satisfies Dot
    })
    .filter(Boolean) as Dot[]
}

export function CoverageMap() {
  const ref = useRef<HTMLDivElement | null>(null)
  const calcRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<string>("Битола")
  const [truck, setTruck] = useState<TruckSize>("small")

  function pickCity(city: string) {
    setSelected(city)
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      calcRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const dots = useMemo(buildDots, [])
  const activeCity = hovered ?? selected
  const activeDot = dots.find((d) => d.city === activeCity)
  const skopje = CITY_COORDS["Скопје"]
  const sx = skopje.x
  const sy = skopje.y

  const price = priceFor(selected, truck)
  const truckSpec = TRUCKS.find((t) => t.id === truck)!

  return (
    <section id="pokritie" data-theme="light" className="relative bg-white">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="Покритие" position="tr" />
        <SectionHeading
          number="01"
          eyebrow="Покритие"
          title="Возиме до 34 града."
          lead="Изберете град на мапата и тип на камион за инстант цена."
        />

        <div className="mt-8 grid grid-cols-12 gap-6 lg:gap-8">
          <div ref={ref} className="col-span-12 lg:col-span-8">
            <div className="overflow-hidden rounded-[12px] border border-kl-border bg-kl-subtle">
              <div className="relative w-full" style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}>
                <svg
                  viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <motion.path
                    d={MK_OUTLINE_PATH}
                    fill="rgba(17,17,17,0.04)"
                    stroke="rgba(17,17,17,0.22)"
                    strokeWidth={1.8}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                  />

                  {dots.map((d, i) => {
                    const isActive = hovered === d.city || selected === d.city
                    return (
                      <g
                        key={d.city}
                        onMouseEnter={() => setHovered(d.city)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => pickCity(d.city)}
                        style={{ cursor: "pointer" }}
                      >
                        <circle cx={d.x} cy={d.y} r={34} fill="transparent" />
                        <motion.line
                          x1={sx}
                          y1={sy}
                          x2={d.x}
                          y2={d.y}
                          stroke={isActive ? "rgba(17,17,17,0.45)" : "rgba(17,17,17,0.08)"}
                          strokeWidth={isActive ? 1.8 : 0.7}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: 0.6 + i * 0.02, ease: "easeOut" }}
                        />
                        <motion.circle
                          cx={d.x}
                          cy={d.y}
                          r={isActive ? 12 : 8}
                          fill={isActive ? "#FACC15" : "#111111"}
                          stroke={isActive ? "#111111" : "transparent"}
                          strokeWidth={isActive ? 2 : 0}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={inView ? { scale: 1, opacity: 1 } : {}}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 18,
                            delay: 0.4 + i * 0.025,
                          }}
                        />
                        <motion.text
                          x={d.x + d.labelDx}
                          y={d.y + d.labelDy}
                          textAnchor={d.labelAnchor}
                          fill="#111111"
                          fontSize={isActive ? 16 : 14}
                          fontWeight={isActive ? 600 : 400}
                          style={{ paintOrder: "stroke", stroke: "rgba(246,246,246,0.95)", strokeWidth: isActive ? 6 : 4 }}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.7 + i * 0.02 }}
                        >
                          {d.city}
                        </motion.text>
                      </g>
                    )
                  })}

                  <motion.circle
                    cx={sx}
                    cy={sy}
                    r={36}
                    fill="rgba(250,204,21,0.18)"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={inView ? { scale: [0.6, 1.2, 1], opacity: [0, 0.9, 0.6] } : {}}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.circle
                    cx={sx}
                    cy={sy}
                    r={12}
                    fill="#FACC15"
                    stroke="#111111"
                    strokeWidth={2}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
                  />
                  <motion.text
                    x={sx + 22}
                    y={sy - 16}
                    fill="#111111"
                    fontSize={20}
                    fontWeight={700}
                    style={{ paintOrder: "stroke", stroke: "rgba(246,246,246,0.95)", strokeWidth: 6 }}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    Скопје
                  </motion.text>

                  {activeDot && (
                    <g pointerEvents="none">
                      <line
                        x1={sx}
                        y1={sy}
                        x2={activeDot.x}
                        y2={activeDot.y}
                        stroke="rgba(17,17,17,0.55)"
                        strokeWidth={2}
                      />
                      <circle
                        cx={activeDot.x}
                        cy={activeDot.y}
                        r={12}
                        fill="#FACC15"
                        stroke="#111111"
                        strokeWidth={2}
                      />
                      <text
                        x={activeDot.x + activeDot.labelDx}
                        y={activeDot.y + activeDot.labelDy}
                        textAnchor={activeDot.labelAnchor}
                        fill="#111111"
                        fontSize={16}
                        fontWeight={600}
                        style={{ paintOrder: "stroke", stroke: "rgba(246,246,246,0.95)", strokeWidth: 7 }}
                      >
                        {activeDot.city}
                      </text>
                    </g>
                  )}
                </svg>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-kl-muted">
              Кликни град за да го избереш. Сите релации тргнуваат од Скопје.
            </p>
          </div>

          <div ref={calcRef} className="col-span-12 scroll-mt-24 lg:col-span-4">
            <div className="rounded-[12px] border border-kl-border bg-white p-5 sm:p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                Калкулатор
              </p>
              <p className="mt-1 text-[18px] font-medium tracking-tight text-kl-ink">
                Цена за релација
              </p>

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                    Изберан град
                  </span>
                  <div className="mt-1 flex h-12 items-center rounded-[8px] border border-kl-border bg-kl-subtle px-3 text-[15px] text-kl-ink">
                    Скопје → {selected}
                  </div>
                </label>

                <label className="block">
                  <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                    Тип на камион
                  </span>
                  <select
                    value={truck}
                    onChange={(e) => setTruck(e.target.value as TruckSize)}
                    className="mt-1 block h-12 w-full rounded-[8px] border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-ink"
                  >
                    {TRUCKS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label} · {t.pallets} палети · {t.tonnage} т
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-6 rounded-[10px] bg-kl-ink p-5 text-white">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                  Цена
                </div>
                <div className="mt-2 text-[40px] leading-[44px] font-medium tabular-nums">
                  {price !== null ? `${formatDenar(price)}` : "—"}
                  <span className="ml-2 text-[16px] font-normal text-white/70">ден.</span>
                </div>
                <div className="mt-2 text-[12px] text-white/60">
                  {truckSpec.label} · {truckSpec.pallets} палети · {truckSpec.tonnage} т
                </div>
              </div>

              <a
                href="#kontakt"
                className="mt-4 block h-12 rounded-[8px] bg-kl-cta text-center text-[14px] font-medium leading-[48px] tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong"
              >
                Резервирај
              </a>
              <p className="mt-3 text-[11px] text-kl-muted">
                Ориентациона цена. Финална потврда по разговор.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
