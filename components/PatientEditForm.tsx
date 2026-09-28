
"use client";

import { updatePatient } from "@/app/actions/patient";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";


type Patient = {
  id: number;
  patientId: string;
  name: string;
  phone: string;
  email: string | null;
  gender: string;
  bloodGroup: string | null;
  address: string | null;
};



type Props = {
  patient: Patient;
};

export default function PatientEditForm({ patient }: Props) {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const result = await updatePatient(patient.id, formData);

    if (result.success) {
      alert(result.message);
      router.push("/patients");
      router.refresh();
    } else {
      alert(result.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Patient ID
        </label>
        <input
          name="patientId"
          defaultValue={patient.patientId}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          name="name"
          defaultValue={patient.name}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Phone
        </label>
        <input
          name="phone"
          defaultValue={patient.phone}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={patient.email ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          defaultValue={patient.dateOfBirth ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div> */}

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Gender
        </label>
        <select
          name="gender"
          defaultValue={patient.gender}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Blood Group
        </label>
        <select
          name="bloodGroup"
          defaultValue={patient.bloodGroup ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
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

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Address
        </label>
        <textarea
          name="address"
          defaultValue={patient.address ?? ""}
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Update Patient
        </button>

        <button
          type="button"
          onClick={() => router.push("/patients")}
          className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

