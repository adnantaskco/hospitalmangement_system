
"use client";

import Link from "next/link";
import { useState } from "react";
import { updatePatient } from "@/app/actions/patient";

type Patient = {
  id: number;
  patientId: string;
  name: string;
  phone: string;
  email: string | null;
  dateOfBirth: string | null;
  gender: string;
  bloodGroup: string | null;
  address: string | null;
};

type Props = {
  patient: Patient;
};

export default function EditPatientForm({ patient }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    const confirmed = window.confirm(
      "Are you sure you want to update this patient?"
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);

    try {
      const result = await updatePatient(patient.id, formData);

      if (result.success) {
        alert("Patient updated successfully!");

        window.location.href = "/admin/patients";
      } else {
        alert(result.message);

        setLoading(false);
      }
    } catch (error) {
      console.error(error);

      alert("Failed to update patient.");

      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-5">

      {/* Patient ID */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Patient ID
        </label>

        <input
          name="patientId"
          type="text"
          defaultValue={patient.patientId}
          required
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Patient Name
        </label>

        <input
          name="name"
          type="text"
          defaultValue={patient.name}
          required
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Phone
        </label>

        <input
          name="phone"
          type="tel"
          defaultValue={patient.phone}
          required
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email
        </label>

        <input
          name="email"
          type="email"
          defaultValue={patient.email ?? ""}
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Date of Birth
        </label>

        <input
          name="dateOfBirth"
          type="date"
          defaultValue={patient.dateOfBirth ?? ""}
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Gender
        </label>

        <select
          name="gender"
          defaultValue={patient.gender}
          required
          className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none focus:border-blue-500"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Blood Group */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Blood Group
        </label>

        <select
          name="bloodGroup"
          defaultValue={patient.bloodGroup ?? ""}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none focus:border-blue-500"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      {/* Address */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Address
        </label>

        <textarea
          name="address"
          rows={4}
          defaultValue={patient.address ?? ""}
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500"
          placeholder="Enter patient address"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 pt-4 sm:flex-row">

        <Link
          href="/admin/patients"
          className="w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Patient"}
        </button>

      </div>

    </form>
  );
}

