"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BRAND } from "@/lib/constants/brand"

const navLinks = [
  { href: "#uslugi", label: "Услуги" },
  { href: "#vozila", label: "Возила" },
  { href: "#kalkulator", label: "Калкулатор" },
  { href: "/uvoz-izvoz", label: "Увоз-Извоз" },
  { href: "#kontakt", label: "Контакт" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-16 bg-kl-ink text-white">
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6 md:px-8">
        <nav className="hidden items-center gap-8 md:flex flex-1 justify-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-normal text-white hover:underline underline-offset-[6px] decoration-1 hover:decoration-kl-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={BRAND.phoneHref}
          className="hidden text-[15px] font-medium text-white transition-colors hover:text-kl-accent md:block"
        >
          {BRAND.phone}
        </a>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={BRAND.phoneHref}
            className="px-2 text-[14px] font-medium text-white"
            aria-label="Повикај"
          >
            {BRAND.phone}
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Отвори мени" className="p-2 text-white">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white p-0 sm:max-w-md">
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between border-b border-kl-border px-6">
                <span className="flex items-center gap-2 text-[18px] font-medium text-kl-ink">
                  <Image src="/brand-logo.png" alt="Klik Logistik" width={28} height={28} className="h-7 w-7 object-contain" />
                  Klik Logistik
                </span>
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
