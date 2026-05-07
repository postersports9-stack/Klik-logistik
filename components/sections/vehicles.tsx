import Image from "next/image"
import { SectionHeading } from "@/components/sections/section-heading"
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
    name: "Combi 3.5t",
    payload: "1 200 kg",
    dims: "4.2 × 2.0 × 2.1 m",
    pallets: "5 EU",
    trailer: "Затворен",
    src: SITE_IMAGES.capabilities[0],
  },
  {
    name: "Camion 7.5t",
    payload: "3 500 kg",
    dims: "6.0 × 2.4 × 2.4 m",
    pallets: "16 EU",
    trailer: "Тенда",
    src: SITE_IMAGES.capabilities[1],
  },
  {
    name: "Camion 12t",
    payload: "7 000 kg",
    dims: "7.2 × 2.45 × 2.6 m",
    pallets: "18 EU",
    trailer: "Тенда / Фриго",
    src: SITE_IMAGES.capabilities[2],
  },
  {
    name: "Tegnach 24t",
    payload: "24 000 kg",
    dims: "13.6 × 2.48 × 2.7 m",
    pallets: "33 EU",
    trailer: "Цералин / Фриго",
    src: SITE_IMAGES.capabilities[3],
  },
  {
    name: "Hladnjača",
    payload: "6 000 kg",
    dims: "7.0 × 2.4 × 2.5 m",
    pallets: "16 EU",
    trailer: "Фриго −25 °C",
    src: SITE_IMAGES.capabilities[4],
  },
]

export function Vehicles() {
  return (
    <section id="vozila" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-10 md:px-8 md:py-16">
        <SectionHeading
          number="02"
          eyebrow="Возила"
          title="Возен парк."
          lead="6 возила во редовен сообраќај, 2.5 t до 24 t. Сертифицирани возачи, GPS следење."
        />

        <ul className="mt-8">
          {vehicles.map((v, i) => (
            <li
              key={v.name}
              className="grid grid-cols-12 gap-6 border-b border-kl-border py-6 md:gap-10"
            >
              <div className="col-span-12 md:col-span-4">
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
              <div className="col-span-12 md:col-span-8">
                <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-kl-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-[24px] font-medium leading-[32px] text-kl-ink">{v.name}</h3>
                <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 text-[14px] sm:grid-cols-2">
                  <div className="flex justify-between border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Носивост</dt>
                    <dd className="text-kl-ink">{v.payload}</dd>
                  </div>
                  <div className="flex justify-between border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Димензии</dt>
                    <dd className="text-kl-ink">{v.dims}</dd>
                  </div>
                  <div className="flex justify-between border-b border-kl-border pb-2">
                    <dt className="text-kl-muted">Палети</dt>
                    <dd className="text-kl-ink">{v.pallets}</dd>
                  </div>
                  <div className="flex justify-between border-b border-kl-border pb-2">
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
