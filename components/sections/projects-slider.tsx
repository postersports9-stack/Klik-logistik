"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slideData = [
  {
    before: "/ba1-before.webp",
    after: "/ba1-after.webp",
    title: "Станбен простор",
    location: "Скопје",
  },
  {
    before: "/ba2-before.webp",
    after: "/ba2-after.webp",
    title: "Деловен објект",
    location: "Скопје",
  }
]

export function ProjectsSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const data = slideData[activeSlide];

  return (
    <section id="nasata-rabota" className="relative bg-[#1a1a1a] py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Видлива трансформација
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Ние веруваме во видливи резултати. Погледнете ги пред и потоа споредбите од нашите скорашни реновирања и градежни зафати.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-md shadow-2xl bg-black">
          {/* Before Image - Drives height naturally instead of auto crop */}
          <img
            src={data.before}
            alt="Пред чистење"
            className="w-full h-auto block select-none"
            draggable={false}
          />

          {/* After Image (on top, cropped via clipPath) */}
          <div 
            className="absolute inset-0 block select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={data.after}
              alt="По чистење"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* The Draggable Line */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            {/* Handle graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow border-2 border-primary flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-gray-500 -mr-1" />
              <ChevronRight className="w-5 h-5 text-gray-500 -ml-1" />
            </div>
          </div>

          {/* Invisible Range Slider */}
          <input
            type="range"
            min={0}
            max={100}
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
          />
          
          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded backdrop-blur-sm z-10 pointer-events-none">
            Потоа
          </div>
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded backdrop-blur-sm z-10 pointer-events-none">
            Пред
          </div>
        </div>

        {/* Project Info & Controls */}
        <div className="mx-auto max-w-4xl mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div>
            <h3 className="font-serif text-xl font-bold">{data.title}</h3>
            <p className="text-white/60 text-sm">{data.location}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  setActiveSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
                  setSliderPosition(50);
                }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20 text-white"
                aria-label="Претходен проект"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  setActiveSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
                  setSliderPosition(50);
                }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20 text-white"
                aria-label="Следен проект"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex gap-3">
              {slideData.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    setActiveSlide(i);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${i === activeSlide ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'}`}
                  aria-label={`Прикажи проект ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
