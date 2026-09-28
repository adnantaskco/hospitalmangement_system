import Link from "next/link";
import { getPatients } from "@/app/actions/patient-list";
import DeletePatientButton from "@/components/DeletePatientButton";

export default async function PatientsPage() {
  const patients = await getPatients();

  return (
    <main className="min-h-screen bg-slate-50/50 px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Patient Management
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              View, search, and manage registered patient records.
            </p>
          </div>

          <Link
            href="/patients/create"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Patient
          </Link>
        </div>

        {/* Stats & Search Bar Area */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search patients by name or ID..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition"
            />
          </div>

          <div className="text-sm font-medium text-slate-500">
            Total Records:{" "}
            <span className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-blue-700 border border-blue-100">
              {patients.length}
            </span>
          </div>
        </div>

        {/* Patient Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="border-b border-slate-200 bg-slate-50/80 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Patient Name</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Date of Birth</th>
                  <th className="px-6 py-4">Gender</th>
                  <th className="px-6 py-4">Blood Group</th>
                  <th className="px-6 py-4">Address</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {patients.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-16 text-center text-slate-500"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="h-12 w-12 text-slate-300 mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <p className="text-base font-medium text-slate-700">
                          No patients found
                        </p>
                        <p className="text-sm text-slate-400 mt-1">
                          Get started by adding a new patient to the database.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  patients.map((patient) => (
                    <tr
                      key={patient.id}
                      className="transition-colors hover:bg-slate-50/80"
                    >
                      {/* Patient ID */}
                      <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-900">
                        {patient.patientId}
                      </td>

                      {/* Name with Avatar */}
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
                            {patient.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{patient.name}</p>
                          </div>
                        </div>
                      </td>

                      {/* Contact Info (Phone & Email) */}
                      <td className="px-6 py-4">
                        <div className="flex flex-col text-xs space-y-0.5">
                          <span className="font-medium text-slate-700">{patient.phone}</span>
                          <span className="text-slate-400">{patient.email || "-"}</span>
                        </div>
                      </td>

                      {/* Date of Birth */}
                      <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-slate-600">
                        {patient.dateOfBirth
                          ? new Date(patient.dateOfBirth).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "-"}
                      </td>

                      {/* Gender Badge */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 capitalize">
                          {patient.gender || "-"}
                        </span>
                      </td>

                      {/* Blood Group Badge */}
                      <td className="whitespace-nowrap px-6 py-4">
                        {patient.bloodGroup ? (
                          <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600 border border-rose-100">
                            {patient.bloodGroup}
                          </span>
                        ) : (
                          <span className="text-slate-400">-</span>
                        )}
                      </td>

                      {/* Address */}
                      <td className="max-w-xs truncate px-6 py-4 text-xs text-slate-500">
                        {patient.address || "-"}
                      </td>

                      {/* Actions */}
                      <td className="whitespace-nowrap px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/patients/${patient.id}/edit`}
                            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-blue-600 active:scale-95"
                          >
                            Edit
                          </Link>

                          <DeletePatientButton id={patient.id} />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}