# Klik Logistik SEO — Visible Copy & Alt-Text Plan (Task 8)

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax. **APPROVAL GATE:** Every visible-copy change below is a PROPOSAL. Do NOT edit any file in Group A until the client approves that specific item. Group B (alt text) is not on-screen text and is lower risk, but still listed for approval. Verify with `npm run build`.

**Goal:** Naturally surface SECONDARY keywords (транспорт скопје, фирма за транспорт, транспорт на палети, transport mk) in visible copy + image alt text — without disrupting tone, design, or the brand-first priority.

**Principle:** No keyword stuffing (Google penalizes it). One natural mention per location. Brand terms already covered by structured data from the prior build; this plan only adds secondary-term reach.

**Spec:** `docs/superpowers/specs/2026-06-02-klik-seo-design.md` (section 7 + 8).

**Targets recap:** транспорт скопје · транспорт мк · фирма за транспорт скопје · фирма за транспорт · firma za transport · transport mk · skopje transport · paleti transport · transport na paleti.

---

## Group A — Visible copy (each needs explicit client approval)

### A1. Hero H1 + subtext — `components/sections/hero.tsx`

Strongest on-page signal. Currently no city/keyword.

**H1 current:**
```
Вашиот пријател
за транспорт
```
**H1 proposed:**
```
Вашиот пријател
за транспорт во Скопје
```
→ targets *транспорт Скопје / skopje transport*. Keeps the tagline voice.

**Subtext current:**
> Сигурен превоз на палетизирана и непалетизирана стока низ Македонија.

**Subtext proposed:**
> Klik Logistik — фирма за транспорт и сигурен превоз на палетизирана и непалетизирана стока низ цела Македонија.

→ adds *фирма за транспорт* + brand "Klik Logistik" in visible body.

- [ ] **Step A1: After approval**, in `components/sections/hero.tsx`:
  - Change `alt="Klik Logistik фрахт"` → `alt="Камион на Клик Логистик — транспорт на роба во Скопје"` (also covers B1).
  - Replace the H1 text node `за транспорт` → `за транспорт во Скопје`.
  - Replace subtext `<p>` content with the proposed sentence above.

### A2. Footer brand line — `components/sections/footer.tsx`

Low-risk slot for a keyword line.

**Current:**
```tsx
<div className="text-[18px] font-medium tracking-tight">Klik Logistik</div>
<p className="mt-2 max-w-[280px] text-[13px] text-white/70">
  Вашиот пријател за транспорт.
</p>
```
**Proposed** — change only the paragraph:
> Фирма за транспорт во Скопје и превоз на роба низ цела Македонија.

→ targets *фирма за транспорт скопје / транспорт мк*.

- [ ] **Step A2: After approval**, replace the footer `<p>` text with the proposed sentence.

### A3. Coverage-map lead — `components/sections/coverage-map.tsx`

**Current `SectionHeading` lead:**
> Изберете град на мапата и тип на камион за инстант цена.

**Proposed:**
> Изберете град на мапата и тип на камион за инстант цена за транспорт низ Македонија.

→ light *транспорт* + area reinforcement. (Optional — smallest impact.)

- [ ] **Step A3: After approval**, update the `lead=` string in the `<SectionHeading>` call.

### A4. klik-trejd visible body — `app/klik-trejd/page.tsx`

Ensure *транспорт на палети* appears in visible text (currently only in metadata).

- [ ] **Step A4: After approval**, read the page body (lines ~40-90), identify the descriptive paragraph under the heading, and add one natural sentence/clause containing "транспорт на палети низ цела Македонија". Show the exact before/after to the client before editing.

---

## Group B — Image alt text (not on-screen; lower risk)

Descriptive + honestly keyword-relevant. No stuffing. Per Google: alt should describe the image.

- [ ] **Step B1:** `components/sections/hero.tsx` — `alt="Klik Logistik фрахт"` → `alt="Камион на Клик Логистик — транспорт на роба во Скопје"`. *(folded into A1 if A1 approved)*
- [ ] **Step B2:** `components/sections/header.tsx` (2 occurrences) — `alt="Klik Logistik"` → `alt="Клик Логистик лого"` (logo images; describe as logo).
- [ ] **Step B3:** `app/klik-trejd/page.tsx` — `alt="Дрвени и индустриски палети"` → `alt="Дрвени и индустриски палети — Клик Трејд, транспорт на палети"`.
- [ ] **Step B4:** `app/nasata-rabota/page.tsx` — append brand where natural, e.g. `alt="Камион на автопат"` → `alt="Камион на Клик Логистик на автопат"`; `alt="Натовар на палети"` → `alt="Натовар на палети — транспорт Скопје"`. Keep the rest descriptive; do not stuff.
- [ ] **Leave:** `components/sections/photo-banner.tsx` `alt=""` — section is `aria-hidden`, decorative. Correct as-is.

---

## Verification

- [ ] **Build:** `npm run build` — passes, all routes compile.
- [ ] **Visual check:** run `npm run dev`, confirm hero/footer copy reads naturally and layout is unbroken (the longer hero subtext must not overflow on mobile — check 360px width).
- [ ] **Commit** approved items only:

```bash
git add <approved files>
git commit -m "feat(seo): weave secondary keywords into visible copy and alt text"
```

---

## Notes / risks

- Hero subtext gets longer (A1) — verify no awkward wrap on small screens before committing.
- If the client rejects any Group A item, skip it; the structured data from the prior build still carries the brand-first goal.
- Latin secondary terms (firma za transport, transport mk) won't appear in cyrillic copy; partly covered by Organization `alternateName`. Adding latin to visible cyrillic copy would look wrong — not proposed.
