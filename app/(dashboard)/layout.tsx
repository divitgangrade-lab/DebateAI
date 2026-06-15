'use client'

import { Sidebar } from '@/components/dashboard/sidebar'
import { useSidebar } from '@/lib/providers'
import { memo } from 'react'

const DashboardContent = memo(function DashboardContent({
  children,
  sidebarOpen,
}: {
  children: React.ReactNode
  sidebarOpen: boolean
}) {
  return (
    <main className={`flex-1 overflow-auto transition-all duration-300 ${
      sidebarOpen ? 'ml-64' : 'ml-20'
    }`}>
      <div className="p-8">
        {children}
      </div>
    </main>
  )
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { sidebarOpen, setSidebarOpen } = useSidebar()

  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <DashboardContent sidebarOpen={sidebarOpen}>
        {children}
      </DashboardContent>
    </div>
  )
}
