import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { HowItWorks } from "@/components/landing/how-it-works"
import { RegionMap } from "@/components/landing/region-map"
import { Professions } from "@/components/landing/professions"
import { ParentsBenefits } from "@/components/landing/parents-benefits"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <RegionMap />
        <Professions />
        <ParentsBenefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
