import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, BookOpen, Users, Trophy, ChevronRight, Target, Dumbbell, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-24 pb-32">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
          <Badge variant="accent" className="mb-6 px-4 py-1 text-sm rounded-full">
            #1 Academy in Maharashtra
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mb-8 leading-tight">
            Build Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">DHEY Career Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
            Government Exam Preparation & Physical Training Excellence. Start your journey towards a prestigious career today.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" variant="gradient" className="rounded-full shadow-xl shadow-primary/20 text-lg px-8">
              Enroll Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 bg-white/50 backdrop-blur-sm border-2">
              Explore Courses
            </Button>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-border/50">
            {[
              { label: "Selected Students", value: "5,000+" },
              { label: "Expert Faculty", value: "50+" },
              { label: "Mock Tests", value: "1,200+" },
              { label: "Success Rate", value: "95%" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-foreground mb-2">{stat.value}</span>
                <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose DHEY?</h2>
            <p className="text-lg text-muted-foreground">We provide a comprehensive ecosystem designed to guarantee your success in competitive exams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Government Exam Coaching", desc: "Expert guidance for SSC, MPSC, Police, Army, Navy, and Air Force with updated syllabus." },
              { icon: Dumbbell, title: "Physical Training", desc: "Dedicated ground training, endurance building, and obstacle courses by ex-military trainers." },
              { icon: Trophy, title: "Mock Tests & Daily Practice", desc: "Computer-based mock tests with negative marking and detailed performance analytics." },
              { icon: Users, title: "Personal Guidance", desc: "One-on-one mentorship, doubt-clearing sessions, and regular parent-teacher meetings." },
              { icon: ShieldCheck, title: "Hostel Facility", desc: "Safe, secure, and disciplined hostel facilities with nutritious diet plans." },
              { icon: Target, title: "Medical Preparation", desc: "Pre-medical checkups and guidance to ensure you meet all physical requirements." },
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Popular Courses</h2>
              <p className="text-lg text-muted-foreground">Choose from our specialized programs designed for absolute success.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex mt-4 md:mt-0 group">
              View All Courses <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Police Bharti", duration: "6 Months", tag: "Most Popular" },
              { title: "SSC GD / CHSL", duration: "8 Months", tag: "Trending" },
              { title: "Army Agniveer", duration: "3 Months", tag: "Fast Track" },
              { title: "MPSC Foundation", duration: "1 Year", tag: "Comprehensive" },
            ].map((course, i) => (
              <Card key={i} className="group cursor-pointer hover:border-primary/50 transition-colors">
                <CardHeader className="relative pb-0">
                  <Badge className="absolute top-4 right-4 bg-accent text-white border-none">{course.tag}</Badge>
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
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 md:hidden">
            View All Courses
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Serve the Nation?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Join DHEY Career Academy today and take the first step towards a prestigious and secure government career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 text-lg w-full sm:w-auto">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 text-lg w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
