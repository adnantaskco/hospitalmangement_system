import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white lg:py-32">
      {/* Background Subtle Gradient & Glow Effects */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Left Content */}
        <div className="flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Trusted Healthcare Service
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight">
            Your Health, <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Our Highest Priority.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-xl">
            Experience world-class medical care with elite specialists, cutting-edge facilities, and a seamless digital health platform.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/appointments"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 active:scale-95"
            >
              Book Appointment
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-95"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-800 pt-8 w-full max-w-md">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">100+</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">Expert Doctors</p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">10K+</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">Happy Patients</p>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">24/7</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">Emergency Care</p>
            </div>
          </div>
        </div>

        {/* Right Visual Card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative flex h-[440px] w-full max-w-[480px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-blue-600 to-blue-800 p-8 shadow-2xl shadow-blue-900/50">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-5xl text-white shadow-inner">
                +
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Healthcare You Can Trust
              </h2>

              <p className="mt-2 text-sm text-blue-100/80 max-w-xs">
                Compassionate and expert medical care designed around your needs.
              </p>
            </div>

            {/* Floating Top Card */}
            <div className="absolute -top-3 -right-3 rounded-2xl border border-slate-200/20 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md sm:right-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 text-lg">
                  🩺
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Expert Doctors</p>
                  <p className="text-[11px] text-slate-400">Verified Specialists</p>
                </div>
              </div>
            </div>

            {/* Floating Bottom Card */}
            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-slate-200/20 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md sm:left-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Quality Guaranteed</p>
                  <p className="text-[11px] text-slate-400">Patient-Centered Care</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}