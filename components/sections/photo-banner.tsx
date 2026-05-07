import Image from "next/image"
import { SITE_IMAGES } from "@/lib/constants/images"

export function PhotoBanner() {
  return (
    <section aria-hidden="true" className="relative h-[240px] w-full overflow-hidden bg-kl-ink md:h-[360px]">
      <Image
        src={SITE_IMAGES.capabilities[1]}
        alt=""
        fill
        sizes="100vw"
        quality={85}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-kl-ink/40 to-transparent" />
    </section>
  )
}
