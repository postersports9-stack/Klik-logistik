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
    tr: "top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8",
    tl: "top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8",
    br: "bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8",
    bl: "bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8",
  }

  const outlineColor = tone === "dark" ? "rgba(255,255,255,0.15)" : "rgba(107,107,107,0.25)"

  // Render a different custom designed yellow arrow for each section
  const renderArrow = () => {
    const key = text.toLowerCase().trim()

    switch (key) {
      case "возила":
        // Fast Forward Triple Arrow (Screenshot 231814 style)
        return (
          <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" aria-hidden="true">
            {/* Yellow offset */}
            <g fill="#FACC15" opacity="0.25" transform="translate(6, 6)">
              <polygon points="15,40 55,80 15,120" />
              <polygon points="55,40 95,80 55,120" />
              <polygon points="95,40 135,80 95,120" />
            </g>
            {/* Outline */}
            <g stroke={outlineColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <polygon points="15,40 55,80 15,120" />
              <polygon points="55,40 95,80 55,120" />
              <polygon points="95,40 135,80 95,120" />
            </g>
          </svg>
        )

      case "зошто":
        // Double chevron pointing up-right
        return (
          <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" aria-hidden="true">
            {/* Yellow offset */}
            <g stroke="#FACC15" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25" transform="translate(6, 6)">
              <path d="M 30,120 L 70,80 L 110,120 M 70,80 L 110,40 L 150,80" />
            </g>
            {/* Outline */}
            <g stroke={outlineColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M 30,120 L 70,80 L 110,120 M 70,80 L 110,40 L 150,80" />
            </g>
          </svg>
        )

      case "за нас":
        // Looping / spiral growth arrow
        return (
          <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" aria-hidden="true">
            {/* Yellow offset */}
            <g stroke="#FACC15" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25" transform="translate(6, 6)">
              <path d="M 30,130 C 30,70 65,30 115,60 C 145,78 145,115 105,120 C 75,120 55,95 75,65 L 105,30" />
            </g>
            <g fill="#FACC15" opacity="0.25" transform="translate(6, 6)">
              <polygon points="90,30 105,30 105,45" />
            </g>
            {/* Outline */}
            <g stroke={outlineColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M 30,130 C 30,70 65,30 115,60 C 145,78 145,115 105,120 C 75,120 55,95 75,65 L 105,30" />
              <polygon points="90,30 105,30 105,45" fill="none" />
            </g>
          </svg>
        )

      case "брза проценка":
        // Target scope with a diagonal arrow
        return (
          <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" aria-hidden="true">
            {/* Yellow offset */}
            <g stroke="#FACC15" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25" transform="translate(6, 6)">
              <circle cx="100" cy="60" r="30" />
              <line x1="100" y1="20" x2="100" y2="100" />
              <line x1="60" y1="60" x2="140" y2="60" />
              <line x1="20" y1="140" x2="80" y2="80" />
            </g>
            <g fill="#FACC15" opacity="0.25" transform="translate(6, 6)">
              <polygon points="65,80 80,80 80,95" />
            </g>
            {/* Outline */}
            <g stroke={outlineColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <circle cx="100" cy="60" r="30" />
              <line x1="100" y1="20" x2="100" y2="100" />
              <line x1="60" y1="60" x2="140" y2="60" />
              <line x1="20" y1="140" x2="80" y2="80" />
              <polygon points="65,80 80,80 80,95" fill="none" />
            </g>
          </svg>
        )

      case "контакт":
        // Downward curving arrow (Screenshot 231825 style)
        return (
          <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" aria-hidden="true">
            {/* Yellow offset */}
            <g stroke="#FACC15" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25" transform="translate(6, 6)">
              <path d="M 30,30 C 90,30 130,70 130,130" />
            </g>
            <g fill="#FACC15" opacity="0.25" transform="translate(6, 6)">
              <polygon points="100,130 130,130 130,100" />
            </g>
            {/* Outline */}
            <g stroke={outlineColor} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M 30,30 C 90,30 130,70 130,130" />
              <polygon points="100,130 130,130 130,100" fill="none" />
            </g>
          </svg>
        )

      case "клиенти":
        // Feedback cycle arrows
        return (
          <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" aria-hidden="true">
            {/* Yellow offset */}
            <g stroke="#FACC15" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25" transform="translate(6, 6)">
              <path d="M 40,80 A 40,40 0 0,1 120,80" />
              <path d="M 120,80 A 40,40 0 0,1 40,80" transform="rotate(180 80 80)" />
            </g>
            <g fill="#FACC15" opacity="0.25" transform="translate(6, 6)">
              <polygon points="105,80 120,80 120,65" />
              <polygon points="105,80 120,80 120,65" transform="rotate(180 80 80)" />
            </g>
            {/* Outline */}
            <g stroke={outlineColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path d="M 40,80 A 40,40 0 0,1 120,80" />
              <polygon points="105,80 120,80 120,65" fill="none" />
              <path d="M 120,80 A 40,40 0 0,1 40,80" transform="rotate(180 80 80)" />
              <polygon points="105,80 120,80 120,65" fill="none" transform="rotate(180 80 80)" />
            </g>
          </svg>
        )

      default:
        // Default generic arrow pointing top-right
        return (
          <svg viewBox="0 0 160 160" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" aria-hidden="true">
            {/* Yellow offset */}
            <g stroke="#FACC15" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25" transform="translate(6, 6)">
              <line x1="30" y1="130" x2="130" y2="30" />
              <polyline points="80,30 130,30 130,80" />
            </g>
            {/* Outline */}
            <g stroke={outlineColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <line x1="30" y1="130" x2="130" y2="30" />
              <polyline points="80,30 130,30 130,80" />
            </g>
          </svg>
        )
    }
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none z-0 ${placement[position]}`}
    >
      {renderArrow()}
    </div>
  )
}
