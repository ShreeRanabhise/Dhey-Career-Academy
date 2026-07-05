"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, Users, BookOpen, GraduationCap, 
  FileText, Bell, CreditCard, Settings, Menu, X, LogOut,
  Target, Shield, Award, Activity
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  const pathname = usePathname()

  // In a real app, this would come from NextAuth session
  const userRole = pathname.includes("/admin") ? "ADMIN" : "STUDENT"

  const adminLinks = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/students", label: "Students", icon: Users },
    { href: "/admin/courses", label: "Courses", icon: BookOpen },
    { href: "/admin/admissions", label: "Admissions", icon: FileText },
    { href: "/admin/mock-tests", label: "Mock Tests", icon: Target },
    { href: "/admin/notices", label: "Notices", icon: Bell },
    { href: "/admin/payments", label: "Payments", icon: CreditCard },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  const studentLinks = [
    { href: "/student", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/courses", label: "My Courses", icon: BookOpen },
    { href: "/student/attendance", label: "Attendance", icon: Activity },
    { href: "/student/mock-tests", label: "Mock Tests", icon: Target },
    { href: "/student/results", label: "Results", icon: Award },
    { href: "/student/fees", label: "Fee Status", icon: CreditCard },
    { href: "/student/notices", label: "Notices", icon: Bell },
  ]

  const links = userRole === "ADMIN" ? adminLinks : studentLinks

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white border-r border-border transition-all duration-300 flex flex-col",
          isSidebarOpen ? "w-64" : "w-0 md:w-20 overflow-hidden"
        )}
      >
        <div className="h-16 flex items-center justify-center border-b px-4 shrink-0">
          <Link href="/" className="flex items-center gap-2 overflow-hidden">
            <div className="bg-primary text-white p-1.5 rounded-lg shrink-0">
              <GraduationCap className="h-5 w-5" />
            </div>
            {isSidebarOpen && (
              <span className="font-bold tracking-tight text-foreground whitespace-nowrap">
                DHEY <span className="text-primary">Academy</span>
              </span>
            )}
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group",
                pathname === link.href 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:bg-slate-100 hover:text-foreground"
              )}
            >
              <link.icon className={cn("h-5 w-5 shrink-0", pathname === link.href ? "text-white" : "text-slate-400 group-hover:text-foreground")} />
              {isSidebarOpen && <span className="font-medium text-sm whitespace-nowrap">{link.label}</span>}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 w-full transition-colors">
            <LogOut className="h-5 w-5 shrink-0" />
            {isSidebarOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 text-muted-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="font-semibold text-lg hidden sm:block">
              {userRole === "ADMIN" ? "Admin Portal" : "Student Portal"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex rounded-full">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              {userRole}
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
              {userRole === "ADMIN" ? "AD" : "ST"}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50/50">
          {children}
        </main>
      </div>
    </div>
  )
}
