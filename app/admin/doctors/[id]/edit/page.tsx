
import Link from "next/link";
import { getDoctor } from "@/app/actions/doctor";
import EditDoctorForm from "@/components/EditDoctorForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditDoctorPage({ params }: Props) {
  const { id } = await params;

  const doctorId = Number(id);

  const doctor = await getDoctor(doctorId);

  if (!doctor) {
    return (
      <main className="min-h-screen bg-slate-100 p-10">
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 text-center shadow">
          <h1 className="text-2xl font-bold text-red-600">
            Doctor Not Found
          </h1>

          <Link
            href="/admin/doctors"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            Back to Doctors
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-2xl">

        <Link
          href="/admin/doctors"
          className="text-sm font-medium text-blue-600"
        >
          ← Back to Doctors
        </Link>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Edit Doctor
        </h1>

        <p className="mt-1 text-slate-500">
          Update doctor information
        </p>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <EditDoctorForm doctor={doctor} />
        </div>

      </div>
    </main>
  );
}

