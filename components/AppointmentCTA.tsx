export default function AppointmentCTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-700 px-6 py-12 text-center shadow-xl sm:px-12 lg:px-16">
          
          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500 opacity-30" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-800 opacity-30" />

          <div className="relative">
            <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              Need Medical Care?
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Book Your Appointment Today
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
              Schedule an appointment with our experienced doctors
              and take the next step toward better healthcare.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/appointments"
                className="rounded-lg bg-white px-6 py-3.5 font-semibold text-blue-600 shadow-md transition hover:bg-blue-50"
              >
                Book Appointment
              </a>

              <a
                href="tel:+8801234567890"
                className="rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                📞 Call Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}