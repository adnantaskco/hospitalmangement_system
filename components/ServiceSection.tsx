const services = [
  {
    icon: "🩺",
    title: "Doctor Consultation",
    description:
      "Consult experienced doctors and get professional medical advice.",
  },
  {
    icon: "📅",
    title: "Appointment",
    description:
      "Book and manage your hospital appointments easily.",
  },
  {
    icon: "🧪",
    title: "Laboratory",
    description:
      "Access reliable laboratory tests and diagnostic services.",
  },
  {
    icon: "💊",
    title: "Pharmacy",
    description:
      "Get prescribed medicines and manage pharmacy services.",
  },
  {
    icon: "🚑",
    title: "Emergency Care",
    description:
      "Get quick medical assistance when you need emergency care.",
  },
  {
    icon: "🏥",
    title: "Inpatient Care",
    description:
      "Manage admissions, wards, beds, and patient care efficiently.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Complete Healthcare Services
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Everything you need for better healthcare management and
            patient care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl transition group-hover:bg-blue-600">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              <a
                href="#"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}