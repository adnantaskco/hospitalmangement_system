import { createDoctor } from "@/app/actions/doctor";

export default function CreateDoctorPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Add New Doctor
        </h1>

        <form action={createDoctor} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Doctor Name"
            required
            className="w-full rounded border p-3"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone for Appointment"
            required
            className="w-full rounded border p-3"
          />

          <input
            name="specialization"
            type="text"
            placeholder="Specialization"
            required
            className="w-full rounded border p-3"
          />

          <input
            name="qualification"
            type="text"
            placeholder="Qualification"
            required
            className="w-full rounded border p-3"
          />

          <input
            name="attendanceTime"
            type="text"
            placeholder="Attendance Time"
            required
            className="w-full rounded border p-3"
          />
        <input
            name="image"
            type="url"
            placeholder="Doctor Image URL"
            required
            className="w-full rounded border p-3"
          />

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-3 font-semibold text-white"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
}