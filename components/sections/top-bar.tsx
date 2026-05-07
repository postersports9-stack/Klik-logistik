import Image from "next/image"
import { MapPin } from "lucide-react"

export function TopBar() {
  return (
    <div className="relative border-b border-kl-border bg-white">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 md:px-8">
        <div className="hidden sm:absolute sm:left-1/2 sm:block sm:-translate-x-1/2">
          <a
            href="/uvoz-izvoz"
            className="inline-block bg-kl-ink px-5 py-2 text-[14px] font-medium text-white transition-colors duration-100 hover:bg-kl-ink-strong"
          >
            Увоз-Извоз
          </a>
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
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
        </div>

        <a
          href="/uvoz-izvoz"
          className="shrink-0 bg-kl-ink px-3 py-1.5 text-[12px] font-medium text-white transition-colors duration-100 hover:bg-kl-ink-strong sm:hidden"
        >
          Увоз-Извоз
        </a>

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
