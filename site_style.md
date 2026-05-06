# GRADBA MK - Site Style Guide

## Typography
 
 ### Headers (Hero Image, Section Titles, Logo)
 - **Font Family:** Inter
 - **Tailwind Class:** `font-sans font-semibold`
 - **Weight:** 600
 - **Character Sets:** Latin, Cyrillic
 
 ### Navigation & Accents (Links, Small Text, Details)
 - **Font Family:** Inter
 - **Tailwind Class:** `font-sans font-extralight`
 - **Weight:** 200
 - **Character Sets:** Latin, Cyrillic
 
 ### Paragraphs & Body Text
 - **Font Family:** Inter
 - **Tailwind Class:** `font-sans font-normal`
 - **Weight:** 400
 - **Character Sets:** Latin, Cyrillic

---

## Usage Guidelines

- **Headings & Bold Elements:** Use `font-sans font-semibold` (Inter 600).
- **Navigation & Details:** Use `font-sans font-extralight` (Inter 200).
- **Body & General Content:** Use `font-sans font-normal` (Inter 400).

---

## Color Palette

### Primary Colors
- **Action Red (Primary):** `oklch(0.577 0.245 27.325)` - Used for CTAs, accents
- **Deep Gray (Foreground):** `oklch(0.205 0 0)` - Main text color
- **White (Background):** `oklch(1 0 0)` - Page backgrounds

### Supporting Colors
- **Muted Gray:** `oklch(0.45 0 0)` - Secondary text
- **Light Gray (Card):** `oklch(0.98 0 0)` - Card backgrounds
- **Border Gray:** `oklch(0.9 0 0)` - Borders and dividers

---

## Design Principles

1. **No Rounded Corners:** `--radius: 0rem` - Sharp, architectural aesthetic
2. **High Contrast:** Dark text on light backgrounds for readability
3. **Minimalist:** Clean layouts with generous whitespace
4. **Mobile-First:** Responsive design starting from mobile breakpoints

---

## Implementation Notes

- Fonts are loaded via `next/font/google` for optimal performance
- CSS variables are defined in `app/globals.css`
- Font variables are applied in `app/layout.tsx`
- Use Tailwind's `font-serif` for headers and `font-sans` for body text
