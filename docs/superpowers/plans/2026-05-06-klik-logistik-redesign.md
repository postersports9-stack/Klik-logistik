# Klik Logistik Homepage Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage with editorial restraint — 7 sections, single hero image with overlaid 3-field quote form, no decorative animation, Anthropic-style spacing on the existing gray + Roboto brand.

**Architecture:** Next.js 16 App Router, Tailwind v4, shadcn primitives, Roboto via `next/font`. All sections live under `components/sections/`. A new shared `<SectionHeading />` component renders the eyebrow/divider/h2/lead block used by 6 of 7 sections and owns the only motion on the page (200ms fade-up on intersect). No test framework is set up — validation is `next build`, `next lint`, plus manual browser checks.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/ui, Roboto (latin + cyrillic).

**Spec:** `docs/superpowers/specs/2026-05-06-klik-logistik-redesign-design.md`

**Branch:** `redesign/claude-restraint`

---

## File map

**Modify:**
- `app/page.tsx` — section order
- `app/layout.tsx` — Roboto weights pruned
- `app/globals.css` — design tokens
- `components/sections/header.tsx` — full rewrite
- `components/sections/hero.tsx` — full rewrite
- `components/sections/services.tsx` — full rewrite
- `components/sections/vehicles.tsx` — full rewrite
- `components/sections/cost-estimator.tsx` — full rewrite
- `components/sections/stats.tsx` — full rewrite
- `components/sections/testimonials.tsx` — full rewrite
- `components/sections/contact-form.tsx` — full rewrite
- `components/sections/footer.tsx` — full rewrite

**Create:**
- `components/sections/section-heading.tsx` — shared heading + divider + fade-up
- `components/ui/quote-form.tsx` — 3-field quick-quote form used in hero

**Delete:**
- `components/sections/capabilities.tsx`
- `components/sections/history.tsx`
- `components/sections/faq.tsx`
- `components/sections/projects-slider.tsx`
- `components/ui/floating-contact.tsx`

---

## Conventions for every task

- After every code change, run **`pnpm build`** (or `npm run build`) and confirm exit code 0. If build fails, fix before committing.
- Commit messages use Conventional Commits.
- Branch is already `redesign/claude-restraint`. Do not switch.
- Do not introduce new dependencies.
- Use `cn()` from `@/lib/utils` for class merging.
- Macedonian copy taken from spec; final copy revisions are out of scope for this plan.

---

## Task 1: Design tokens in `globals.css`

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add new tokens, keep existing shadcn vars**

Replace the `:root` block in `app/globals.css` so the existing shadcn CSS variables stay intact (other shadcn primitives still consume them) but adopt a restraint-first ink/muted/border/subtle set used by the new sections. Append the new tokens *after* the existing `--sidebar-ring` line, before the closing brace.

Insert at end of `:root` (just before `}`):

```css
  /* --- Klik Logistik redesign tokens --- */
  --kl-ink: #111111;
  --kl-muted: #6B6B6B;
  --kl-border: #E5E5E5;
  --kl-subtle-bg: #F6F6F6;
  --kl-accent: oklch(0.577 0.245 27.325);
```

Then in the `@theme inline {}` block, append (just before its closing brace):

```css
  --color-kl-ink: var(--kl-ink);
  --color-kl-muted: var(--kl-muted);
  --color-kl-border: var(--kl-border);
  --color-kl-subtle: var(--kl-subtle-bg);
  --color-kl-accent: var(--kl-accent);
```

This makes `text-kl-ink`, `bg-kl-subtle`, `border-kl-border`, `text-kl-accent`, etc. available as Tailwind utilities in v4.

- [ ] **Step 2: Build**

Run: `pnpm build`
Expected: PASS, no CSS errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat(style): add klik logistik redesign tokens (ink/muted/border/subtle/accent)"
```

---

## Task 2: Prune Roboto weights

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Reduce font weights to 400 + 500**

In `app/layout.tsx`, find:

```ts
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: '--font-roboto',
  display: 'swap',
})
```

Replace with:

```ts
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: '--font-roboto',
  display: 'swap',
})
```

- [ ] **Step 2: Build**

Run: `pnpm build`
Expected: PASS. Bundle size for fonts decreases.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "perf(fonts): prune roboto weights to 400/500 only"
```

---

## Task 3: Create `<SectionHeading />`

**Files:**
- Create: `components/sections/section-heading.tsx`

- [ ] **Step 1: Write the component**

Create `components/sections/section-heading.tsx`:

```tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  number: string
  eyebrow: string
  title: string
  lead?: string
  id?: string
  className?: string
}

export function SectionHeading({ number, eyebrow, title, lead, id, className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            obs.disconnect()
            break
          }
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "border-t border-kl-border pt-6 transition-all duration-200 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className
      )}
    >
      <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
        {number} — {eyebrow}
      </div>
      <h2 className="mt-6 text-[32px] leading-[40px] font-medium tracking-[-0.015em] text-kl-ink md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-[640px] text-[16px] leading-[26px] text-kl-muted md:text-[17px] md:leading-[28px]">
          {lead}
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Build**

Run: `pnpm build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/sections/section-heading.tsx
git commit -m "feat(ui): SectionHeading shared component (eyebrow + divider + fade-up h2)"
```

---

## Task 4: Create `<QuoteForm />`

**Files:**
- Create: `components/ui/quote-form.tsx`

- [ ] **Step 1: Write minimal client-side form**

Create `components/ui/quote-form.tsx`:

```tsx
"use client"

import { useState } from "react"

type QuoteFormProps = {
  variant?: "hero" | "inline"
}

export function QuoteForm({ variant = "hero" }: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = new FormData(e.currentTarget)
    // Backend wiring is handled in the contact form section. The hero quick form
    // currently logs and shows a confirmation; production should POST to the same
    // endpoint as the contact form once one exists.
    console.info("[QuoteForm]", Object.fromEntries(data.entries()))
    await new Promise((r) => setTimeout(r, 300))
    setSubmitting(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="bg-white p-6 text-kl-ink">
        <p className="text-[15px] font-medium">Благодариме. Ќе ве контактираме во рок од 30 минути.</p>
      </div>
    )
  }

  const wrapperBg = variant === "hero" ? "bg-white" : "bg-transparent"

  return (
    <form onSubmit={onSubmit} className={`${wrapperBg} p-6 text-kl-ink`}>
      <div className="grid grid-cols-2 gap-2">
        <label className="block">
          <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">Од</span>
          <input
            name="from"
            required
            className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
            placeholder="Скопје"
          />
        </label>
        <label className="block">
          <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">До</span>
          <input
            name="to"
            required
            className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
            placeholder="Битола"
          />
        </label>
      </div>
      <label className="mt-2 block">
        <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">Телефон</span>
        <input
          name="phone"
          type="tel"
          required
          className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
          placeholder="07X XXX XXX"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="mt-3 block h-12 w-full bg-black text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-black/85 disabled:opacity-60"
      >
        {submitting ? "Се испраќа…" : "Побарај понуда"}
      </button>
    </form>
  )
}
```

- [ ] **Step 2: Build**

Run: `pnpm build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/ui/quote-form.tsx
git commit -m "feat(ui): QuoteForm 3-field quick-quote (from/to/phone)"
```

---

## Task 5: Rewrite `Header`

**Files:**
- Modify: `components/sections/header.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/header.tsx` with:

```tsx
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BRAND } from "@/lib/constants/brand"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#uslugi", label: "Услуги" },
  { href: "#vozila", label: "Возила" },
  { href: "#kalkulator", label: "Калкулатор" },
  { href: "#kontakt", label: "Контакт" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 bg-white",
        scrolled ? "border-b border-kl-border" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-[18px] font-medium tracking-tight text-kl-ink">
          Klik Logistik
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-normal text-kl-ink hover:underline underline-offset-[6px] decoration-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BRAND.phoneHref}
            className="text-[14px] font-medium text-kl-ink transition-colors hover:text-kl-accent"
          >
            {BRAND.phone}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={BRAND.phoneHref}
            className="px-2 text-[14px] font-medium text-kl-ink"
            aria-label="Повикај"
          >
            {BRAND.phone}
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Отвори мени" className="p-2 text-kl-ink">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white p-0 sm:max-w-md">
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between border-b border-kl-border px-6">
                <span className="text-[18px] font-medium text-kl-ink">Klik Logistik</span>
                <button onClick={() => setOpen(false)} aria-label="Затвори мени" className="p-2 text-kl-ink">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-6 py-8">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-[24px] font-normal text-kl-ink"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto border-t border-kl-border px-6 py-6">
                <a href={BRAND.phoneHref} className="text-[18px] font-medium text-kl-ink">
                  {BRAND.phone}
                </a>
              </div>
            </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Build**

Run: `pnpm build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/sections/header.tsx
git commit -m "feat(header): minimal sticky header — wordmark, 4 links, phone"
```

---

## Task 6: Rewrite `Hero`

**Files:**
- Modify: `components/sections/hero.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/hero.tsx` with:

```tsx
import Image from "next/image"
import { QuoteForm } from "@/components/ui/quote-form"
import { SITE_IMAGES } from "@/lib/constants/images"

export function Hero() {
  const bg = SITE_IMAGES.hero[0].src

  return (
    <section className="relative isolate min-h-[640px] max-h-[820px] h-[calc(100vh-64px)] w-full overflow-hidden bg-black pt-16">
      <Image
        src={bg}
        alt="Klik Logistik фрахт"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:via-black/20 md:to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1120px] items-center px-6 md:px-8">
        <div className="grid w-full grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/80">
              Транспорт и логистика · Скопје
            </p>
            <h1 className="mt-4 text-[40px] leading-[48px] font-medium tracking-[-0.02em] text-white md:text-[64px] md:leading-[72px]">
              Робата ваша.
              <br />
              Времето наше.
            </h1>
            <p className="mt-4 max-w-[480px] text-[16px] leading-[26px] text-white/80 md:text-[20px] md:leading-[30px]">
              Сигурен превоз на палетизирана и непалетизирана стока низ Македонија и Европа.
            </p>
            <div className="mt-8 max-w-[440px]">
              <QuoteForm variant="hero" />
            </div>
            <p className="mt-3 text-[13px] text-white/70">
              Одговараме во рок од 30 минути · Пон–Саб 08:00–20:00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build**

Run: `pnpm build`
Expected: PASS.

- [ ] **Step 3: Browser check**

Run: `pnpm dev`. Open `http://localhost:3000`. Confirm:
- Single bg image, no 3-image collage.
- Quote form visible above the fold both desktop and mobile.
- Submitting form shows confirmation text.
- No motion on hero except button hover color.

- [ ] **Step 4: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "feat(hero): single full-bleed image + 3-field quote form, drop 3-image collage"
```

---

## Task 7: Rewrite `Services`

**Files:**
- Modify: `components/sections/services.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/services.tsx` with:

```tsx
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
```

- [ ] **Step 2: Build & commit**

Run: `pnpm build`
Expected: PASS.

```bash
git add components/sections/services.tsx
git commit -m "feat(services): editorial 6-item grid, no cards, no icons, no animation"
```

---

## Task 8: Rewrite `Vehicles` (Fleet)

**Files:**
- Modify: `components/sections/vehicles.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/vehicles.tsx` with:

```tsx
import Image from "next/image"
import { SectionHeading } from "@/components/sections/section-heading"
import { SITE_IMAGES } from "@/lib/constants/images"

type Vehicle = {
  name: string
  payload: string
  dims: string
  pallets: string
  trailer: string
  src: string
}

const vehicles: Vehicle[] = [
  {
    name: "Combi 3.5t",
    payload: "1 200 kg",
    dims: "4.2 × 2.0 × 2.1 m",
    pallets: "5 EU",
    trailer: "Затворен",
    src: SITE_IMAGES.capabilities[0],
  },
  {
    name: "Camion 7.5t",
    payload: "3 500 kg",
    dims: "6.0 × 2.4 × 2.4 m",
    pallets: "16 EU",
    trailer: "Тенда",
    src: SITE_IMAGES.capabilities[1],
  },
  {
    name: "Camion 12t",
    payload: "7 000 kg",
    dims: "7.2 × 2.45 × 2.6 m",
    pallets: "18 EU",
    trailer: "Тенда / Фриго",
    src: SITE_IMAGES.capabilities[2],
  },
  {
    name: "Tegnach 24t",
    payload: "24 000 kg",
    dims: "13.6 × 2.48 × 2.7 m",
    pallets: "33 EU",
    trailer: "Цералин / Фриго",
    src: SITE_IMAGES.capabilities[3],
  },
  {
    name: "Hladnjača",
    payload: "6 000 kg",
    dims: "7.0 × 2.4 × 2.5 m",
    pallets: "16 EU",
    trailer: "Фриго −25 °C",
    src: SITE_IMAGES.capabilities[4],
  },
]

export function Vehicles() {
  return (
    <section id="vozila" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading
          number="02"
          eyebrow="Возила"
          title="Возен парк."
          lead="35 возила во редовен сообраќај, 2.5 t до 24 t. Сертифицирани возачи, GPS следење."
        />

        <ul className="mt-12">
          {vehicles.map((v, i) => (
            <li
              key={v.name}
              className="grid grid-cols-12 gap-6 border-b border-kl-border py-10 md:gap-10"
            >
              <div className="col-span-12 md:col-span-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-kl-subtle">
                  <Image
                    src={v.src}
                    alt={v.name}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-[24px] font-medium leading-[32px] text-kl-ink">{v.name}</h3>
                <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 text-[14px] sm:grid-cols-2">
                  <div className="flex justify-between border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Носивост</dt>
                    <dd className="text-kl-ink">{v.payload}</dd>
                  </div>
                  <div className="flex justify-between border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Димензии</dt>
                    <dd className="text-kl-ink">{v.dims}</dd>
                  </div>
                  <div className="flex justify-between border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Палети</dt>
                    <dd className="text-kl-ink">{v.pallets}</dd>
                  </div>
                  <div className="flex justify-between border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Приколка</dt>
                    <dd className="text-kl-ink">{v.trailer}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build & commit**

Run: `pnpm build`
Expected: PASS.

```bash
git add components/sections/vehicles.tsx
git commit -m "feat(vehicles): stacked rows with photo + spec list, drop carousel"
```

---

## Task 9: Rewrite `CostEstimator` (Calculator)

**Files:**
- Modify: `components/sections/cost-estimator.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/cost-estimator.tsx` with:

```tsx
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
    <section id="kalkulator" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading
          number="03"
          eyebrow="Изарчунај цена"
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
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="bg-kl-subtle p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                Проценета цена
              </p>
              <p className="mt-3 text-[56px] leading-[60px] font-medium tabular-nums text-kl-ink">
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
                    className="mt-3 block h-12 w-full bg-black text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-black/85"
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
```

- [ ] **Step 2: Build & commit**

Run: `pnpm build`
Expected: PASS.

```bash
git add components/sections/cost-estimator.tsx
git commit -m "feat(calculator): clean form + result panel, haversine km estimate"
```

---

## Task 10: Rewrite `Stats`

**Files:**
- Modify: `components/sections/stats.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/stats.tsx` with:

```tsx
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
```

- [ ] **Step 2: Build & commit**

Run: `pnpm build`
Expected: PASS.

```bash
git add components/sections/stats.tsx
git commit -m "feat(stats): static 4-col grid, no count-up animation"
```

---

## Task 11: Rewrite `Testimonials`

**Files:**
- Modify: `components/sections/testimonials.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/testimonials.tsx` with:

```tsx
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
            “{lead.quote}”
          </blockquote>
          <div className="mt-6 border-t border-kl-border pt-4 text-[14px] text-kl-muted">
            {lead.name} — {lead.company}
          </div>
        </figure>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {others.map((t) => (
            <figure key={t.name}>
              <blockquote className="text-[18px] leading-[28px] font-normal text-kl-ink">
                “{t.quote}”
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
```

- [ ] **Step 2: Build & commit**

Run: `pnpm build`
Expected: PASS.

```bash
git add components/sections/testimonials.tsx
git commit -m "feat(testimonials): one lead quote + two supporting, drop carousel"
```

---

## Task 12: Rewrite `ContactForm`

**Files:**
- Modify: `components/sections/contact-form.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/contact-form.tsx` with:

```tsx
"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/sections/section-heading"
import { BRAND } from "@/lib/constants/brand"

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    console.info("[ContactForm]", data)
    await new Promise((r) => setTimeout(r, 300))
    setSubmitting(false)
    setDone(true)
  }

  return (
    <section id="kontakt" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:px-8 md:py-32">
        <SectionHeading
          number="06"
          eyebrow="Контакт"
          title="Побарај понуда."
          lead="Одговараме во 30 минути работно време."
        />

        <div className="mt-12 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            {done ? (
              <p className="text-[16px] text-kl-ink">
                Благодариме. Ќе ве контактираме во рок од 30 минути.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input name="name" label="Име" required />
                <Input name="company" label="Компанија" />
                <Input name="phone" type="tel" label="Телефон" required />
                <Input name="email" type="email" label="Email" />
                <div className="sm:col-span-2">
                  <Input name="route" label="Релација" placeholder="Скопје → Виена" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
                      Порака
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      className="mt-1 block w-full border border-kl-border bg-white px-3 py-3 text-[15px] outline-none focus:border-kl-accent"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-12 bg-black text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-black/85 disabled:opacity-60 sm:col-span-2"
                >
                  {submitting ? "Се испраќа…" : "Побарај понуда"}
                </button>
              </form>
            )}
          </div>

          <aside className="col-span-12 md:col-span-5">
            <dl className="space-y-6 text-[14px]">
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Телефон</dt>
                <dd className="mt-1">
                  <a href={BRAND.phoneHref} className="text-[22px] font-medium text-kl-ink">
                    {BRAND.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Email</dt>
                <dd className="mt-1 text-kl-ink">
                  <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Адреса</dt>
                <dd className="mt-1 text-kl-ink">{BRAND.address}</dd>
              </div>
              <div>
                <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">Работно време</dt>
                <dd className="mt-1 text-kl-ink">Пон–Саб 08:00–20:00</dd>
              </div>
            </dl>

            <div className="mt-8">
              <iframe
                title="Локација"
                src="https://www.google.com/maps?q=Skopje&output=embed"
                className="h-[320px] w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Input({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-kl-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 block h-12 w-full border border-kl-border bg-white px-3 text-[15px] outline-none focus:border-kl-accent"
      />
    </label>
  )
}
```

- [ ] **Step 2: Build & commit**

Run: `pnpm build`
Expected: PASS.

```bash
git add components/sections/contact-form.tsx
git commit -m "feat(contact): editorial form + sidebar info + grayscale map"
```

---

## Task 13: Rewrite `Footer`

**Files:**
- Modify: `components/sections/footer.tsx`

- [ ] **Step 1: Replace file contents**

Overwrite `components/sections/footer.tsx` with:

```tsx
import { BRAND } from "@/lib/constants/brand"

export function Footer() {
  return (
    <footer className="border-t border-kl-border bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-4 px-6 py-6 text-[13px] text-kl-muted md:flex-row md:items-center md:px-8">
        <div>© Klik Logistik {new Date().getFullYear()} · Скопје, СМ</div>
        <nav className="flex flex-wrap gap-6">
          <a href="#uslugi" className="hover:text-kl-ink">Услуги</a>
          <a href="#vozila" className="hover:text-kl-ink">Возила</a>
          <a href="#kalkulator" className="hover:text-kl-ink">Калкулатор</a>
          <a href="#kontakt" className="hover:text-kl-ink">Политика на приватност</a>
        </nav>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <a href={BRAND.phoneHref} className="hover:text-kl-ink">{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="hover:text-kl-ink">{BRAND.email}</a>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Build & commit**

Run: `pnpm build`
Expected: PASS.

```bash
git add components/sections/footer.tsx
git commit -m "feat(footer): single-row meta footer, drop oversized footer"
```

---

## Task 14: Update `app/page.tsx` and delete unused sections

**Files:**
- Modify: `app/page.tsx`
- Delete: `components/sections/capabilities.tsx`
- Delete: `components/sections/history.tsx`
- Delete: `components/sections/faq.tsx`
- Delete: `components/sections/projects-slider.tsx`
- Delete: `components/ui/floating-contact.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

Overwrite `app/page.tsx`:

```tsx
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Vehicles } from "@/components/sections/vehicles"
import { CostEstimator } from "@/components/sections/cost-estimator"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Vehicles />
      <CostEstimator />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Verify nothing else imports the to-be-deleted files**

Run: `grep -RIl --exclude-dir=node_modules --exclude-dir=.next "capabilities\|sections/history\|sections/faq\|projects-slider\|floating-contact" .`

Expected: only matches inside the to-be-deleted files themselves and the design spec doc. If `app/nasata-rabota/page.tsx` references any of them, stop and report — do not delete.

- [ ] **Step 3: Delete files**

Run:

```bash
rm components/sections/capabilities.tsx \
   components/sections/history.tsx \
   components/sections/faq.tsx \
   components/sections/projects-slider.tsx \
   components/ui/floating-contact.tsx
```

- [ ] **Step 4: Build**

Run: `pnpm build`
Expected: PASS, no missing-import errors.

- [ ] **Step 5: Commit**

```bash
git add -A app/page.tsx components/sections components/ui
git commit -m "feat(home): adopt 7-section structure, delete capabilities/history/faq/projects-slider/floating-contact"
```

---

## Task 15: Browser verification & lint

**Files:** none

- [ ] **Step 1: Run dev server**

Run: `pnpm dev`. Open `http://localhost:3000`.

- [ ] **Step 2: Manual checks**

Confirm each of:
- 7 sections render in order: Header → Hero → Services → Vehicles → Calculator → Stats → Testimonials → Contact → Footer (Header + Footer are scaffold; mid-page = 6 numbered sections + Hero).
- Hero: single bg image, no carousel, quote form visible above the fold both desktop (≥1024px) and mobile (≤480px).
- Section eyebrows fade up once when scrolled into view; cards/list items do not animate.
- Buttons only animate background color on hover.
- No purple, no decorative gradients except hero scrim.
- Calculator: changing From/To/Tonnage/Cargo updates km, base, surcharge, total live. Submitting phone shows "Резервирано" message.
- Contact form: submit shows confirmation message.
- Mobile drawer opens/closes; phone link works.
- No console errors.

- [ ] **Step 3: Lint**

Run: `pnpm lint`
Expected: 0 errors. Fix any new warnings introduced by the rewrites.

- [ ] **Step 4: Final build**

Run: `pnpm build`
Expected: PASS. Note bundle sizes for `app/page` for future comparison.

- [ ] **Step 5: Commit any lint fixes if applied**

```bash
git add -A
git commit -m "chore(lint): resolve eslint warnings introduced by redesign" || echo "nothing to commit"
```

- [ ] **Step 6: Push branch**

```bash
git push -u origin redesign/claude-restraint
```

(Skip if user has not asked for push — confirm first.)

---

## Done criteria

- All 15 tasks committed on `redesign/claude-restraint`.
- `pnpm build` and `pnpm lint` both pass.
- Manual browser checks in Task 15 step 2 all pass.
- 7 deleted files no longer imported anywhere.
- No `framer-motion` import on the home route or its descendants (verify with `grep -R "framer-motion" components/sections app/page.tsx`).

## Out of scope

- Real backend submission for the quote/contact forms (currently console-logged + simulated delay; wire to real endpoint in a follow-up).
- Real client copy, photos, stats, testimonials.
- Removing `framer-motion` from `package.json` (only safe once `app/nasata-rabota` is verified free of it).
- Image compression / WebP/AVIF re-encoding (pre-existing `implementation_plan.md` covers it).
- `nasata-rabota` page redesign.
