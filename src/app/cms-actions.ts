"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

const DEFAULT_HOME_CONTENT = {
  heroBadge: "#1 Academy in Maharashtra",
  heroTitle: "Build Your Future with DHEY Career Academy",
  heroSubtitle: "Government Exam Preparation & Physical Training Excellence. Start your journey towards a prestigious career today.",
  stats: [
    { label: "Selected Students", value: "5,000+" },
    { label: "Expert Faculty", value: "50+" },
    { label: "Mock Tests", value: "1,200+" },
    { label: "Success Rate", value: "95%" },
  ],
  featuresTitle: "Why Choose DHEY?",
  featuresSub: "We provide a comprehensive ecosystem designed to guarantee your success in competitive exams.",
  features: [
    { iconName: "BookOpen", title: "Government Exam Coaching", desc: "Expert guidance for SSC, MPSC, Police, Army, Navy, and Air Force with updated syllabus." },
    { iconName: "Dumbbell", title: "Physical Training", desc: "Dedicated ground training, endurance building, and obstacle courses by ex-military trainers." },
    { iconName: "Trophy", title: "Mock Tests & Daily Practice", desc: "Computer-based mock tests with negative marking and detailed performance analytics." },
    { iconName: "Users", title: "Personal Guidance", desc: "One-on-one mentorship, doubt-clearing sessions, and regular parent-teacher meetings." },
    { iconName: "ShieldCheck", title: "Hostel Facility", desc: "Safe, secure, and disciplined hostel facilities with nutritious diet plans." },
    { iconName: "Target", title: "Medical Preparation", desc: "Pre-medical checkups and guidance to ensure you meet all physical requirements." },
  ],
  coursesTitle: "Popular Courses",
  coursesSub: "Choose from our specialized programs designed for absolute success.",
  ctaTitle: "Ready to Serve the Nation?",
  ctaSub: "Join DHEY Career Academy today and take the first step towards a prestigious and secure government career.",
}

// =======================
// HOMEPAGE CONTENT (CMS)
// =======================

export async function getHomePageContent() {
  try {
    let content = await prisma.homePageContent.findUnique({
      where: { id: "1" }
    })

    if (!content) {
      content = await prisma.homePageContent.create({
        data: {
          id: "1",
          ...DEFAULT_HOME_CONTENT,
        }
      })
    }
    return { success: true, data: content }
  } catch (error) {
    console.error("Failed to fetch home page content:", error)
    return { success: false, error: "Database error" }
  }
}

export async function updateHomePageContent(formData: FormData) {
  try {
    const data: any = {
      heroBadge: formData.get("heroBadge") as string,
      heroTitle: formData.get("heroTitle") as string,
      heroSubtitle: formData.get("heroSubtitle") as string,
      featuresTitle: formData.get("featuresTitle") as string,
      featuresSub: formData.get("featuresSub") as string,
      coursesTitle: formData.get("coursesTitle") as string,
      coursesSub: formData.get("coursesSub") as string,
      ctaTitle: formData.get("ctaTitle") as string,
      ctaSub: formData.get("ctaSub") as string,
    }

    // Process stats
    const stats = []
    for (let i = 0; i < 4; i++) {
      stats.push({
        label: formData.get(`stat_${i}_label`) as string,
        value: formData.get(`stat_${i}_value`) as string,
      })
    }
    data.stats = stats
    
    // Features can be updated later if needed, for now we keep the same logic or just text updates
    // In this iteration, we keep feature cards static unless we build a complex UI for them. 
    // To be safe, we'll extract them if they exist in the form, otherwise ignore.
    const featureTitles = formData.getAll("feature_title")
    if (featureTitles.length > 0) {
      const features = []
      const featureDescs = formData.getAll("feature_desc")
      const featureIcons = formData.getAll("feature_icon")
      for (let i = 0; i < featureTitles.length; i++) {
        features.push({
          title: featureTitles[i],
          desc: featureDescs[i],
          iconName: featureIcons[i],
        })
      }
      data.features = features
    }

    await prisma.homePageContent.update({
      where: { id: "1" },
      data,
    })

    revalidatePath("/")
    revalidatePath("/admin/content")
    return { success: true }
  } catch (error) {
    console.error("Failed to update home page content:", error)
    return { success: false, error: "Failed to update content." }
  }
}

// =======================
// NOTICES
// =======================

export async function getNotices() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return { success: true, data: notices }
  } catch (error) {
    return { success: false, error: "Database error" }
  }
}

export async function createNotice(formData: FormData) {
  try {
    await prisma.notice.create({
      data: {
        title: formData.get("title") as string,
        targetAudience: formData.get("targetAudience") as string,
        date: formData.get("date") as string,
        isPinned: formData.get("isPinned") === "on",
        status: formData.get("status") as string,
      }
    })
    revalidatePath("/admin/notices")
    revalidatePath("/") // Revalidate homepage where notices are displayed
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to create notice." }
  }
}

export async function deleteNotice(id: string) {
  try {
    await prisma.notice.delete({ where: { id } })
    revalidatePath("/admin/notices")
    revalidatePath("/")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to delete." }
  }
}

// =======================
// MOCK TESTS
// =======================

export async function getMockTests() {
  try {
    const tests = await prisma.mockTest.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return { success: true, data: tests }
  } catch (error) {
    return { success: false, error: "Database error" }
  }
}

export async function createMockTest(formData: FormData) {
  try {
    await prisma.mockTest.create({
      data: {
        title: formData.get("title") as string,
        course: formData.get("course") as string,
        date: formData.get("date") as string,
        status: formData.get("status") as string,
      }
    })
    revalidatePath("/admin/mock-tests")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to create mock test." }
  }
}

export async function deleteMockTest(id: string) {
  try {
    await prisma.mockTest.delete({ where: { id } })
    revalidatePath("/admin/mock-tests")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to delete." }
  }
}
