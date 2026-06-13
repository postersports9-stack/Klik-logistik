import Image from "next/image"

type Variant = "light" | "dark"

export function AAPlusBadge({ variant = "light" }: { variant?: Variant }) {
  return (
    <div className="inline-flex items-center gap-4" title="AA+ кредитен рејтинг — CompanyWall Business">
      <Image
        src="/images/ocjena-2026-AA+.png"
        alt="CompanyWall AA+ Certificate"
        width={150}
        height={75}
        className="h-auto w-auto max-h-[80px] object-contain drop-shadow-md"
      />
      <Image
        src="/images/AA-plus-compressed.webp"
        alt="CompanyWall AA+ 2026 Certificate Alternative"
        width={150}
        height={75}
        className="h-auto w-auto max-h-[80px] object-contain drop-shadow-md"
      />
    </div>
  )
}
