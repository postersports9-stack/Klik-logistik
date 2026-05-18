import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { CoverageMap } from "@/components/sections/coverage-map"
import { About } from "@/components/sections/about"
import { Vehicles } from "@/components/sections/vehicles"
import { WhyUs } from "@/components/sections/why-us"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { ContactWidget } from "@/components/ui/contact-widget"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CoverageMap />
      <About />
      <Vehicles />
      <WhyUs />
      <Stats />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ContactWidget />
    </main>
  )
}
