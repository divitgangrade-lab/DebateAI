'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'
import { Hero } from '@/components/landing/hero'

// Lazy load below-the-fold components
const HowItWorks = dynamic(() => import('@/components/landing/how-it-works').then(mod => ({ default: mod.HowItWorks })), {
  loading: () => <div className="h-screen bg-slate-950" />,
  ssr: true,
})

const Features = dynamic(() => import('@/components/landing/features').then(mod => ({ default: mod.Features })), {
  loading: () => <div className="h-screen bg-slate-950" />,
  ssr: true,
})

const SkillsSection = dynamic(() => import('@/components/landing/skills-section').then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <div className="h-screen bg-slate-950" />,
  ssr: true,
})

const Testimonials = dynamic(() => import('@/components/landing/testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-screen bg-slate-950" />,
  ssr: true,
})

const CTA = dynamic(() => import('@/components/landing/cta').then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="h-20 bg-slate-950" />,
  ssr: true,
})

const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-20 bg-slate-950" />,
  ssr: true,
})

const MainContent = memo(function MainContent() {
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
})

export default function Home() {
  return <MainContent />
}
