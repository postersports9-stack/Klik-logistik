# SEO & AEO Implementation Plan — Klik Logistik

**Primary keyword:** `Klik Logistik` (also: `Клик Логистик`, `Klik Group`, `транспорт Скопје`, `превоз на роба Македонија`)
**Domain:** https://klikgroup.mk
**Date:** 2026-06-19

---

## Why the previous SEO "doesn't work"

The on-page SEO (title, description, OpenGraph, sitemap, robots, JSON-LD) is actually present and reasonable. The problem is **not on-page tags** — it's **entity authority and corroboration**. Specifically:

1. **Brand ≠ domain mismatch.** Brand is "Klik **Logistik**", domain is "klik**group**.mk". Search engines and LLMs have no exact-match domain signal, and nothing else on the web tells them `klikgroup.mk` = "Klik Logistik".
2. **No external corroboration.** `organizationSchema.sameAs` is empty. There is no Google Business Profile, no Facebook/Instagram, no business-directory listing, no Wikidata entry. Google and ChatGPT confirm "official website" claims by cross-referencing **multiple independent sources** that all point at the same domain. Right now there are zero. So ChatGPT can't connect the name to the site unless you hand it the URL.
3. **Likely weak/no indexing.** No evidence of Google Search Console or Bing Webmaster verification. If the site isn't submitted and indexed, it won't rank for anything, including its own brand name.
4. **Thin, single-language content.** Site is Macedonian-only. The Latin string "Klik Logistik" (how people and ChatGPT actually type it) barely appears in visible body copy.
5. **No answer-engine surface.** No FAQ content, no `llms.txt`, no plainly-stated "Klik Logistik is the official site of… at klikgroup.mk" sentence that an LLM can quote.

**Bottom line:** on-page is ~done. The wins are **off-page entity building + indexing + a few content/markup additions**. Code alone will not fix this.

---

## Phase 0 — Already fixed in this change (code)

- Removed `generator: 'v0.app'` meta tag.
- Replaced transparent `apple-icon.png` with opaque 180×180 (iOS was filling transparency with black).
- Moved icons to Next App-Router file convention (`app/icon.png`, `app/apple-icon.png`) → hashed URLs force iPhone/Safari/CDN to drop the old v0-cached icon.
- Added `app/manifest.ts` (Android / "add to home screen").
- Fixed broken OG/Twitter/JSON-LD image path (`hero-cover.webp` → `hero-cover-updated.webp`) — link previews were 404.

---

## Phase 1 — Indexing foundation (do FIRST, week 1)

Nothing below ranks until the site is indexed.

1. **Google Search Console** — add `klikgroup.mk`, verify (DNS TXT record), submit `https://klikgroup.mk/sitemap.xml`. Use "URL Inspection → Request indexing" for the homepage.
2. **Bing Webmaster Tools** — same. Bing powers ChatGPT search; this matters a lot for AEO.
3. **Confirm crawlability** — `robots.ts` currently allows all (good). After deploy, fetch `https://klikgroup.mk/robots.txt` and `/sitemap.xml` and confirm 200.
4. **Canonical consistency** — pick one host (with or without `www`) and 301 the other. `metadataBase` is `https://klikgroup.mk` (no www) — make sure the deployment redirects `www.klikgroup.mk` → `klikgroup.mk`.

## Phase 2 — Entity & off-page (the real fix for ChatGPT, weeks 1–3)

This is what makes ChatGPT say "klikgroup.mk is the official site of Klik Logistik."

1. **Google Business Profile** (highest priority). Create/claim "Klik Logistik". Set **website = klikgroup.mk**, exact NAP (name/address/phone) matching the site, category "Logistics service / Trucking company", service area = Skopje + North Macedonia. Add photos. This single step is the strongest "official website" signal for the brand.
2. **Social/business profiles**, each with website field = klikgroup.mk:
   - Facebook Page, Instagram business
   - LinkedIn company page
   - Local MK directories: zk.mk / bizmreza / golden pages MK / Yellow Pages MK equivalents
3. **Fill `organizationSchema.sameAs`** with every profile URL from above (see Phase 3). This is the machine-readable version of "these all belong to the same entity."
4. **Wikidata item** (optional but powerful for LLMs): create an item "Klik Logistik", property `official website (P856) = https://klikgroup.mk`. LLMs ingest Wikidata heavily.
5. **A few real backlinks** with anchor text "Klik Logistik": partner sites, supplier sites, local business listings, any press.

## Phase 3 — On-page / markup additions (code, week 2)

1. **Strengthen `sameAs`** once profiles exist — edit `components/seo/json-ld.tsx`:
   ```ts
   sameAs: [
     "https://www.facebook.com/<klik-logistik>",
     "https://www.instagram.com/<klik-logistik>",
     "https://www.linkedin.com/company/<klik-logistik>",
     // + Google Business Profile / directory URLs
   ]
   ```
2. **Consolidate Organization vs LocalBusiness schema.** Currently `Organization`, `LocalBusiness`, and `Service` are three separate nodes with slightly different data. Give them a shared `@id` (e.g. `https://klikgroup.mk/#org`) and reference it, so engines treat them as one entity, not three.
   - Add `"@id": "https://klikgroup.mk/#org"` to the org/localbusiness node.
   - In `serviceSchema.provider`, use `{ "@id": "https://klikgroup.mk/#org" }`.
   - Make `logo` a real logo (use `/icon-512.png`, not the tiny favicon).
3. **Put the Latin brand name in visible copy.** Add one plain sentence in the hero or footer, e.g. *"Klik Logistik (Клик Логистик) — официјален сајт. Транспорт и логистика, Скопје."* LLMs quote visible text, and this ties the Latin name to the domain.
4. **Add a FAQ section + `FAQPage` JSON-LD** (drives AEO answers + rich results). Real questions:
   - "Што е Klik Logistik?" → one-sentence answer naming the company, service, city, and `klikgroup.mk`.
   - "Каде работи Klik Logistik?" → Скопје и цела Македонија.
   - "Како да контактирам Klik Logistik?" → phone/email.
5. **Per-page metadata.** `klik-trejd`, `za-nas`, `nasata-rabota`, `cenovnik` should each export their own `title`/`description` and a `BreadcrumbList` JSON-LD. Currently they likely inherit the default.
6. **Image alt text** — every `<Image>` should have descriptive Macedonian alt containing service + location keywords (helps image search + relevance).

## Phase 4 — AEO (answer engines: ChatGPT, Perplexity, Google AI, weeks 2–4)

1. **`/llms.txt`** — add `app/llms.txt/route.ts` (or `public/llms.txt`) summarizing the company in plain text: who, what, where, official URL, contact. Answer engines increasingly read this.
2. **Quotable, factual copy.** AEO favors clear declarative sentences ("Klik Logistik is a transport and logistics company based in Skopje, North Macedonia, operating since <year>."). Add a short English paragraph too — many LLM queries are in English/Latin.
3. **Consistent NAP everywhere** — the address/phone in `localBusinessSchema`, the footer, Google Business Profile, and directories must match **character-for-character**. Inconsistency kills entity confidence.
4. **After indexing**, test with: `site:klikgroup.mk` in Google, then ask ChatGPT/Perplexity "What is the official website of Klik Logistik?" and track when it answers without being told.

## Phase 5 — Measure (ongoing)

- Search Console: impressions/clicks for `klik logistik`, `клик логистик`, `транспорт скопје`.
- Track brand query in ChatGPT/Perplexity monthly.
- Re-validate JSON-LD at search.google.com/test/rich-results and validator.schema.org.
- Re-check OG preview at opengraph.dev or the Facebook Sharing Debugger.

---

## Priority order (highest ROI first)

| # | Action | Where | Effort | Impact |
|---|--------|-------|--------|--------|
| 1 | Google Business Profile + website=klikgroup.mk | off-site | low | ★★★★★ |
| 2 | Google + Bing Search Console + submit sitemap | off-site | low | ★★★★★ |
| 3 | Fill `sameAs` + social/directory profiles | off+code | med | ★★★★☆ |
| 4 | Latin brand sentence + FAQ + FAQPage schema | code | med | ★★★★☆ |
| 5 | Consolidate schema with shared `@id`, real logo | code | low | ★★★☆☆ |
| 6 | llms.txt + English factual paragraph | code | low | ★★★☆☆ |
| 7 | Wikidata entity | off-site | low | ★★★☆☆ |
| 8 | Backlinks with "Klik Logistik" anchor | off-site | high | ★★★☆☆ |

**The reason ChatGPT can't find you is items 1–3, not the code.** Ship the code fixes, but the brand→domain association is won off-site.
