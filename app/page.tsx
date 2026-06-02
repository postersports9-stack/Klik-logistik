import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { CoverageMap } from "@/components/sections/coverage-map"
import { WhyUs } from "@/components/sections/why-us"
import { About } from "@/components/sections/about"
import { Vehicles } from "@/components/sections/vehicles"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"
import { ContactWidget } from "@/components/ui/contact-widget"
import { JsonLd, localBusinessSchema } from "@/components/seo/json-ld"

export default function HomePage() {
  return (
    <main>
      <JsonLd data={localBusinessSchema} />
      <Header />
      <Hero />
      <CoverageMap />
      <WhyUs />
      <Vehicles />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ContactWidget />
    </main>
  )
}
