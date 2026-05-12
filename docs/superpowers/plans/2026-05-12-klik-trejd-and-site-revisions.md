# Klik Trejd Section + Site Revisions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply six small site revisions: replace brand logo, remove the standalone calculator section, recolor primary CTA buttons to yellow, remove header phone numbers, add a short dark-gray "Клик Трејд" teaser section above the contact form, and create a stub `/klik-trejd` route.

**Architecture:** This is a Next.js App Router project (Next 14+, React 18) styled with Tailwind v4 inline theme. Brand colors live as CSS variables in [app/globals.css](app/globals.css) and are exposed to Tailwind via `@theme inline` (e.g., `bg-kl-accent`, `border-kl-border`). Page sections compose in [app/page.tsx](app/page.tsx). Brand identity lives in [lib/constants/brand.ts](lib/constants/brand.ts). No new dependencies are introduced.

**Tech Stack:** Next.js App Router, React 18, TypeScript, Tailwind CSS v4, `next/image`.

---

## File Structure

**Create:**
- `public/brand-logo.png` — overwritten with the new artwork (already-referenced path; replacing keeps the rest of the codebase unchanged).
- `components/sections/klik-trejd-cta.tsx` — new short dark-gray teaser section with CTA link to `/klik-trejd`.
- `app/klik-trejd/page.tsx` — empty stub page (returns a minimal `<main />`).

**Modify:**
- [app/globals.css](app/globals.css) — add yellow CTA color tokens (`--kl-cta`, `--kl-cta-strong`, `--kl-cta-foreground`) under the existing Klik tokens, and expose them under `@theme inline`.
- [components/sections/header.tsx](components/sections/header.tsx) — remove desktop and mobile phone-number anchors; drop unused `BRAND` import if no other usage remains.
- [components/sections/hero.tsx](components/sections/hero.tsx) — no code changes; the hero already embeds `<CalculatorCard variant="hero" />`. Verify visually after removing the standalone section.
- [components/ui/calculator-card.tsx](components/ui/calculator-card.tsx) — swap submit-button classes from `bg-kl-accent … text-white hover:bg-kl-accent-strong` to the new CTA palette in both `hero` and `section` variants.
- [components/sections/contact-form.tsx](components/sections/contact-form.tsx) — swap submit-button classes to the new CTA palette.
- [components/ui/quote-form.tsx](components/ui/quote-form.tsx) — swap submit-button classes to the new CTA palette.
- [app/page.tsx](app/page.tsx) — drop the `CostEstimator` import and `<CostEstimator />` element; insert `<KlikTrejdCta />` immediately above `<ContactForm />`.

**Delete:**
- [components/sections/cost-estimator.tsx](components/sections/cost-estimator.tsx) — no remaining references after `app/page.tsx` is updated. (Confirmed: only `app/page.tsx` imports it.)

**Leave alone (intentionally):**
- [components/ui/contact-widget.tsx](components/ui/contact-widget.tsx) — the floating `Phone` FAB uses `bg-kl-accent` for the round contact button; this is a persistent UI affordance, not a marketing CTA. Keep it dark to avoid yellow icons on yellow on hover, and to leave the section-heading underline (`border-kl-accent` in [components/sections/section-heading.tsx](components/sections/section-heading.tsx)) unaffected. If product later wants the FAB yellow too, that's a separate change.
- [components/sections/footer.tsx](components/sections/footer.tsx) — the footer phone link is informational, not a header CTA; the user's requirement was specifically header-only.

---

## Task 1: Replace Brand Logo

**Files:**
- Modify (overwrite): `public/brand-logo.png`

- [ ] **Step 1: Copy the new logo into `public/`**

Run from the repo root:

```bash
cp "/c/Users/user2/Downloads/minimalistic_Klik_Logisitka_result_3-removebg-preview.png" public/brand-logo.png
```

Expected: command exits 0, file size of `public/brand-logo.png` changes.

- [ ] **Step 2: Sanity-check the file**

Run:

```bash
ls -la public/brand-logo.png
file public/brand-logo.png
```

Expected: file exists and reports as a PNG image.

- [ ] **Step 3: Visual verification**

Start the dev server if not running: `pnpm dev` (or `npm run dev`). Open `http://localhost:3000/`. Confirm the new logo appears in the sticky header (both desktop and mobile) and in the mobile drawer top bar. The header logo is rendered at `h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12` in [components/sections/header.tsx](components/sections/header.tsx); if the new artwork has very different aspect ratio than the previous square, the box-sizing may need to switch from `h-* w-*` to `h-* w-auto`. Inspect and adjust only if the image looks squashed.

- [ ] **Step 4: Commit**

```bash
git add public/brand-logo.png
git commit -m "chore(brand): replace header logo with new minimalist artwork"
```

---

## Task 2: Remove Phone Numbers From Header

**Files:**
- Modify: `components/sections/header.tsx`

- [ ] **Step 1: Delete the desktop phone link**

In [components/sections/header.tsx](components/sections/header.tsx), remove the block:

```tsx
<a
  href={BRAND.phoneHref}
  className="hidden text-[15px] font-medium text-kl-ink transition-colors hover:text-kl-ink-strong md:block"
>
  {BRAND.phone}
</a>
```

- [ ] **Step 2: Delete the mobile phone link**

In the mobile cluster (`<div className="flex items-center gap-2 md:hidden">`), remove the leading anchor:

```tsx
<a
  href={BRAND.phoneHref}
  className="px-2 text-[14px] font-medium text-kl-ink"
  aria-label="Повикај"
>
  {BRAND.phone}
</a>
```

- [ ] **Step 3: Delete the drawer-footer phone link**

Inside the mobile `<SheetContent>`, remove:

```tsx
<div className="mt-auto border-t border-kl-border px-6 py-6">
  <a href={BRAND.phoneHref} className="text-[18px] font-medium text-kl-ink">
    {BRAND.phone}
  </a>
</div>
```

Rationale: the user said "remove the phone number from the header"; the drawer is part of the header component and shows the same number, so it should go too. If the user wanted to keep the drawer copy, this is the one to revisit.

- [ ] **Step 4: Drop the now-unused `BRAND` import**

The file becomes:

```tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
```

- [ ] **Step 5: Typecheck**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Visual verification**

Reload `http://localhost:3000/`. Desktop header: only logo + nav, no phone. Mobile header: logo + hamburger only. Open drawer: no phone at the bottom.

- [ ] **Step 7: Commit**

```bash
git add components/sections/header.tsx
git commit -m "feat(header): drop phone number from header and mobile drawer"
```

---

## Task 3: Add Yellow CTA Color Tokens

**Files:**
- Modify: `app/globals.css`

Decision: introduce a new `kl-cta` token rather than mutating `--kl-accent`. `kl-accent` is also used by [components/sections/section-heading.tsx:49](components/sections/section-heading.tsx#L49) as a border under section numbers, and by the floating contact widget background — repurposing it would discolor both.

- [ ] **Step 1: Add CTA variables under `:root` in `app/globals.css`**

Inside the `:root` block, immediately after the existing `--kl-accent-strong: #000000;` line, add:

```css
  --kl-cta: #FACC15;          /* yellow-400 */
  --kl-cta-strong: #EAB308;   /* yellow-500 */
  --kl-cta-foreground: #111111;
```

- [ ] **Step 2: Mirror the variables inside `.dark`**

Inside the `.dark` block, after the existing tokens, add the same three lines (yellow stays the same in dark mode; foreground stays dark so text on yellow remains legible):

```css
  --kl-cta: #FACC15;
  --kl-cta-strong: #EAB308;
  --kl-cta-foreground: #111111;
```

- [ ] **Step 3: Expose tokens under `@theme inline`**

Inside the `@theme inline { … }` block, after `--color-kl-accent-strong: var(--kl-accent-strong);`, add:

```css
  --color-kl-cta: var(--kl-cta);
  --color-kl-cta-strong: var(--kl-cta-strong);
  --color-kl-cta-foreground: var(--kl-cta-foreground);
```

This makes `bg-kl-cta`, `hover:bg-kl-cta-strong`, and `text-kl-cta-foreground` available as Tailwind utilities.

- [ ] **Step 4: Boot-check**

```bash
pnpm dev
```

Open the site. Existing dark CTA buttons should still render dark (no class changes yet). No console errors about unknown utilities (we haven't used them yet either; the real check is in Task 4).

- [ ] **Step 5: Commit**

```bash
git add app/globals.css
git commit -m "feat(theme): add yellow kl-cta color tokens"
```

---

## Task 4: Recolor CTA Buttons To Yellow

**Files:**
- Modify: `components/ui/calculator-card.tsx`
- Modify: `components/sections/contact-form.tsx`
- Modify: `components/ui/quote-form.tsx`

There are exactly four CTA buttons to update (`grep -n bg-kl-accent components/`):

- [components/ui/calculator-card.tsx:127](components/ui/calculator-card.tsx#L127) — hero variant "Резервирај"
- [components/ui/calculator-card.tsx:207](components/ui/calculator-card.tsx#L207) — section variant "Резервирај"
- [components/sections/contact-form.tsx:61](components/sections/contact-form.tsx#L61) — "Побарај понуда"
- [components/ui/quote-form.tsx:85](components/ui/quote-form.tsx#L85) — "Побарај понуда"

Old class fragment (varies slightly per file in length, but always contains these tokens):

```
bg-kl-accent … text-white … hover:bg-kl-accent-strong
```

New class fragment:

```
bg-kl-cta … text-kl-cta-foreground … hover:bg-kl-cta-strong
```

- [ ] **Step 1: Update `calculator-card.tsx` hero variant button (line ~127)**

Replace:

```tsx
className="mt-3 block h-12 w-full bg-kl-accent text-[14px] font-medium tracking-wide text-white transition-colors duration-100 hover:bg-kl-accent-strong"
```

with:

```tsx
className="mt-3 block h-12 w-full bg-kl-cta text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong"
```

- [ ] **Step 2: Update `calculator-card.tsx` section variant button (line ~207)**

Same replacement as Step 1 — the class string is identical.

- [ ] **Step 3: Update `contact-form.tsx` submit button (line ~61)**

Replace:

```tsx
className="h-12 bg-kl-accent text-[14px] font-medium tracking-wide text-white transition-colors duration-100 hover:bg-kl-accent-strong disabled:opacity-60 sm:col-span-2"
```

with:

```tsx
className="h-12 bg-kl-cta text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong disabled:opacity-60 sm:col-span-2"
```

- [ ] **Step 4: Update `quote-form.tsx` submit button (line ~85)**

Replace:

```tsx
className="mt-3 block h-12 w-full bg-kl-accent text-[14px] font-medium tracking-wide text-white transition-colors duration-100 hover:bg-kl-accent-strong disabled:opacity-60"
```

with:

```tsx
className="mt-3 block h-12 w-full bg-kl-cta text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong disabled:opacity-60"
```

- [ ] **Step 5: Verify no stray `bg-kl-accent` CTAs remain**

```bash
grep -rn "bg-kl-accent" components/
```

Expected matches: `components/ui/contact-widget.tsx:57` only. (Section-heading uses `border-kl-accent`, not `bg-`, and is intentional.)

- [ ] **Step 6: Visual verification**

Reload `http://localhost:3000/`. The hero calculator "Резервирај" button is yellow with dark text; same for the contact-form "Побарај понуда". Hover darkens to yellow-500. The floating phone button bottom-right stays dark (intentional).

- [ ] **Step 7: Commit**

```bash
git add components/ui/calculator-card.tsx components/sections/contact-form.tsx components/ui/quote-form.tsx
git commit -m "feat(ui): paint primary CTAs yellow with dark text"
```

---

## Task 5: Remove The Standalone Calculator Section

**Files:**
- Modify: `app/page.tsx`
- Delete: `components/sections/cost-estimator.tsx`

The calculator stays in the hero (`<CalculatorCard variant="hero" />` at [components/sections/hero.tsx:40](components/sections/hero.tsx#L40)). Only the standalone section disappears.

- [ ] **Step 1: Edit `app/page.tsx`**

Remove the import line:

```tsx
import { CostEstimator } from "@/components/sections/cost-estimator"
```

Remove the JSX element:

```tsx
<CostEstimator />
```

Resulting file:

```tsx
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Vehicles } from "@/components/sections/vehicles"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { ContactWidget } from "@/components/ui/contact-widget"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Vehicles />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ContactWidget />
    </main>
  )
}
```

(Note: `<KlikTrejdCta />` is added in Task 6 — keep these changes separate.)

- [ ] **Step 2: Confirm nothing else imports `CostEstimator`**

```bash
grep -rn "cost-estimator\|CostEstimator" app/ components/ lib/
```

Expected: no matches (the file itself is about to be deleted).

- [ ] **Step 3: Delete the component file**

```bash
git rm components/sections/cost-estimator.tsx
```

- [ ] **Step 4: Verify the footer "Калкулатор" link still resolves**

[components/sections/footer.tsx:11](components/sections/footer.tsx#L11) links to `#kalkulator`. That id used to live on the standalone section. After deletion, the link will jump nowhere. Decision: the calculator is now only in the hero — change the footer link to `#` (top of page, which contains the hero calculator) or remove the link.

Apply the simplest fix — point it to the hero:

```tsx
<a href="#" className="transition-colors hover:text-white">Калкулатор</a>
```

Apply the same change to the desktop nav link in [components/sections/header.tsx](components/sections/header.tsx) (`{ href: "#kalkulator", label: "Калкулатор" }` becomes `{ href: "#", label: "Калкулатор" }`).

- [ ] **Step 5: Typecheck and visual check**

```bash
pnpm tsc --noEmit
```

Expected: no errors. Reload site: the duplicate calculator block between Vehicles and Stats is gone; the hero still has its calculator.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx components/sections/cost-estimator.tsx components/sections/header.tsx components/sections/footer.tsx
git commit -m "feat(home): remove standalone calculator section, keep hero variant"
```

---

## Task 6: Create The `/klik-trejd` Stub Page

**Files:**
- Create: `app/klik-trejd/page.tsx`

The user said "just create the page for now, don't put anything on it." Keep it minimal but render something so the route isn't a blank document.

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p app/klik-trejd
```

Write `app/klik-trejd/page.tsx`:

```tsx
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "Клик Трејд",
}

export default function KlikTrejdPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-[1120px] px-4 py-24 sm:px-6 md:px-8">
        <h1 className="text-[32px] font-medium tracking-tight text-kl-ink md:text-[48px]">
          Клик Трејд
        </h1>
      </section>
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Boot-check the route**

Visit `http://localhost:3000/klik-trejd`. Header + the page title + footer should render. No 404. No console errors.

- [ ] **Step 3: Commit**

```bash
git add app/klik-trejd/page.tsx
git commit -m "feat(klik-trejd): add stub route at /klik-trejd"
```

---

## Task 7: Build The "Клик Трејд" Teaser Section

**Files:**
- Create: `components/sections/klik-trejd-cta.tsx`
- Modify: `app/page.tsx`

Requirements: short, dark gray, text "Видете ја фирмата за експорт-импорт", CTA → `/klik-trejd`. Placed right above the "Побарај понуда" contact form.

- [ ] **Step 1: Create the component**

Write `components/sections/klik-trejd-cta.tsx`:

```tsx
import Link from "next/link"

export function KlikTrejdCta() {
  return (
    <section className="bg-neutral-800 text-white">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-14">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
            Клик Трејд
          </p>
          <p className="mt-2 text-[20px] leading-[28px] font-medium tracking-tight text-white md:text-[24px] md:leading-[32px]">
            Видете ја фирмата за експорт-импорт.
          </p>
        </div>
        <Link
          href="/klik-trejd"
          className="inline-flex h-12 items-center justify-center bg-kl-cta px-6 text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong"
        >
          Кон Клик Трејд
        </Link>
      </div>
    </section>
  )
}
```

Notes:
- `bg-neutral-800` is the Tailwind default dark gray (`#262626`). It's intentionally different from the pure-black `bg-kl-ink` used by hero/footer so the teaser reads as a distinct strip rather than blending into the footer.
- The CTA uses the new `kl-cta` yellow added in Task 3 for visual continuity with the other primary CTAs.
- Uses `next/link` (client-side nav) instead of `<a>` since the destination is an internal route.

- [ ] **Step 2: Mount it in `app/page.tsx` just above `<ContactForm />`**

Add the import:

```tsx
import { KlikTrejdCta } from "@/components/sections/klik-trejd-cta"
```

Update the JSX so `<KlikTrejdCta />` sits between `<Testimonials />` and `<ContactForm />`:

```tsx
<Testimonials />
<KlikTrejdCta />
<ContactForm />
```

- [ ] **Step 3: Typecheck**

```bash
pnpm tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Visual verification**

Reload `http://localhost:3000/`. Scroll to just above the "Побарај понуда" contact form. The dark-gray strip with the eyebrow "Клик Трејд", headline "Видете ја фирмата за експорт-импорт.", and yellow "Кон Клик Трејд" button is present. Clicking the button navigates to `/klik-trejd` (the Task 6 stub).

- [ ] **Step 5: Commit**

```bash
git add components/sections/klik-trejd-cta.tsx app/page.tsx
git commit -m "feat(home): add Klik Trejd teaser strip above contact form"
```

---

## Final Verification

- [ ] **Step 1: Production build**

```bash
pnpm build
```

Expected: build succeeds, no type errors, no Tailwind warnings about unknown classes (`bg-kl-cta`, `bg-kl-cta-strong`, `text-kl-cta-foreground` should all resolve thanks to Task 3).

- [ ] **Step 2: Smoke-test the running site**

```bash
pnpm start
```

Manually verify:
- Homepage `/`:
  - New logo visible in header.
  - No phone number anywhere in the header or mobile drawer.
  - Hero still contains the calculator card (yellow CTA).
  - No standalone calculator section between Vehicles and Stats.
  - Yellow CTA buttons on hero calculator and on the contact form.
  - Dark-gray "Клик Трејд" strip immediately above "Побарај понуда".
- Route `/klik-trejd` loads with header, the title "Клик Трејд", and footer.

- [ ] **Step 3: Tag the merge commit (optional)**

If happy, the branch is ready for the user's normal merge flow.

---

## Notes & Decisions

- **Why a new `kl-cta` token instead of repainting `kl-accent`:** `kl-accent` is used as a 1px underline for section numbers in [components/sections/section-heading.tsx:49](components/sections/section-heading.tsx#L49) and as the background of the floating contact FAB in [components/ui/contact-widget.tsx:57](components/ui/contact-widget.tsx#L57). Repurposing the token would change those surfaces without the user asking. A new token keeps the change scoped.
- **Why `text-kl-cta-foreground` instead of `text-white` on yellow buttons:** white-on-yellow fails WCAG contrast at this brightness; dark ink on yellow is the standard pairing.
- **Footer / nav `#kalkulator` links:** rewired to `#` so they still scroll to the hero (where the calculator now lives) rather than dangling. If the user prefers to drop the link entirely, that's a one-line follow-up.
- **`components/sections/footer.tsx` phone link:** intentionally untouched — the user's request specified the header only.
- **No tests are added or modified:** this codebase has no existing test suite for these UI components; `tsc --noEmit` and visual checks are the verification layer.
