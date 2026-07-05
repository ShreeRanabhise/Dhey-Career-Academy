"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { submitContact } from "@/app/actions"
import { useState } from "react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  async function handleAction(formData: FormData) {
    setLoading(true)
    setMessage(null)
    const result = await submitContact(formData)
    if (result.success) {
      setMessage({ type: 'success', text: 'Message sent successfully! We will get back to you soon.' })
    } else {
      setMessage({ type: 'error', text: result.error || 'Something went wrong.' })
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our courses, physical training, or admission process? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Academy</h3>
                  <p className="text-muted-foreground">
                    123 Academy Road, Education Hub<br />
                    Pune, Maharashtra 411001
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    Main Office: +91 98765 43210<br />
                    Admissions: +91 98765 43211
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@dheyacademy.com<br />
                    admissions@dheyacademy.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 8:00 AM - 8:00 PM<br />
                    Sunday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-xl shadow-blue-900/5 bg-white">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form action={handleAction} className="flex flex-col gap-6">
                {message && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {message.text}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Rahul" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Mane" required />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="course">Interested Course</Label>
                  <Input id="course" name="course" placeholder="e.g. Police Bharti, SSC GD" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <Button size="lg" className="w-full mt-2" variant="gradient" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
