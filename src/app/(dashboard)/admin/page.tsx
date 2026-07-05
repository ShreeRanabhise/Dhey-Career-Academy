import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, IndianRupee, FileText, Activity, TrendingUp, Target } from "lucide-react"

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Students", value: "1,248", icon: Users, trend: "+12% this month" },
    { title: "Active Courses", value: "12", icon: BookOpen, trend: "Stable" },
    { title: "Pending Admissions", value: "45", icon: FileText, trend: "Requires action" },
    { title: "Revenue (MTD)", value: "₹4.2L", icon: IndianRupee, trend: "+8% this month" },
  ]

  const recentAdmissions = [
    { name: "Rahul Mane", course: "Police Bharti", date: "Today", status: "Pending" },
    { name: "Priya Jadhav", course: "SSC GD", date: "Yesterday", status: "Approved" },
    { name: "Amit Desai", course: "Army Agniveer", date: "Yesterday", status: "Approved" },
    { name: "Sneha Patil", course: "MPSC Foundation", date: "Oct 24", status: "Pending" },
  ]

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                {stat.trend.includes("+") ? <TrendingUp className="h-3 w-3 text-green-500" /> : <Activity className="h-3 w-3" />}
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Admissions */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Recent Admissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-slate-50 border-b border-border">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">Student Name</th>
                    <th className="px-4 py-3">Course</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAdmissions.map((admission, i) => (
                    <tr key={i} className="border-b border-border hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-4 font-medium">{admission.name}</td>
                      <td className="px-4 py-4 text-muted-foreground">{admission.course}</td>
                      <td className="px-4 py-4 text-muted-foreground">{admission.date}</td>
                      <td className="px-4 py-4">
                        <Badge variant={admission.status === "Approved" ? "default" : "secondary"}>
                          {admission.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <button className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 transition-colors text-sm font-medium text-left">
              <div className="bg-blue-100 p-2 rounded-md"><Users className="h-4 w-4 text-blue-600" /></div>
              Add New Student
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 transition-colors text-sm font-medium text-left">
              <div className="bg-green-100 p-2 rounded-md"><FileText className="h-4 w-4 text-green-600" /></div>
              Post Notice
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 transition-colors text-sm font-medium text-left">
              <div className="bg-orange-100 p-2 rounded-md"><Target className="h-4 w-4 text-orange-600" /></div>
              Create Mock Test
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
