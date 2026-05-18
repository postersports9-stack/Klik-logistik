"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { Truck } from "lucide-react"

export function ScrollHighway() {
  const { scrollYProgress } = useScroll()
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-3 top-24 bottom-10 z-40 hidden w-8 xl:block"
    >
      <div className="relative h-full w-full">
        <div
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
          style={{
            width: 2,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(17,17,17,0.35) 0 6px, transparent 6px 14px)",
          }}
        />
        <motion.div
          className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-kl-cta text-kl-ink shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
          style={{ top, translateY: "-50%" }}
        >
          <Truck className="h-4 w-4" strokeWidth={2.2} />
        </motion.div>
      </div>
    </div>
  )
}
