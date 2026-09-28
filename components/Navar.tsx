"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Patients", href: "/patients" },
  { name: "Doctors", href: "/doctors" },
  { name: "Appointments", href: "/appointments" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
            +
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
              HealthCare
            </h1>
            <p className="text-[11px] font-medium text-slate-500">
              Hospital Management
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive
                    ? "text-blue-600 bg-blue-50/80 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button (Desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="border-b border-slate-200/80 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 font-semibold text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-3 pt-3 border-t border-slate-100">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}