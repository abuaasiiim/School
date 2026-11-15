
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Layers3,
  Stethoscope,
  CheckCircle2,
  Languages,
  Users,
} from "lucide-react";

const classes = [
  {
    number: "VI",
    title: "Class 6",
    level: "Middle School",
    description:
      "A new stage of learning, exploration and building strong foundations.",
    icon: BookOpen,
  },
  {
    number: "VII",
    title: "Class 7",
    level: "Middle School",
    description:
      "Continue exploring new ideas and developing learning skills.",
    icon: BookOpen,
  },
  {
    number: "VIII",
    title: "Class 8",
    level: "Middle School",
    description:
      "Build confidence and prepare for the next academic stage.",
    icon: BookOpen,
  },
  {
    number: "IX",
    title: "Class 9",
    level: "Secondary",
    description:
      "Develop deeper understanding and strengthen academic foundations.",
    icon: GraduationCap,
  },
  {
    number: "X",
    title: "Class 10",
    level: "Secondary",
    description:
      "Continue your academic journey with focus and determination.",
    icon: GraduationCap,
  },
  {
    number: "XI",
    title: "Class 11",
    level: "Senior Secondary",
    description:
      "Explore academic streams and choose your future direction.",
    icon: Layers3,
  },
  {
    number: "XII",
    title: "Class 12",
    level: "Senior Secondary",
    description:
      "Strengthen your knowledge and prepare for future opportunities.",
    icon: GraduationCap,
  },
];

// TEMPORARY SUBJECT LISTS - VERIFY WITH SCHOOL
const middleCoreSubjects = [
  "Hindi",
  "English",
  "Mathematics",
  "Science",
  "Social Science",
];

const secondaryCoreSubjects = [
  "Hindi",
  "English",
  "Mathematics",
  "Science",
  "Social Science",
];

const middleSubjects = ["Urdu", "Sanskrit", "Art"];

const streams = [
  {
    name: "Science",
    short: "SCI",
    description:
      "For students interested in scientific learning and exploring medical, technical and other science-related career paths.",
    subjects: [
      "Physics",
      "Chemistry",
      "English",
      "Hindi",
      "Biology",
      "Mathematics",
    ],
    subjectNote:
      "Biology and Mathematics are available as subject options.",
    temporary: false,
  },
  {
    name: "Commerce",
    short: "COM",
    description:
      "For students interested in business, finance, accounting and commerce-related careers.",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "English",
    ],
    subjectNote:
      "These are indicative subjects and will be confirmed with the school.",
    temporary: true,
  },
  {
    name: "Arts / Humanities",
    short: "ART",
    description:
      "For students interested in humanities, society, culture and related fields.",
    subjects: [
      "History",
      "Political Science",
      "Geography",
      "English",
    ],
    subjectNote:
      "These are indicative subjects and will be confirmed with the school.",
    temporary: true,
  },
];

const learningFocus = [
  "Strong academic foundations",
  "Conceptual understanding",
  "Learning and problem-solving skills",
  "Preparation for the next academic stage",
];

export default function Academics() {
  const [selectedClass, setSelectedClass] = useState("VI");
  const [selectedStream, setSelectedStream] = useState("Science");

  const activeClass = classes.find(
    (item) => item.number === selectedClass
  );

  const activeStream = streams.find(
    (item) => item.name === selectedStream
  );

  const isSeniorClass =
    selectedClass === "XI" || selectedClass === "XII";

  return (
    <section
      id="academics"
      className="relative isolate overflow-hidden bg-[#303236] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* METALLIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(125deg,#292B2E_0%,#383B40_48%,#292B2E_100%)]" />

      {/* SILVER LIGHTING */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-white/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#AEB6C2]/[0.12] blur-[130px]" />
      <div className="pointer-events-none absolute left-[40%] top-[30%] h-72 w-72 rounded-full bg-white/[0.035] blur-[110px]" />

      {/* SILVER GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,225,232,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,225,232,0.4) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      {/* TOP REFLECTION */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.07] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DCE1E8] shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
            <Sparkles size={15} />
            Academic Journey
          </div>

          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Education for
            <span className="mt-2 block bg-gradient-to-r from-[#E7EAF0] via-[#AEB6C2] to-white bg-clip-text font-serif italic text-transparent">
              Every New Beginning
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Explore the academic journey at Sardar Patel Rashtriya Inter
            College, from Class VI to Class XII.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#C8CDD5] to-transparent shadow-[0_0_12px_rgba(220,225,232,0.35)]" />
        </motion.div>

        {/* CLASS EXPLORER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-8"
        >
          {/* LEFT CLASS NAVIGATION */}
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-[#41444A] to-[#292B2E] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-[#C8CDD5]">
                Academic Levels
              </p>

              <h3 className="mb-6 text-xl font-semibold text-white">
                Select Your Class
              </h3>

              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                {classes.map((item) => {
                  const Icon = item.icon;
                  const active = selectedClass === item.number;

                  return (
                    <motion.button
                      type="button"
                      key={item.number}
                      onClick={() => {
                        setSelectedClass(item.number);
                        setSelectedStream("Science");
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      aria-pressed={active}
                      className={`group flex min-w-0 w-full items-center justify-between rounded-xl border px-2.5 py-3 text-left transition-all duration-300 sm:px-4 sm:py-3.5 ${
                        active
                          ? "border-[#B94A4A] bg-[#B94A4A]/20 shadow-[0_5px_20px_rgba(185,74,74,0.12)]"
                          : "border-white/10 bg-white/[0.035] hover:border-white/30 hover:bg-white/[0.08]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 sm:h-9 sm:w-9 ${
                            active
                              ? "border-[#B94A4A]/60 bg-[#B94A4A] text-white"
                              : "border-white/20 bg-white/[0.07] text-[#C8CDD5]"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-white sm:text-sm">
                            Class {item.number}
                          </p>
                          <p className="mt-0.5 text-[10px] text-white/45">
                            {item.level}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className={`transition-all duration-300 ${
                          active
                            ? "text-[#E7A0A0]"
                            : "text-white/35 group-hover:text-white"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/15 pt-5">
                <p className="text-xs leading-6 text-white/45">
                  Choose a class to explore its academic details and
                  learning opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT INFORMATION PANEL */}
          <div className="relative min-h-0 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#41444A] via-[#303338] to-[#292B2E] p-4 shadow-[0_15px_45px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] sm:min-h-[530px] sm:p-9">
            {/* PANEL REFLECTION */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/[0.09] blur-[90px]" />
            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClass}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                {/* RIGHT PANEL HEADING */}
                <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-7 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8CDD5]">
                      Academic Details
                    </p>

                    <h3 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                      {activeClass.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/55">
                      {activeClass.level}
                    </p>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.07] text-[#DCE1E8]">
                    <activeClass.icon size={32} strokeWidth={1.4} />
                  </div>
                </div>

                {/* CLASS DESCRIPTION */}
                <div className="mt-7">
                  <p className="max-w-2xl text-sm leading-7 text-white/65">
                    {activeClass.description}
                  </p>
                </div>

                {!isSeniorClass ? (
                  /* CLASS VI TO X */
                  <div className="mt-9 grid gap-5 md:grid-cols-2">
                    {/* SUBJECT OVERVIEW */}
                    <div className="rounded-xl border border-white/15 bg-white/[0.045] p-6 md:col-span-2">
                      <div className="flex items-center gap-3">
                        <BookOpen
                          size={23}
                          className="text-[#C8CDD5]"
                        />

                        <h4 className="text-lg font-semibold text-white">
                          Subjects Taught
                        </h4>
                      </div>

                      <p className="mt-3 text-sm text-white/50">
                        Core academic subjects for Class {selectedClass}.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {(selectedClass === "IX" ||
                        selectedClass === "X"
                          ? secondaryCoreSubjects
                          : middleCoreSubjects
                        ).map((subject) => (
                          <span
                            key={subject}
                            className="rounded-lg border border-white/20 bg-white/[0.07] px-4 py-2.5 text-sm font-medium text-[#E0E4EB]"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 border-t border-white/10 pt-6">
                        <div className="flex items-center gap-3">
                          <Languages
                            size={21}
                            className="text-[#C8CDD5]"
                          />

                          <h4 className="text-base font-semibold text-white">
                            Optional Subjects
                          </h4>
                        </div>

                        <p className="mt-3 text-xs text-white/50">
                          Students can choose from the following options:
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {middleSubjects.map((subject) => (
                            <span
                              key={subject}
                              className="rounded-lg border border-[#B94A4A]/40 bg-[#B94A4A]/10 px-4 py-2.5 text-sm font-medium text-[#F0D6D6]"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="mt-5 text-xs leading-6 text-white/40">
                        Subject information is provisional and can be
                        updated according to the school's official
                        curriculum.
                      </p>
                    </div>

                    {/* LEARNING FOCUS */}
                    <div className="rounded-xl border border-white/15 bg-white/[0.045] p-6 md:col-span-2">
                      <h4 className="text-lg font-semibold text-white">
                        Learning Focus
                      </h4>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {learningFocus.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-[#C8CDD5]"
                            />

                            <p className="text-sm text-white/70">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* CLASS XI AND XII */
                  <div className="mt-8">
                    <div className="mb-5">
                      <h4 className="text-xl font-semibold text-white">
                        Choose Your Stream
                      </h4>

                      <p className="mt-2 text-sm text-white/55">
                        Explore the academic streams available for
                        Class {selectedClass}.
                      </p>
                    </div>

                    {/* STREAM SELECTION */}
                    <div className="grid gap-3 sm:grid-cols-3">
                      {streams.map((stream) => {
                        const active = selectedStream === stream.name;

                        return (
                          <motion.button
                            type="button"
                            key={stream.name}
                            onClick={() => setSelectedStream(stream.name)}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            aria-pressed={active}
                            className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                              active
                                ? "border-[#B94A4A] bg-[#B94A4A]/15 shadow-[0_0_22px_rgba(185,74,74,0.12)]"
                                : "border-white/15 bg-white/[0.04] hover:border-white/40 hover:bg-white/[0.08]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C8CDD5]">
                                {stream.short}
                              </span>

                              <ArrowUpRight
                                size={17}
                                className={
                                  active
                                    ? "text-[#E7A0A0]"
                                    : "text-white/40"
                                }
                              />
                            </div>

                            <h5 className="mt-5 text-base font-semibold text-white">
                              {stream.name}
                            </h5>

                            <p className="mt-2 text-[11px] text-white/45">
                              {active
                                ? "Selected Stream"
                                : "Explore Stream"}
                            </p>
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* STREAM DETAILS */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${selectedClass}-${selectedStream}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 rounded-xl border border-white/15 bg-white/[0.045] p-5 sm:p-6"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8CDD5]">
                          Selected Academic Path
                        </p>

                        <h5 className="mt-2 text-xl font-semibold text-white">
                          {activeStream.name}
                        </h5>

                        <p className="mt-3 text-sm leading-7 text-white/60">
                          {activeStream.description}
                        </p>

                        {/* SUBJECT OPTIONS */}
                        <div className="mt-6 border-t border-white/10 pt-5">
                          <div className="flex items-center gap-2">
                            <BookOpen
                              size={18}
                              className="text-[#C8CDD5]"
                            />

                            <h6 className="text-sm font-semibold text-white">
                              {selectedStream === "Science"
                                ? "Subjects & Options"
                                : "Indicative Subjects"}
                            </h6>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {activeStream.subjects.map((subject) => (
                              <span
                                key={subject}
                                className="rounded-lg border border-white/20 bg-white/[0.07] px-3 py-2 text-xs font-medium text-[#E0E4EB]"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>

                          <p className="mt-3 text-xs leading-5 text-white/40">
                            {activeStream.subjectNote}
                          </p>
                        </div>

                        {/* SCIENCE CLASS GROUPS */}
                        {selectedStream === "Science" && (
                          <div className="mt-6 rounded-xl border border-[#B94A4A]/40 bg-gradient-to-r from-[#49383A] to-[#303338] p-5 sm:p-6">
                            <div className="flex items-center gap-3">
                              <Stethoscope
                                size={23}
                                className="shrink-0 text-[#E7A0A0]"
                              />

                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E7A0A0]">
                                  Science Learning Groups
                                </p>

                                <h6 className="mt-1 text-lg font-semibold text-white">
                                  Separate Classes for Different Goals
                                </h6>
                              </div>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                              <div className="rounded-lg border border-white/15 bg-white/[0.06] p-4">
                                <div className="flex items-center gap-2">
                                  <GraduationCap
                                    size={18}
                                    className="text-[#E7A0A0]"
                                  />

                                  <p className="text-sm font-semibold text-white">
                                    NEET-Focused Classes
                                  </p>
                                </div>

                                <p className="mt-2 text-xs leading-6 text-white/60">
                                  A separate class group for Science
                                  students interested in NEET preparation.
                                </p>
                              </div>

                              <div className="rounded-lg border border-white/15 bg-white/[0.06] p-4">
                                <div className="flex items-center gap-2">
                                  <Users
                                    size={18}
                                    className="text-[#C8CDD5]"
                                  />

                                  <p className="text-sm font-semibold text-white">
                                    Regular Science Classes
                                  </p>
                                </div>

                                <p className="mt-2 text-xs leading-6 text-white/60">
                                  A separate class group for Science
                                  students who are not pursuing NEET.
                                </p>
                              </div>
                            </div>

                            <p className="mt-4 text-xs leading-6 text-white/45">
                              These separate class arrangements are
                              available for Science students of Classes
                              XI and XII.
                            </p>
                          </div>
                        )}

                        {/* TEMPORARY SUBJECT NOTICE */}
                        {activeStream.temporary && (
                          <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3">
                            <p className="text-xs leading-6 text-white/50">
                              <span className="font-semibold text-[#DCE1E8]">
                                Note:
                              </span>{" "}
                              Subject information is temporary and will
                              be updated after confirmation from the school.
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* LANGUAGE PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-r from-[#41444A] via-[#303338] to-[#41444A] px-7 py-8 shadow-[0_15px_45px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-10 sm:py-9"
        >
          {/* PANEL REFLECTION */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/[0.10] blur-[90px]" />
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
                <span className="h-[2px] w-7 bg-[#C8CDD5]" />

                <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/65">
                  Language Options
                </span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                Learning in Two Languages
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                Choose your preferred medium of education and
                continue your academic journey.
              </p>
            </div>

            {/* LANGUAGE CARDS */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              {/* HINDI */}
              <div className="group flex min-w-[180px] items-center gap-4 rounded-xl border border-white/25 bg-white/[0.07] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/60 hover:bg-white/[0.12]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-xl font-semibold text-[#E0E4EB]">
                  अ
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[2px] text-white/50">
                    Medium
                  </p>

                  <p className="mt-1 text-base font-semibold text-white">
                    Hindi
                  </p>

                  <p className="text-xs text-white/50">
                    हिंदी माध्यम
                  </p>
                </div>
              </div>

              {/* ENGLISH */}
              <div className="group flex min-w-[180px] items-center gap-4 rounded-xl border border-white/25 bg-white/[0.07] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/60 hover:bg-white/[0.12]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-xl font-bold text-[#E0E4EB]">
                  A
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[2px] text-white/50">
                    Medium
                  </p>

                  <p className="mt-1 text-base font-semibold text-white">
                    English
                  </p>

                  <p className="text-xs text-white/50">
                    English Medium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
