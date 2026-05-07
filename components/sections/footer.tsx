import { BRAND } from "@/lib/constants/brand"

export function Footer() {
  return (
    <footer className="border-t border-kl-border bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-4 px-6 py-6 text-[13px] text-kl-muted md:flex-row md:items-center md:px-8">
        <div>© Klik Logistik {new Date().getFullYear()} · Скопје, СМ</div>
        <nav className="flex flex-wrap gap-6">
          <a href="#uslugi" className="hover:text-kl-ink">Услуги</a>
          <a href="#vozila" className="hover:text-kl-ink">Возила</a>
          <a href="#kalkulator" className="hover:text-kl-ink">Калкулатор</a>
          <a href="#kontakt" className="hover:text-kl-ink">Политика на приватност</a>
        </nav>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <a href={BRAND.phoneHref} className="hover:text-kl-ink">{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`} className="hover:text-kl-ink">{BRAND.email}</a>
        </div>
      </div>
    </footer>
  )
}
