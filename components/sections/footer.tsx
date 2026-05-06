import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
  { href: "/", label: "Дома" },
  { href: "#za-nas", label: "За Нас" },
  { href: "#uslugi", label: "Услуги" },
  { href: "#iskustva", label: "Искуства" },
  { href: "#kontakt", label: "Контакт" },
]

const services = [
  "Груба градба и конструкција",
  "Покривни работи и лимарија",
  "Реновирање и внатрешно уредување",
  "Водовод и машински инсталации",
  "Енергетска ефикасност и климатизација",
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
              <div className="relative flex items-center justify-center h-10 w-10">
                <span className="text-red-600 font-black text-2xl tracking-tighter">LT</span>
              </div>
              <span className="font-sans text-xl font-bold tracking-wider text-white">
                ЛАМБЕЛ ТЕРМ
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
              Вашиот доверлив партнер за градежни услуги, реновирање и машински инсталации низ цела Македонија.
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
              <li className="font-sans text-sm font-normal text-white/60">Груба градба</li>
              <li className="font-sans text-sm font-normal text-white/60">Покривни работи</li>
              <li className="font-sans text-sm font-normal text-white/60">Реновирање</li>
              <li className="font-sans text-sm font-normal text-white/60">Водовод и Греење</li>
              <li className="font-sans text-sm font-normal text-white/60">Климатизација</li>
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
                  href="tel:075211440" 
                  className="text-sm font-extralight text-white/60 transition-colors hover:text-primary"
                >
                  075 211 440
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
            © 2026 ЛАМБЕЛ ТЕРМ. Сите права задржани.
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
