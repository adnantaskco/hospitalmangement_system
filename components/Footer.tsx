export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold">
                H
              </div>

              <div>
                <h2 className="font-bold">HealthCare</h2>
                <p className="text-xs text-slate-400">
                  Hospital Management
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Providing quality healthcare services with experienced
              doctors, modern facilities, and patient-focused care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/patients"
                  className="transition hover:text-white"
                >
                  Patients
                </a>
              </li>

              <li>
                <a
                  href="/doctors"
                  className="transition hover:text-white"
                >
                  Doctors
                </a>
              </li>

              <li>
                <a
                  href="/appointments"
                  className="transition hover:text-white"
                >
                  Appointments
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Doctor Consultation</li>
              <li>Laboratory</li>
              <li>Pharmacy</li>
              <li>Emergency Care</li>
              <li>Inpatient Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li>
                📍 Dhaka, Bangladesh
              </li>

              <li>
                📞 +880 1234-567890
              </li>

              <li>
                ✉️ info@healthcare.com
              </li>

              <li>
                ⏰ Open 24/7
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} HealthCare Hospital.
              All rights reserved.
            </p>

            <div className="flex gap-5">
              <a
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}