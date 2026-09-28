
import Link from "next/link";
import { getPatients } from "@/app/actions/patient";
import DeletePatientButton from "@/components/DeletePatientButton"

export default async function AdminPatientsPage() {
  const patients = await getPatients();

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Admin Panel
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Patient Management
            </h1>

            <p className="mt-2 text-slate-500">
              Add, edit and manage hospital patients.
            </p>
          </div>

          <Link
            href="/admin/patients/create"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            + Add Patient
          </Link>
        </div>

        {/* Patient Table */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          {patients.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] text-left">

                {/* Table Header */}
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Patient ID
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Patient
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Phone
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Email
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Gender
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Blood Group
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Address
                    </th>

                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-200">

                  {patients.map((patient) => (
                    <tr
                      key={patient.id}
                      className="transition hover:bg-slate-50"
                    >

                      {/* Patient ID */}
                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                          {patient.patientId}
                        </span>
                      </td>

                      {/* Name */}
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {patient.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Database ID: {patient.id}
                          </p>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="px-6 py-5">
                        <a
                          href={`tel:${patient.phone}`}
                          className="font-medium text-slate-700 hover:text-blue-600"
                        >
                          {patient.phone}
                        </a>
                      </td>

                      {/* Email */}
                      <td className="px-6 py-5">
                        <p className="text-sm text-slate-600">
                          {patient.email || "—"}
                        </p>
                      </td>

                      {/* Gender */}
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                          {patient.gender}
                        </span>
                      </td>

                      {/* Blood Group */}
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-red-600">
                          {patient.bloodGroup || "—"}
                        </span>
                      </td>

                      {/* Address */}
                      <td className="max-w-[220px] px-6 py-5">
                        <p className="truncate text-sm text-slate-600">
                          {patient.address || "—"}
                        </p>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">

                          {/* Edit */}
                          <Link
                            href={`/admin/patients/${patient.id}/edit`}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                          >
                            Edit
                          </Link>

                          {/* Delete */}
                          <DeletePatientButton id={patient.id} />

                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          ) : (

            /* No Patients */
            <div className="px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">
                🧑‍⚕️
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-800">
                No Patients Found
              </h2>

              <p className="mt-2 text-slate-500">
                There are currently no patients in the hospital system.
              </p>

              <Link
                href="/admin/patients/create"
                className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                + Add First Patient
              </Link>

            </div>
          )}
        </div>

        {/* Total Patients */}
        {patients.length > 0 && (
          <div className="mt-5 text-sm text-slate-500">
            Total Patients:{" "}
            <span className="font-bold text-slate-800">
              {patients.length}
            </span>
          </div>
        )}

      </div>
    </main>
  );
}

