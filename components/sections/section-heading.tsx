"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  number: string
  eyebrow: string
  title: string
  lead?: string
  id?: string
  className?: string
}

export function SectionHeading({ number, eyebrow, title, lead, id, className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            obs.disconnect()
            break
          }
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "border-t border-kl-border pt-6 transition-all duration-200 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className
      )}
    >
      <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-kl-muted sm:text-[12px] sm:tracking-[0.18em]">
        <span className="border-b border-kl-accent pb-0.5 text-kl-ink">{number}</span> — {eyebrow}
      </div>
      <h2 className="mt-6 text-[28px] leading-[36px] font-medium tracking-[-0.015em] text-kl-ink sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px]">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-[640px] text-[16px] leading-[26px] text-kl-muted md:text-[17px] md:leading-[28px]">
          {lead}
        </p>
      )}
    </div>
  )
}
