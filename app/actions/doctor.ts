"use server";

import { db } from "@/src/prisma/db";

export async function createDoctor(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const specialization = String(formData.get("specialization") ?? "");
  const qualification = String(formData.get("qualification") ?? "");
  const attendanceTime = String(formData.get("attendanceTime") ?? "");
  const image = String(formData.get("image") ?? "");

  try {
    await db.orm.public.Doctor.create({
      name,
      phone,
      specialization,
      qualification,
      attendanceTime,
      image: image || null,
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


export async function getDoctor(id: number) {
  try {
    const doctor = await db.orm.public.Doctor
      .where({ id })
      .first();

    return doctor;
  } catch (error) {
    console.error("Get doctor error:", error);
    return null;
  }
}


export async function updateDoctor(
  id: number,
  formData: FormData
): Promise<void> {
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const specialization = String(formData.get("specialization") ?? "");
  const qualification = String(formData.get("qualification") ?? "");
  const attendanceTime = String(formData.get("attendanceTime") ?? "");
  const image = String(formData.get("image") ?? "");

  try {
    await db.orm.public.Doctor
      .where({ id })
      .update({
        name,
        phone,
        specialization,
        qualification,
        attendanceTime,
        image: image || null,
      });

    console.log("Doctor updated successfully.");
  } catch (error) {
    console.error("Update doctor error:", error);
  }
}


export async function deleteDoctor(id: number): Promise<void> {
  try {
    await db.orm.public.Doctor
      .where({ id })
      .delete();

    console.log("Doctor deleted successfully.");
  } catch (error) {
    console.error("Delete doctor error:", error);
  }
}