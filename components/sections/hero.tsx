import Image from "next/image"
import { QuoteForm } from "@/components/ui/quote-form"
import { SITE_IMAGES } from "@/lib/constants/images"

export function Hero() {
  const bg = SITE_IMAGES.hero[0].src

  return (
    <section className="relative isolate min-h-[640px] max-h-[820px] h-[calc(100vh-64px)] w-full overflow-hidden bg-black pt-16">
      <Image
        src={bg}
        alt="Klik Logistik фрахт"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 from-0% to-transparent to-[60%]" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1120px] items-center px-6 md:px-8">
        <div className="grid w-full grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/80">
              Транспорт и логистика · Скопје
            </p>
            <h1 className="mt-4 text-[32px] leading-[40px] font-medium tracking-[-0.02em] text-white md:text-[64px] md:leading-[72px]">
              Робата ваша.
              <br />
              Времето наше.
            </h1>
            <p className="mt-4 max-w-[480px] text-[16px] leading-[26px] text-white/80 md:text-[20px] md:leading-[30px]">
              Сигурен превоз на палетизирана и непалетизирана стока низ Македонија и Европа.
            </p>
            <div className="mt-8 max-w-[440px]">
              <QuoteForm variant="hero" />
            </div>
            <p className="mt-3 text-[13px] text-white/70">
              Одговараме во рок од 30 минути · Пон–Саб 08:00–20:00
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
