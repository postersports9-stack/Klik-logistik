import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Vehicles } from "@/components/sections/vehicles"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { KlikTrejdCta } from "@/components/sections/klik-trejd-cta"
import { Footer } from "@/components/sections/footer"
import { ContactWidget } from "@/components/ui/contact-widget"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Vehicles />
      <Stats />
      <Testimonials />
      <KlikTrejdCta />
      <ContactForm />
      <Footer />
      <ContactWidget />
    </main>
  )
}
