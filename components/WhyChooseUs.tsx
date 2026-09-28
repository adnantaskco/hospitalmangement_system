const features = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Doctors",
    description:
      "Our healthcare team includes experienced and qualified medical professionals.",
  },
  {
    icon: "🏥",
    title: "Modern Facilities",
    description:
      "We provide modern healthcare facilities to support better patient care.",
  },
  {
    icon: "⏰",
    title: "24/7 Support",
    description:
      "Our support team is available around the clock for your healthcare needs.",
  },
  {
    icon: "❤️",
    title: "Patient First",
    description:
      "We focus on providing comfortable, respectful, and patient-centered care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Healthcare Designed Around You
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We combine experienced medical professionals, modern
              facilities, and patient-focused services to provide a
              better healthcare experience.
            </p>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}