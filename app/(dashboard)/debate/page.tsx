'use client'

import { useState, useCallback, useMemo, memo } from 'react'
import { DebateSetup } from '@/components/debate/setup'
import { DebateArena } from '@/components/debate/arena'
import { DebateReport } from '@/components/debate/report'
import type { DebateSession } from '@/types'

type DebateState = 'setup' | 'active' | 'completed'

const DebateHeader = memo(function DebateHeader() {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">AI Debate Arena</h1>
      <p className="text-slate-400">Practice your debate skills against our intelligent AI opponent</p>
    </div>
  )
})

export default function DebatePage() {
  const [state, setState] = useState<DebateState>('setup')
  const [session, setSession] = useState<DebateSession | null>(null)

  const handleStartDebate = useCallback(
    (topic: string, position: 'for' | 'against', difficulty: 'beginner' | 'intermediate' | 'expert') => {
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
    },
    []
  )

  const handleEndDebate = useCallback(() => {
    setState('completed')
  }, [])

  const handleReset = useCallback(() => {
    setState('setup')
    setSession(null)
  }, [])

  const content = useMemo(() => {
    switch (state) {
      case 'setup':
        return <DebateSetup onStart={handleStartDebate} />
      case 'active':
        return session ? <DebateArena session={session} onEnd={handleEndDebate} /> : null
      case 'completed':
        return session ? <DebateReport session={session} onReset={handleReset} /> : null
      default:
        return null
    }
  }, [state, session, handleStartDebate, handleEndDebate, handleReset])

  return (
    <div className="space-y-6">
      <DebateHeader />
      {content}
    </div>
  )
}
