import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2, Users } from "lucide-react"

export default function AdminMockTestsPage() {
  const tests = [
    { title: "Weekly Police Bharti Full Mock", course: "Police Bharti", date: "Oct 29, 2023", participants: 142, status: "Active" },
    { title: "Math & Reasoning Sectional", course: "All Courses", date: "Oct 30, 2023", participants: 0, status: "Scheduled" },
    { title: "SSC GD Complete Test - 1", course: "SSC GD", date: "Oct 22, 2023", participants: 85, status: "Completed" },
  ]

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Manage Mock Tests</h2>
          <p className="text-muted-foreground">Create, edit, and analyze performance across all mock tests.</p>
        </div>
        <Button variant="gradient" className="rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Create New Test
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="p-0">
          <div className="p-4 border-b flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search mock tests..." className="pl-9 bg-slate-50" />
            </div>
            <select className="h-11 rounded-lg border border-input bg-slate-50 px-3 py-2 text-sm">
              <option>All Status</option>
              <option>Active</option>
              <option>Scheduled</option>
              <option>Completed</option>
            </select>
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
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:bg-red-50 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
