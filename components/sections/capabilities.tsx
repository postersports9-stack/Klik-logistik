"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { SITE_IMAGES } from "@/lib/constants/images"

export function Capabilities() {
  return (
    <section id="za-nas" className="relative bg-[#f9f9f9] py-20 lg:py-32 overflow-hidden scroll-mt-24">
      {/* Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col justify-center"
          >
            {/* Blueprint watermark */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
              <svg className="h-full w-full" viewBox="0 0 400 400" fill="none">
                <g stroke="currentColor" strokeWidth="0.5">
                  <rect x="50" y="50" width="300" height="300" />
                  <line x1="50" y1="200" x2="350" y2="200" />
                  <line x1="200" y1="50" x2="200" y2="350" />
                  <rect x="100" y="100" width="80" height="60" />
                  <rect x="220" y="100" width="80" height="60" />
                  <rect x="100" y="240" width="80" height="60" />
                  <rect x="220" y="240" width="80" height="60" />
                  <circle cx="200" cy="200" r="40" />
                </g>
              </svg>
            </div>

            <div className="relative">
              <h2 className="font-serif mb-6 text-3xl font-bold leading-tight tracking-tight text-[#2a2a2a] text-balance md:text-4xl lg:text-5xl">
                ВАШАТА ВИЗИЈА, НАША ИЗВЕДБА. ГРАДИМЕ ЗАЕДНО.
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-[#555] text-pretty">
                Веруваме дека секој проект заслужува врвно внимание и прецизност. Со години им помагаме на семејствата и бизнисите во Македонија да ги претворат своите идеи во реалност—од груба градба до целосно реновирање и енергетски ефикасни решенија.
              </p>

              <Button asChild className="font-serif h-12 px-8 text-sm font-semibold tracking-wide bg-primary text-white hover:bg-primary/90 rounded-none uppercase">
                <a href="#kontakt">Пиши ни</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Masonry Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div 
                className="relative aspect-[4/5] overflow-hidden bg-[#ddd]"
              >
                <Image
                  src={SITE_IMAGES.capabilities[0]}
                  alt="Градежни работи"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                className="relative aspect-square overflow-hidden bg-[#ddd]"
              >
                <Image
                  src={SITE_IMAGES.capabilities[1]}
                  alt="Квалитетни материјали"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div 
                className="relative aspect-square overflow-hidden bg-[#ddd]"
              >
                <Image
                  src={SITE_IMAGES.capabilities[2]}
                  alt="Реновиран простор"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                className="relative aspect-[4/5] overflow-hidden bg-[#ddd]"
              >
                <Image
                  src={SITE_IMAGES.capabilities[3]}
                  alt="Инсталации"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                className="relative aspect-[3/2] overflow-hidden bg-[#ddd]"
              >
                <Image
                  src={SITE_IMAGES.capabilities[4]}
                  alt="Внимание на детали"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
