'use client'

import { Card } from '@/components/ui/card'
import { BookOpen, FileText, Video, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Debate Techniques Guide',
      description: 'Master the fundamentals of competitive debate',
      type: 'PDF',
      icon: <FileText className="w-6 h-6" />,
      downloads: 1234,
    },
    {
      title: 'MUN Beginner Course',
      description: 'Complete introduction to Model United Nations',
      type: 'Video',
      icon: <Video className="w-6 h-6" />,
      downloads: 2341,
    },
    {
      title: 'Public Speaking Masterclass',
      description: 'Advanced techniques for powerful presentations',
      type: 'Guide',
      icon: <BookOpen className="w-6 h-6" />,
      downloads: 1567,
    },
    {
      title: 'Spanish Vocabulary Builder',
      description: '1000+ essential Spanish words and phrases',
      type: 'PDF',
      icon: <FileText className="w-6 h-6" />,
      downloads: 892,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Resources</h1>
        <p className="text-slate-400">Learn from our comprehensive guides and tutorials</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, idx) => (
          <Card key={idx} className="glass p-6 hover:bg-white/20 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="text-purple-400">{resource.icon}</div>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                {resource.type}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{resource.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{resource.downloads} downloads</span>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
