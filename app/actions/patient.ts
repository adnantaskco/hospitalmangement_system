
"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/src/prisma/db";

// =========================
// CREATE PATIENT
// =========================

export async function createPatient(formData: FormData) {
  const patientId = String(formData.get("patientId") ?? "");
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const email = String(formData.get("email") ?? "");
  const dateOfBirth = String(formData.get("dateOfBirth") ?? "");
  const gender = String(formData.get("gender") ?? "");
  const bloodGroup = String(formData.get("bloodGroup") ?? "");
  const address = String(formData.get("address") ?? "");

  try {
    const patient = await db.orm.public.Patient.create({
      patientId,
      name,
      phone,
      email: email || null,
      dateOfBirth: dateOfBirth || null,
      gender,
      bloodGroup: bloodGroup || null,
      address: address || null,
    });

    console.log("Patient created:", patient);

    revalidatePath("/admin/patients");

    return {
      success: true,
      message: "Patient created successfully.",
    };
  } catch (error) {
    console.error("Create patient error:", error);

    return {
      success: false,
      message: "Failed to create patient.",
    };
  }
}

// =========================
// GET ALL PATIENTS
// =========================

export async function getPatients() {
  try {
    const patients = await db.orm.public.Patient
      .where({})
      .all();

    return patients;
  } catch (error) {
    console.error("Get patients error:", error);

    return [];
  }
}

// =========================
// GET SINGLE PATIENT
// =========================

export async function getPatient(id: number) {
  try {
    const patient = await db.orm.public.Patient
      .where({ id })
      .first();

    return patient;
  } catch (error) {
    console.error("Get patient error:", error);

    return null;
  }
}

// =========================
// UPDATE PATIENT
// =========================

export async function updatePatient(
  id: number,
  formData: FormData
) {
  const patientId = String(formData.get("patientId") ?? "");
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const email = String(formData.get("email") ?? "");
  const dateOfBirth = String(formData.get("dateOfBirth") ?? "");
  const gender = String(formData.get("gender") ?? "");
  const bloodGroup = String(formData.get("bloodGroup") ?? "");
  const address = String(formData.get("address") ?? "");

  try {
    await db.orm.public.Patient
      .where({ id })
      .update({
        patientId,
        name,
        phone,
        email: email || null,
        dateOfBirth: dateOfBirth || null,
        gender,
        bloodGroup: bloodGroup || null,
        address: address || null,
      });

    revalidatePath("/admin/patients");

    return {
      success: true,
      message: "Patient updated successfully.",
    };
  } catch (error) {
    console.error("Update patient error:", error);

    return {
      success: false,
      message: "Failed to update patient.",
    };
  }
}

// =========================
// DELETE PATIENT
// =========================

export async function deletePatient(id: number) {
  try {
    await db.orm.public.Patient
      .where({ id })
      .delete();

    revalidatePath("/admin/patients");

    return {
      success: true,
      message: "Patient deleted successfully.",
    };
  } catch (error) {
    console.error("Delete patient error:", error);

    return {
      success: false,
      message: "Failed to delete patient.",
    };
  }
}

