import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Moon, Activity, Flame, Shield, HeartPulse, Stethoscope, Apple } from "lucide-react"

export default function PhysicalTrainingPage() {
  const sections = [
    { title: "Ground Training", desc: "Rigorous ground training exercises to build overall strength and stamina.", icon: Activity },
    { title: "Running & Endurance", desc: "Targeted running practices for 1600m and 5km events with pacing strategies.", icon: Flame },
    { title: "Obstacle Training", desc: "Specialized obstacle courses mimicking actual exam physical tests.", icon: Shield },
    { title: "Medical Preparation", desc: "Pre-medical checkups and guidance for strict defense medical standards.", icon: Stethoscope },
    { title: "Diet Guidance", desc: "Personalized nutrition plans to ensure maximum energy and muscle recovery.", icon: Apple },
    { title: "Cardio Health", desc: "Heart-rate monitored exercises to improve cardiovascular capacity.", icon: HeartPulse },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl pt-8">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white hover:bg-white/30 border-none">Physical Excellence</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Elite Physical Training
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Clearing the written exam is only half the battle. We forge unbreakable physical and mental endurance required for uniformed services.
          </p>
        </div>
      </section>

      {/* Batches */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-xl shadow-blue-900/10 bg-white">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Sun className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Morning Batches</h3>
                  <p className="text-muted-foreground mb-4">5:30 AM to 8:00 AM</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Warm-up & Stretching</li>
                    <li>• Long Distance Running</li>
                    <li>• Core Strengthening</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl shadow-blue-900/10 bg-white">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-indigo-100 p-4 rounded-2xl">
                  <Moon className="h-8 w-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Evening Batches</h3>
                  <p className="text-muted-foreground mb-4">4:30 PM to 7:00 PM</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Sprint Training</li>
                    <li>• Obstacle Practice</li>
                    <li>• Cool-down & Flexibility</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Aspects */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Training</h2>
            <p className="text-lg text-muted-foreground">Every aspect of your physical fitness is monitored and improved by ex-military experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((sec, i) => (
              <Card key={i} className="border-none shadow-md hover:-translate-y-1 transition-transform bg-white">
                <CardContent className="p-8">
                  <sec.icon className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">{sec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {sec.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
