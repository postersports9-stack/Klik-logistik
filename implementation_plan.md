# Implementation Plan - Hero Slider Fixes & Image Compression

This document outlines the proposed changes to address the hero slider reliability issues and significantly reduce image file sizes.

## 1. Hero Slider Enhancements
The current slider implementation in `components/sections/hero.tsx` has some common issues with auto-sliding and state management during manual interactions.

### Proposed Changes:
- **Reset Auto-slide Timer:** Ensure that manual clicks (Next/Prev/Indicator) reset the 6-second interval to prevent the slider from "skipping" slides immediately after a manual interaction.
- **Pause on Interaction:** Implement a pause mechanism when the user is hovering over the slider (standard UX).
- **Smooth Transition Handling:** Optimize the `AnimatePresence` and `motion.div` settings to ensure that rapid clicks don't cause flicker or broken transitions.
- **Debouncing:** Add a small delay (cooldown) to manual clicks to prevent rapid-fire state updates that can cause visual bugs.

## 2. Image Compression Strategy
The images in `public/images/` are currently set to `unoptimized: true` in `next.config.mjs`. This means they are served as-is, often being 200KB-300KB each, which is too large for a modern landing page.

### Proposed Changes:
- **Convert to WebP:** Convert all `.jpg` and `.png` assets in `public/images/` to `.webp`.
- **Resize and Compress:** Limit image dimensions (e.g., max-width 1920px for hero images) and set quality to 75-80%.
- **Reinstate Next.js Image Optimization:** If the project is not a static export for a platform that doesn't support it (like GitHub Pages), we should remove `unoptimized: true` from `next.config.mjs`.
- **Automated Compression Script:** If local static compression is needed, I can provide a `scripts/compress-images.mjs` script using `sharp` to batch-process all assets.

## Timeline
1.  **Phase 1:** Update `hero.tsx` logic to fix the behavior issues.
2.  **Phase 2:** Analyze image sizes and run a compression/conversion pass.
3.  **Phase 3:** Update `next.config.mjs` and verify performance.

---
Would you like me to start with the Hero Slider fixes or the Image compression first?
