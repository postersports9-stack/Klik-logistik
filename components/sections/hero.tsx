import Image from "next/image"
import { CalculatorCard } from "@/components/ui/calculator-card"
import { SITE_IMAGES } from "@/lib/constants/images"

export function Hero() {
  const bg = SITE_IMAGES.hero[0].src

  return (
    <section className="relative isolate min-h-[640px] w-full overflow-hidden bg-kl-ink">
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
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-[1120px] items-center px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="grid w-full grid-cols-12 gap-8 md:gap-10">
          <div className="col-span-12 md:col-span-7 lg:col-span-7 self-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/80 sm:text-[12px] sm:tracking-[0.18em]">
              Транспорт и логистика · Скопје
            </p>
            <h1 className="mt-4 text-[32px] leading-[40px] font-medium tracking-[-0.02em] text-white md:text-[56px] md:leading-[64px] lg:text-[64px] lg:leading-[72px]">
              Робата ваша.
              <br />
              Времето наше.
            </h1>
            <p className="mt-4 max-w-[480px] text-[16px] leading-[26px] text-white/80 md:text-[20px] md:leading-[30px]">
              Сигурен превоз на палетизирана и непалетизирана стока низ Македонија и Европа.
            </p>
            <p className="mt-6 text-[13px] text-white/70">
              Одговараме во рок од 30 минути · Пон–Саб 08:00–20:00
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-5 self-center">
            <CalculatorCard variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
