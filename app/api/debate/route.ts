import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory cache for debate responses
const debateCache = new Map<string, { response: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

function getCacheKey(topic: string, position: string, message: string): string {
  return `${topic}-${position}-${message}`
}

function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_DURATION
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, topic, position, difficulty, conversationHistory } = body

    // Validate input
    if (!message || !topic || !position || !difficulty) {
      return NextResponse.json(
        { error: 'Missing required fields: message, topic, position, difficulty' },
        { status: 400 }
      )
    }

    // Check cache first
    const cacheKey = getCacheKey(topic, position, message)
    const cached = debateCache.get(cacheKey)
    if (cached && isCacheValid(cached.timestamp)) {
      return NextResponse.json(cached.response, { status: 200 })
    }

    // TODO: Implement OpenAI API integration for debate
    // This is a placeholder implementation with deterministic scoring based on input
    const messageLength = message.length
    const hasEvidence = /\b(study|research|data|evidence|source|citation)\b/i.test(message)
    const hasLogicalStructure = /\b(therefore|thus|because|consequently|as a result)\b/i.test(message)

    const argumentStrength = Math.min(100, (messageLength / 10) + (hasEvidence ? 20 : 0) + (hasLogicalStructure ? 15 : 0))
    const confidenceScore = Math.min(100, (messageLength / 20) + (hasEvidence ? 25 : 0))

    const systemPrompt = `You are an expert debate opponent with a ${difficulty} difficulty level.
Topic: ${topic}
Your position: ${position === 'for' ? 'AGAINST' : 'FOR'}

You should:
- Challenge the user's arguments respectfully
- Provide evidence-based responses
- Ask difficult questions
- Detect logical fallacies
- Use strategic debate tactics

Maintain a competitive but respectful tone.`

    const response = {
      reply: 'This is a placeholder AI response. In production, this would use OpenAI API.',
      analysis: {
        argumentStrength: Math.round(argumentStrength),
        logicalFallacies: [],
        suggestedCounterargument: 'Consider focusing on empirical data to strengthen your position.',
        confidenceScore: Math.round(confidenceScore),
      },
      systemPrompt, // For debugging purposes only - remove in production
    }

    // Cache the response
    debateCache.set(cacheKey, { response, timestamp: Date.now() })

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error('Debate API error:', error)
    return NextResponse.json(
      { error: 'Failed to process debate request' },
      { status: 500 }
    )
  }
}
