"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BRAND } from "@/lib/constants/brand"

const navLinks = [
  { href: "/", label: "Дома" },
  { href: "/#za-nas", label: "За нас" },
  { href: "/#uslugi", label: "Услуги" },
  { href: "/#vozila", label: "Возила" },
  { href: "/#cenovnik", label: "Ценовник" },
  { href: "/#iskustva", label: "Искуства" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? "h-16" : "h-20"
      }`}>
      <div
        className={`mx-auto flex h-full w-full items-center justify-between px-6 lg:px-10 transition-all duration-500 ease-in-out ${isScrolled || !isHomePage
            ? "bg-[#0a0a0b]/95 backdrop-blur-md border-b border-white/5 shadow-xl"
            : "max-md:bg-white bg-transparent border-b border-transparent max-md:border-b-slate-100"
          }`}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-105">
            <Image src="/logo.png" alt={BRAND.name} fill className="object-contain" sizes="48px" priority />
          </div>
          <span className={`text-xl font-bold tracking-wider transition-colors duration-500 ${isScrolled || !isHomePage ? "text-white" : "text-black"}`}>
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-bold tracking-[0.1em] transition-all duration-300 ${isScrolled || !isHomePage ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className={`hidden text-[12px] font-bold tracking-widest xl:block transition-colors duration-500 ${isScrolled || !isHomePage ? "text-white/80" : "text-black/80"}`}>
            {BRAND.phone}
          </span>
          <Button asChild className="relative hidden font-sans overflow-hidden bg-primary text-white hover:bg-primary/90 sm:inline-flex group/btn h-9 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
            <a href="#kontakt">
              <span className="relative z-10 text-[10px] font-light tracking-widest">Контакт</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
            </a>
          </Button>

          {/* Mobile Phone Icon */}
          <a href={BRAND.phoneHref} className={`lg:hidden p-2 transition-colors duration-500 ${isScrolled || !isHomePage ? "text-white" : "text-black"}`}>
            <Phone className="h-6 w-6" />
          </a>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className={`p-2 transition-colors duration-500 ${isScrolled || !isHomePage ? "text-white" : "text-black"}`}>
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-[#0a0a0b] border-white/10 p-0 sm:max-w-md">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/10 p-6">
                  <Link 
                    href="/" 
                    onClick={(e) => {
                      setIsOpen(false);
                      if (isHomePage) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="font-sans text-xl font-bold text-white"
                  >
                    {BRAND.name}
                  </Link>
                  <button onClick={() => setIsOpen(false)} className="text-white">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1 p-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-sans py-4 text-lg font-medium tracking-wide text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t border-white/10 p-6">
                  <p className="mb-4 text-sm text-white/60">{BRAND.phone}</p>
                  <Button asChild className="w-full font-sans bg-primary text-white hover:bg-primary/90">
                    <a href="#kontakt" className="w-full">
                      Контакт
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
