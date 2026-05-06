"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function HashScroll() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there is a hash in the URL on mount or route change
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        // Delay a bit to ensure hydration is complete and layout is stable
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
        return () => clearTimeout(timer)
      }
    }
  }, [pathname, searchParams])

  return null
}
