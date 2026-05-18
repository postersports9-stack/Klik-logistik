const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
    <feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)'/>
</svg>`

const DATA_URI = `url("data:image/svg+xml;utf8,${encodeURIComponent(GRAIN_SVG)}")`

export function GrainOverlay({
  opacity = 0.05,
  tone = "dark",
}: {
  opacity?: number
  tone?: "dark" | "light"
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: DATA_URI,
        backgroundRepeat: "repeat",
        opacity,
        mixBlendMode: tone === "dark" ? "screen" : "multiply",
      }}
    />
  )
}
