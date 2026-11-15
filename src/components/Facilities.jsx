
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Users,
  GraduationCap,
  Sparkles,
  Droplets,
  Bath,
  Cctv,
  Bus,
  Sprout,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Modern Classrooms",
    category: "LEARNING SPACE",
    description:
      "A welcoming learning environment designed to support classroom learning and student engagement.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Drinking Water",
    category: "STUDENT WELL-BEING",
    description:
      "Access to drinking water is an important part of a comfortable and healthy school environment.",
    image: "/water-cooler.jpg",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Washrooms",
    category: "CAMPUS FACILITY",
    description:
      "Separate and maintained washroom facilities contribute to students' everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    icon: Bath,
  },
  {
    number: "04",
    title: "CCTV Security",
    category: "CAMPUS SAFETY",
    description:
      "CCTV surveillance helps monitor designated areas across the school campus.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=85",
    icon: Cctv,
  },
  {
    number: "05",
    title: "Transport Facility",
    category: "STUDENT TRANSPORT",
    description:
      "A transport facility designed to support students travelling to and from school.",
    image: "/transport.jpg",
    icon: Bus,
  },
  {
    number: "06",
    title: "Science Laboratory",
    category: "PRACTICAL LEARNING",
    description:
      "Explore scientific concepts through observation, experimentation and practical learning.",
    image: "/lab.jpg",
    icon: FlaskConical,
  },
  {
    number: "07",
    title: "Clean Campus",
    category: "CLEAN ENVIRONMENT",
    description:
      "A clean and organised campus helps create a pleasant environment for learning and interaction.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    icon: Sprout,
  },
  {
    number: "08",
    title: "Student Community",
    category: "TOGETHER WE LEARN",
    description:
      "An environment where students can learn, interact and grow together.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85",
    icon: Users,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative isolate overflow-hidden bg-[#F0EFED] px-4 py-16 text-[#292929] sm:px-8 sm:py-20 lg:px-16 lg:py-24"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#B94A4A]/5 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#292929]/[0.04] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:gap-8"
        >
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B94A4A]/20 bg-[#B94A4A]/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B94A4A] sm:mb-5 sm:px-5 sm:text-xs">
              <Sparkles size={14} />
              Campus Experience
            </div>

            <h2 className="text-3xl font-semibold leading-tight text-[#292929] sm:text-5xl lg:text-6xl">
              Spaces That
              <span className="block font-serif italic text-[#B94A4A]">
                Inspire Learning
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-6 text-gray-600 sm:text-base sm:leading-7">
            Discover the facilities and spaces that contribute to students'
            academic journey, everyday comfort and overall school experience.
          </p>
        </motion.div>

        {/* FACILITIES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {facilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  rotateY: 2,
                  scale: 1.01,
                  transition: { duration: 0.3 },
                }}
                className="group relative isolate min-h-[340px] overflow-hidden rounded-2xl bg-[#292929] shadow-[0_12px_32px_rgba(41,41,41,0.14)] sm:min-h-[390px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* BACKGROUND IMAGE */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#292929] via-[#292929]/60 to-[#292929]/10 transition-all duration-500 group-hover:from-[#292929]/95 group-hover:via-[#292929]/65" />

                {/* TOP DETAILS */}
                <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
                  <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                    {item.category}
                  </span>

                  <span className="font-serif text-xl text-white/80 sm:text-2xl">
                    {item.number}
                  </span>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:border-[#B94A4A] group-hover:bg-[#B94A4A] sm:mb-5 sm:h-12 sm:w-12">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <h3 className="text-xl font-semibold text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-[12px] leading-5 text-white/75 sm:mt-3 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-4 sm:mt-6 sm:pt-5">
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-xs sm:tracking-[0.18em]">
                      Explore
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B94A4A] bg-[#B94A4A] text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#292929] sm:h-10 sm:w-10">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 overflow-hidden rounded-2xl bg-[#292929] px-5 py-8 text-center sm:mt-12 sm:px-12 sm:py-12"
        >
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/15" />

          <div className="pointer-events-none absolute -right-5 -top-16 h-52 w-52 rounded-full border border-white/15" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <GraduationCap
              size={32}
              className="mx-auto mb-4 text-[#B94A4A] sm:mb-5 sm:h-[35px] sm:w-[35px]"
              strokeWidth={1.4}
            />

            <h3 className="text-xl font-semibold text-white sm:text-3xl">
              Every Space Has a Purpose
            </h3>

            <p className="mt-3 text-[12px] leading-6 text-white/65 sm:mt-4 sm:text-sm sm:leading-7">
              A learning environment is more than just classrooms. It is
              about creating opportunities to explore, understand and grow.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
