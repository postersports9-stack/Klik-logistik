# Klik Logistik Site Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing ЛАМБЕЛ ТЕРМ construction-services site into Клик Логистик (Klik Logistik DOOEL Skopje), a Macedonian transport company site, preserving the structural sections while changing brand, niche, copy, color theme (red→gray), typography (Inter/serif → Roboto with sentence case), backgrounds (remove fancy/animated bg), services (5→3), images, and adding a new "Возила" (Vehicles) section with 2 vehicles + click-to-open detail modal.

**Architecture:** Keep current Next.js 15 / React / Tailwind v4 / shadcn / motion stack. Keep section structure in `app/page.tsx`. Replace per-section content. Centralize brand/asset constants in `lib/constants/`. Add new `Vehicles` section with shadcn `Dialog` for vehicle detail popup. Asset migration: copy logo + 5 converted images from user-supplied folders into `public/`. Remove the `AnimatedGridPattern` and `floating-paths` decorative backgrounds. Replace `oklch` red `--primary` with neutral gray. Swap `next/font` Inter → Roboto and remove `font-serif` usage and `uppercase` class everywhere except where preserving uppercase is intentional (none, per spec — sentence case throughout).

**Tech Stack:**
- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS v4 (`@import 'tailwindcss'`)
- shadcn/ui (Dialog, Button, Card, Select, Slider, Sheet, Tabs)
- motion/react
- next/font/google (Roboto)
- Asset sources:
  - Logo: `C:\Users\user2\Downloads\5.png` → `public/logo.png`
  - 5 images at `C:\Users\user2\Downloads\sliki za conv\converted\*.avif` → `public/images/transport-{1..5}.avif`

**Brand constants:**
- Display name (Cyrillic): `Клик Логистик`
- Legal name: `Klik Logistik DOOEL Skopje`
- Phone: `070 233 465` (`tel:070233465`)
- Color theme: gray (replace primary red)

**Asset map (5 supplied images):**
1. `024f6d68-...avif` → `transport-1.avif` — used for hero main + service "Превоз на роба"
2. `0a50dfd8-...avif` → `transport-2.avif` — hero side + service "Меѓународен транспорт"
3. `9eb57c6e-...avif` → `transport-3.avif` — hero side + service "Логистички решенија"
4. `a5c84ebd-...avif` → `transport-4.avif` — capabilities/vehicle 1
5. `db23ed3a-...avif` → `transport-5.avif` — capabilities/vehicle 2

Where coverage runs out (e.g., capabilities grid needs 5, portfolio page needs 12), reuse + add `placeholder.svg` (already in `public/`).

---

## File Structure

**New / replaced files:**
- `public/logo.png` — copied from `C:\Users\user2\Downloads\5.png`
- `public/images/transport-1.avif` … `public/images/transport-5.avif` — copied from user folder
- `lib/constants/brand.ts` (new) — single source of truth for company name, phone, address, social links
- `lib/constants/images.ts` (modified) — new image map for transport niche
- `lib/constants/vehicles.ts` (new) — vehicle data array
- `components/sections/header.tsx` (modified)
- `components/sections/hero.tsx` (modified)
- `components/sections/services.tsx` (modified) — 3 services
- `components/sections/vehicles.tsx` (new) — vehicle grid + dialog popup
- `components/sections/cost-estimator.tsx` (modified) — remove tier tabs, transport pricing
- `components/sections/capabilities.tsx` (modified) — remove `AnimatedGridPattern`
- `components/sections/history.tsx` (modified) — text only
- `components/sections/stats.tsx` (modified) — labels
- `components/sections/testimonials.tsx` (modified) — content
- `components/sections/faq.tsx` (modified) — content
- `components/sections/contact-form.tsx` (modified) — service options
- `components/sections/footer.tsx` (modified) — brand + links
- `components/ui/feature-72.tsx` (modified) — remove uppercase classes
- `components/ui/floating-contact.tsx` (modified) — phone constant
- `app/layout.tsx` (modified) — Roboto font, metadata
- `app/globals.css` (modified) — gray primary, font var
- `app/page.tsx` (modified) — insert `<Vehicles />`
- `app/nasata-rabota/page.tsx` (modified) — transport content

**Files to delete:**
- `components/ui/animated-grid-pattern.tsx`
- `components/ui/floating-paths.tsx`

---

## Task 1: Asset import & brand constants

**Files:**
- Create: `public/logo.png`
- Create: `public/images/transport-1.avif` … `public/images/transport-5.avif`
- Create: `lib/constants/brand.ts`

- [ ] **Step 1: Copy logo and images into public/**

Run (bash):
```bash
cp "/c/Users/user2/Downloads/5.png" "c:/Users/user2/Desktop/coding/Klik-logistik/public/logo.png"
cp "/c/Users/user2/Downloads/sliki za conv/converted/024f6d68-63a8-4421-934f-431f011bfaba_result 2.avif" "c:/Users/user2/Desktop/coding/Klik-logistik/public/images/transport-1.avif"
cp "/c/Users/user2/Downloads/sliki za conv/converted/0a50dfd8-9cc0-4a08-af04-2265e6af9c6e_result 2.avif" "c:/Users/user2/Desktop/coding/Klik-logistik/public/images/transport-2.avif"
cp "/c/Users/user2/Downloads/sliki za conv/converted/9eb57c6e-36fc-4a62-af9c-b386b0d8264d_result 2.avif" "c:/Users/user2/Desktop/coding/Klik-logistik/public/images/transport-3.avif"
cp "/c/Users/user2/Downloads/sliki za conv/converted/a5c84ebd-16e7-43de-9da3-e63722d4efd7_result 2.avif" "c:/Users/user2/Desktop/coding/Klik-logistik/public/images/transport-4.avif"
cp "/c/Users/user2/Downloads/sliki za conv/converted/db23ed3a-b3ff-4a73-9158-4fca4f609fae_result 2.avif" "c:/Users/user2/Desktop/coding/Klik-logistik/public/images/transport-5.avif"
```

Expected: 6 files exist. Verify with `ls public/images/`.

- [ ] **Step 2: Create brand constants**

Create `lib/constants/brand.ts`:
```ts
export const BRAND = {
  name: "Клик Логистик",
  legalName: "Klik Logistik DOOEL Skopje",
  shortName: "KL",
  phone: "070 233 465",
  phoneHref: "tel:070233465",
  whatsappPhone: "070233465",
  address: "Скопје, Македонија",
  niche: "Превоз на роба",
  email: "info@kliklogistik.mk",
} as const;
```

- [ ] **Step 3: Replace `lib/constants/images.ts`**

```ts
const T1 = "/images/transport-1.avif";
const T2 = "/images/transport-2.avif";
const T3 = "/images/transport-3.avif";
const T4 = "/images/transport-4.avif";
const T5 = "/images/transport-5.avif";
const PLACEHOLDER = "/placeholder.svg";

export const SITE_IMAGES = {
  hero: [
    {
      src: T1,
      title: "Превоз на роба",
      sub: "БРЗО И БЕЗБЕДНО",
      description: "Сигурен превоз на палетизирана и непалетизирана стока низ цела држава."
    },
    {
      src: T2,
      title: "Меѓународен транспорт",
      label: "Низ цела Европа",
      sub: "ДОВЕРБА И ПРОФЕСИОНАЛНОСТ",
      description: "Брз и сигурен меѓународен превоз на стока."
    },
    {
      src: T3,
      title: "Логистика",
      label: "Целосни решенија",
      sub: "ОД А ДО Б",
      description: "Логистички решенија прилагодени на вашите потреби."
    }
  ],
  services: {
    domestic: T1,
    international: T2,
    logistics: T3,
  },
  capabilities: [T1, T2, T3, T4, T5],
  vehicles: {
    v1: T4,
    v2: T5,
  },
  portfolio: {
    residential: [T1, T2, T3, T4],
    commercial: [T2, T3, T4, T5],
    specialized: [T1, T3, T4, T5],
  }
} as const;
```

- [ ] **Step 4: Commit**
```bash
git add public/logo.png public/images lib/constants/brand.ts lib/constants/images.ts
git commit -m "chore(assets): add Klik Logistik logo, transport images, brand constants"
```

---

## Task 2: Vehicles data + section

**Files:**
- Create: `lib/constants/vehicles.ts`
- Create: `components/sections/vehicles.tsx`
- Modify: `app/page.tsx` (insert section after Services)

- [ ] **Step 1: Create vehicle data**

Create `lib/constants/vehicles.ts`:
```ts
import { SITE_IMAGES } from "./images";

export type Vehicle = {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  capacity: string;
  dimensions: { length: string; width: string; height: string };
  features: string[];
};

export const VEHICLES: Vehicle[] = [
  {
    id: "vozilo-1",
    name: "Возило 1",
    shortDescription: "Камион со церада, натоварна рампа и палетар",
    image: SITE_IMAGES.vehicles.v1,
    capacity: "3.600 kg",
    dimensions: { length: "6.20 m", width: "2.45 m", height: "2.20 m" },
    features: ["Церада", "Натоварна рампа", "Палетар"],
  },
  {
    id: "vozilo-2",
    name: "Возило 2",
    shortDescription: "Камион фургон со натоварна рампа и палетар",
    image: SITE_IMAGES.vehicles.v2,
    capacity: "9.350 kg",
    dimensions: { length: "7.60 m", width: "2.45 m", height: "2.60 m" },
    features: ["Фургон", "Натоварна рампа", "Палетар"],
  },
];
```

- [ ] **Step 2: Create the Vehicles section component**

Create `components/sections/vehicles.tsx`:
```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VEHICLES, type Vehicle } from "@/lib/constants/vehicles";
import { BRAND } from "@/lib/constants/brand";

export function Vehicles() {
  const [active, setActive] = useState<Vehicle | null>(null);

  return (
    <section id="vozila" className="bg-white py-20 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block border border-border px-4 py-1 text-xs font-medium tracking-widest text-muted-foreground">
            Возен парк
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#2a2a2a] md:text-4xl lg:text-5xl">
            Возила
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Возила прилагодени за различни потреби на превоз. Кликнете за повеќе детали.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              onClick={() => setActive(v)}
              className="group flex flex-col overflow-hidden border border-border bg-white text-left transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#eee]">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold text-[#2a2a2a]">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.shortDescription}</p>
                <p className="mt-2 text-sm font-medium text-[#2a2a2a]">
                  Носивост: {v.capacity}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-primary">
                  Повеќе детали →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl rounded-none p-0">
          {active && (
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eee]">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                    {active.name}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">
                    {active.shortDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Носивост
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#2a2a2a]">
                      {active.capacity}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Габаритни димензии
                    </p>
                    <ul className="mt-1 text-sm text-[#2a2a2a]">
                      <li>Должина: {active.dimensions.length}</li>
                      <li>Ширина: {active.dimensions.width}</li>
                      <li>Висина: {active.dimensions.height}</li>
                    </ul>
                  </div>
                </div>

                {active.features.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Опрема
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {active.features.map((f) => (
                        <li
                          key={f}
                          className="border border-border px-3 py-1 text-xs text-[#2a2a2a]"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 flex-1 rounded-none bg-primary text-sm font-semibold tracking-wide text-white hover:bg-primary/90"
                  >
                    <a href={BRAND.phoneHref} className="inline-flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" /> Повикај нè ({BRAND.phone})
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActive(null)}
                    className="h-12 rounded-none"
                  >
                    Затвори
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
```

- [ ] **Step 3: Wire into page**

Edit `app/page.tsx`:
- Add: `import { Vehicles } from "@/components/sections/vehicles"`
- Insert `<Vehicles />` between `<Services />` and `<CostEstimator />`

Final order:
```tsx
<Header />
<Hero />
<Services />
<Vehicles />
<CostEstimator />
<Capabilities />
<History />
<Stats />
<Testimonials />
<FAQ />
<ContactForm />
<Footer />
<FloatingContact />
```

- [ ] **Step 4: Verify section renders + dialog opens**

Run: `pnpm dev` and open `http://localhost:3000#vozila`. Click each card → dialog with details + "Повикај нè 070 233 465". Close button + ESC + overlay click all dismiss.

- [ ] **Step 5: Commit**
```bash
git add lib/constants/vehicles.ts components/sections/vehicles.tsx app/page.tsx
git commit -m "feat(vehicles): add Возила section with detail dialog"
```

---

## Task 3: Color theme — red → gray + remove fancy backgrounds

**Files:**
- Modify: `app/globals.css`
- Delete: `components/ui/animated-grid-pattern.tsx`
- Delete: `components/ui/floating-paths.tsx`
- Modify: `components/sections/capabilities.tsx`

- [ ] **Step 1: Replace `--primary` and `--ring` red oklch values with neutral gray in `app/globals.css`**

In `:root` block (lines ~13, 21, 25):
- `--primary: oklch(0.577 0.245 27.325);` → `--primary: oklch(0.45 0 0);`  *(mid gray #6b6b6b)*
- `--primary-foreground: oklch(1 0 0);` → keep
- `--destructive: oklch(0.577 0.245 27.325);` → `--destructive: oklch(0.55 0.2 27);` *(keep an actual destructive red — different token)*
- `--ring: oklch(0.577 0.245 27.325);` → `--ring: oklch(0.45 0 0);`

In `.dark` block: leave (already neutral).

Also remove `--font-serif: var(--font-inter), 'Inter', sans-serif;` line if still present (handled in Task 4) — leave for now.

- [ ] **Step 2: Replace `AnimatedGridPattern` usage in capabilities**

In `components/sections/capabilities.tsx`:
- Remove import: `import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"`
- Remove import: `import { cn } from "@/lib/utils"` (if only used by the pattern; if used elsewhere keep)
- Remove the entire `<AnimatedGridPattern ... />` JSX block (lines ~14–23)
- Remove the inline blueprint SVG watermark `<div className="pointer-events-none absolute inset-0 opacity-[0.03]">...</div>` (lines ~36–49)
- Section bg: `bg-[#f9f9f9]` → `bg-[#f5f5f5]` (cleaner flat gray)

- [ ] **Step 3: Confirm no other usages of removed components**

Run:
```bash
grep -rn "animated-grid-pattern\|AnimatedGridPattern\|floating-paths\|FloatingPaths" components app lib
```
Expected: no matches.

- [ ] **Step 4: Delete unused decorative components**
```bash
rm components/ui/animated-grid-pattern.tsx components/ui/floating-paths.tsx
```

- [ ] **Step 5: Build/typecheck**
```bash
pnpm build
```
Expected: success (Tailwind picks up new oklch values; no type errors).

- [ ] **Step 6: Commit**
```bash
git add app/globals.css components/sections/capabilities.tsx
git rm components/ui/animated-grid-pattern.tsx components/ui/floating-paths.tsx
git commit -m "style(theme): switch primary to gray, remove animated/decorative backgrounds"
```

---

## Task 4: Roboto font + remove `font-serif` & `uppercase`

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: every file under `components/sections/` and `components/ui/feature-72.tsx`

- [ ] **Step 1: Swap font in layout**

`app/layout.tsx`:
```tsx
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: '--font-roboto',
  display: 'swap',
})
```
Replace `inter` references: `inter.variable` → `roboto.variable`.
Update metadata title/description:
```ts
title: 'Клик Логистик | Превоз на роба - Скопје',
description: 'Klik Logistik DOOEL Skopje — сигурен превоз на роба низ Македонија и Европа.',
```
`viewport.themeColor`: `'#1a1a1a'` → `'#2a2a2a'` (kept dark; gray-tinted optional).

- [ ] **Step 2: Update `app/globals.css` font tokens**

In `@theme inline`:
```css
--font-sans: var(--font-roboto), 'Roboto', system-ui, sans-serif;
--font-serif: var(--font-roboto), 'Roboto', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
```
(Keeping `--font-serif` mapped to Roboto means existing `font-serif` classes don't visually break while we strip them — defensive.)

- [ ] **Step 3: Strip `font-serif` and `uppercase` classes across the codebase**

Run, then manually verify each replacement is appropriate (some headings may also need to lose `tracking-[0.x]` if they relied on uppercase look — leave tracking, drop uppercase only):

```bash
grep -rn "font-serif\|uppercase\| className=\"[^\"]*UPPER" components app
```

For each match, edit:
- Remove `font-serif` token from className
- Remove `uppercase` token from className
- Convert hardcoded ALL-CAPS Cyrillic strings to sentence case (only first letter capitalized). Examples:
  - `"ДОМА"` → `"Дома"`
  - `"ЗА НАС"` → `"За нас"`
  - `"УСЛУГИ"` → `"Услуги"`
  - `"ЦЕНОВНИК"` → `"Ценовник"`
  - `"ИСКУСТВА"` → `"Искуства"`
  - `"КОНТАКТ"` → `"Контакт"`
  - `"ПОБАРАЈТЕ ПОНУДА"` → `"Побарајте понуда"`
  - `"ВАШАТА ВИЗИЈА, НАША ИЗВЕДБА. ГРАДИМЕ ЗАЕДНО."` → replaced entirely in Task 5 (capabilities content)
  - `"ЈАВЕТЕ НИ СЕ"` → `"Јавете ни се"`
  - `"ИСПРАТИ ПРАШАЊЕ"` → `"Испрати прашање"`
  - `"ОД НАШИТЕ КЛИЕНТИ"` → `"Од нашите клиенти"`

Files to touch (full list — sections only):
- `components/sections/header.tsx` — `navLinks` labels, "КОНТАКТ" button text, mobile menu
- `components/sections/hero.tsx` — `uppercase` on h2/h3/p elements; "Побарај понуда" button already sentence-case
- `components/sections/services.tsx` — heading "Нашите Услуги" already title-case (OK), `linkText="ЈАВЕТЕ НИ СЕ"` → `"Јавете ни се"`
- `components/sections/cost-estimator.tsx` — strip `uppercase` on labels and CTA text. "Резервирај термин" already sentence-case (OK).
- `components/sections/capabilities.tsx` — heading + button (Task 5 rewrites copy)
- `components/sections/history.tsx` — Task 5 rewrites copy
- `components/sections/contact-form.tsx` — labels + submit button
- `components/sections/footer.tsx` — strip `uppercase` from h3 service section
- `components/sections/testimonials.tsx` — "ОД НАШИТЕ КЛИЕНТИ" → "Од нашите клиенти"
- `components/sections/projects-slider.tsx` — any uppercase
- `components/ui/feature-72.tsx` — no uppercase classes used; OK
- `app/nasata-rabota/page.tsx` — Task 7 rewrites copy

Keep `tracking-[0.1em]`, `tracking-widest`, etc. — they're spacing only.

**Important:** Do NOT touch:
- `tw-animate-css` library output
- shadcn primitives in `components/ui/` (button, dialog, etc.) — these have no Cyrillic ALL-CAPS strings.

- [ ] **Step 4: Verify no remaining `font-serif`/`uppercase` in app code**
```bash
grep -rn "font-serif\|uppercase" components/sections components/ui/feature-72.tsx components/ui/floating-contact.tsx app
```
Expected: matches only in the shadcn primitives we don't own (e.g., `button.tsx` has `uppercase` in some variants — leave). Verify each remaining hit is intentional shadcn defaults, not page text.

- [ ] **Step 5: Commit**
```bash
git add -A
git commit -m "style(typography): switch to Roboto, remove font-serif and ALL-CAPS in user-facing copy"
```

---

## Task 5: Header + Hero + Capabilities + History rewrite

### 5a — Header

**Files:** `components/sections/header.tsx`

- [ ] **Step 1: Replace navLinks**

```tsx
const navLinks = [
  { href: "/", label: "Дома" },
  { href: "/#za-nas", label: "За нас" },
  { href: "/#uslugi", label: "Услуги" },
  { href: "/#vozila", label: "Возила" },
  { href: "/#cenovnik", label: "Ценовник" },
  { href: "/#iskustva", label: "Искуства" },
];
```

- [ ] **Step 2: Replace logo block**

Replace the `<div>` with red text "LT" + span "ЛАМБЕЛ ТЕРМ" with:
```tsx
import Image from "next/image";
import { BRAND } from "@/lib/constants/brand";

// ...inside the Link:
<div className="relative flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-105">
  <Image src="/logo.png" alt={BRAND.name} fill className="object-contain" sizes="48px" priority />
</div>
<span className={`text-xl font-bold tracking-wider transition-colors duration-500 ${isScrolled || !isHomePage ? "text-white" : "text-black"}`}>
  {BRAND.name}
</span>
```

- [ ] **Step 3: Update phone references**

- `075 211 440` → `070 233 465` (display)
- `tel:075211440` → `tel:070233465` (href)
- "КОНТАКТ" button text → `"Контакт"`

- [ ] **Step 4: Mobile sheet header brand**

Replace the inner mobile `ЛАМБЕЛ ТЕРМ` text with `{BRAND.name}` (import already done).

- [ ] **Step 5: Verify scroll/sticky still works**

Run `pnpm dev`. Scroll page; header transitions; click each nav link; on mobile the Sheet opens; phone link calls.

### 5b — Hero

**Files:** `components/sections/hero.tsx`

- [ ] **Step 1: Strip `uppercase` and `font-serif` classes** in both desktop and mobile blocks (per Task 4).

- [ ] **Step 2: Confirm pulled image data**

Hero already reads `SITE_IMAGES.hero` — already updated in Task 1, so titles/subs come from the new transport content automatically. Adjust the eyebrow `<p>` strings if they still hardcode something — verify no hardcoded Cyrillic strings remain in `hero.tsx`.

- [ ] **Step 3: CTA buttons sentence case**

- "Побарај понуда" → keep
- "Пиши ни" → keep

### 5c — Capabilities (text + image alts)

**Files:** `components/sections/capabilities.tsx`

- [ ] **Step 1: Replace heading + paragraph**

```tsx
<h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[#2a2a2a] text-balance md:text-4xl lg:text-5xl">
  Сигурен превоз на роба низ Македонија и Европа.
</h2>

<p className="mb-8 text-lg leading-relaxed text-[#555] text-pretty">
  Клик Логистик нуди професионален превоз на палетизирана и непалетизирана стока, со флексибилни возила прилагодени на различни типови товар. Брзина, доверба и одговорност во секоја испорака.
</p>

<Button asChild className="h-12 px-8 text-sm font-semibold tracking-wide bg-primary text-white hover:bg-primary/90 rounded-none">
  <a href="#kontakt">Пиши ни</a>
</Button>
```

- [ ] **Step 2: Update image alts** to: `"Камион на пат"`, `"Превоз на стока"`, `"Натоварна рампа"`, `"Меѓународен транспорт"`, `"Логистика"`.

### 5d — History

**Files:** `components/sections/history.tsx`

- [ ] **Step 1: Replace component body**

```tsx
export function History() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-[#2a2a2a] text-balance md:text-4xl lg:text-5xl">
          Превоз што можете да го сметате за свој. <span className="text-primary">Брзо. Сигурно. Навреме.</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#666] text-pretty">
          Клик Логистик ДООЕЛ Скопје обезбедува домашен и меѓународен транспорт со современ возен парк и тимови посветени на секоја пратка.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit (5a–5d together)**
```bash
git add components/sections/header.tsx components/sections/hero.tsx components/sections/capabilities.tsx components/sections/history.tsx
git commit -m "feat(brand): rewrite header/hero/capabilities/history copy for Klik Logistik"
```

---

## Task 6: Services (5 → 3) + Cost Estimator + Contact Form + Floating Contact

### 6a — Services

**Files:** `components/sections/services.tsx`

- [ ] **Step 1: Replace `services` array**

```tsx
const services = [
  {
    id: "service-1",
    title: "Превоз на роба",
    image: SITE_IMAGES.services.domestic,
    description:
      "Брз и сигурен превоз на палетизирана и непалетизирана стока низ цела Македонија.",
  },
  {
    id: "service-2",
    title: "Меѓународен транспорт",
    image: SITE_IMAGES.services.international,
    description:
      "Превоз на стока од и до европските држави со целосна документација и следење на пратката.",
  },
  {
    id: "service-3",
    title: "Логистички решенија",
    image: SITE_IMAGES.services.logistics,
    description:
      "Прилагодени логистички решенија за вашиот бизнис — од планирање на рута до испорака.",
  },
];
```

- [ ] **Step 2: Update heading + linkUrl**

```tsx
<Feature72
  heading="Нашите услуги"
  description="Доверлив партнер за превоз и логистика низ Македонија и Европа."
  linkText="Јавете ни се"
  linkUrl="tel:070233465"
  features={services}
/>
```

### 6b — Cost Estimator (remove tier tabs)

**Files:** `components/sections/cost-estimator.tsx`

- [ ] **Step 1: Replace pricing model**

Replace `SERVICE_PRICES` and remove `QUALITY_TIERS`:
```tsx
// Rough price per km (€). Tweak after stakeholder review.
const SERVICE_PRICES: Record<string, number> = {
  "Превоз на роба (домашен)": 1.2,
  "Меѓународен транспорт": 1.6,
  "Логистички решенија": 1.4,
};
```

- [ ] **Step 2: Replace state + effect**

```tsx
const [service, setService] = useState("Превоз на роба (домашен)");
const [city, setCity] = useState("Скопје");
const [suburb, setSuburb] = useState("Центар");
const [distance, setDistance] = useState(100); // km
const [estimate, setEstimate] = useState({ min: 0, max: 0 });

useEffect(() => {
  let multiplier = 1.0;
  if (city === "Скопје") {
    multiplier = 1.0;
    if (["Центар", "Карпош", "Аеродром"].includes(suburb)) multiplier = 1.05;
  } else if (["Битола", "Охрид", "Тетово"].includes(city)) {
    multiplier = 1.1;
  } else if (city === "Останато") {
    multiplier = 1.15;
  }
  const perKm = SERVICE_PRICES[service] * multiplier;
  const min = Math.round(perKm * distance * 0.9 + 30);
  const max = Math.round(perKm * distance * 1.1 + 50);
  setEstimate({ min, max });
}, [service, city, suburb, distance]);
```

- [ ] **Step 3: Replace JSX**

- Section heading: `"Пресметајте ги трошоците"` (keep) → keep but strip `uppercase`/`font-serif`
- Subtext: `"Дознајте колку ќе чини професионалното чистење за вашиот простор."` → `"Брза проценка за трошокот за превоз. За точна понуда контактирајте нè."`
- Service label: `"Тип на услуга"` (keep)
- Replace "Површина за чистење (m²)" / `area` with **"Растојание (km)"** + `distance`:
  ```tsx
  <label className="text-sm font-semibold tracking-wider text-[#2a2a2a]">
    Растојание (km)
  </label>
  <span className="text-2xl font-bold text-primary">{distance} km</span>
  // Slider min={10} max={2000} step={10}
  ```
  Slider end labels: `10 km` / `2000 km`.
- **Remove the entire "Пакет на чистење" `<Tabs>` block** (label + `<TabsList>` + `QUALITY_TIERS` map). Delete imports `Tabs, TabsList, TabsTrigger`.
- Estimate caption sentence:
  ```tsx
  * Проценка за {service} во {city}{city === "Скопје" ? `, ${suburb}` : ""} за растојание од {distance} km.
  ```
- Bottom info card text → `"Сите цени се ориентациони. Контактирајте нè за фиксна понуда базирана на вашата пратка."`
- CTA button: `"Резервирај термин"` → `"Резервирај превоз"`
- Footer note: `"Цените се ориентациони. За фиксна понуда нашиот тим прави бесплатен увид на локација."` → `"Цените се ориентациони. Финалната цена зависи од видот на стока, рутата и времето на испорака."`

- [ ] **Step 4: Strip `uppercase` and `font-serif` everywhere in this file** (per Task 4).

### 6c — Contact form

**Files:** `components/sections/contact-form.tsx`

- [ ] **Step 1: Replace heading + intro**

- "ПОБАРАЈТЕ ПОНУДА" → `"Побарајте понуда"`
- Intro: → `"Подготвени сме да ви помогнеме со превоз и логистика. Контактирајте нè за брза понуда."`

- [ ] **Step 2: Replace SelectItems**

```tsx
<SelectItem value="domestic">Превоз на роба (домашен)</SelectItem>
<SelectItem value="international">Меѓународен транспорт</SelectItem>
<SelectItem value="logistics">Логистички решенија</SelectItem>
<SelectItem value="other">Друго</SelectItem>
```

- [ ] **Step 3: Phone**

- Display `075 211 440` → `070 233 465`
- Placeholder `075 211 440` → `070 233 465`

- [ ] **Step 4: Submit button**

`"ИСПРАТИ ПРАШАЊЕ"` → `"Испрати порака"`

### 6d — Floating contact

**Files:** `components/ui/floating-contact.tsx`

- [ ] **Step 1: Update PHONE constant**

```tsx
import { BRAND } from "@/lib/constants/brand";
const PHONE = BRAND.whatsappPhone; // "070233465"
```

- [ ] **Step 2: Verify Viber/WhatsApp links** still build correctly:
- `viber://chat?number=070233465`
- `https://wa.me/070233465`

- [ ] **Step 3: Commit**
```bash
git add components/sections/services.tsx components/sections/cost-estimator.tsx components/sections/contact-form.tsx components/ui/floating-contact.tsx
git commit -m "feat(content): rewrite services/calculator/contact for transport niche, drop tier tabs"
```

---

## Task 7: Stats + Testimonials + FAQ + Footer + nasata-rabota

### 7a — Stats

**Files:** `components/sections/stats.tsx`

- [ ] **Step 1: Replace stats array**

```tsx
const stats = [
  { value: 10, suffix: "+", label: "Години искуство" },
  { value: 500, suffix: "+", label: "Испорачани пратки" },
  { value: 50, suffix: "+", label: "Деловни клиенти" },
  { value: 100, suffix: "%", label: "Сигурност и доверба" },
];
```

- [ ] **Step 2: Heading**

`"Бројки што велат повеќе од зборови"` (keep). Strip `font-serif`.

### 7b — Testimonials

**Files:** `components/sections/testimonials.tsx`

- [ ] **Step 1: Replace testimonials array** with 9 transport-themed entries (Macedonian). Sample:

```tsx
const testimonials: Testimonial[] = [
  { text: "Стоката пристигна навреме и беспрекорно спакувана. Препорачувам.", image: "https://randomuser.me/api/portraits/men/1.jpg", name: "Марко Петровски", role: "Сопственик на фирма" },
  { text: "Соработката со Клик Логистик беше изведена професионално. Постојано ќе ги користиме.", image: "https://randomuser.me/api/portraits/women/2.jpg", name: "Ана Стојановска", role: "Менаџер за набавки" },
  { text: "Возилата се одлично одржувани, а шоферите професионални. Стоката стигна без оштетувања.", image: "https://randomuser.me/api/portraits/men/3.jpg", name: "Стефан Илиевски", role: "Логистички координатор" },
  { text: "Меѓународниот превоз помина без никакви компликации. Документацијата беше во ред.", image: "https://randomuser.me/api/portraits/women/4.jpg", name: "Елена Димитрова", role: "Извршен директор" },
  { text: "Брза реакција и флексибилност во планирањето на превозот. Препорачувам.", image: "https://randomuser.me/api/portraits/men/5.jpg", name: "Никола Трајковски", role: "Сопственик на магацин" },
  { text: "Цените се фер, а услугата на високо ниво. Моите пратки се секогаш во сигурни раце.", image: "https://randomuser.me/api/portraits/women/6.jpg", name: "Марија Ангеловска", role: "Деловен партнер" },
  { text: "Доволно е едно повикување и тие се ту - токму такви треба да бидат професионалците.", image: "https://randomuser.me/api/portraits/men/7.jpg", name: "Александар Костов", role: "Инвеститор" },
  { text: "Континуирано користиме нивни услуги веќе неколку години. Никогаш проблем.", image: "https://randomuser.me/api/portraits/women/8.jpg", name: "Ивана Николовска", role: "Менаџер на магацин" },
  { text: "Од Скопје до цела Европа — секогаш точно и навреме. Клик Логистик е мојот избор.", image: "https://randomuser.me/api/portraits/men/9.jpg", name: "Борис Здравковски", role: "Претприемач" },
];
```

- [ ] **Step 2: Replace eyebrow text**

`"ОД НАШИТЕ КЛИЕНТИ"` → `"Од нашите клиенти"`

- [ ] **Step 3: Replace headline + intro paragraph**

```tsx
<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-5 text-[#2a2a2a] text-center text-balance">
  Луѓето зборуваат најдобро
</h2>
<p className="text-center mt-5 text-muted-foreground leading-relaxed">
  Не ние велиме дека сме најдобри — велат оние кои редовно ни ги доверуваат своите пратки.
</p>
```

### 7c — FAQ

**Files:** `components/sections/faq.tsx`

- [ ] **Step 1: Replace `faqs` array**

```tsx
const faqs = [
  { question: "Какви видови стока превезувате?",
    answer: "Превезуваме палетизирана и непалетизирана стока, општи товари и стока на температура (по договор). За опасна стока контактирајте нè." },
  { question: "Дали правите меѓународен транспорт?",
    answer: "Да, организираме превоз од и до Европа со целосна документација (CMR, царина) и следење на пратката." },
  { question: "Колку време треба за домашна испорака?",
    answer: "Зависи од дестинацијата и видот на товарот. За поголем дел од Македонија испораката е во истиот или следниот работен ден." },
  { question: "Како се пресметува цената?",
    answer: "Цената зависи од растојанието, типот на возилото, видот на стока и времето на испорака. Користете го калкулаторот за брза проценка или контактирајте нè за фиксна понуда." },
  { question: "Дали имате осигурување на стока?",
    answer: "Да, секоја пратка може да биде покриена со транспортно осигурување. Деталите ги усогласуваме при договорување." },
  { question: "Како да резервирам превоз?",
    answer: "Контактирајте нè на 070 233 465 или преку формуларот за контакт. Брзо ќе ви одговориме со термин и понуда." },
];
```

### 7d — Footer

**Files:** `components/sections/footer.tsx`

- [ ] **Step 1: Replace top imports + nav/services arrays**

```tsx
import { BRAND } from "@/lib/constants/brand";

const navLinks = [
  { href: "/", label: "Дома" },
  { href: "#za-nas", label: "За нас" },
  { href: "#uslugi", label: "Услуги" },
  { href: "#vozila", label: "Возила" },
  { href: "#iskustva", label: "Искуства" },
  { href: "#kontakt", label: "Контакт" },
];

const services = [
  "Превоз на роба",
  "Меѓународен транспорт",
  "Логистички решенија",
];
```

- [ ] **Step 2: Replace logo block**

Replace `<div>... LT ...</div><span>... ЛАМБЕЛ ТЕРМ ...</span>` with `<Image src="/logo.png" .../><span>{BRAND.name}</span>`.

- [ ] **Step 3: Replace "Услуги" `<ul>`** to render from the services array (3 items).

- [ ] **Step 4: Replace company description paragraph**

`"Klik Logistik DOOEL Skopje — сигурен превоз и логистички решенија низ Македонија и Европа."`

- [ ] **Step 5: Phone update**

`075 211 440` → `070 233 465`; `tel:075211440` → `tel:070233465`.

- [ ] **Step 6: Strip `uppercase`/`font-sans uppercase` from the section h3 elements.**

- [ ] **Step 7: Bottom bar**

`"© 2026 ЛАМБЕЛ ТЕРМ. Сите права задржани."` → `` `© ${new Date().getFullYear()} ${BRAND.legalName}. Сите права задржани.` ``

### 7e — nasata-rabota page

**Files:** `app/nasata-rabota/page.tsx`

- [ ] **Step 1: Replace timeline `data` content**

Update each year's paragraph + `alt` text to transport-themed copy. Keep three entries (`2026`, `2025`, `2024`). Example for `2026`:

```tsx
{
  title: "2026",
  content: (
    <div key="content-2026">
      <p className="text-foreground/80 text-xs md:text-sm font-normal mb-8">
        Година на проширување. Превезовме над 500 пратки низ Македонија и Европа со флота од модерни возила. Воспоставивме редовни линии кон Германија, Италија и Австрија.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {/* same Image grid; alts updated to: "Камион на автопат", "Натовар на палети", "Меѓународен превоз", "Магацин со подготвена стока" */}
      </div>
    </div>
  ),
},
```

For `2025`: focus on shift to international routes + onboarding fleet vehicles.
For `2024`: founding/early years (vehicle 1 acquired, first regular customers).

- [ ] **Step 2: Hero copy**

```tsx
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
  Нашата работа
</h1>
<p className="text-muted-foreground text-base md:text-lg max-w-2xl">
  Од домашни до меѓународни рути — Клик Логистик носи доверба, прецизност и брзина во секоја пратка.
</p>
```

- [ ] **Step 3: Verify image references**

`SITE_IMAGES.portfolio.residential[0..3]` etc. resolve to the new transport images (already wired in Task 1).

### 7f — projects-slider (if used elsewhere)

**Files:** `components/sections/projects-slider.tsx`

- [ ] **Step 1: Confirm whether file is imported**

Run:
```bash
grep -rn "projects-slider\|ProjectsSlider" app components
```
If only the file itself appears (no consumer), leave untouched. If consumed: replace before/after image pairs with transport-themed images and update titles to `"Камион на пат"` / `"Меѓународен превоз"` etc. (Skip if unused.)

- [ ] **Step 2: Commit (7a–7f)**
```bash
git add components/sections/stats.tsx components/sections/testimonials.tsx components/sections/faq.tsx components/sections/footer.tsx app/nasata-rabota/page.tsx
git commit -m "feat(content): rewrite stats/testimonials/faq/footer/work-page for transport niche"
```

---

## Task 8: Favicons + metadata polish

**Files:** `app/layout.tsx`, `public/`

- [ ] **Step 1: Replace icons**

The existing `/icon.svg`, `/icon-light-32x32.png`, `/icon-dark-32x32.png`, `/apple-icon.png` are LT-branded. Either:
- Generate from `/logo.png` (use any quick tool), OR
- Point all favicon entries to `/logo.png` short-term:

```ts
icons: {
  icon: [{ url: '/logo.png', type: 'image/png' }],
  apple: '/logo.png',
}
```

- [ ] **Step 2: Verify metadata title/description match Task 4 content**

- [ ] **Step 3: Commit**
```bash
git add app/layout.tsx
git commit -m "chore(meta): point favicons + metadata to Klik Logistik"
```

---

## Task 9: End-to-end manual QA

- [ ] **Step 1: `pnpm build`** → no errors / warnings increase.
- [ ] **Step 2: `pnpm dev`** → open http://localhost:3000.
- [ ] **Step 3: Smoke test (golden path):**
  - Header renders with new logo + "Клик Логистик"; nav labels are sentence case.
  - Hero shows transport images, no ALL-CAPS, fonts are Roboto.
  - Services shows exactly 3 cards with transport copy.
  - Vehicles section visible, two cards. Click card 1 → dialog with capacity 3.600 kg + dimensions 6.20/2.45/2.20 + "Повикај нè 070 233 465". Click "tel:" → triggers tel handler. Close. Click card 2 → 9.350 kg + 7.60/2.45/2.60.
  - Cost estimator: pick a service, change city/suburb, drag slider 10–2000 km. No "Пакет на чистење" tab. Estimate updates live. CTA "Резервирај превоз" scrolls to contact.
  - Capabilities: no animated grid background, no blueprint watermark; flat #f5f5f5 bg.
  - History/Stats/Testimonials: transport copy.
  - FAQ: 6 transport questions; expand/collapse animations work.
  - Contact form: 3 service options + "Друго"; phone shows 070 233 465; submit logs to console.
  - Footer: new logo + 3 services; phone 070 233 465; copyright shows current year + legalName.
  - Floating contact: Viber / WhatsApp / Повикај all use 070233465.
  - `/nasata-rabota`: heading "Нашата работа", three timeline entries with new copy.
- [ ] **Step 4: Mobile viewport test** (Chrome devtools, iPhone 14 + Pixel 7). All sections + dialog readable.
- [ ] **Step 5: Color check** — primary buttons render gray (not red). Inspect: `--primary: oklch(0.45 0 0)`.
- [ ] **Step 6: Typography check** — `getComputedStyle(body).fontFamily` includes Roboto.
- [ ] **Step 7: Final commit (if any tweaks)**
```bash
git add -A
git commit -m "chore: post-QA polish"
```

---

## Self-Review Checklist (filled)

**Spec coverage:**
- [x] Niche change → Tasks 1–7
- [x] Color theme red → gray → Task 3 step 1
- [x] Remove fancy backgrounds → Task 3 steps 2–4
- [x] Roboto font → Task 4 steps 1–2
- [x] No ALL-CAPS, sentence case in services / nav menu → Task 4 step 3 + Task 5a + Task 6
- [x] Brand "Клик Логистик" / Klik Logistik DOOEL Skopje → Task 1 + Task 5a + Task 7d
- [x] Use supplied images, placeholders for gaps → Task 1 step 3 (placeholder for missing slots)
- [x] 3 services → Task 6a
- [x] Vehicles section with 2 vehicles + dialog popup with details + call CTA → Task 2
- [x] Cost calculator: rough price, no tier tabs (Стандардно/Напредно/Премиум) → Task 6b step 3
- [x] Logo from `5.png` → Task 1 step 1 + Task 5a + Task 7d
- [x] Phone `070 233 465` → propagated in Tasks 1, 5a, 6c, 6d, 7d
- [x] Macedonian throughout → all replaced strings in Cyrillic Macedonian

**No placeholders:** every step contains executable commands or full code blocks.

**Type consistency:** `Vehicle` type defined in Task 2 step 1, consumed in step 2; `BRAND` shape consistent across all consumers; `SITE_IMAGES.vehicles.v1`/`v2` defined Task 1 step 3 and consumed Task 2 step 1.

---

## Execution Handoff

Plan saved to `docs/superpowers/plans/2026-05-06-klik-logistik-revamp.md`. Two execution options:

1. **Subagent-Driven (recommended)** — fresh subagent per task with review between tasks; fast iteration on a 9-task plan.
2. **Inline Execution** — execute in this session with checkpoints (Tasks 1, 3, 6, 9 are natural review points).

Which approach?
