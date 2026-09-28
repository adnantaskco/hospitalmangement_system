import { getDoctors } from "@/app/actions/doctor";

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Medical Team
          </p>

          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Meet Our Doctors
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Our experienced doctors are dedicated to providing quality
            healthcare and personalized treatment.
          </p>
        </div>

        {/* Doctor Cards */}
        {doctors.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-slate-200">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={`Dr. ${doctor.name}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-400">
                      No Image
                    </div>
                  )}

                  {/* Specialization */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                    {doctor.specialization}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Dr. {doctor.name}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-blue-600">
                    {doctor.qualification}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">

                    {/* Appointment Phone */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        ☎
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Appointment
                        </p>

                        <a
                          href={`tel:${doctor.phone}`}
                          className="font-semibold text-slate-800 hover:text-blue-600"
                        >
                          {doctor.phone}
                        </a>
                      </div>
                    </div>

                    {/* Visiting Hours */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                        🕐
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Visiting Hours
                        </p>

                        <p className="font-semibold text-slate-800">
                          {doctor.attendanceTime}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Get Appointment */}
                  <a
                    href={`tel:${doctor.phone}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    <span>☎</span>
                    Get Appointment
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-12 text-center shadow">
            <h2 className="text-xl font-semibold text-slate-800">
              No doctors found
            </h2>

            <p className="mt-2 text-slate-500">
              Our doctor information will be available soon.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}