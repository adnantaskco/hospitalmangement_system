
"use server";

import { db } from "@/src/prisma/db";

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



