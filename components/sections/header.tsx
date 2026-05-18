"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/#pokritie", label: "Покритие" },
  { href: "/#za-nas", label: "За нас" },
  { href: "/#vozila", label: "Возила" },
  { href: "/#zoshto-nas", label: "Зошто нас" },
  { href: "/#brojki", label: "Бројки" },
  { href: "/#klienti", label: "Клиенти" },
  { href: "/cenovnik", label: "Ценовник" },
  { href: "/#kontakt", label: "Контакт" },
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
      className={[
        "sticky top-0 z-50 h-16 sm:h-20 border-b text-kl-ink transition-shadow duration-200 ease-out",
        "bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55",
        scrolled
          ? "border-kl-border/70 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.18)]"
          : "border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6 md:px-8">
        <a href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/brand-logo.png"
            alt="Klik Logistik"
            width={48}
            height={48}
            priority
            className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[15px] font-medium tracking-tight text-kl-ink sm:text-[18px] md:text-[22px]">
              Klik Logistik
            </span>
            <span className="truncate text-[10px] uppercase tracking-[0.1em] text-kl-muted sm:text-[11px] sm:tracking-[0.18em] md:text-[12px]">
              Транспорт · Логистика
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-4 lg:flex lg:gap-6 xl:gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-normal text-kl-ink hover:underline underline-offset-[6px] decoration-1 hover:decoration-kl-ink lg:text-[14px]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Отвори мени" className="p-2 text-kl-ink">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
