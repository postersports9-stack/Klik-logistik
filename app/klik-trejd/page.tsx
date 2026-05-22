import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import Image from "next/image"
import { Phone } from "lucide-react"
import { BRAND } from "@/lib/constants/brand"

export const metadata = {
  title: "Клик Трејд | Откуп и продажба на палети",
  description: "Клик Трејд — Откуп и продажба на дрвени палети (120x80) и индустриски палети на територијата на цела Македонија.",
}

export default function KlikTrejdPage() {
  return (
    <main className="flex min-h-screen flex-col bg-kl-subtle">
      <Header />
      <section className="flex-1 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:px-8 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with modern rounded corners and shadow */}
            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-[16px] border border-kl-border bg-kl-subtle shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/klik-trejd-pallets.webp"
                    alt="Дрвени и индустриски палети"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Title, Description, and CTA */}
            <div className="lg:col-span-6">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-kl-muted">
                  Услуги
                </span>
                <h1 className="mt-3 text-[36px] font-medium leading-tight tracking-tight text-kl-ink sm:text-[44px]">
                  Клик Трејд
                </h1>
                
                <p className="mt-6 text-[16px] leading-[26px] text-kl-ink/80 sm:text-[18px] sm:leading-[30px]">
                  Откуп и продажба на дрвени палети (120x80) и индустриски палети. На територијата на цела Македонија. Ги подигаме со наш превоз. Цената се одредува во зависност од состојбата и типот на палетата.
                </p>

                <div className="mt-8">
                  <a
                    href={BRAND.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[8px] bg-kl-cta px-6 text-[14px] font-medium tracking-wide text-kl-cta-foreground transition-all duration-100 hover:bg-kl-cta-strong"
                  >
                    <Phone className="h-4 w-4" />
                    Јавете се на {BRAND.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
