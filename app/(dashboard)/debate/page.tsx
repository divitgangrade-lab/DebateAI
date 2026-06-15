'use client'

import { useState } from 'react'
import { DebateSetup } from '@/components/debate/setup'
import { DebateArena } from '@/components/debate/arena'
import { DebateReport } from '@/components/debate/report'
import type { DebateSession } from '@/types'

type DebateState = 'setup' | 'active' | 'completed'

export default function DebatePage() {
  const [state, setState] = useState<DebateState>('setup')
  const [session, setSession] = useState<DebateSession | null>(null)

  const handleStartDebate = (topic: string, position: 'for' | 'against', difficulty: 'beginner' | 'intermediate' | 'expert') => {
    const newSession: DebateSession = {
      id: Date.now().toString(),
      userId: 'user-1', // TODO: Get from auth
      type: 'debate',
      topic,
      position,
      difficulty,
      score: 0,
      duration: 0,
      date: new Date(),
      createdAt: new Date(),
      messages: [],
      report: {
        argumentScore: 0,
        evidenceScore: 0,
        rebuttalScore: 0,
        confidenceScore: 0,
        overallScore: 0,
        strongestArgument: '',
        areasToImprove: [],
        nextSuggestion: '',
      },
    }
    setSession(newSession)
    setState('active')
  }

  const handleEndDebate = () => {
    setState('completed')
  }

  const handleReset = () => {
    setState('setup')
    setSession(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">AI Debate Arena</h1>
        <p className="text-slate-400">Practice your debate skills against our intelligent AI opponent</p>
      </div>

      {state === 'setup' && <DebateSetup onStart={handleStartDebate} />}
      {state === 'active' && session && <DebateArena session={session} onEnd={handleEndDebate} />}
      {state === 'completed' && session && <DebateReport session={session} onReset={handleReset} />}
    </div>
  )
}
