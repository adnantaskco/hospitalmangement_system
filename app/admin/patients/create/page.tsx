
import Link from "next/link";
import { createPatient } from "@/app/actions/patient";

export default function CreatePatientPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-6">
          <Link
            href="/admin/patients"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Patients
          </Link>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Add New Patient
          </h1>

          <p className="mt-1 text-slate-500">
            Add patient information to the hospital system.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">

          <form action={createPatient} className="space-y-5">

            {/* Patient ID */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Patient ID
              </label>

              <input
                name="patientId"
                type="text"
                placeholder="e.g. P-1001"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter a unique patient ID.
              </p>
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Patient Name
              </label>

              <input
                name="name"
                type="text"
                placeholder="Enter patient name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                placeholder="01XXXXXXXXX"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                placeholder="patient@example.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Gender
              </label>

              <select
                name="gender"
                required
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Blood Group
              </label>

              <select
                name="bloodGroup"
                defaultValue=""
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">
                  Select Blood Group
                </option>

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
                placeholder="Enter patient address"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">

              <Link
                href="/admin/patients"
                className="w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Add Patient
              </button>

            </div>

          </form>
        </div>
      </div>
    </main>
  );
}

