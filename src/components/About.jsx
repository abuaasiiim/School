
"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
  School,
  Languages,
} from "lucide-react";

export default function About() {
  const imageRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [7, -7]),
    { stiffness: 100, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    { stiffness: 100, damping: 20 }
  );

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#F0EFED] py-14 text-[#292929] sm:py-20 md:py-32"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-white/80 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-[#C8CDD5]/45 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-[120px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent" />

      <div className="pointer-events-none absolute left-0 top-20 select-none font-serif text-[180px] font-bold leading-none text-[#292929]/5 md:text-[260px]">
        SP
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-24">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            {/* SECTION LABEL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-5 flex items-center gap-3 sm:mb-7"
            >
              <div className="h-[2px] w-10 bg-[#B94A4A]" />

              <span className="text-[10px] font-bold tracking-[2.5px] text-[#B94A4A] sm:text-[11px] sm:tracking-[3px]">
                ABOUT OUR INSTITUTION
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[32px] leading-[1.15] tracking-tight sm:text-5xl lg:text-[60px]"
            >
              More Than a School,
              <br />

              <span className="italic text-[#B94A4A]">
                A Place to
              </span>{" "}
              Grow.
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-xl text-[13px] leading-7 text-[#555555] sm:mt-7 sm:text-base sm:leading-8"
            >
              Established in 2002, Sardar Patel Rashtriya
              Inter College is committed to making quality
              education accessible to students.

              <br />
              <br />

              With classes VI to XII in Hindi and English
              mediums, our institution focuses on learning,
              discipline, strong values and the overall
              development of every student.
            </motion.p>

            {/* SCHOOL INFORMATION CARDS */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -7, rotateX: 3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/90 bg-white/75 p-4 shadow-[0_10px_35px_rgba(41,41,41,0.07),0_0_25px_rgba(200,205,213,0.12)] backdrop-blur-xl transition-shadow duration-300 hover:border-[#C8CDD5] hover:shadow-[0_18px_45px_rgba(100,110,125,0.15)] sm:p-5"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B94A4A] text-white transition-transform group-hover:rotate-6 sm:mb-4 sm:h-12 sm:w-12">
                  <School size={25} />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#292929]">
                  Since 2002
                </h3>

                <p className="mt-1.5 text-xs text-[#666666] sm:mt-2">
                  A journey of education
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -7, rotateX: 3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/90 bg-white/75 p-4 shadow-[0_10px_35px_rgba(41,41,41,0.07),0_0_25px_rgba(200,205,213,0.12)] backdrop-blur-xl transition-shadow duration-300 hover:border-[#C8CDD5] hover:shadow-[0_18px_45px_rgba(100,110,125,0.15)] sm:p-5"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B94A4A] text-white transition-transform group-hover:rotate-6 sm:mb-4 sm:h-12 sm:w-12">
                  <Languages size={24} />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#292929]">
                  Classes VI – XII
                </h3>

                <p className="mt-1.5 text-xs text-[#666666] sm:mt-2">
                  Hindi & English Medium
                </p>
              </motion.div>

            </div>

            {/* BOTTOM CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-7 sm:mt-10"
            >
              <a
                href="/academics"
                className="group inline-flex min-h-[46px] items-center gap-3 rounded-full bg-[#B94A4A] px-6 py-3 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#A33D3D] sm:px-7 sm:py-4 sm:text-sm"
              >
                Explore Academics

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>

          </div>

          {/* RIGHT IMAGE COMPOSITION */}
          <div className="relative order-1 flex flex-col items-center lg:order-2">

            {/* DECORATIVE CIRCLE */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute top-10 aspect-square w-[330px] rounded-full border border-dashed border-[#B94A4A]/40 sm:w-[540px]"
            />

            <div className="pointer-events-none absolute top-20 aspect-square w-[290px] rounded-full border border-[#AEB6C2]/40 shadow-[0_0_45px_rgba(200,205,213,0.15)] sm:w-[460px]" />

            {/* IMAGE HALO */}
            <div className="pointer-events-none absolute left-1/2 top-20 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(185,74,74,0.13)_0%,rgba(200,205,213,0.22)_42%,transparent_72%)] blur-[45px] sm:h-[600px] sm:w-[600px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-white/45 blur-[90px]" />

            {/* BUILDING + EVENT IMAGE COMPOSITION */}
            <div className="relative z-10 w-full max-w-[520px] px-1 pb-10 pt-4 sm:px-5 sm:pb-12 sm:pt-8">

              {/* MAIN SCHOOL IMAGE */}
              <motion.div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.85, x: 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative z-10 w-full"
              >
                <div className="h-[250px] overflow-hidden rounded-2xl sm:h-[370px]">
                  <img
                    src="/school-about.jpg"
                    alt="Sardar Patel Rashtriya Inter College campus"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* STUDENTS EVENT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute bottom-0 right-0 z-20 h-[105px] w-[125px] overflow-hidden rounded-xl sm:right-2 sm:h-[165px] sm:w-[195px]"
              >
                <img
                  src="/school-event.jpg"
                  alt="Students participating in a school programme"
                  className="h-full w-full object-cover"
                />
              </motion.div>

            </div>

            {/* ESTABLISHED LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative z-10 mt-0 flex w-full max-w-[520px] items-center gap-3 px-1 sm:mt-1 sm:px-5"
            >
              <div className="h-px flex-1 bg-[#B94A4A]/40" />

              <span className="text-[9px] font-bold tracking-[2px] text-[#B94A4A] sm:text-xs sm:tracking-[3px]">
                ESTABLISHED 2002
              </span>

              <div className="h-px flex-1 bg-[#B94A4A]/40" />
            </motion.div>

            {/* PRINCIPAL PROFILE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              animate={{ y: [0, -7, 0] }}
              className="relative z-10 mt-5 flex w-full max-w-[520px] items-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#42464C] to-[#292B2E] p-3 text-white shadow-[0_15px_40px_rgba(41,41,41,0.20)] sm:mt-7 sm:gap-5 sm:p-5"
            >
              {/* SUBTLE CARD REFLECTION */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              {/* PRINCIPAL PHOTO */}
              <div className="h-[90px] w-[76px] shrink-0 overflow-hidden rounded-xl sm:h-[120px] sm:w-[105px]">
                <img
                  src="/principal.jpg"
                  alt="School principal"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* PRINCIPAL DETAILS */}
              <div className="min-w-0">
                <span className="text-[8px] font-semibold tracking-[2px] text-[#DCE1E8] sm:text-[10px] sm:tracking-[3px]">
                  SCHOOL LEADERSHIP
                </span>

                <h3 className="mt-1.5 font-serif text-lg font-semibold sm:mt-2 sm:text-2xl">
                  Our Principal
                </h3>

                <p className="mt-1.5 max-w-[280px] text-[10px] leading-5 text-white/70 sm:mt-2 sm:text-sm sm:leading-6">
                  Guiding students towards knowledge,
                  confidence and a brighter future.
                </p>
              </div>

            </motion.div>

            {/* SPARKLE */}
            <motion.div
              animate={{
                rotate: [0, 25, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="pointer-events-none absolute left-[10%] top-0 z-20 text-[#B94A4A]"
            >
              <Sparkles size={30} />
            </motion.div>

          </div>
        </div>

        {/* BOTTOM DECORATIVE LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-12 h-px origin-left bg-gradient-to-r from-[#B94A4A]/50 via-[#AEB6C2]/60 to-transparent sm:mt-16 lg:mt-24"
        />

      </div>
    </section>
  );
}
