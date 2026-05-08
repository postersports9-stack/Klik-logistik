import Image from "next/image"
import { SectionHeading } from "@/components/sections/section-heading"
import { CalculatorCard } from "@/components/ui/calculator-card"
import { SITE_IMAGES } from "@/lib/constants/images"

export function CostEstimator() {
  return (
    <section id="kalkulator" className="relative overflow-x-hidden">
      <Image
        src={SITE_IMAGES.capabilities[1]}
        alt=""
        fill
        sizes="100vw"
        quality={80}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/92" />
      <div className="relative z-10 mx-auto max-w-[1120px] px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionHeading
          number="03"
          eyebrow="Израчунај цена"
          title="Брза проценка."
          lead="Внеси релација и тонажа. Точна цена со повратен повик во 30 минути."
        />
        <div className="mt-8">
          <CalculatorCard variant="section" />
        </div>
      </div>
    </section>
  )
}
