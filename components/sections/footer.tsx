import { BRAND } from "@/lib/constants/brand"

export function Footer() {
  return (
    <footer className="bg-kl-ink text-white">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-4 px-6 py-8 text-[13px] text-white/70 md:flex-row md:items-center md:px-8">
        <div>© Klik Logistik {new Date().getFullYear()} · Скопје, СМ</div>
        <nav className="flex flex-wrap gap-6">
          <a href="#uslugi" className="transition-colors hover:text-white">Услуги</a>
          <a href="#vozila" className="transition-colors hover:text-white">Возила</a>
          <a href="/klik-trejd" className="transition-colors hover:text-white">Клик Трејд</a>
          <a href="#kontakt" className="transition-colors hover:text-white">Политика на приватност</a>
        </nav>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <a href={BRAND.phoneHref} className="transition-colors hover:text-white">{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-white">{BRAND.email}</a>
        </div>
      </div>
    </footer>
  )
}
