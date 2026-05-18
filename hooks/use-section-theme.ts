"use client"

import { useEffect, useState } from "react"

export type SectionTheme = "light" | "dark"

const HEADER_OFFSET = 88

export function useSectionTheme(defaultTheme: SectionTheme = "light"): SectionTheme {
  const [theme, setTheme] = useState<SectionTheme>(defaultTheme)

  useEffect(() => {
    let raf = 0

    const compute = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-theme]")
      )
      if (sections.length === 0) return

      const probe = HEADER_OFFSET + 1
      let active: SectionTheme | null = null

      for (const el of sections) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= probe && rect.bottom > probe) {
          const t = el.dataset.theme
          if (t === "dark" || t === "light") {
            active = t
            break
          }
        }
      }

      setTheme(active ?? defaultTheme)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        compute()
      })
    }

    compute()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [defaultTheme])

  return theme
}
