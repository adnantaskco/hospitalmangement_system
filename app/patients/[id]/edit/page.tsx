
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPatient } from "@/app/actions/patient-list";
import PatientEditForm from "@/components/PatientEditForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditPatientPage({ params }: Props) {
  const { id } = await params;
  const patient = await getPatient(Number(id));

  if (!patient) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href="/patients"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Patients
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Edit Patient
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Update patient information
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <PatientEditForm patient={patient} />
        </div>
      </div>
    </main>
  );
}

