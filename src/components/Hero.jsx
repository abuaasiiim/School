
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Users,
  ShieldCheck,
  Star,
  MoveDown,
} from "lucide-react";

export default function Hero() {
  const reveal = (delay = 0, distance = 25) => ({
    opacity: [0, 1],
    y: [distance, 0],
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  const highlights = [
    {
      icon: GraduationCap,
      text: <>Quality<br />Education</>,
    },
    {
      icon: Users,
      text: <>Experienced<br />Faculty</>,
    },
    {
      icon: ShieldCheck,
      text: <>Safe & Supportive<br />Environment</>,
    },
    {
      icon: Star,
      text: <>Holistic<br />Development</>,
    },
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[900px] w-full flex-col overflow-hidden bg-[#292B2E] text-white sm:min-h-[850px] lg:min-h-screen lg:block"
    >
      {/* MOBILE PORTRAIT BACKGROUND */}
     
<motion.img
  src="/school-hero-mobile.png"
  alt="Sardar Patel Rashtriya Inter College"
  initial={{ opacity: 0, scale: 1.03 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    opacity: { duration: 1.4 },
    scale: { duration: 2, ease: [0.22, 1, 0.36, 1] },
  }}
  className="absolute left-0 top-0 z-0 h-[115%] w-full object-cover object-top lg:hidden"
/>


      {/* DESKTOP LANDSCAPE BACKGROUND */}
      <motion.img
        src="/school-hero.png"
        alt="Sardar Patel Rashtriya Inter College"
        initial={{ opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 1.4, ease: "easeOut" },
          scale: { duration: 2, ease: [0.22, 1, 0.36, 1] },
        }}
        className="absolute inset-0 z-0 hidden h-full w-full object-cover object-[15%_center] lg:block"
      />

      {/* MOBILE DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#17232D]/55 via-[#292B2E]/60 to-[#292B2E]/90 lg:hidden" />

      {/* DESKTOP DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] hidden bg-gradient-to-r from-[#292B2E]/90 via-[#383A3D]/55 to-transparent lg:block" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-4 pb-8 pt-32 sm:px-8 sm:pt-36 lg:px-16 lg:pb-40 lg:pt-40">
        <div className="mx-auto max-w-[820px] text-center lg:mx-0 lg:text-left lg:-translate-y-8">

          {/* TAG */}
          <motion.div
            initial={false}
            animate={reveal(0, 20)}
            className="mb-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[9px] font-semibold tracking-[1.2px] text-white/90 sm:mb-7 sm:gap-x-3 sm:text-sm sm:tracking-[2px] lg:justify-start"
          >
            <span>DISCIPLINE</span>
            <span className="text-[#B94A4A]">•</span>
            <span>EDUCATION</span>
            <span className="text-[#B94A4A]">•</span>
            <span>BRIGHT FUTURE</span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={false}
            animate={reveal(0.15, 35)}
            className="mx-auto max-w-[700px] break-words text-[clamp(2rem,8vw,3.6rem)] font-bold leading-[1.13] tracking-tight sm:text-[clamp(2.5rem,6vw,3.6rem)] lg:mx-0 lg:text-[clamp(2.4rem,4.2vw,3.6rem)]"
          >
            Welcome to
            <br />

            <span className="bg-gradient-to-r from-white via-[#E5E8ED] to-[#BFC5CE] bg-clip-text text-transparent">
              Sardar Patel
            </span>

            <br />

            <span className="text-white">
              Rashtriya Inter College
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={false}
            animate={reveal(0.3, 25)}
            className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0"
          >
            Nurturing young minds with quality education,
            strong values and a vision for a better tomorrow.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={false}
            animate={reveal(0.45, 25)}
            className="relative -mt-1 flex -translate-y-5 flex-col items-stretch justify-center gap-2 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8 sm:translate-y-0 sm:gap-4 lg:justify-start"
          >
            <a
              href="#academics"
              className="group flex min-h-[44px] items-center justify-center gap-3 rounded-full bg-[#B94A4A] px-6 py-3 text-xs font-bold text-white shadow-[0_4px_15px_rgba(185,74,74,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A64040] sm:px-7 sm:py-4 sm:text-sm"
            >
              Explore Our School
              <ArrowRight size={19} />
            </a>

            <a
              href="#about"
              className="flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:px-7 sm:py-4 sm:text-sm"
            >
              About Us
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM HIGHLIGHTS */}
      <motion.div
        initial={false}
        animate={reveal(0.6, 20)}
        className="relative z-10 mt-auto w-full px-5 pb-8 sm:px-8 lg:absolute lg:bottom-9 lg:left-0 lg:right-0 lg:mt-0 lg:px-16 lg:pb-0"
      >
        <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-6 lg:flex lg:items-center lg:justify-start">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex min-w-0 items-center gap-2 sm:gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/[0.06] text-[#DCE1E8] sm:h-11 sm:w-11">
                  <Icon size={20} className="sm:h-[22px] sm:w-[22px]" />
                </div>

                <span className="text-[10px] font-medium leading-5 text-white/90 sm:text-sm">
                  {item.text}
                </span>

                {index !== 3 && (
                  <div className="ml-auto hidden h-10 w-px bg-white/25 lg:mr-3 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* DESKTOP SCROLL INDICATOR */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-4 right-6 z-20 hidden flex-col items-center gap-1 text-white/80 lg:flex"
      >
        <span className="text-[9px] tracking-[2px]">
          SCROLL
        </span>
        <MoveDown size={17} />
      </motion.a>
    </section>
  );
}
