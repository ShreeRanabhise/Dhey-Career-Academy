import { getMockTests } from "@/app/cms-actions"
import MockTestsClient from "./client-page"

export const dynamic = "force-dynamic"

export default async function AdminMockTestsPage() {
  const result = await getMockTests()
  const tests = result.success ? result.data : []

  return <MockTestsClient initialTests={tests || []} />
}
