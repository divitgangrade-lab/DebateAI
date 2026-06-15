'use client'

import { DashboardHeader } from '@/components/dashboard/header'
import { StatCard } from '@/components/dashboard/stat-card'
import { ProgressChart } from '@/components/dashboard/progress-chart'
import { SkillRadar } from '@/components/dashboard/skill-radar'
import { RecentSessions } from '@/components/dashboard/recent-sessions'
import { Achievements } from '@/components/dashboard/achievements'
import { BarChart3, Trophy, Zap, Clock } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Debates Completed"
          value="24"
          change="+3 this week"
          icon={<BarChart3 className="w-8 h-8 text-cyan-400" />}
        />
        <StatCard
          title="MUN Sessions"
          value="12"
          change="+1 this week"
          icon={<Trophy className="w-8 h-8 text-purple-400" />}
        />
        <StatCard
          title="Average Score"
          value="78%"
          change="+5% improvement"
          icon={<Zap className="w-8 h-8 text-yellow-400" />}
        />
        <StatCard
          title="Speaking Time"
          value="12h 45m"
          change="+2h this week"
          icon={<Clock className="w-8 h-8 text-green-400" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProgressChart />
        </div>
        <div>
          <SkillRadar />
        </div>
      </div>

      {/* Recent Sessions and Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentSessions />
        </div>
        <div>
          <Achievements />
        </div>
      </div>
    </div>
  )
}
