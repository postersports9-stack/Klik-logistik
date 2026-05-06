import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { BRAND } from "@/lib/constants/brand"

const navLinks = [
  { href: "/", label: "Дома" },
  { href: "#za-nas", label: "За нас" },
  { href: "#uslugi", label: "Услуги" },
  { href: "#vozila", label: "Возила" },
  { href: "#iskustva", label: "Искуства" },
  { href: "#kontakt", label: "Контакт" },
]

const services = [
  "Превоз на роба",
  "Меѓународен транспорт",
  "Логистички решенија",
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0b]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt={BRAND.name} fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white">
                {BRAND.name}
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
              Klik Logistik DOOEL Skopje — сигурен превоз и логистички решенија низ Македонија и Европа.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-sans text-sm font-semibold tracking-wider text-white">
              Навигација
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm font-normal text-white/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 font-sans text-sm font-semibold tracking-wider text-white">
              Услуги
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm font-normal text-white/60">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-sans text-sm font-semibold tracking-wider text-white">
              Контакт
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-extralight text-white/60">
                  Скопје, Македонија
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href={BRAND.phoneHref}
                  className="text-sm font-extralight text-white/60 transition-colors hover:text-primary"
                >
                  {BRAND.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row lg:px-8">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {BRAND.legalName}. Сите права задржани.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/40 transition-colors hover:text-white/60">
              Политика на приватност
            </Link>
            <Link href="#" className="text-sm text-white/40 transition-colors hover:text-white/60">
              Услови за користење
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
