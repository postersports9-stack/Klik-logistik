import Image from "next/image"
import { MapPin } from "lucide-react"

export function TopBar() {
  return (
    <div className="relative border-b border-kl-border bg-white">
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6 md:px-8">
        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            href="/uvoz-izvoz"
            className="inline-block bg-kl-ink px-5 py-2 text-[14px] font-medium text-white transition-colors duration-100 hover:bg-kl-ink-strong"
          >
            Увоз-Извоз
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src="/brand-logo.png"
            alt="Klik Logistik"
            width={48}
            height={48}
            priority
            className="h-10 w-10 object-contain md:h-12 md:w-12"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[18px] font-medium tracking-tight text-kl-ink md:text-[22px]">
              Klik Logistik
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-kl-muted md:text-[12px]">
              Транспорт · Логистика
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-2 text-kl-ink sm:flex">
          <MapPin className="h-4 w-4 text-kl-muted" />
          <div className="flex flex-col leading-tight text-right">
            <span className="text-[14px] font-medium">Скопје</span>
            <span className="text-[12px] text-kl-muted">Северна Македонија</span>
          </div>
        </div>
      </div>
    </div>
  )
}
