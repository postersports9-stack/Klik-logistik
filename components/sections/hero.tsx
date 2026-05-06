"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import { SITE_IMAGES } from "@/lib/constants/images"

export function Hero() {
  const images = SITE_IMAGES.hero;
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      {/* --- Desktop Layout (md and up) --- */}
      <section className="hidden md:block relative min-h-screen bg-white pt-[80px]">
        <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center bg-white">
          <div className="relative flex items-center justify-center gap-6 w-full max-w-[1920px] mx-auto px-6 pb-32 pt-[2vh]">

            {/* Side Image Left */}
            <div className="relative aspect-[3/4] w-[26vw] overflow-hidden shadow-xl bg-white group">
              <Image
                src={images[1].src}
                alt={images[1].title}
                fill
                quality={100}
                className="object-cover transition-transform duration-700"
                sizes="(max-width: 1536px) 40vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-1 opacity-80">{images[1].label}</p>
                <h3 className="text-xl font-serif uppercase leading-tight">{images[1].title}</h3>
              </div>
            </div>

            {/* Main Central Image */}
            <div className="relative aspect-[3/4] w-[32vw] overflow-hidden shadow-2xl bg-white group z-10">
              <Image
                src={images[0].src}
                alt={images[0].title}
                fill
                priority
                quality={100}
                className="object-cover transition-transform duration-700"
                sizes="(max-width: 1536px) 60vw, 1200px"
              />
              <div className="absolute bottom-6 left-6 right-6 text-white md:bottom-8 md:left-8 md:right-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent -mx-8 -mb-8 h-[150%]" />
                <div className="relative z-10">
                  <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-1 opacity-80">{images[0].sub}</p>
                  <h3 className="text-xl md:text-3xl font-serif text-white uppercase leading-tight">{images[0].title}</h3>
                </div>
              </div>
            </div>

            {/* Side Image Right */}
            <div className="relative aspect-[3/4] w-[26vw] overflow-hidden shadow-xl bg-white group">
              <Image
                src={images[2].src}
                alt={images[2].title}
                fill
                quality={100}
                className="object-cover transition-transform duration-700"
                sizes="(max-width: 1536px) 40vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-1 opacity-80">{images[2].label}</p>
                <h3 className="text-xl font-serif uppercase leading-tight">{images[2].title}</h3>
              </div>
            </div>

          </div>

          {/* Buttons placed globally */}
          <div className="absolute bottom-4 z-30 flex gap-4 w-full justify-center px-4">
            <Button asChild size="lg" className="h-12 px-8 bg-black text-white hover:bg-black/80 font-semibold uppercase tracking-widest text-sm rounded-none">
              <a href="#kontakt">
                Побарај понуда
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* --- Mobile View (below md) --- */}
      <section className="md:hidden flex flex-col bg-white pt-20">
        <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images[0].src}
              alt={images[0].title}
              fill
              priority
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center text-white">
            <p className="text-[10px] uppercase tracking-[0.2em] mb-2 opacity-80">
              {images[0].sub}
            </p>
            <h2 className="text-4xl font-serif uppercase mb-4 tracking-tight">
              {images[0].title}
            </h2>
            <p className="max-w-xs text-sm opacity-90 leading-relaxed mb-8">
              {images[0].description}
            </p>

            <div className="relative z-50 flex flex-col gap-3 w-full max-w-[200px]">
              <Button
                asChild
                size="lg"
                className="relative z-50 h-12 w-full bg-white text-black hover:bg-white/90 rounded-none uppercase text-xs tracking-widest font-bold pointer-events-auto"
              >
                <a href="#kontakt" className="w-full">
                  Пиши ни
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
