import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2, Pin, ExternalLink } from "lucide-react"

export default function AdminNoticesPage() {
  const notices = [
    { title: "Mega Mock Test Registration Open", target: "All Students", date: "Oct 25, 2023", pinned: true, status: "Published" },
    { title: "Diwali Holidays Announcement", target: "All Students", date: "Oct 28, 2023", pinned: false, status: "Draft" },
    { title: "Physical Training Ground Change", target: "Police Bharti", date: "Oct 22, 2023", pinned: false, status: "Published" },
    { title: "MPSC Foundation Batch Starting", target: "New Admissions", date: "Oct 15, 2023", pinned: false, status: "Archived" },
  ]

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Notice Board Management</h2>
          <p className="text-muted-foreground">Publish announcements, alerts, and updates to student dashboards.</p>
        </div>
        <Button variant="gradient" className="rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Post New Notice
        </Button>
      </div>

      <Card className="border-none shadow-sm bg-white">
        <CardContent className="p-0">
          <div className="p-4 border-b flex gap-4 bg-slate-50/50">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search notices..." className="pl-9 bg-white" />
            </div>
            <select className="h-11 rounded-lg border border-input bg-white px-3 py-2 text-sm">
              <option>All Targets</option>
              <option>All Students</option>
              <option>Police Bharti</option>
              <option>SSC / Central</option>
            </select>
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
                        {notice.pinned && <Pin className="h-3.5 w-3.5 text-accent fill-accent" />}
                        <span className="font-medium text-foreground">{notice.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{notice.target}</td>
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
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-slate-900">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
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
