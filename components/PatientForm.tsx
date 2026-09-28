
"use client";

import { createPatient } from "@/app/actions/patient";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function PatientForm() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const result = await createPatient(formData);

    if (result.success) {
      alert("✅ Patient added successfully!");
      form.reset();
      router.push("/patients");
      router.refresh();
    } else {
      alert("❌ " + result.message);
    }
  }

  function handleCancel() {
    router.push("/patients");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Patient ID */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Patient ID
        </label>

        <input
          type="text"
          name="patientId"
          placeholder="P-1001"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter patient name"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Phone + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="+880 1234-567890"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="patient@example.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Date of Birth + Gender */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Date of Birth
          </label>

          <input
            type="date"
            name="dateOfBirth"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Gender
          </label>

          <select
            name="gender"
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Blood Group */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Blood Group
        </label>

        <select
          name="bloodGroup"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Select blood group</option>
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
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Address
        </label>

        <textarea
          name="address"
          rows={4}
          placeholder="Enter patient address"
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
        <button
          type="button"
          onClick={handleCancel}
          className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Save Patient
        </button>
      </div>
    </form>
  );
}

