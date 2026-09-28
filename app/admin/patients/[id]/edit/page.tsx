
import Link from "next/link";
import { getPatient } from "@/app/actions/patient";
import EditPatientForm from "@/components/PatientEditForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPatientPage({ params }: Props) {
  const { id } = await params;

  const patientId = Number(id);

  const patient = await getPatient(patientId);

  if (!patient) {
    return (
      <main className="min-h-screen bg-slate-100 p-10">
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center shadow">

          <h1 className="text-2xl font-bold text-red-600">
            Patient Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The requested patient could not be found.
          </p>

          <Link
            href="/admin/patients"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Back to Patients
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Back */}
        <Link
          href="/admin/patients"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Back to Patients
        </Link>

        {/* Heading */}
        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Edit Patient
        </h1>

        <p className="mt-1 text-slate-500">
          Update patient information
        </p>

        {/* Form */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <EditPatientForm patient={patient} />
        </div>

      </div>
    </main>
  );
}

