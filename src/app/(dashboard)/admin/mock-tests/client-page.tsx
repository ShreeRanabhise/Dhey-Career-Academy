"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, Plus, Trash2, Users } from "lucide-react"
import { createMockTest, deleteMockTest } from "@/app/cms-actions"

export default function MockTestsClient({ initialTests }: { initialTests: any[] }) {
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [tests, setTests] = useState(initialTests || [])

  async function handleCreate(formData: FormData) {
    setLoading(true)
    const result = await createMockTest(formData)
    if (result.success) {
      setShowForm(false)
      window.location.reload()
    }
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this mock test?")) {
      await deleteMockTest(id)
      setTests(tests.filter(t => t.id !== id))
    }
  }

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Manage Mock Tests</h2>
          <p className="text-muted-foreground">Create and manage mock tests across all courses.</p>
        </div>
        <Button variant="gradient" className="rounded-full" onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" /> {showForm ? "Cancel" : "Create New Test"}
        </Button>
      </div>

      {showForm && (
        <Card className="border-none shadow-sm bg-slate-50">
          <CardHeader>
            <CardTitle>Create New Mock Test</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={handleCreate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Test Title</Label>
                  <Input name="title" required placeholder="e.g., Weekly Police Bharti Full Mock" />
                </div>
                <div className="space-y-2">
                  <Label>Course</Label>
                  <Input name="course" required placeholder="e.g., Police Bharti, SSC GD" />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input name="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <select name="status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="Scheduled">Scheduled</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <Button type="submit" disabled={loading} variant="gradient">
                {loading ? "Creating..." : "Create Test"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <Card className="border-none shadow-sm">
        <CardContent className="p-0">
          <div className="p-4 border-b flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search mock tests..." className="pl-9 bg-slate-50" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-slate-50/50">
                <tr>
                  <th className="px-6 py-4">Test Title</th>
                  <th className="px-6 py-4">Course</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Participants</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test, i) => (
                  <tr key={i} className="border-b border-border hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{test.title}</td>
                    <td className="px-6 py-4 text-muted-foreground">{test.course}</td>
                    <td className="px-6 py-4 text-muted-foreground">{test.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" /> {test.participants}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={
                          test.status === "Active" ? "default" : 
                          test.status === "Scheduled" ? "secondary" : "outline"
                        }
                      >
                        {test.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(test.id)} className="h-8 w-8 text-red-600 hover:bg-red-50 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {tests.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                      No mock tests found. Create one above!
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
