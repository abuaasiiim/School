
import {
  GraduationCap,
  ChevronRight,
  ArrowUp,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
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
    accentLight: isLight ? "text-[#B94A4A]" : "text-[#E58A8A]",
    border: isLight ? "border-[#292929]/10" : "border-white/10",
  };

  return (
    <footer
      className={`relative overflow-hidden ${colors.background} ${colors.text}`}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-[#B94A4A]/10 blur-3xl" />

      {/* Admission CTA - desktop only */}
      <div className="relative mx-auto hidden max-w-7xl px-8 pt-7 md:block lg:px-10">
        <div
          className={`rounded-2xl border ${colors.border} bg-white/[0.05] p-6 lg:p-7`}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${colors.accentLight}`}
              >
                Learn • Grow • Achieve
              </p>

              <h2 className="text-xl font-bold tracking-tight lg:text-3xl">
                Your future begins with a strong foundation.
              </h2>

              <p className={`mt-2 text-xs leading-6 ${colors.muted}`}>
                Explore academics, school facilities, announcements and
                admission information.
              </p>
            </div>

            <Link
              href="/admission"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#B94A4A] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#A33D3D]"
            >
              Explore Admissions
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-5 px-4 py-5 sm:px-8 sm:py-7 md:grid-cols-2 md:gap-7 md:py-8 lg:grid-cols-4 lg:px-10">
        {/* School identity */}
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="group flex items-center gap-2.5">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B94A4A]/30 bg-[#B94A4A]/10 ${colors.accentLight} sm:h-12 sm:w-12`}
            >
              <GraduationCap size={24} strokeWidth={1.6} />
            </div>

            <div>
              <p className="text-sm font-bold leading-5">Sardar Patel</p>
              <p className={`text-xs leading-5 ${colors.muted}`}>
                Rashtriya Inter College
              </p>
            </div>
          </Link>

          {/* Medium badge */}
          <div
            className={`mt-2 inline-flex items-center gap-2 rounded-full border border-[#B94A4A]/30 bg-[#B94A4A]/10 px-3 py-1.5 text-[10px] font-medium ${colors.accentLight}`}
          >
            <BookOpen size={13} />
            Hindi & English Medium
          </div>

          {/* Desktop description */}
          <p
            className={`mt-4 hidden max-w-xs text-xs leading-6 ${colors.muted} lg:block`}
          >
            Explore our academic programmes, student activities, school
            announcements and educational resources.
          </p>
        </div>

        {/* Quick links */}
        <div className="col-span-2 lg:col-span-1">
          <h3
            className={`text-xs font-bold tracking-wide sm:text-sm ${colors.accentLight}`}
          >
            Quick Links
          </h3>

          <div className="mb-3 mt-2 h-px w-9 bg-[#B94A4A]/70" />

          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 md:grid-cols-1 md:gap-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 text-[11px] leading-5 transition hover:text-[#B94A4A] sm:text-xs ${colors.muted}`}
                >
                  <ChevronRight
                    size={13}
                    className="shrink-0 text-[#B94A4A]"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore - desktop/tablet only */}
        <div className="hidden md:block">
          <h3 className={`text-sm font-bold tracking-wide ${colors.accentLight}`}>
            Explore
          </h3>

          <div className="mb-4 mt-3 h-px w-10 bg-[#B94A4A]/70" />

          <ul className="space-y-2.5">
            {academicLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-2 text-xs transition hover:text-[#B94A4A] ${colors.muted}`}
                >
                  <ChevronRight size={14} className="text-[#B94A4A]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information - visible on mobile */}
        <div className="col-span-2 md:col-span-1">
          <h3
            className={`text-xs font-bold tracking-wide sm:text-sm ${colors.accentLight}`}
          >
            Contact Information
          </h3>

          <div className="mb-2 mt-2 h-px w-9 bg-[#B94A4A]/70 sm:mb-3" />

          <p className={`text-[10px] leading-4 sm:text-xs sm:leading-6 ${colors.muted}`}>
            Official contact information will be updated after verification
            by the school.
          </p>

          <div className={`mt-3 space-y-2 sm:space-y-3 ${colors.muted}`}>
            <div className="flex items-start gap-2 text-[11px] leading-4 sm:text-xs">
              <MapPin
                size={14}
                className={`mt-0.5 shrink-0 ${colors.accentLight}`}
              />
              <span>School address to be added</span>
            </div>

            <div className="flex items-start gap-2 text-[11px] leading-4 sm:text-xs">
              <Phone
                size={14}
                className={`mt-0.5 shrink-0 ${colors.accentLight}`}
              />
              <span>Phone number to be added</span>
            </div>

            <div className="flex items-start gap-2 text-[11px] leading-4 sm:text-xs">
              <Mail
                size={14}
                className={`mt-0.5 shrink-0 ${colors.accentLight}`}
              />
              <span>Email address to be added</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`relative border-t ${colors.border}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-8 sm:py-4 lg:px-10">
          <p
            className={`max-w-[75%] text-[9px] leading-4 sm:max-w-none sm:text-[11px] sm:leading-5 ${colors.faint}`}
          >
            © 2026 Sardar Patel Rashtriya Inter College. All rights reserved.
          </p>

          <Link
            href="/"
            aria-label="Back to home"
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#B94A4A]/40 px-2.5 py-1.5 text-[9px] font-semibold ${colors.accentLight} transition hover:bg-[#B94A4A] hover:text-white sm:px-4 sm:py-2 sm:text-[11px]`}
          >
            Back to home
            <ArrowUp size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
