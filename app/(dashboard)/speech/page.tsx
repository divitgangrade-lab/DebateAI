'use client'

import { useState } from 'react'
import { SpeechInput } from '@/components/speech/input'
import { SpeechAnalysis } from '@/components/speech/analysis'
import type { SpeechSession } from '@/types'

export default function SpeechPage() {
  const [session, setSession] = useState<SpeechSession | null>(null)

  const handleAnalyzeSpeech = (text: string, duration: number) => {
    const newSession: SpeechSession = {
      id: Date.now().toString(),
      userId: 'user-1', // TODO: Get from auth
      type: 'speech',
      topic: 'Speech Analysis',
      duration,
      speechText: text,
      score: 0,
      date: new Date(),
      createdAt: new Date(),
      report: {
        structure: 'Well-organized with clear introduction and conclusion',
        grammar: 'Minor grammatical issues found',
        vocabulary: 'Good use of professional vocabulary',
        fillerWords: ['um', 'uh', 'like'],
        speakingSpeed: 140,
        confidence: 85,
        strengths: ['Clear message', 'Good pacing', 'Professional tone'],
        weaknesses: ['Too many filler words', 'Could improve vocabulary'],
        improvedVersion: 'Here is an improved version of your speech...',
        suggestions: ['Practice reducing filler words', 'Add more powerful examples'],
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
        <h1 className="text-4xl font-bold mb-2">Speech Coach</h1>
        <p className="text-slate-400">Get AI-powered feedback on your speeches and presentations</p>
      </div>

      {!session ? (
        <SpeechInput onAnalyze={handleAnalyzeSpeech} />
      ) : (
        <SpeechAnalysis session={session} onReset={handleReset} />
      )}
    </div>
  )
}
