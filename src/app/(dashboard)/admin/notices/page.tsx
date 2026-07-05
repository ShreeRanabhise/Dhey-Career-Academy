import { getNotices } from "@/app/cms-actions"
import NoticesClient from "./client-page"

export const dynamic = "force-dynamic"

export default async function AdminNoticesPage() {
  const result = await getNotices()
  const notices = result.success ? result.data : []

  return <NoticesClient initialNotices={notices || []} />
}
