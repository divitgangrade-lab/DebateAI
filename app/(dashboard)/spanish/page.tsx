'use client'

import { useState } from 'react'
import { SpanishSetup } from '@/components/spanish/setup'
import { SpanishChat } from '@/components/spanish/chat'
import type { SpanishSession } from '@/types'

export default function SpanishPage() {
  const [session, setSession] = useState<SpanishSession | null>(null)

  const handleStartSpanish = (level: 'beginner' | 'intermediate' | 'advanced', mode: 'daily' | 'travel' | 'school' | 'debate') => {
    const newSession: SpanishSession = {
      id: Date.now().toString(),
      userId: 'user-1', // TODO: Get from auth
      type: 'spanish',
      level,
      mode,
      topic: `Spanish ${mode} practice`,
      score: 0,
      duration: 0,
      date: new Date(),
      createdAt: new Date(),
      messages: [],
      report: {
        grammarScore: 0,
        vocabularyScore: 0,
        pronunciationScore: 0,
        overallScore: 0,
        corrections: [],
        suggestions: [],
      },
    }
    setSession(newSession)
  }

  const handleReset = () => {
    setSession(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Spanish Practice</h1>
        <p className="text-slate-400">Learn Spanish with your personal AI language partner</p>
      </div>

      {!session ? (
        <SpanishSetup onStart={handleStartSpanish} />
      ) : (
        <SpanishChat session={session} onReset={handleReset} />
      )}
    </div>
  )
}
