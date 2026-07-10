import Link from "next/link"
import { BRAND } from "@/lib/constants/brand"
import { AAPlusBadge } from "@/components/ui/aa-plus-badge"

export function Footer() {
  return (
    <footer className="bg-kl-ink text-white">
      <div className="mx-auto max-w-[1120px] px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[18px] font-medium tracking-tight">Klik Logistik</div>
            <p className="mt-2 max-w-[280px] text-[13px] text-white/70">
              Вашиот пријател за транспорт.
            </p>
            <div className="mt-5">
              <AAPlusBadge variant="dark" />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              Навигација
            </div>
            <nav className="mt-4 flex flex-col gap-2 text-[14px]">
              <a href="/#pokritie" className="text-white/80 hover:text-white">Брза проценка</a>
              <a href="/#zoshto" className="text-white/80 hover:text-white">Зошто</a>
              <a href="/#vozila" className="text-white/80 hover:text-white">Возила</a>
              <Link href="/za-nas" className="text-white/80 hover:text-white">За нас</Link>
            </nav>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              Контакт
            </div>
            <div className="mt-4 flex flex-col gap-2 text-[14px]">
              <a href={BRAND.phoneHref} className="text-white/80 hover:text-white">{BRAND.phone}</a>
              <a href={`mailto:${BRAND.email}`} className="text-white/80 hover:text-white">{BRAND.email}</a>
              <span className="text-white/60">{BRAND.address}</span>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Klik Logistik на LinkedIn"
                className="mt-2 inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              Дополнителни услуги
            </div>
            <Link
              href="/klik-trejd"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-[8px] border border-white bg-black px-5 text-[13px] font-medium tracking-wide text-white transition-colors duration-100 hover:bg-white hover:text-black"
            >
              Клик Трејд
            </Link>
            <p className="mt-3 text-[12px] text-white/60">
              Експорт-импорт во рамките на групацијата.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-[12px] text-white/60 md:flex-row md:items-center">
          <div>© Klik Logistik {new Date().getFullYear()} · Сите права задржани</div>
          <p className="max-w-[520px] md:text-right">
            Klik Logistik (Клик Логистик) — официјален сајт{" "}
            <a href="https://klikgroup.mk" className="text-white/80 hover:text-white">klikgroup.mk</a>.
            Транспорт и логистика, Скопје и низ цела Македонија.
          </p>
        </div>
      </div>
    </footer>
  )
}
