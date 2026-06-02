# Restore: Клиенти (Testimonials) Section

The `#klienti` section was temporarily hidden. This document contains everything needed to restore it.

---

## 1. `components/sections/contact-form.tsx`

Change `number="05"` back to `number="07"`:

```tsx
<SectionHeading
  number="07"
  eyebrow="Контакт"
  title="Побарај понуда."
  lead="Одговараме во 30 минути работно време."
/>
```

---

## 2. `components/sections/testimonials.tsx`

File still exists — no changes needed.

---

## 3. `app/page.tsx`

Add the import and restore the component between `<About />` and `<ContactForm />`:

```tsx
import { Testimonials } from "@/components/sections/testimonials"
```

```tsx
      <About />
      <Testimonials />
      <ContactForm />
```

---

## 4. `components/sections/header.tsx`

Add the nav link back before `{ href: "/#kontakt", label: "Контакт" }`:

```tsx
const navLinks = [
  { href: "/#pokritie", label: "Брза проценка" },
  { href: "/#zoshto", label: "Зошто" },
  { href: "/#vozila", label: "Возила" },
  { href: "/za-nas", label: "За нас" },
  { href: "/#klienti", label: "Клиенти" },
  { href: "/#kontakt", label: "Контакт" },
]
```

---

## 5. `components/sections/footer.tsx`

Add the link back after the За нас link in the navigation column:

```tsx
<Link href="/za-nas" className="text-white/80 hover:text-white">За нас</Link>
<a href="/#klienti" className="text-white/80 hover:text-white">Клиенти</a>
```

---

## Section numbering after restore

| # | Section |
|---|---------|
| 01 | CoverageMap |
| 02 | WhyUs |
| 03 | Vehicles |
| 04 | About |
| 06 | Testimonials (Клиенти) |
| 07 | ContactForm |

> Note: gap at 05 is pre-existing — a planned stats section that was never built.
