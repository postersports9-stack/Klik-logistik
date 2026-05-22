import Image from "next/image"
import { SectionHeading } from "@/components/sections/section-heading"
import { SectionWatermark } from "@/components/ui/section-watermark"
import { SITE_IMAGES } from "@/lib/constants/images"

type Vehicle = {
  name: string
  payload: string
  dims: string
  pallets: string
  trailer: string
  src: string
}

const vehicles: Vehicle[] = [
  {
    name: "Камион",
    payload: "3800 кг",
    dims: "5м × 220см × 220см",
    pallets: "10",
    trailer: "Сандак Церада",
    src: SITE_IMAGES.capabilities[0],
  },
  {
    name: "Камион",
    payload: "3600 кг",
    dims: "6м × 245см × 220см",
    pallets: "10",
    trailer: "Церада",
    src: SITE_IMAGES.capabilities[1],
  },
  {
    name: "Камион",
    payload: "9500 кг",
    dims: "7.40м × 240см × 265см",
    pallets: "18",
    trailer: "Фургон",
    src: SITE_IMAGES.capabilities[2],
  },
  {
    name: "Камион",
    payload: "10000 кг",
    dims: "7.60м × 245см × 235см",
    pallets: "18",
    trailer: "Церада ролетна",
    src: SITE_IMAGES.capabilities[3],
  },
]

export function Vehicles() {
  return (
    <section id="vozila" data-theme="light" className="relative bg-white">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <SectionWatermark text="Возила" position="tr" />
        <SectionHeading
          number="03"
          eyebrow="Возила"
          title="Возен парк."
          lead="Сите возила се опремени со натоварна рампа и електрични палетари со можност за подигање на роба до 1.500 кг."
        />

        <ul className="mt-8">
          {vehicles.map((v, i) => (
            <li
              key={`${v.name}-${i}`}
              className="grid grid-cols-1 gap-8 items-center border-b border-kl-border py-6 md:grid-cols-12 lg:gap-16"
            >
              <div className="md:col-span-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-kl-subtle">
                  <Image
                    src={v.src}
                    alt={v.name}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-[24px] font-medium leading-[32px] text-kl-ink">{v.name}</h3>
                <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 text-[14px] sm:grid-cols-2">
                  <div className="flex flex-wrap justify-between gap-x-3 border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Носивост</dt>
                    <dd className="text-kl-ink">{v.payload}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-x-3 border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Димензии</dt>
                    <dd className="text-kl-ink">{v.dims}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-x-3 border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Палети</dt>
                    <dd className="text-kl-ink">{v.pallets}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-x-3 border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Приколка</dt>
                    <dd className="text-kl-ink">{v.trailer}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
