
import Link from "next/link";
import { getPatients } from "@/app/actions/patient";
import { getDoctors } from "@/app/actions/doctor";

export default async function AdminDashboard() {
  const [patients, doctors] = await Promise.all([
    getPatients(),
    getDoctors(),
  ]);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Hospital Management System
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage patients, doctors and hospital information.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Patients */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Patients
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  {patients.length}
                </h2>
              </div>

              <div className="rounded-xl bg-blue-100 p-4 text-3xl">
                
              </div>
            </div>

            <Link
              href="/admin/patients"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Manage Patients
            </Link>
          </div>

          {/* Doctors */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Doctors
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  {doctors.length}
                </h2>
              </div>

              <div className="rounded-xl bg-green-100 p-4 text-3xl">
                👨‍⚕️
              </div>
            </div>

            <Link
              href="/admin/doctors"
              className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Manage Doctors
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Quickly add new hospital records.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/admin/patients/create"
              className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              + Add Patient
            </Link>

            <Link
              href="/admin/doctors/create"
              className="rounded-lg bg-green-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              + Add Doctor
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}

