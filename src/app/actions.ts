"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function submitAdmission(formData: FormData) {
  try {
    await prisma.admission.create({
      data: {
        fullName: formData.get("fullName") as string,
        dob: formData.get("dob") as string,
        gender: formData.get("gender") as string,
        category: formData.get("category") as string,
        mobile: formData.get("mobile") as string,
        email: formData.get("email") as string,
        address: formData.get("address") as string,
        course: formData.get("courseSelect") as string,
        hostel: formData.get("hostel") as string,
      }
    })
    
    // In a real app we might want to revalidate the admin dashboard
    revalidatePath("/admin/admissions")
    return { success: true }
  } catch (error) {
    console.error("Failed to submit admission:", error)
    return { success: false, error: "Failed to submit application. Please try again." }
  }
}

export async function submitContact(formData: FormData) {
  try {
    await prisma.contactMessage.create({
      data: {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phone: formData.get("phone") as string,
        course: formData.get("course") as string,
        message: formData.get("message") as string,
      }
    })
    
    return { success: true }
  } catch (error) {
    console.error("Failed to submit contact message:", error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}
