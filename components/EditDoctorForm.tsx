
"use client";

import Link from "next/link";
import { useState } from "react";
import { updateDoctor } from "@/app/actions/doctor";

type Doctor = {
  id: number;
  name: string;
  phone: string;
  specialization: string;
  qualification: string;
  attendanceTime: string;
  image: string | null;
};

type Props = {
  doctor: Doctor;
};

export default function EditDoctorForm({ doctor }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    const confirmed = window.confirm(
      "Are you sure you want to update this doctor?"
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);

    try {
      await updateDoctor(doctor.id, formData);

      alert("Doctor updated successfully!");

      window.location.href = "/admin/doctors";
    } catch (error) {
      console.error(error);
      alert("Failed to update doctor.");
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-5">

      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Doctor Name
        </label>

        <input
          name="name"
          type="text"
          defaultValue={doctor.name}
          required
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Phone for Appointment
        </label>

        <input
          name="phone"
          type="tel"
          defaultValue={doctor.phone}
          required
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Specialization */}
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Specialization
        </label>

        <input
          name="specialization"
          type="text"
          defaultValue={doctor.specialization}
          required
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Qualification */}
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Qualification
        </label>

        <input
          name="qualification"
          type="text"
          defaultValue={doctor.qualification}
          required
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Attendance */}
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Attendance / Visiting Time
        </label>

        <input
          name="attendanceTime"
          type="text"
          defaultValue={doctor.attendanceTime}
          required
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Image */}
      <div>
        <label className="mb-2 block text-sm font-semibold">
          Doctor Image URL
        </label>

        <input
          name="image"
          type="url"
          defaultValue={doctor.image ?? ""}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-4">

        <Link
          href="/admin/doctors"
          className="w-full rounded-lg border px-5 py-3 text-center font-semibold"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Doctor"}
        </button>

      </div>
    </form>
  );
}
