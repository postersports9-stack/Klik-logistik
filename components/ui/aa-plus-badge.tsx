import { ShieldCheck } from "lucide-react"

type Variant = "light" | "dark"

export function AAPlusBadge({ variant = "light" }: { variant?: Variant }) {
  const isDark = variant === "dark"
  return (
    <div
      className={[
        "inline-flex items-center gap-3 border px-3 py-2",
        isDark
          ? "border-white/25 bg-white/5 text-white"
          : "border-kl-border bg-white text-kl-ink",
      ].join(" ")}
      title="AA+ кредитен рејтинг — CompanyWall Business"
    >
      <ShieldCheck className={`h-5 w-5 ${isDark ? "text-kl-cta" : "text-kl-ink"}`} />
      <div className="leading-tight">
        <div className="text-[14px] font-medium tabular-nums">AA+</div>
        <div className={`text-[10px] uppercase tracking-[0.14em] ${isDark ? "text-white/70" : "text-kl-muted"}`}>
          2025 · 2026 · CompanyWall
        </div>
      </div>
    </div>
  )
}
