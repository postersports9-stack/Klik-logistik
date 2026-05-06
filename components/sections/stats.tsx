"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

const stats = [
  { value: 10, suffix: "+", label: "Години искуство" },
  { value: 1200, suffix: "+", label: "Задоволни клиенти" },
  { value: 500, suffix: "+", label: "Успешни проекти" },
  { value: 100, suffix: "%", label: "Квалитет и гаранција" },
]

function AnimatedCounter({ 
  value, 
  suffix, 
  isInView 
}: { 
  value: number
  suffix: string
  isInView: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span className="font-serif text-5xl font-bold text-primary md:text-6xl lg:text-7xl">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2a2a2a] md:text-4xl">
            Бројки што велат повеќе од зборови
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                isInView={isInView} 
              />
              <p className="mt-3 max-w-[180px] text-sm text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
