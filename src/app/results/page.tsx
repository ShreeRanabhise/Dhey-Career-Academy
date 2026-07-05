import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star } from "lucide-react"

export default function ResultsPage() {
  const successStories = [
    {
      name: "Rahul Mane",
      exam: "Maharashtra Police",
      year: "2023",
      quote: "The physical training at DHEY made all the difference. I cleared the ground test with full marks.",
      initials: "RM"
    },
    {
      name: "Pooja Jadhav",
      exam: "MPSC State Services",
      year: "2023",
      quote: "The test series and daily practice sessions were exactly what I needed to boost my score.",
      initials: "PJ"
    },
    {
      name: "Sagar Patil",
      exam: "SSC GD",
      year: "2022",
      quote: "From an average student to a central government employee, the faculty supported me throughout.",
      initials: "SP"
    },
    {
      name: "Amit Desai",
      exam: "Army Agniveer",
      year: "2023",
      quote: "Discipline and rigorous training are the hallmarks of this academy. Proud to serve the nation.",
      initials: "AD"
    },
    {
      name: "Sneha Kadam",
      exam: "Talathi Bharti",
      year: "2023",
      quote: "The study material provided was highly relevant to the new exam pattern.",
      initials: "SK"
    },
    {
      name: "Vikram Pawar",
      exam: "Railway RRB",
      year: "2022",
      quote: "Math and Reasoning were my weak points, but the intensive coaching here helped me secure a high rank.",
      initials: "VP"
    }
  ]

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 pt-16 text-center max-w-3xl mb-16">
        <Badge variant="accent" className="mb-4">Our Pride</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Student Success Stories
        </h1>
        <p className="text-lg text-muted-foreground">
          Thousands of our students are currently serving in various government departments. Become our next success story.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Highlight Stats */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row justify-around items-center gap-8 shadow-2xl shadow-primary/20">
          <div className="text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-4xl font-black mb-2">5,000+</h3>
            <p className="text-blue-100 font-medium">Total Selections</p>
          </div>
          <div className="hidden md:block w-px h-24 bg-white/20"></div>
          <div className="text-center">
            <Star className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-4xl font-black mb-2">Top 10</h3>
            <p className="text-blue-100 font-medium">State Rankers Every Year</p>
          </div>
          <div className="hidden md:block w-px h-24 bg-white/20"></div>
          <div className="text-center">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-4xl font-black mb-2">95%</h3>
            <p className="text-blue-100 font-medium">Physical Test Clearance</p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, i) => (
            <Card key={i} className="border-none shadow-md bg-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Trophy className="h-24 w-24" />
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {story.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className="text-sm font-medium text-primary">{story.exam} - {story.year}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{story.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
