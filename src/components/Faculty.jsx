
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Sparkles,
  UserRound,
} from "lucide-react";

const teachers = [
  {
    name: "Teacher Name",
    subject: "Subject Name",
    role: "Teaching Faculty",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Teacher Name",
    subject: "Subject Name",
    role: "Teaching Faculty",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Teacher Name",
    subject: "Subject Name",
    role: "Teaching Faculty",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Teacher Name",
    subject: "Subject Name",
    role: "Teaching Faculty",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="relative isolate overflow-hidden bg-[#303236] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      {/* Metallic Graphite Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#292B2E_0%,#383B40_48%,#292B2E_100%)]" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#DCE1E8]/10 blur-[130px]" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-[130px]" />

        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DCE1E8]/60 to-transparent shadow-[0_0_25px_rgba(220,225,232,0.35)]" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:65px_65px]" />

        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/[0.04] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8CDD5]/40 bg-gradient-to-r from-white/[0.12] to-white/[0.04] px-5 py-2 text-sm font-semibold text-[#DCE1E8] shadow-[0_0_25px_rgba(220,225,232,0.08)] backdrop-blur-md">
            <Sparkles size={16} />
            OUR FACULTY
          </div>

          <h2 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#DCE1E8] to-[#AEB6C2] md:text-6xl">
            Meet Our
            <span className="block bg-gradient-to-r from-[#F4F6F9] via-[#C8CDD5] to-[#929BA8] bg-clip-text drop-shadow-[0_0_18px_rgba(220,225,232,0.18)]">
              Dedicated Teachers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#DCE1E8]/65 md:text-lg">
            Our teachers play an important role in guiding students,
            supporting their learning and helping them grow.
          </p>
        </motion.div>

        {/* Teacher Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                rotateY: 4,
                rotateX: 3,
              }}
              className="group relative overflow-hidden rounded-3xl border border-[#C8CDD5]/25 bg-gradient-to-br from-[#42454A] via-[#33363A] to-[#292B2E] shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-[#DCE1E8]/60 hover:shadow-[0_0_30px_rgba(220,225,232,0.13),0_25px_60px_rgba(0,0,0,0.35)]"
              style={{ perspective: "1000px" }}
            >
              {/* Card silver reflection */}
              <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-gradient-to-br from-white/[0.10] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-[#383B40]">
                <img
                  src={teacher.image}
                  alt="Teacher placeholder"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#292B2E]/90 via-[#292B2E]/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-[#DCE1E8]/40 bg-[#292B2E]/65 px-4 py-2 text-xs font-semibold text-[#F4F6F9] shadow-[0_0_15px_rgba(220,225,232,0.10)] backdrop-blur-md">
                  <GraduationCap size={15} />
                  Faculty Member
                </div>
              </div>

              {/* Teacher Details */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-[#F4F6F9]">
                  {teacher.name}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#DCE1E8]">
                  <BookOpen size={16} />
                  {teacher.subject}
                </p>

                <div className="mt-5 border-t border-[#C8CDD5]/20 pt-4 text-sm text-[#DCE1E8]/55">
                  {teacher.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Staff information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-[#C8CDD5]/30 bg-gradient-to-br from-[#42454A] via-[#33363A] to-[#292B2E] p-8 text-center shadow-[0_15px_50px_rgba(0,0,0,0.25)] md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#DCE1E8]/40 bg-gradient-to-b from-[#DCE1E8]/20 to-[#AEB6C2]/10 text-[#DCE1E8] shadow-[0_0_25px_rgba(220,225,232,0.12)]">
              <Users size={32} />
            </div>

            <h3 className="text-2xl font-bold text-[#F4F6F9] md:text-3xl">
              Our School Team
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#DCE1E8]/65">
              More information about our Principal, teaching faculty
              and administrative staff will be added here.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#C8CDD5]/40 bg-white/[0.05] px-5 py-3 text-sm font-medium text-[#DCE1E8] shadow-[0_0_18px_rgba(220,225,232,0.08)] backdrop-blur-md">
              <UserRound size={17} />
              Faculty Information
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
