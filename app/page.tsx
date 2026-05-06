import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { CostEstimator } from "@/components/sections/cost-estimator"
import { Capabilities } from "@/components/sections/capabilities"
import { History } from "@/components/sections/history"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { FloatingContact } from "@/components/ui/floating-contact"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <CostEstimator />
      <Capabilities />
      <History />
      <Stats />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </main>
  )
}
