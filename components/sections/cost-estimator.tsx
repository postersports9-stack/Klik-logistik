"use client"

import { useMemo, useState } from "react"
import { SectionHeading } from "@/components/sections/section-heading"

const cities: Record<string, [number, number]> = {
  "Скопје": [42.0, 21.43],
  "Битола": [41.03, 21.33],
  "Прилеп": [41.34, 21.55],
  "Куманово": [42.13, 21.71],
  "Тетово": [42.0, 20.97],
  "Охрид": [41.11, 20.8],
  "Штип": [41.74, 22.19],
  "Велес": [41.71, 21.78],
}

const cityNames = Object.keys(cities)

const cargoMultipliers: Record<string, number> = {
  "Палети": 1,
  "Расути": 1.1,
  "ADR": 1.5,
  "Комбиниран": 1.2,
}

const cargoNames = Object.keys(cargoMultipliers)

function haversineKm(a: [number, number], b: [number, number]) {
  const R = 6371
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(b[0] - a[0])
  const dLon = toRad(b[1] - a[1])
  const lat1 = toRad(a[0])
  const lat2 = toRad(b[0])
  const x =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return Math.round(2 * R * Math.asin(Math.sqrt(x)))
}

export function CostEstimator() {
  const [from, setFrom] = useState("Скопје")
  const [to, setTo] = useState("Битола")
  const [tonnage, setTonnage] = useState(3)
  const [cargo, setCargo] = useState("Палети")
  const [phone, setPhone] = useState("")
  const [reserved, setReserved] = useState(false)

  const { km, base, surcharge, total } = useMemo(() => {
    const km = haversineKm(cities[from], cities[to])
    const ratePerKm = 0.95
    const base = Math.round(km * ratePerKm)
    const mult = cargoMultipliers[cargo] ?? 1
    const tonnageBump = Math.max(0, tonnage - 1) * 8
    const surcharge = Math.round(base * (mult - 1) + tonnageBump)
    const total = base + surcharge
    return { km, base, surcharge, total }
  }, [from, to, tonnage, cargo])

  function reserve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.info("[CostEstimator]", { from, to, tonnage, cargo, phone, total })
    setReserved(true)
  }

  return (
    <section id="kalkulator" className="overflow-x-hidden bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading
          number="03"
          eyebrow="Израчунај цена"
          title="Брза проценка."
          lead="Внеси релација и тонажа. Точна цена со повратен повик во 30 минути."
        />

        <div className="mt-12 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Од">
                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
                >
                  {cityNames.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="До">
                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
                >
                  {cityNames.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Тонажа (t)">
                <input
                  type="number"
                  min={0.5}
                  max={24}
                  step={0.5}
                  value={tonnage}
                  onChange={(e) => setTonnage(parseFloat(e.target.value || "0"))}
                  className="block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
                />
              </Field>
              <Field label="Тип на товар">
                <select
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  className="block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
                >
                  {cargoNames.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Датум">
                <input
                  type="date"
                  className="block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
                />
              </Field>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="bg-kl-subtle p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                Проценета цена
              </p>
              <p className="mt-3 text-[40px] leading-[44px] font-medium tabular-nums text-kl-ink sm:text-[56px] sm:leading-[60px]">
                €{total}
              </p>
              <dl className="mt-6 space-y-2 text-[14px]">
                <div className="flex justify-between">
                  <dt className="text-kl-muted">Километража</dt>
                  <dd className="tabular-nums text-kl-ink">{km} km</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-kl-muted">Основа</dt>
                  <dd className="tabular-nums text-kl-ink">€{base}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-kl-muted">Доплати</dt>
                  <dd className="tabular-nums text-kl-ink">€{surcharge}</dd>
                </div>
              </dl>

              {reserved ? (
                <p className="mt-6 text-[14px] text-kl-ink">
                  Резервирано. Диспечер ќе ве повика во рок од 30 минути.
                </p>
              ) : (
                <form onSubmit={reserve} className="mt-6">
                  <p className="text-[13px] text-kl-muted">Прифаќаш? Внеси телефон.</p>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07X XXX XXX"
                    className="mt-2 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
                  />
                  <button
                    type="submit"
                    className="mt-3 block h-12 w-full bg-black text-[14px] font-medium tracking-wide text-white transition-colors duration-100 hover:bg-black/85"
                  >
                    Резервирај
                  </button>
                </form>
              )}
              <p className="mt-3 text-[12px] text-kl-muted">
                Цената е ориентациска. Финална потврда по повик.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  )
}
