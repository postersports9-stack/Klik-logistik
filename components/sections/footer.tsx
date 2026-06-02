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
        </div>
      </div>
    </footer>
  )
}
