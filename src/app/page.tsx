import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, BookOpen, Users, Trophy, ChevronRight, Target, Dumbbell, Award, Bell } from "lucide-react"
import { getHomePageContent, getNotices } from "./cms-actions"
import { prisma } from "@/lib/prisma"

// A helper to map string names to Lucide icons dynamically
const iconMap: Record<string, any> = {
  BookOpen, Dumbbell, Trophy, Users, ShieldCheck, Target, Award, Bell
}

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const contentResult = await getHomePageContent()
  const content = contentResult.success ? contentResult.data : null

  const noticesResult = await getNotices()
  const allNotices = (noticesResult.success && noticesResult.data) ? noticesResult.data : []
  const publishedNotices = allNotices.filter((n: any) => n.status === "Published")

  // Fetch top 4 published courses
  const courses = await prisma.course.findMany({
    where: { published: true },
    take: 4,
    orderBy: { createdAt: 'desc' }
  })

  if (!content) {
    return <div className="p-20 text-center">Loading...</div>
  }

  const stats: any = content.stats || []
  const features: any = content.features || []

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-24 pb-32">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
          <Badge variant="accent" className="mb-6 px-4 py-1 text-sm rounded-full">
            {content.heroBadge}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mb-8 leading-tight">
            {content.heroTitle.split("DHEY Career Academy")[0]} 
            {content.heroTitle.includes("DHEY Career Academy") && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">DHEY Career Academy</span>
            )}
            {content.heroTitle.split("DHEY Career Academy")[1]}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild size="lg" variant="gradient" className="rounded-full shadow-xl shadow-primary/20 text-lg px-8">
              <Link href="/admission">Enroll Now <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8 bg-white/50 backdrop-blur-sm border-2">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-border/50">
            {stats.map((stat: any, i: number) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-foreground mb-2">{stat.value}</span>
                <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      {publishedNotices.length > 0 && (
        <section className="py-12 bg-blue-50 border-y border-blue-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-600 rounded-full text-white">
                <Bell className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Notice Board</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {publishedNotices.map((notice: any) => (
                <div key={notice.id} className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 relative overflow-hidden">
                  {notice.isPinned && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                      PINNED
                    </div>
                  )}
                  <h3 className="font-bold text-lg mb-1 pr-6">{notice.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">{notice.targetAudience}</Badge>
                    <span>•</span>
                    <span>{notice.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{content.featuresTitle}</h2>
            <p className="text-lg text-muted-foreground">{content.featuresSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature: any, i: number) => {
              const Icon = iconMap[feature.iconName] || BookOpen
              return (
                <Card key={i} className="border-none shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {feature.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Courses Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{content.coursesTitle}</h2>
              <p className="text-lg text-muted-foreground">{content.coursesSub}</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex mt-4 md:mt-0 group">
              <Link href="/courses">
                View All Courses <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.length > 0 ? courses.map((course: any, i: number) => (
              <Card key={i} className="group cursor-pointer hover:border-primary/50 transition-colors">
                <CardHeader className="relative pb-0">
                  <Badge className="absolute top-4 right-4 bg-accent text-white border-none">Trending</Badge>
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className="font-medium text-foreground">{course.duration}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Daily Lectures</li>
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Physical Training</li>
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Weekly Mock Tests</li>
                  </ul>
                  <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
                    <Link href="/admission">Enroll</Link>
                  </Button>
                </CardContent>
              </Card>
            )) : (
              <div className="col-span-full text-center py-12 text-muted-foreground border-2 border-dashed rounded-xl">
                No published courses found. Add some in the Admin Panel!
              </div>
            )}
          </div>
          <Button asChild variant="outline" className="w-full mt-8 md:hidden">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{content.ctaTitle}</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            {content.ctaSub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 text-lg w-full sm:w-auto">
              <Link href="/admission">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 text-lg w-full sm:w-auto">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
