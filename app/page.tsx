'use client'

import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Features } from '@/components/landing/features'
import { Testimonials } from '@/components/landing/testimonials'
import { SkillsSection } from '@/components/landing/skills-section'
import { CTA } from '@/components/landing/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HowItWorks />
      <Features />
      <SkillsSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
