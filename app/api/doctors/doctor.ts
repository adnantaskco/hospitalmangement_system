"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/src/prisma/db";

export async function createDoctor(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const specialization = String(formData.get("specialization") ?? "");
  const qualification = String(formData.get("qualification") ?? "");
  const attendanceTime = String(formData.get("attendanceTime") ?? "");

  try {
    await db.orm.public.Doctor.create({
      name,
      phone,
      specialization,
      qualification,
      attendanceTime,
    });

    console.log("Doctor created successfully.");
  } catch (error) {
    console.error("Create doctor error:", error);
  }
}

export async function getDoctors() {
  try {
    const doctors = await db.orm.public.Doctor
      .where({})
      .all();

    return doctors;
  } catch (error) {
    console.error("Get doctors error:", error);
    return [];
  }
}
export async function deleteDoctor(id: number): Promise<void> {
  try {
    await db.orm.public.Doctor
      .where({ id })
      .delete();

    revalidatePath("/admin/doctors");
    revalidatePath("/doctors");

    console.log("Doctor deleted successfully.");
  } catch (error) {
    console.error("Delete doctor error:", error);
  }
}