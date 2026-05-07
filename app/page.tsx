import { TopBar } from "@/components/sections/top-bar"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Vehicles } from "@/components/sections/vehicles"
import { CostEstimator } from "@/components/sections/cost-estimator"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { ContactWidget } from "@/components/ui/contact-widget"

export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Vehicles />
      <CostEstimator />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ContactWidget />
    </main>
  )
}
