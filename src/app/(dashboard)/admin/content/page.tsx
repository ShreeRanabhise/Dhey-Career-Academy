import { getHomePageContent } from "@/app/cms-actions"
import ContentForm from "./client-form"

export default async function WebsiteContentPage() {
  const result = await getHomePageContent()
  const content = result.success ? result.data : null

  if (!content) {
    return <div>Failed to load content settings.</div>
  }

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Website Content</h2>
        <p className="text-muted-foreground">Manage the text, features, and statistics displayed on the public homepage.</p>
      </div>

      <ContentForm initialData={content} />
    </div>
  )
}
