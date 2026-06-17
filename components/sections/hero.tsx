import Image from "next/image"
import { GrainOverlay } from "@/components/ui/grain-overlay"
import { SITE_IMAGES } from "@/lib/constants/images"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const bg = SITE_IMAGES.hero[0].src

  return (
    <section data-theme="dark" className="relative isolate min-h-[calc(100svh-64px)] sm:min-h-[calc(100svh-80px)] w-full overflow-hidden bg-kl-ink">
      <Image
        src={bg}
        alt="Klik Logistik фрахт"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 from-0% to-black/30 to-100%" />
      <GrainOverlay opacity={0.06} tone="dark" />
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-[1120px] items-center px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="max-w-[640px]">
          <h1 className="text-[32px] leading-[40px] font-medium tracking-[-0.02em] text-white md:text-[56px] md:leading-[64px] lg:text-[64px] lg:leading-[72px]">
            Вашиот пријател
            <br />
            за транспорт
          </h1>
          <p className="mt-4 max-w-[480px] text-[16px] leading-[26px] text-white/80 md:text-[20px] md:leading-[30px]">
            Сигурен превоз на палетизирана и непалетизирана стока низ Македонија.
          </p>
          <a
            href="#pokritie"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-[10px] bg-kl-cta px-8 text-[16px] font-medium tracking-wide text-kl-cta-foreground shadow-[0_4px_24px_rgba(250,204,21,0.25)] transition-all duration-150 hover:bg-kl-cta-strong hover:shadow-[0_6px_32px_rgba(250,204,21,0.35)] active:scale-[0.98]"
          >
            Види цена
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

