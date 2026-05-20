import Link from "next/link"
import { SectionWatermark } from "@/components/ui/section-watermark"
import { GrainOverlay } from "@/components/ui/grain-overlay"

export function About() {
  return (
    <section id="za-nas" data-theme="dark" className="relative overflow-hidden bg-kl-ink text-white">
      <GrainOverlay />
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="За нас" position="bl" tone="dark" />
        <div className="border-t border-white/15 pt-6">
          <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/60 sm:text-[12px] sm:tracking-[0.18em]">
            <span className="border-b border-kl-cta pb-0.5 text-kl-cta">04</span> — За нас
          </div>
          <h2 
            className="mt-6 text-[32px] leading-[40px] font-medium tracking-[-0.015em] text-white md:text-[40px] md:leading-[48px]"
          >
            За нас
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-6 items-center md:gap-10">
          <div className="col-span-12 md:col-span-8">
            <p 
              className="max-w-[680px] text-[16px] leading-[26px] text-white md:text-[17px] md:leading-[28px]"
              style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.8)' }}
            >
              Klik Logistik е логистичка компанија специјализирана за сигурен, навремен и ефикасен транспорт во Македонија. Градиме раст преку стабилна услуга и долгорочна соработка со клиенти од различни индустрии.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <Link
              href="/za-nas"
              className="inline-flex h-12 items-center justify-center rounded-[8px] bg-kl-cta px-6 text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-all duration-100 hover:bg-kl-cta-strong"
            >
              Прочитај повеќе
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
