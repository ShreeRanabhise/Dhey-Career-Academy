import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function FacultyPage() {
  const faculty = [
    {
      name: "Suresh Patil",
      role: "Director & Head Coach",
      qual: "Ex-Army, M.A.",
      exp: "15 Years Experience",
      subjects: ["Physical Training", "Motivation"],
      initials: "SP"
    },
    {
      name: "Ramesh Deshmukh",
      role: "Senior Faculty - Math",
      qual: "M.Sc. Mathematics",
      exp: "10 Years Experience",
      subjects: ["Mathematics", "Reasoning"],
      initials: "RD"
    },
    {
      name: "Priya Sharma",
      role: "General Studies Expert",
      qual: "UPSC Interview Appeared",
      exp: "8 Years Experience",
      subjects: ["History", "Polity"],
      initials: "PS"
    },
    {
      name: "Vikram Singh",
      role: "Physical Trainer",
      qual: "NIS Athletics",
      exp: "12 Years Experience",
      subjects: ["Ground Training", "Endurance"],
      initials: "VS"
    }
  ]

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl pt-16 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Meet Our Experts
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn from the best. Our faculty comprises ex-defense personnel and highly qualified academicians dedicated to your success.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, i) => (
            <Card key={i} className="border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-md">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center pt-2">
                <div className="flex flex-col gap-2 mb-6">
                  <span className="text-sm text-muted-foreground">{member.qual}</span>
                  <span className="text-sm font-semibold">{member.exp}</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.subjects.map((sub, j) => (
                    <Badge key={j} variant="secondary" className="font-normal">{sub}</Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-4 text-muted-foreground">
                  <FaLinkedin className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                  <FaTwitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                  <FaFacebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
