type Position = "tr" | "bl" | "br" | "tl"
type Tone = "light" | "dark"

export function SectionWatermark({
  text,
  position = "br",
  tone = "light",
}: {
  text: string
  position?: Position
  tone?: Tone
}) {
  const placement: Record<Position, string> = {
    tr: "top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 text-right",
    tl: "top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 text-left",
    br: "bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-right",
    bl: "bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 text-left",
  }
  const color = tone === "dark" ? "text-white/[0.07]" : "text-kl-ink/[0.06]"

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none ${placement[position]}`}
    >
      <span
        className={`block whitespace-nowrap text-[48px] font-medium uppercase leading-[0.85] tracking-[-0.03em] sm:text-[72px] md:text-[96px] lg:text-[120px] ${color}`}
      >
        {text}
      </span>
    </div>
  )
}
