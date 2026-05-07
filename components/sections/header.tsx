"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BRAND } from "@/lib/constants/brand"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#uslugi", label: "Услуги" },
  { href: "#vozila", label: "Возила" },
  { href: "#kalkulator", label: "Калкулатор" },
  { href: "#kontakt", label: "Контакт" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 bg-white",
        scrolled ? "border-b border-kl-border" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-[18px] font-medium tracking-tight text-kl-ink">
          Klik Logistik
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-normal text-kl-ink hover:underline underline-offset-[6px] decoration-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BRAND.phoneHref}
            className="text-[14px] font-medium text-kl-ink transition-colors hover:text-kl-accent"
          >
            {BRAND.phone}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={BRAND.phoneHref}
            className="px-2 text-[14px] font-medium text-kl-ink"
            aria-label="Повикај"
          >
            {BRAND.phone}
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Отвори мени" className="p-2 text-kl-ink">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white p-0 sm:max-w-md">
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between border-b border-kl-border px-6">
                <span className="text-[18px] font-medium text-kl-ink">Klik Logistik</span>
                <button onClick={() => setOpen(false)} aria-label="Затвори мени" className="p-2 text-kl-ink">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 px-6 py-8">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-[24px] font-normal text-kl-ink"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto border-t border-kl-border px-6 py-6">
                <a href={BRAND.phoneHref} className="text-[18px] font-medium text-kl-ink">
                  {BRAND.phone}
                </a>
              </div>
            </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
