// User types
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

// Session types
export type SessionType = 'debate' | 'mun' | 'speech' | 'spanish'

export interface Session {
  id: string
  userId: string
  type: SessionType
  topic: string
  score: number
  duration: number
  date: Date
  createdAt: Date
}

// Debate types
export type DebatePosition = 'for' | 'against'
export type DifficultyLevel = 'beginner' | 'intermediate' | 'expert'

export interface DebateSession extends Session {
  type: 'debate'
  position: DebatePosition
  difficulty: DifficultyLevel
  messages: Message[]
  report: DebateReport
}

export interface DebateReport {
  argumentScore: number
  evidenceScore: number
  rebuttalScore: number
  confidenceScore: number
  overallScore: number
  strongestArgument: string
  areasToImprove: string[]
  nextSuggestion: string
}

// MUN types
export interface MUNSession extends Session {
  type: 'mun'
  country: string
  committee: string
  messages: Message[]
  report: MUNReport
}

export interface MUNReport {
  researchScore: number
  diplomacyScore: number
  policyScore: number
  speakingScore: number
  leadershipScore: number
  feedback: string
}

// Speech types
export interface SpeechSession extends Session {
  type: 'speech'
  duration: number
  speechText: string
  report: SpeechReport
}

export interface SpeechReport {
  structure: string
  grammar: string
  vocabulary: string
  fillerWords: string[]
  speakingSpeed: number
  confidence: number
  strengths: string[]
  weaknesses: string[]
  improvedVersion: string
  suggestions: string[]
}

// Spanish types
export type SpanishLevel = 'beginner' | 'intermediate' | 'advanced'
export type SpanishMode = 'daily' | 'travel' | 'school' | 'debate'

export interface SpanishSession extends Session {
  type: 'spanish'
  level: SpanishLevel
  mode: SpanishMode
  messages: Message[]
  report: SpanishReport
}

export interface SpanishReport {
  grammarScore: number
  vocabularyScore: number
  pronunciationScore: number
  overallScore: number
  corrections: Correction[]
  suggestions: string[]
}

export interface Correction {
  original: string
  corrected: string
  explanation: string
}

// Message types
export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  metadata?: Record<string, any>
}

// Progress types
export interface UserProgress {
  userId: string
  communicationScore: number
  researchScore: number
  confidenceScore: number
  diplomaticScore: number
  vocabularyScore: number
  criticalThinkingScore: number
  updatedAt: Date
}

// Achievement types
export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  earnedAt?: Date
}

export const ACHIEVEMENTS = {
  FIRST_DEBATE: 'first_debate',
  MUN_MASTER: 'mun_master',
  PUBLIC_SPEAKER: 'public_speaker',
  LANGUAGE_LEARNER: 'language_learner',
} as const
