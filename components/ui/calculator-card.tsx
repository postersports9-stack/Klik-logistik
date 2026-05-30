"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Search } from "lucide-react"
import { PRICELIST_CITIES, TRUCKS, priceFor, type TruckSize } from "@/lib/constants/pricelist"
import { formatDenar } from "@/lib/format"

type Variant = "hero" | "section"

export function CalculatorCard({ variant = "section" }: { variant?: Variant }) {
  const [city, setCity] = useState(PRICELIST_CITIES[0])
  const [truck, setTruck] = useState<TruckSize>("small")
  const [phone, setPhone] = useState("")
  const [reserved, setReserved] = useState(false)

  const { price, truckSpec } = useMemo(() => {
    const spec = TRUCKS.find((t) => t.id === truck)!
    return { price: priceFor(city, truck), truckSpec: spec }
  }, [city, truck])

  function reserve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.info("[CalculatorCard]", { variant, city, truck, phone, price })
    setReserved(true)
  }

  if (variant === "hero") {
    return (
      <div className="bg-white p-6 sm:p-7 shadow-xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-kl-muted">
          Калкулатор
        </p>
        <p className="mt-1 text-[20px] font-medium tracking-tight text-kl-ink">
          Брза проценка
        </p>
        <p className="mt-1 text-[12px] text-kl-muted">
          Тргнување од Скопје
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3">
          <Field label="До (град)">
            <CitySearch value={city} onChange={setCity} />
          </Field>
          <Field label="Тип на камион">
            <TruckSelect value={truck} onChange={setTruck} />
          </Field>
        </div>

        <div className="mt-5 flex items-baseline justify-between border-t border-kl-border pt-4">
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
            Цена
          </span>
          <span className="text-[28px] leading-none font-medium tabular-nums text-kl-ink sm:text-[32px]">
            {price !== null ? `${formatDenar(price)} ден.` : "—"}
          </span>
        </div>
        <p className="mt-1 text-[12px] text-kl-muted">
          {truckSpec.volume}
        </p>

        {reserved ? (
          <p className="mt-4 text-[14px] text-kl-ink">
            Резервирано. Диспечер ќе ве повика во рок од 30 минути.
          </p>
        ) : (
          <form onSubmit={reserve} className="mt-4">
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07X XXX XXX"
              className={inputCls}
            />
            <button
              type="submit"
              className="mt-3 block h-12 w-full rounded-[8px] bg-kl-cta text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong"
            >
              Резервирај
            </button>
          </form>
        )}

        <a
          href="/#pokritie"
          className="mt-3 block h-11 w-full rounded-[8px] border border-kl-ink bg-white text-center text-[14px] font-medium leading-[42px] text-kl-ink transition-colors duration-100 hover:bg-kl-ink hover:text-white"
        >
          Види подетално
        </a>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
      <div className="min-w-0 md:col-span-7">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Од">
            <input value="Скопје" readOnly className={inputCls} />
          </Field>
          <Field label="До (град)">
            <Select value={city} onChange={setCity} options={PRICELIST_CITIES} />
          </Field>
          <Field label="Тип на камион">
            <TruckSelect value={truck} onChange={setTruck} />
          </Field>
          <Field label="Датум">
            <input type="date" className={inputCls} />
          </Field>
        </div>
      </div>

      <div className="min-w-0 md:col-span-5">
        <div className="bg-kl-subtle p-6 sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-kl-muted sm:text-[12px] sm:tracking-[0.18em]">
            Цена
          </p>
          <p className="mt-3 break-words text-[36px] leading-[40px] font-medium tabular-nums text-kl-ink sm:text-[56px] sm:leading-[60px]">
            {price !== null ? `${formatDenar(price)} ден.` : "—"}
          </p>
          <dl className="mt-6 space-y-2 text-[14px]">
            <div className="flex flex-wrap justify-between gap-x-3">
              <dt className="text-kl-muted">Релација</dt>
              <dd className="tabular-nums text-kl-ink">Скопје → {city}</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-3">
              <dt className="text-kl-muted">Капацитет</dt>
              <dd className="tabular-nums text-kl-ink">
                {truckSpec.volume}
              </dd>
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
                className={`mt-2 ${inputCls}`}
              />
              <button
                type="submit"
                className="mt-3 block h-12 w-full rounded-[8px] bg-kl-cta text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong"
              >
                Резервирај
              </button>
            </form>
          )}
          <p className="mt-3 text-[12px] text-kl-muted">
            Цените се во денари, за тргнување од Скопје. Финална потврда по повик.
          </p>
        </div>
      </div>
    </div>
  )
}

const inputCls =
  "block h-12 w-full rounded-[8px] border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-ink"

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

function Select({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (v: string) => void
  options: readonly string[]
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  )
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ѓ/g, "г")
    .replace(/ќ/g, "к")
    .replace(/ј/g, "j")
    .replace(/ч/g, "ч")
    .replace(/џ/g, "џ")
    .replace(/\s+/g, " ")
    .trim()
}

function CitySearch({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  const filtered = useMemo(() => {
    const q = normalize(query)
    if (!q) return PRICELIST_CITIES
    return PRICELIST_CITIES.filter((c) => normalize(c).includes(q))
  }, [query])

  useEffect(() => {
    setHighlight(0)
  }, [query])

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [])

  function commit(c: string) {
    onChange(c)
    setQuery("")
    setOpen(false)
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setOpen(true)
      setHighlight((h) => Math.min(h + 1, filtered.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setHighlight((h) => Math.max(h - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (filtered[highlight]) commit(filtered[highlight])
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  return (
    <div ref={wrapRef} className="relative">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kl-muted" />
        <input
          type="text"
          value={open ? query : value}
          onFocus={() => {
            setOpen(true)
            setQuery("")
          }}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onKeyDown={onKey}
          placeholder="Барај град…"
          className="block h-12 w-full rounded-[8px] border border-kl-border bg-white pl-9 pr-3 text-[15px] outline-none focus:border-kl-ink"
        />
      </div>
      {open && (
        <ul className="absolute left-0 right-0 top-[calc(100%+4px)] z-30 max-h-[240px] overflow-y-auto rounded-[8px] border border-kl-border bg-white shadow-lg">
          {filtered.length === 0 ? (
            <li className="px-3 py-2 text-[13px] text-kl-muted">Нема резултати</li>
          ) : (
            filtered.map((c, i) => (
              <li
                key={c}
                onMouseEnter={() => setHighlight(i)}
                onMouseDown={(e) => {
                  e.preventDefault()
                  commit(c)
                }}
                className={`cursor-pointer px-3 py-2 text-[14px] ${
                  i === highlight ? "bg-kl-subtle text-kl-ink" : "text-kl-ink"
                }`}
              >
                {c}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}

function TruckSelect({
  value,
  onChange,
}: {
  value: TruckSize
  onChange: (v: TruckSize) => void
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {TRUCKS.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={`flex flex-col items-center justify-center rounded-[8px] border px-2 py-3 text-center transition-colors duration-100 ${
            value === t.id
              ? "border-kl-ink bg-kl-ink text-white"
              : "border-kl-border bg-white text-kl-ink hover:border-kl-ink"
          }`}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] opacity-70">
            Капацитет
          </span>
          <span className="mt-0.5 text-[14px] font-medium tabular-nums">
            {t.volume}
          </span>
        </button>
      ))}
    </div>
  )
}
