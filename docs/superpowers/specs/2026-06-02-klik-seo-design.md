# Klik Logistik — SEO Design

**Date:** 2026-06-02
**Status:** Approved design (pending spec review)
**Constraint:** No major changes (no blog/new pages). No visible text edited without explicit approval — except the authorized email fix.

## Goals

**Primary (priority #1):** Rank #1 for brand terms.
- `klik logistik`, `klik group`, `klik trejd`
- `клик логистик`, `клик груп`, `клик трејд`
- Client is focused on **Klik Logistik** as the lead entity; **Klik Group** is the parent brand over Klik Logistik + Klik Trejd.

**Secondary:** Rank for transport terms.
- `транспорт скопје`, `транспорт мк`, `фирма за транспорт скопје`, `фирма за транспорт`
- `firma za transport`, `transport mk`, `skopje transport`, `paleti transport`, `transport na paleti`

## Context

- Next.js 16 App Router, Tailwind v4, deployed to **klikgroup.mk**.
- 4 routes: `/` (home), `/klik-trejd`, `/za-nas`, `/nasata-rabota`.
- Current SEO state: basic per-page title/description on 3 pages; `nasata-rabota` has none. **Missing:** `metadataBase`, sitemap, robots, structured data, OpenGraph/Twitter, canonical URLs.
- NAP: Клик Логистик / Klik Logistik DOOEL Skopje · phone 070 233 465 · email (to fix) · address **1 бр.38, Кучевиште, Чучер-Сандево, Скопје**.
- Google Business Profile: out of scope (skipped).

## Approach

Approach **B**: invisible technical + structured-data foundation, plus a small set of *separately approved* visible-copy tweaks for secondary keywords. Brand terms remain priority #1.

Research basis: JSON-LD is Google's preferred structured-data format and lives outside visible HTML; LocalBusiness + Organization schema is the strongest lever for brand and local-intent queries. Google starter guide: unique keyword-aware titles, brand name in titles, unique non-duplicate descriptions, descriptive alt text, sitemap, valid structured data.

## Components

### 1. Technical foundation (invisible)
- `metadataBase: new URL("https://klikgroup.mk")` in `app/layout.tsx`.
- `app/robots.ts` — allow all, reference sitemap.
- `app/sitemap.ts` — all 4 routes with `lastModified` + priority (home 1.0, others 0.7–0.8).
- `title.template = "%s | Клик Логистик"` in layout; `title.default` for home.
- `alternates.canonical` per page (absolute via metadataBase).

### 2. Per-page metadata (invisible — `<head>` only)
Unique title + description per page, brand-led, keywords natural (no stuffing):
- **Home:** title default ≈ `Клик Логистик (Klik Group) — Транспорт и превоз на роба Скопје`; description includes транспорт скопје / фирма за транспорт.
- **klik-trejd:** retain, include `Клик Трејд / Klik Trejd` + палети транспорт.
- **za-nas:** brand + фирма за транспорт.
- **nasata-rabota:** ADD metadata (currently none) — brand + транспорт мк.

### 3. Structured data — JSON-LD (invisible; primary brand lever)
Reusable server component `components/seo/json-ld.tsx` rendering `<script type="application/ld+json">`.
- **Organization** (sitewide, layout): `name: "Klik Logistik"`, `alternateName: ["Klik Group","Клик Логистик","Клик Груп","Klik Logistik DOOEL Skopje"]`, `url`, `logo`, `email`, `telephone`, `sameAs: []`. Teaches Google brand spellings in both scripts → serves primary goal.
- **LocalBusiness** (home): full NAP with `address` (PostalAddress: street `1 бр.38`, locality Кучевиште / Чучер-Сандево, region Скопје, country MK), `areaServed: "Северна Македонија"`, `geo`, `telephone`, `email`, `openingHours` (placeholder if unknown).
- **BreadcrumbList** on subpages.
- **Service** schema on `/klik-trejd` (откуп/продажба на палети) → paleti transport / transport na paleti.

### 4. OpenGraph / Twitter (invisible)
Sitewide OG + `summary_large_image` Twitter card. OG image = existing `/images/hero-cover.webp` (per client, "for now"). `og:locale = mk_MK`, type website, site_name "Клик Логистик".

### 5. Favicon
Copy `minimalistic_Klik_Logisitka_result_3-removebg-preview.png` (from Downloads) into `public/` (e.g. `public/favicon.png`); wire `icons` in layout metadata (replace current `/logo.png`). Keep apple-icon.

### 6. Email fix (authorized visible change)
`lib/constants/brand.ts`: `info@kliklogistik.mk` → `info@klikgroup.mk`. Propagates to footer, contact, schema.

### 7. Alt-text pass (invisible)
Audit image `alt`s to be descriptive and honestly keyword-relevant (e.g. "Камион Клик Логистик на автопат" where accurate). No stuffing.

### 8. Visible copy proposals (SECONDARY — separate approval gate)
After foundation lands: read current hero + section headings, draft a short diff list weaving in secondary keywords (e.g. транспорт Скопје, фирма за транспорт). **Nothing edited until client approves each item.** Brand terms stay priority #1.

## Out of scope
Blog, new pages, redesign, Google Business Profile, hreflang (single-language site). No visible text changed except the email until copy proposals approved.

## Data flow
Static metadata exports + server `<JsonLd>` components render at build/request into `<head>`/`<body>`. No client JS, no runtime data fetching. `robots.ts`/`sitemap.ts` are Next.js file conventions emitting `/robots.txt` and `/sitemap.xml`.

## Testing / verification
- `next build` passes.
- Validate each JSON-LD block in Google Rich Results Test (manual).
- Confirm `/robots.txt` and `/sitemap.xml` render correctly.
- Client submits sitemap in Search Console (already set up).

## Risks
- OG webp: most scrapers support it; acceptable "for now". Swap to a 1200×630 PNG/JPG later for max compatibility.
- LocalBusiness without GBP earns less local-pack presence; schema still helps organic + AI search.
- Secondary latin keywords (firma za transport) won't appear in cyrillic body; partly covered by schema `alternateName` + approved copy.
