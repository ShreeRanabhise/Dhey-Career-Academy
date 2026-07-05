"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

import { submitAdmission } from "@/app/actions"
import { useState } from "react"

export default function AdmissionPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  async function handleAction(formData: FormData) {
    setLoading(true)
    setMessage(null)
    const result = await submitAdmission(formData)
    if (result.success) {
      setMessage({ type: 'success', text: 'Application submitted successfully! Our team will contact you soon.' })
    } else {
      setMessage({ type: 'error', text: result.error || 'Something went wrong.' })
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-12 pb-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Online Application</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Admission Form
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete the form below to initiate your admission process. Our team will review your application and contact you for further steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl shadow-blue-900/5 bg-white">
            <CardContent className="p-8 md:p-12">
              <form action={handleAction} className="flex flex-col gap-8">
                {message && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {message.text}
                  </div>
                )}
                {/* Personal Details */}
                <div>
                  <h3 className="text-xl font-bold mb-6 pb-2 border-b">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="fullName">Full Name (As per Aadhar)</Label>
                      <Input id="fullName" name="fullName" placeholder="Rahul Ramesh Mane" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" name="dob" type="date" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="gender">Gender</Label>
                      <select id="gender" name="gender" className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="category">Category</Label>
                      <select id="category" name="category" className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background" required>
                        <option value="">Select Category</option>
                        <option value="OPEN">OPEN</option>
                        <option value="OBC">OBC</option>
                        <option value="SC/ST">SC/ST</option>
                        <option value="VJNT">VJNT</option>
                        <option value="EWS">EWS</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-xl font-bold mb-6 pb-2 border-b">Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input id="mobile" name="mobile" type="tel" placeholder="10-digit number" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="rahul@example.com" required />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <Label htmlFor="address">Permanent Address</Label>
                      <Input id="address" name="address" placeholder="Full residential address" required />
                    </div>
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <h3 className="text-xl font-bold mb-6 pb-2 border-b">Course Selection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="courseSelect">Select Course</Label>
                      <select id="courseSelect" name="courseSelect" className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background" required>
                        <option value="">Select Course</option>
                        <option value="Police Bharti">Police Bharti (6 Months)</option>
                        <option value="SSC GD">SSC GD (8 Months)</option>
                        <option value="Army Agniveer">Army Agniveer (3 Months)</option>
                        <option value="MPSC Foundation">MPSC Foundation (1 Year)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="hostel">Need Hostel Facility?</Label>
                      <select id="hostel" name="hostel" className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background" required>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full mt-4 text-lg py-6" variant="gradient" type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to our Terms & Conditions.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
