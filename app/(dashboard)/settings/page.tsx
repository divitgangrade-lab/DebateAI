'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings, Bell, Lock, Moon, LogOut } from 'lucide-react'

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="glass p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <Settings className="w-5 h-5 mr-2 text-cyan-400" />
          Profile Settings
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <Input
              type="text"
              placeholder="Your name"
              defaultValue="John Doe"
              className="bg-slate-700/50 border-slate-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              placeholder="your@email.com"
              defaultValue="john@example.com"
              className="bg-slate-700/50 border-slate-600"
            />
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500">
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="glass p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <Bell className="w-5 h-5 mr-2 text-purple-400" />
          Notifications
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-slate-400">Get updates about your sessions</p>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-5 h-5"
            />
          </div>
        </div>
      </Card>

      {/* Display Settings */}
      <Card className="glass p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <Moon className="w-5 h-5 mr-2 text-cyan-400" />
          Display
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-slate-400">Use dark theme</p>
            </div>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="w-5 h-5"
            />
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="glass p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <Lock className="w-5 h-5 mr-2 text-green-400" />
          Security
        </h2>
        <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-700">
          Change Password
        </Button>
      </Card>

      {/* Logout */}
      <Card className="glass p-6">
        <Button variant="destructive" className="w-full">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </Card>
    </div>
  )
}
