
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
];

const moreLinks = [
  { name: "Notices & News", href: "/notices" },
  { name: "Faculty & Teachers", href: "/faculty" },
  { name: "Student Portal", href: "/results" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const compact = scrolled || !isHomePage;

  const toggleMobileMenu = () => {
    setMenuOpen((previous) => !previous);
    setDropdownOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/[0.10] transition-all duration-500 ease-in-out ${
        compact
          ? "bg-[#383A3D]/95 py-1 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          : "bg-[#383A3D]/75 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      }`}
    >
      {/* SILVER REFLECTION */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      <nav className="relative mx-auto flex min-h-10 max-w-[1450px] items-center justify-between gap-2 px-3 sm:gap-4 sm:px-5 md:px-10">

        {/* SCHOOL LOGO */}
        <Link
          href="/"
          onClick={closeMenus}
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <div
            className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.16)] ring-2 ring-white/50 transition-all duration-500 group-hover:scale-105 ${
              compact
                ? "h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
                : "h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12"
            }`}
          >
            <Image
              src="/school-logo.jpg"
              alt="Sardar Patel Rashtriya Inter College Logo"
              width={100}
              height={100}
              priority
              quality={85}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <h2 className="whitespace-nowrap text-[12px] font-bold leading-tight tracking-wide text-white drop-shadow-[0_1px_3px_rgba(255,255,255,0.15)] sm:text-sm md:text-base">
              SARDAR PATEL
            </h2>

            <p className="whitespace-nowrap text-[8px] font-medium tracking-[1px] text-[#E5B4B4] sm:text-[10px] sm:tracking-[1.3px] md:text-xs">
              RASHTRIYA INTER COLLEGE
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenus}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`group relative whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/75 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.55)]"
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-white/40 via-white to-white/40 transition-all duration-300 ${
                  pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* MORE DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((previous) => !previous)}
              aria-expanded={dropdownOpen}
              className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                dropdownOpen
                  ? "text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              More

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute right-0 top-full z-30 mt-5 w-60 rounded-2xl border border-white/15 bg-[#383A3D]/95 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 ${
                dropdownOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenus}
                  className={`block rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ADMISSION BUTTON */}
        <Link
          href="/admission"
          onClick={closeMenus}
          className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#B94A4A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_15px_rgba(185,74,74,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A64040] hover:shadow-[0_7px_22px_rgba(185,74,74,0.4)] lg:flex"
        >
          Apply Now

          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute left-0 top-full z-20 w-full border-t border-white/10 bg-[#383A3D]/[0.98] shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-[max-height,opacity] duration-500 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 pb-6 sm:px-7 sm:py-5">

          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenus}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* MOBILE MORE LINKS */}
          <button
            type="button"
            onClick={() => setDropdownOpen((previous) => !previous)}
            tabIndex={menuOpen ? 0 : -1}
            aria-expanded={dropdownOpen}
            className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            More

            <ChevronDown
              size={17}
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div className="ml-3 flex flex-col border-l border-white/20 pl-3">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenus}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`rounded-lg px-3 py-3 text-sm transition ${
                    pathname === link.href
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* MOBILE ADMISSION BUTTON */}
          <Link
            href="/admission"
            onClick={closeMenus}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#B94A4A] py-3 font-bold text-white transition hover:bg-[#A64040]"
          >
            Apply for Admission
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
}
