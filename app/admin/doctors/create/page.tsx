import Link from "next/link";
import { createDoctor } from "@/app/actions/doctor";

export default function CreateDoctorPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-6">
          <Link
            href="/admin/doctors"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Doctors
          </Link>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Add New Doctor
          </h1>

          <p className="mt-1 text-slate-500">
            Add doctor information to the hospital system.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <form action={createDoctor} className="space-y-5">

            {/* Doctor Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Doctor Name
              </label>

              <input
                name="name"
                type="text"
                placeholder="Enter doctor name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone for Appointment
              </label>

              <input
                name="phone"
                type="tel"
                placeholder="01XXXXXXXXX"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Specialization */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Specialization
              </label>

              <input
                name="specialization"
                type="text"
                placeholder="e.g. Cardiologist"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Qualification */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Qualification
              </label>

              <input
                name="qualification"
                type="text"
                placeholder="e.g. MBBS, FCPS"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Attendance Time */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Attendance / Visiting Time
              </label>

              <input
                name="attendanceTime"
                type="text"
                placeholder="e.g. 5:00 PM - 9:00 PM"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Doctor Image URL
              </label>

              <input
                name="image"
                type="url"
                placeholder="https://example.com/doctor.jpg"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter a publicly accessible image URL.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">

              <Link
                href="/admin/doctors"
                className="w-full rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Add Doctor
              </button>

            </div>
          </form>
        </div>

      </div>
    </main>
  );
}