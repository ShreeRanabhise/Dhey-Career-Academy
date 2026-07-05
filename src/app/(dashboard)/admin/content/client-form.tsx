"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateHomePageContent } from "@/app/cms-actions"

export default function ContentForm({ initialData }: { initialData: any }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)
  
  const parsedStats: any = typeof initialData.stats === 'string' 
    ? JSON.parse(initialData.stats) 
    : (initialData.stats || [])

  async function handleAction(formData: FormData) {
    setLoading(true)
    setMessage(null)
    const result = await updateHomePageContent(formData)
    if (result.success) {
      setMessage({ type: 'success', text: 'Homepage content updated successfully!' })
    } else {
      setMessage({ type: 'error', text: result.error || 'Failed to update.' })
    }
    setLoading(false)
  }

  return (
    <form action={handleAction} className="space-y-6">
      {message && (
        <div className={`p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.text}
        </div>
      )}

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Hero Section</CardTitle>
          <CardDescription>The main introduction at the top of the homepage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heroBadge">Top Badge Text</Label>
            <Input id="heroBadge" name="heroBadge" defaultValue={initialData.heroBadge} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroTitle">Main Title</Label>
            <Input id="heroTitle" name="heroTitle" defaultValue={initialData.heroTitle} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroSubtitle">Subtitle / Description</Label>
            <textarea 
              id="heroSubtitle" 
              name="heroSubtitle" 
              defaultValue={initialData.heroSubtitle} 
              rows={3}
              className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Key Statistics</CardTitle>
          <CardDescription>The four numbers displayed below the hero section.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parsedStats.map((stat: any, i: number) => (
            <div key={i} className="flex gap-2 items-end border p-4 rounded-lg bg-slate-50">
              <div className="space-y-2 flex-1">
                <Label>Label {i+1}</Label>
                <Input name={`stat_${i}_label`} defaultValue={stat.label} />
              </div>
              <div className="space-y-2 flex-1">
                <Label>Value {i+1}</Label>
                <Input name={`stat_${i}_value`} defaultValue={stat.value} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Sections Titles</CardTitle>
          <CardDescription>The headers for Features, Courses, and CTA sections.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Features Title</Label>
              <Input name="featuresTitle" defaultValue={initialData.featuresTitle} />
            </div>
            <div className="space-y-2">
              <Label>Features Subtitle</Label>
              <Input name="featuresSub" defaultValue={initialData.featuresSub} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Courses Title</Label>
              <Input name="coursesTitle" defaultValue={initialData.coursesTitle} />
            </div>
            <div className="space-y-2">
              <Label>Courses Subtitle</Label>
              <Input name="coursesSub" defaultValue={initialData.coursesSub} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>CTA Title</Label>
              <Input name="ctaTitle" defaultValue={initialData.ctaTitle} />
            </div>
            <div className="space-y-2">
              <Label>CTA Subtitle</Label>
              <Input name="ctaSub" defaultValue={initialData.ctaSub} />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button size="lg" variant="gradient" type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save All Changes"}
        </Button>
      </div>
    </form>
  )
}
