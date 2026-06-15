'use client'

import { useState } from 'react'
import { MUNSetup } from '@/components/mun/setup'
import { MUNSimulator } from '@/components/mun/simulator'
import { MUNReport } from '@/components/mun/report'
import type { MUNSession } from '@/types'

type MUNState = 'setup' | 'active' | 'completed'

export default function MUNPage() {
  const [state, setState] = useState<MUNState>('setup')
  const [session, setSession] = useState<MUNSession | null>(null)

  const handleStartMUN = (country: string, committee: string, topic: string) => {
    const newSession: MUNSession = {
      id: Date.now().toString(),
      userId: 'user-1', // TODO: Get from auth
      type: 'mun',
      country,
      committee,
      topic,
      score: 0,
      duration: 0,
      date: new Date(),
      createdAt: new Date(),
      messages: [],
      report: {
        researchScore: 0,
        diplomacyScore: 0,
        policyScore: 0,
        speakingScore: 0,
        leadershipScore: 0,
        feedback: '',
      },
    }
    setSession(newSession)
    setState('active')
  }

  const handleEndMUN = () => {
    setState('completed')
  }

  const handleReset = () => {
    setState('setup')
    setSession(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">MUN Simulator</h1>
        <p className="text-slate-400">Practice Model United Nations with realistic scenarios and diplomacy</p>
      </div>

      {state === 'setup' && <MUNSetup onStart={handleStartMUN} />}
      {state === 'active' && session && <MUNSimulator session={session} onEnd={handleEndMUN} />}
      {state === 'completed' && session && <MUNReport session={session} onReset={handleReset} />}
    </div>
  )
}
