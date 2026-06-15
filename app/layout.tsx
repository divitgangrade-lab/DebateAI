'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import { ErrorBoundary } from '@/lib/error-boundary'
import { SidebarProvider } from '@/lib/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DebateForge AI - Master Debate, MUN & Public Speaking',
  description: 'Train like a champion with AI-powered debate, MUN simulator, speech coach, and language learning.',
  keywords: ['debate', 'MUN', 'public speaking', 'AI coach', 'education'],
  authors: [{ name: 'DebateForge Team' }],
  openGraph: {
    type: 'website',
    url: 'https://debateforge.ai',
    title: 'DebateForge AI',
    description: 'AI-powered training platform for debate, MUN, and public speaking',
    images: [{
      url: 'https://debateforge.ai/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <SidebarProvider>
              <Navbar />
              {children}
              <Toaster />
            </SidebarProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
