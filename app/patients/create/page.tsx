import PatientForm from "@/components/PatientForm";
import Link from "next/link";

export default function CreatePatientPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
          <Link
            href="/patients"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Patients
          </Link>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Add New Patient
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Enter the patient's information below.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <PatientForm />
        </div>
      </div>
    </main>
  );
}