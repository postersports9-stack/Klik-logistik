import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: "Клик Трејд",
}

export default function KlikTrejdPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-[1120px] px-4 py-24 sm:px-6 md:px-8">
        <h1 className="text-[32px] font-medium tracking-tight text-kl-ink md:text-[48px]">
          Клик Трејд
        </h1>
      </section>
      <Footer />
    </main>
  )
}
