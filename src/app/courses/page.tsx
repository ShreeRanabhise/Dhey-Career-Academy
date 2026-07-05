import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, ChevronRight, BookOpen, Target, FileText } from "lucide-react"

export default function CoursesPage() {
  const categories = ["All", "Defense", "State Exams", "Central Exams", "Banking"]
  
  const courses = [
    { title: "Police Bharti", category: "State Exams", duration: "6 Months", tag: "Popular", icon: Target },
    { title: "SSC GD / CHSL", category: "Central Exams", duration: "8 Months", tag: "Trending", icon: BookOpen },
    { title: "Army Agniveer", category: "Defense", duration: "3 Months", tag: "Fast Track", icon: Award },
    { title: "MPSC Foundation", category: "State Exams", duration: "1 Year", tag: "Comprehensive", icon: FileText },
    { title: "Navy MR/SSR", category: "Defense", duration: "6 Months", tag: "Specialized", icon: Target },
    { title: "Air Force X & Y", category: "Defense", duration: "6 Months", tag: "Technical", icon: Target },
    { title: "Railway RRB", category: "Central Exams", duration: "6 Months", tag: "Trending", icon: BookOpen },
    { title: "IBPS PO/Clerk", category: "Banking", duration: "6 Months", tag: "Intensive", icon: FileText },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Our Programs</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Comprehensive Courses
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our specialized coaching programs designed to guarantee your selection in prestigious government organizations.
          </p>
        </div>

        {/* Categories Filter (Visual Only for now) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <Button key={i} variant={i === 0 ? "default" : "outline"} className={i !== 0 ? "bg-white" : ""}>
              {cat}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <Card key={i} className="group cursor-pointer hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg">
              <CardHeader className="relative pb-4 border-b border-border/50">
                <Badge className="absolute top-4 right-4 bg-accent text-white border-none">{course.tag}</Badge>
                <course.icon className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-primary font-medium">{course.category} • {course.duration}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary/60" /> Daily Expert Lectures</li>
                  <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary/60" /> Free Study Material & PDFs</li>
                  <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary/60" /> Weekly Mock Tests (CBT)</li>
                  <li className="flex items-center gap-3"><div className="h-2 w-2 rounded-full bg-primary/60" /> Doubt Clearing Sessions</li>
                </ul>
                <div className="flex gap-4">
                  <Button className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
                    View Syllabus
                  </Button>
                  <Button asChild className="flex-1" variant="default">
                    <Link href="/admission">Enroll</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
