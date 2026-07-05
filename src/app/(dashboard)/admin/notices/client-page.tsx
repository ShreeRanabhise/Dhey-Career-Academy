"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, Plus, Trash2, Pin } from "lucide-react"
import { createNotice, deleteNotice } from "@/app/cms-actions"

export default function NoticesClient({ initialNotices }: { initialNotices: any[] }) {
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [notices, setNotices] = useState(initialNotices || [])

  async function handleCreate(formData: FormData) {
    setLoading(true)
    const result = await createNotice(formData)
    if (result.success) {
      setShowForm(false)
      // Optimistic update isn't strictly necessary since we revalidate, but we can just reload or let Next.js handle it
      window.location.reload()
    }
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this notice?")) {
      await deleteNotice(id)
      setNotices(notices.filter(n => n.id !== id))
    }
  }

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Notice Board Management</h2>
          <p className="text-muted-foreground">Publish announcements, alerts, and updates to the homepage.</p>
        </div>
        <Button variant="gradient" className="rounded-full" onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" /> {showForm ? "Cancel" : "Post New Notice"}
        </Button>
      </div>

      {showForm && (
        <Card className="border-none shadow-sm bg-slate-50">
          <CardHeader>
            <CardTitle>Create New Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={handleCreate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Notice Title</Label>
                  <Input name="title" required placeholder="e.g., Holiday Announcement" />
                </div>
                <div className="space-y-2">
                  <Label>Target Audience</Label>
                  <Input name="targetAudience" required placeholder="e.g., All Students, Police Bharti" />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input name="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <select name="status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2 flex items-center gap-2 mt-4">
                  <input type="checkbox" id="isPinned" name="isPinned" className="h-4 w-4 rounded border-gray-300 text-primary" />
                  <Label htmlFor="isPinned">Pin to top</Label>
                </div>
              </div>
              <Button type="submit" disabled={loading} variant="gradient">
                {loading ? "Publishing..." : "Publish Notice"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Card className="border-none shadow-sm bg-white">
        <CardContent className="p-0">
          <div className="p-4 border-b flex gap-4 bg-slate-50/50">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search notices..." className="pl-9 bg-white" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-slate-50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">Notice Title</th>
                  <th className="px-6 py-4">Target Audience</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, i) => (
                  <tr key={i} className="border-b border-border hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {notice.isPinned && <Pin className="h-3.5 w-3.5 text-accent fill-accent" />}
                        <span className="font-medium text-foreground">{notice.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{notice.targetAudience}</td>
                    <td className="px-6 py-4 text-muted-foreground">{notice.date}</td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={
                          notice.status === "Published" ? "default" : 
                          notice.status === "Draft" ? "secondary" : "outline"
                        }
                      >
                        {notice.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(notice.id)} className="h-8 w-8 text-red-600 hover:bg-red-50 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {notices.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                      No notices found. Create one above!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
