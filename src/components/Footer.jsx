
import {
  GraduationCap,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUp,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices & News", href: "/notices" },
  { label: "Faculty & Teachers", href: "/faculty" },
  { label: "Contact", href: "/contact" },
];

const academicLinks = [
  { label: "Classes VI–VIII", href: "/academics" },
  { label: "Classes IX–X", href: "/academics" },
  { label: "Classes XI–XII", href: "/academics" },
  { label: "Admissions", href: "/admission" },
  { label: "Results & Downloads", href: "/results" },
];

export default function Footer({ theme = "dark" }) {
  const isLight = theme === "light";

  const colors = {
    background: isLight ? "bg-[#F0EFED]" : "bg-[#292929]",
    text: isLight ? "text-[#292929]" : "text-white",
    muted: isLight ? "text-[#292929]/60" : "text-white/60",
    faint: isLight ? "text-[#292929]/45" : "text-white/45",
    accent: "text-[#B94A4A]",
    accentLight: isLight ? "text-[#B94A4A]" : "text-[#E58A8A]",
    border: isLight ? "border-[#292929]/10" : "border-white/10",
    panel: isLight ? "bg-white/60" : "bg-white/[0.06]",
    iconBg: isLight ? "bg-[#B94A4A]/10" : "bg-[#B94A4A]/15",
    hoverText: "hover:text-[#B94A4A]",
  };

  return (
    <footer className={`relative overflow-hidden ${colors.background} ${colors.text}`}>
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#B94A4A]/10 blur-3xl" />
      <div className={`pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full ${isLight ? "bg-[#292929]/5" : "bg-white/5"} blur-3xl`} />

      {/* Top CTA */}
      <div className="relative mx-auto max-w-7xl px-5 pt-7 sm:px-8 lg:px-10">
        <div className={`relative overflow-hidden rounded-2xl border ${colors.border} ${colors.panel} p-5 backdrop-blur-xl sm:p-7`}>
          <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#B94A4A]/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${colors.accentLight}`}>
                Learn • Grow • Achieve
              </p>

              <h2 className="max-w-2xl text-xl font-bold tracking-tight sm:text-3xl">
                Your future begins with a strong foundation.
              </h2>

              <p className={`mt-2 max-w-xl text-xs leading-6 sm:text-sm ${colors.muted}`}>
                Explore academics, school facilities, announcements
                and admission information on our school website.
              </p>
            </div>

            <Link
              href="/admission"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#B94A4A] px-5 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A33D3D] hover:shadow-xl"
            >
              Explore Admissions
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-8 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* School identity */}
        <div>
          <Link href="/" className="group flex items-center gap-3">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B94A4A]/30 ${colors.iconBg} ${colors.accentLight} transition duration-300 group-hover:rotate-6 group-hover:bg-[#B94A4A]/20`}>
              <GraduationCap size={26} strokeWidth={1.6} />
            </div>

            <div>
              <p className="text-sm font-bold leading-5">
                Sardar Patel
              </p>
              <p className={`text-xs leading-5 ${colors.muted}`}>
                Rashtriya Inter College
              </p>
            </div>
          </Link>

          <p className={`mt-4 max-w-xs text-xs leading-6 ${colors.muted}`}>
            Explore our academic programmes, student activities,
            school announcements and educational resources.
          </p>

          <div className={`mt-4 inline-flex items-center gap-2 rounded-full border border-[#B94A4A]/30 ${colors.iconBg} px-3 py-1.5 text-[11px] font-medium ${colors.accentLight}`}>
            <BookOpen size={14} />
            Hindi & English Medium
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className={`text-sm font-bold tracking-wide ${colors.accentLight}`}>
            Quick Links
          </h3>

          <div className="mb-4 mt-3 h-px w-10 bg-[#B94A4A]/70" />

          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`group inline-flex items-center gap-2 text-xs ${colors.muted} transition hover:translate-x-1 ${colors.hoverText}`}
                >
                  <ChevronRight size={14} className="text-[#B94A4A]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className={`text-sm font-bold tracking-wide ${colors.accentLight}`}>
            Explore
          </h3>

          <div className="mb-4 mt-3 h-px w-10 bg-[#B94A4A]/70" />

          <ul className="space-y-2.5">
            {academicLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`group inline-flex items-center gap-2 text-xs ${colors.muted} transition hover:translate-x-1 ${colors.hoverText}`}
                >
                  <ChevronRight size={14} className="text-[#B94A4A]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={`text-sm font-bold tracking-wide ${colors.accentLight}`}>
            Contact Information
          </h3>

          <div className="mb-4 mt-3 h-px w-10 bg-[#B94A4A]/70" />

          <p className={`mb-4 text-xs leading-6 ${colors.muted}`}>
            Official contact information will be updated
            after verification by the school.
          </p>

          <div className="space-y-3">
            <div className={`flex items-start gap-3 text-xs ${colors.muted}`}>
              <MapPin size={17} className={`mt-0.5 shrink-0 ${colors.accentLight}`} />
              <span>School address to be added</span>
            </div>

            <div className={`flex items-start gap-3 text-xs ${colors.muted}`}>
              <Phone size={17} className={`mt-0.5 shrink-0 ${colors.accentLight}`} />
              <span>Phone number to be added</span>
            </div>

            <div className={`flex items-start gap-3 text-xs ${colors.muted}`}>
              <Mail size={17} className={`mt-0.5 shrink-0 ${colors.accentLight}`} />
              <span>Email address to be added</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`relative border-t ${colors.border}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className={`text-[11px] leading-5 ${colors.faint}`}>
            © 2026 Sardar Patel Rashtriya Inter College.
            All rights reserved.
          </p>

          <Link
            href="/"
            aria-label="Back to home"
            className={`group inline-flex w-fit items-center gap-2 rounded-full border border-[#B94A4A]/40 px-4 py-2 text-[11px] font-semibold ${colors.accentLight} transition duration-300 hover:-translate-y-1 hover:bg-[#B94A4A] hover:text-white`}
          >
            Back to home
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
