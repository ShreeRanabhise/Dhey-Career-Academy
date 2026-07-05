import { Card, CardContent } from "@/components/ui/card"
import { Target, Flag, Trophy, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <Badge variant="accent" className="mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            About DHEY Career Academy
          </h1>
          <p className="text-lg text-muted-foreground">
            Founded with a vision to transform dedicated aspirants into successful government officers. We are the architects of your future.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg bg-blue-50/50">
              <CardContent className="p-8">
                <Target className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and result-oriented educational institution in India for government competitive exams and physical training, fostering an environment where every student can achieve their maximum potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-orange-50/50">
              <CardContent className="p-8">
                <Flag className="h-10 w-10 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional coaching, rigorous physical training, and unwavering support to our students. We strive to instill discipline, knowledge, and physical endurance required for careers in defense and civil services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats / Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">A Legacy of Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold">10+ Years</h4>
              <p className="text-muted-foreground mt-2">Of Dedicated Service</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold">State Rankers</h4>
              <p className="text-muted-foreground mt-2">Consistent Top Results</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold">95% Success</h4>
              <p className="text-muted-foreground mt-2">Clearance Rate in Physicals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
