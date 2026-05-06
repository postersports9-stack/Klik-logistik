# Klik Logistik — Homepage Redesign

**Date:** 2026-05-06
**Branch:** `redesign/claude-restraint`
**Status:** Approved design, pending implementation plan

## Problem

Current homepage reads as generic AI-generated landing: 12 stacked sections, 3-image hero collage, pervasive hover/scroll animations, decorative gradients, no editorial restraint. Klik Logistik is a B2B freight & logistics company in Skopje (МК). Site goal is **lead generation**. Current structure dilutes that goal: too many sections, animations distract, no quote form above the fold, fleet specs buried, calculator hidden mid-page.

## Goal

Redesign the homepage with a "Claude restraint" aesthetic — keep the existing gray + Roboto brand, but borrow Anthropic's discipline: editorial spacing, type-driven hierarchy, near-zero motion, no decorative chrome. Pull the quote action above the fold. Reduce 12 sections to 7. Replace the 3-image collage with a single full-bleed hero image plus an overlaid 3-field quick-quote form.

## Non-goals

- Not a brand color change. Gray + red accent stays.
- Not a font change. Roboto stays (weights pruned to 400/500).
- Not a new CMS, no language switcher, no blog.
- Not adding new pages — `nasata-rabota` left untouched in this round.
- No real backend integration for the calculator (client-side stub formula; real price = via callback).
- No analytics or tracking changes.

## Audience

B2B buyers — logistics managers, procurement, small business owners arranging freight. Visit to validate fleet capacity and request a quote. Decision driver = trust + speed of response, not price discovery.

## Design system (global)

### Typography (Roboto, kept)
- Display (hero h1): 64/72px desktop, 40/48 mobile, weight 500, letter-spacing -0.02em
- Section h2: 40/48 desktop, 32/40 mobile, weight 500, -0.015em
- Eyebrow: 12px weight 500, uppercase, tracking 0.18em, muted
- Body: 17/28 desktop, 16/26 mobile, weight 400
- Small/meta: 14/22 weight 400
- Numbers (stats): 72/80 weight 400, tabular-nums
- Drop unused Roboto weights from `next/font` config; keep only 400 + 500.

### Color
- bg: `#FFFFFF`
- ink: `#111111`
- muted: `#6B6B6B`
- border: `#E5E5E5`
- subtle bg (calculator result panel only): `#F6F6F6`
- accent (kept): `oklch(0.577 0.245 27.325)` red — used **only** on primary buttons, form focus rings, section number underline. Nowhere else.

### Layout
- Container max-w `1120px`, centered, `px-6` mobile, `px-8` desktop.
- Section padding: `py-32` desktop, `py-20` mobile. No exceptions.
- Section divider: 1px `#E5E5E5` line at section top, eyebrow `01 — УСЛУГИ` 24px below line, then content.
- `--radius: 0` (already set).
- No drop shadows except hero scrim. No card backgrounds except calculator result panel.

### Motion budget
- One pattern only: section h2 + eyebrow fade-up 8px, 200ms ease-out, on intersect once.
- Buttons: 100ms bg-color transition only.
- Remove all other motion on home: `AnimatePresence` slider, list stagger, hover scales, parallax, counters.

### Component pruning
- Remove `FloatingContact`. Replace with a sticky thin top bar (mobile only) showing phone number once user scrolls past hero.
- Unused shadcn primitives left in repo, deletion out of scope for this design.

## Page structure (7 sections)

Order: **Header → Hero → Services → Fleet → Calculator → Stats → Testimonials → Contact → Footer**.

### Header
- Sticky 64px tall, white bg, transparent at top, 1px bottom border on scroll.
- Left: wordmark "Klik Logistik" — 18px weight 500, no icon.
- Right (desktop): nav links 14px weight 400 (Услуги · Возила · Калкулатор · Контакт) + phone `+389 XX XXX XXX` 14px weight 500 (text link, red on hover, no button styling).
- Mobile: wordmark + hamburger; right-side full-height drawer, links 24px weight 400, phone at bottom.
- Active nav state: 1px underline 2px below text, color = ink.

### Hero
- Height `calc(100vh - 64px)`, min 640px, max 820px.
- Single full-bleed background image (truck on highway / loaded fleet). One image, no carousel.
- Dark gradient scrim: `rgba(0,0,0,0.7)` left → `rgba(0,0,0,0)` at 60% width.
- Content grid: container max-w-1120; left column 6/12 cols.
- Left column (top → bottom):
  - Eyebrow: "ТРАНСПОРТ И ЛОГИСТИКА · СКОПЈЕ" (white 80% opacity).
  - h1 two lines: "Робата ваша. / Времето наше." (final copy TBD with stakeholder).
  - Subhead 1 line, ~20px, white 80%, max 480px wide.
  - Quote form (white bg block, p-6, no rounding):
    - Row 1: From input | To input (50/50, gap-2)
    - Row 2: Phone input full width
    - Row 3: Submit "Побарај понуда" black bg / white text, h-12, weight 500, full width.
  - Below form, single line 13px white 70%: "Одговараме во рок од 30 минути · Пон–Саб 08:00–20:00".
- Mobile: image stays bg, scrim covers full width, single column, fields full-width stacked, h1 trims to one line "Робата ваша. Времето наше.", h1 32px.
- No Framer Motion.

### Services (`01 — УСЛУГИ` · "Што превезуваме.")
- 1-line lead paragraph below h2 (max 640px).
- Grid: 2-col, 3-col on `≥1280px`, 1-col mobile.
- Each item:
  - 1px top border per item; no card bg.
  - Item number `01` small muted top-left.
  - Title 22px weight 500.
  - 2–3 line description 16px muted.
  - No icon, no image, no hover lift.
- Items: 4–6 from {International transport, Domestic distribution, Express courier, ADR / oversized, Warehousing, Customs clearance}. Final list confirmed at copy stage.

### Fleet (`02 — ВОЗИЛА` · "Возен парк.")
- Lead paragraph: total truck count, axle range.
- 12-col grid; each fleet entry = full-width row:
  - Left 4 cols: single fleet photo, aspect 4/3, b&w / muted, no overlay.
  - Right 8 cols: model name 24px weight 500; payload, dims (W×H×L), pallet count, trailer type. Two-column key-value list 14px on desktop.
  - 1px bottom border per row.
- 4–6 vehicle types: Combi 3.5t, Camion 7.5t, Camion 12t, Tegnach 24t, Hladnjača, Plato.
- No carousel, no swipe.

### Calculator (`03 — ИЗРАЧУНАЈ ЦЕНА` · "Брза проценка.")
- Lead: "Внеси релација и тонажа. Точна цена со повратен повик во 30 минути."
- 12-col layout: 7 cols form left, 5 cols result right. Mobile stacked.
- Form fields (label above bordered input, no card wrapper):
  - Од (city select)
  - До (city select)
  - Тонажа (number)
  - Тип на товар (select: палети / расути / ADR / комбиниран)
  - Датум (date, optional)
- Result panel (right): bg `#F6F6F6`, p-8.
  - "Проценета цена" label + EUR amount in 56px tabular numerals.
  - 3-line breakdown (километража, основа, доплати).
  - Below: "Прифаќаш? Внеси телефон." → phone input + "Резервирај" button.
  - Disclaimer 12px muted ("Цената е ориентациска. Финална потврда по повик.").
- Client-side stub formula. Submit logs to console in dev; wires to existing contact backend in prod (out of scope).

### Stats (`04 — БРОЈКИ` · "Што правиме во бројки.")
- 4-col grid, no boxes, no bg.
- Each cell: huge number 72px weight 400 tabular, label 14px muted below; 1px right border between cols (none on last). Cells have no extra vertical padding; section `py-32` handles spacing.
- Cells: `12+ години`, `35 возила`, `14 земји`, `24/7 диспечер` (final copy TBD).
- Static numbers, no count-up animation.

### Testimonials (`05 — КЛИЕНТИ` · "Доверба од клиентите.")
- One oversized testimonial centered (max-w 720px), then 2 smaller below in 2-col.
- Each: blockquote 22px weight 400, 1px line below, then name + company 14px muted.
- No avatars, no carousel, no logos in this section.
- (If real client logos available: separate thin strip of 6–8 b&w 60%-opacity logos one row above testimonials. No animation. Optional, decided at copy stage.)

### Contact (`06 — КОНТАКТ` · "Побарај понуда.")
- Lead: "Одговараме во 30 минути работно време."
- 12-col: 7 cols form left, 5 cols info right.
- Form fields (label above, 1px border, h-12): Име · Компанија · Телефон · Email · Релација · Порака · Submit (black btn full-width).
- Right info panel:
  - Phone 22px (click-to-call)
  - Email
  - Address + Viber/WhatsApp
  - Working hours
  - Map embed b&w (Google Maps iframe with grayscale CSS filter), 320px tall.

### Footer
- 80px tall single bar, top 1px border, white bg.
- Left: "© Klik Logistik 2026 · Скопје, СМ"
- Center: small nav (Услуги · Возила · Калкулатор · Политика на приватност)
- Right: phone + email
- All 13px muted. One row desktop, stacked mobile.

## Removed components

Delete (or unmount from home):
- 3-image hero collage (rewrite `components/sections/hero.tsx`)
- `components/sections/capabilities.tsx`
- `components/sections/history.tsx`
- `components/sections/faq.tsx`
- `components/ui/floating-contact.tsx`
- `components/sections/projects-slider.tsx` (not imported by `app/page.tsx`; delete file)
- `framer-motion` usages on home (package itself only removed if no other route consumes it; verify `app/nasata-rabota/page.tsx` first).

## Files touched

- `app/page.tsx` — section order updated to 7-section list.
- `app/layout.tsx` — Roboto weights pruned to 400/500.
- `app/globals.css` — type scale tokens, spacing tokens, color tokens reconciled.
- `components/sections/header.tsx` — rewrite per Header section.
- `components/sections/hero.tsx` — rewrite per Hero section.
- `components/sections/services.tsx` — rewrite per Services section.
- `components/sections/vehicles.tsx` — rewrite per Fleet section.
- `components/sections/cost-estimator.tsx` — rewrite per Calculator section.
- `components/sections/stats.tsx` — rewrite per Stats section.
- `components/sections/testimonials.tsx` — rewrite per Testimonials section.
- `components/sections/contact-form.tsx` — rewrite per Contact section.
- `components/sections/footer.tsx` — rewrite per Footer section.
- New: `components/sections/section-heading.tsx` — shared `<SectionHeading number="01" eyebrow="УСЛУГИ" title="Што превезуваме." lead="…" />`. Used by all 6 mid-page sections. Encapsulates 1px top divider, eyebrow row, h2, lead paragraph, plus the only fade-up motion on the page.
- Delete: files listed under "Removed components".

## Acceptance criteria

- Home loads with exactly 7 sections in the order above. No other sections render.
- Hero: single image, no carousel, 3-field quote form rendered above the fold on desktop and mobile.
- Quote form submit posts to the same endpoint as the existing contact form (or, if none exists, console-logs in dev — implementation plan resolves).
- No `framer-motion` import on the home route except inside `section-heading.tsx`.
- Lighthouse mobile performance ≥ 90 on home (current state should be re-measured as baseline; target is no regression worse than -3 points after redesign).
- All Cyrillic copy renders correctly; Roboto Cyrillic subset loads.
- No purple, no decorative gradients, no random hover scales, no count-ups, no parallax.
- Site builds clean with `next build`; no TypeScript errors.

## Open copy questions (resolved at implementation, not blocking design)

- Final h1 + subhead wording.
- Final list of services (4–6).
- Final list of vehicles (4–6) with real specs.
- Real stats numbers.
- Real testimonials (3 quotes + names + companies).
- Real phone number, email, address, working hours.
- Hero photo + 4–6 fleet photos.
