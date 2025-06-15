import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhoItsFor } from "@/components/who-its-for"
import { Roadmap } from "@/components/roadmap"
import { PricingOverview } from "@/components/pricing-overview"
import { NewsletterCTA } from "@/components/newsletter-cta"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <HowItWorks />
      <WhoItsFor />
      <Roadmap />
      <PricingOverview />
      <NewsletterCTA />
      <Footer />
    </main>
  )
}
