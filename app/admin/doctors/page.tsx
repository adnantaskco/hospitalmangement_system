import Link from "next/link";
import { getDoctors } from "@/app/actions/doctor";
import DeleteDoctorButton from "@/components/DeletePatientButton";

export default async function AdminDoctorsPage() {
  const doctors = await getDoctors();

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
              Doctor Management
            </h1>

            <p className="mt-2 text-slate-500">
              Add, edit and manage hospital doctors.
            </p>
          </div>

          <Link
            href="/admin/doctors/create"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            + Add Doctor
          </Link>
        </div>

        {/* Doctor Table */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          {doctors.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Image
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Doctor
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Specialization
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Qualification
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Phone
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Visiting Time
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-center">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {doctors.map((doctor) => (
                    <tr
                      key={doctor.id}
                      className="transition hover:bg-slate-50"
                    >
                      {/* Image */}
                      <td className="px-6 py-5">
                        {doctor.image ? (
                          <img
                            src={doctor.image}
                            alt={`Dr. ${doctor.name}`}
                            className="h-16 w-16 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-200 text-xs text-slate-500">
                            No Image
                          </div>
                        )}
                      </td>

                      {/* Doctor Name */}
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-semibold text-slate-900">
                            Dr. {doctor.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Doctor ID: {doctor.id}
                          </p>
                        </div>
                      </td>

                      {/* Specialization */}
                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                          {doctor.specialization}
                        </span>
                      </td>

                      {/* Qualification */}
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-slate-700">
                          {doctor.qualification}
                        </p>
                      </td>

                      {/* Phone */}
                      <td className="px-6 py-5">
                        <a
                          href={`tel:${doctor.phone}`}
                          className="font-medium text-slate-700 hover:text-blue-600"
                        >
                          {doctor.phone}
                        </a>
                      </td>

                      {/* Visiting Time */}
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-slate-700">
                          {doctor.attendanceTime}
                        </p>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          {/* Edit */}
                          <Link
                            href={`/admin/doctors/${doctor.id}/edit`}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                          >
                            Edit
                          </Link>

                          {/* Delete */}
                          <DeleteDoctorButton id={doctor.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* No Doctors */
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">
                👨‍⚕️
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-800">
                No Doctors Found
              </h2>

              <p className="mt-2 text-slate-500">
                There are currently no doctors in the hospital system.
              </p>

              <Link
                href="/admin/doctors/create"
                className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                + Add First Doctor
              </Link>
            </div>
          )}
        </div>

        {/* Total Doctors */}
        {doctors.length > 0 && (
          <div className="mt-5 text-sm text-slate-500">
            Total Doctors:{" "}
            <span className="font-bold text-slate-800">
              {doctors.length}
            </span>
          </div>
        )}
      </div>
    </main>
  );
}