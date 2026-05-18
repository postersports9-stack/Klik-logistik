import Link from "next/link"

export function KlikTrejdCta() {
  return (
    <section className="bg-neutral-800 text-white">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-14">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
            Клик Трејд
          </p>
          <p className="mt-2 text-[20px] leading-[28px] font-medium tracking-tight text-white md:text-[24px] md:leading-[32px]">
            Видете ја фирмата за експорт-импорт.
          </p>
        </div>
        <Link
          href="/klik-trejd"
          className="inline-flex h-12 items-center justify-center rounded-[8px] bg-kl-cta px-6 text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-colors duration-100 hover:bg-kl-cta-strong"
        >
          Кон Клик Трејд
        </Link>
      </div>
    </section>
  )
}
