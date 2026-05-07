import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Vehicles } from "@/components/sections/vehicles"
import { CostEstimator } from "@/components/sections/cost-estimator"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Vehicles />
      <CostEstimator />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
