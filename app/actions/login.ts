
"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";

export async function loginAdmin(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required.",
    };
  }

  try {
    const admin = await db.orm.public.Admin.where({ email }).first();

    if (!admin) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const cookieStore = await cookies();

    cookieStore.set("admin_session", String(admin.id), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    redirect("/admin");
  } catch (error) {
    console.error("Admin login error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

