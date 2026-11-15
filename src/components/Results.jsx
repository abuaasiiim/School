
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  GraduationCap,
  BookOpen,
  FileText,
  Sparkles,
  ArrowUpRight,
  Printer,
  Download,
  Award,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Layers3,
  ClipboardCheck,
  Hash,
  NotebookPen,
  CalendarDays,
  Clock3,
  FolderOpen,
  X,
  LockKeyhole,
} from "lucide-react";

const classes = ["VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const navigation = [
  { id: "results", title: "Results", subtitle: "Examination marksheet", icon: GraduationCap },
  { id: "roll", title: "Roll Number", subtitle: "Exam & seating details", icon: Hash },
  { id: "syllabus", title: "Syllabus", subtitle: "Class-wise subjects", icon: BookOpen },
  { id: "notes", title: "Notes", subtitle: "Study materials", icon: NotebookPen },
];

const syllabusData = {
  VI: {
    subjects: {
      Hindi: ["भाषा और व्याकरण", "अपठित गद्यांश", "पत्र लेखन", "निबंध लेखन", "पाठ्यपुस्तक के पाठ"],
      English: ["Reading Comprehension", "Parts of Speech", "Tenses", "Paragraph Writing", "Prose and Poetry"],
      Mathematics: ["Knowing Our Numbers", "Whole Numbers", "Playing with Numbers", "Basic Geometry", "Mensuration"],
      Science: ["Food and Its Components", "Sorting Materials", "Separation of Substances", "Living Organisms", "Motion and Measurement"],
      "Social Science": ["History: Early Humans", "Geography: The Earth", "Globe and Maps", "Our Government", "Local Administration"],
    },
    optional: ["Urdu", "Sanskrit", "Art"],
  },
  VII: {
    subjects: {
      Hindi: ["गद्य एवं पद्य", "व्याकरण", "संधि और समास", "पत्र लेखन", "निबंध लेखन"],
      English: ["Reading Skills", "Nouns and Pronouns", "Tenses", "Active and Passive Voice", "Writing Skills"],
      Mathematics: ["Integers", "Fractions and Decimals", "Simple Equations", "Lines and Angles", "Comparing Quantities"],
      Science: ["Nutrition in Plants", "Nutrition in Animals", "Heat", "Acids, Bases and Salts", "Motion and Time"],
      "Social Science": ["Medieval History", "Environment", "Inside Our Earth", "State Government", "Markets Around Us"],
    },
    optional: ["Urdu", "Sanskrit", "Art"],
  },
  VIII: {
    subjects: {
      Hindi: ["गद्य एवं पद्य", "व्याकरण", "वाक्य रचना", "पत्र लेखन", "निबंध लेखन"],
      English: ["Comprehension", "Grammar", "Tenses and Modals", "Writing Skills", "Literature"],
      Mathematics: ["Rational Numbers", "Linear Equations", "Understanding Quadrilaterals", "Squares and Cubes", "Mensuration"],
      Science: ["Crop Production", "Microorganisms", "Synthetic Fibres", "Metals and Non-Metals", "Force and Pressure"],
      "Social Science": ["Modern History", "Resources", "Agriculture", "Indian Constitution", "Parliament"],
    },
    optional: ["Urdu", "Sanskrit", "Art"],
  },
  IX: {
    subjects: {
      Hindi: ["क्षितिज / पाठ्यपुस्तक अध्ययन", "व्याकरण", "अपठित गद्यांश", "लेखन कौशल", "साहित्य"],
      English: ["Reading Comprehension", "Grammar", "Writing Skills", "Prose", "Poetry"],
      Mathematics: ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations", "Triangles"],
      Science: ["Matter in Our Surroundings", "The Fundamental Unit of Life", "Motion", "Force and Laws of Motion", "Atoms and Molecules"],
      "Social Science": ["The French Revolution", "Physical Features of India", "Democracy", "Constitutional Design", "Economics"],
    },
    optional: ["Urdu", "Sanskrit", "Art"],
  },
  X: {
    subjects: {
      Hindi: ["गद्य एवं पद्य", "व्याकरण", "अपठित बोध", "लेखन कौशल", "साहित्यिक अध्ययन"],
      English: ["Reading Skills", "Grammar", "Formal Letter Writing", "Literature", "Writing Skills"],
      Mathematics: ["Real Numbers", "Polynomials", "Pair of Linear Equations", "Quadratic Equations", "Triangles", "Trigonometry", "Statistics"],
      Science: ["Chemical Reactions", "Life Processes", "Light", "Electricity", "Magnetic Effects of Current", "Our Environment"],
      "Social Science": ["Nationalism in Europe", "Nationalism in India", "Resources and Development", "Power Sharing", "Development", "Money and Credit"],
    },
    optional: ["Urdu", "Sanskrit", "Art"],
  },
  XI: {
    streams: {
      Science: {
        subjects: {
          Hindi: ["गद्य एवं पद्य", "व्याकरण", "लेखन कौशल", "अपठित बोध"],
          English: ["Reading Comprehension", "Grammar", "Writing Skills", "Literature"],
          Physics: ["Units and Measurements", "Motion in a Straight Line", "Laws of Motion", "Work, Energy and Power", "Gravitation"],
          Chemistry: ["Some Basic Concepts", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "Thermodynamics"],
          Biology: ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Cell Structure"],
          Mathematics: ["Sets", "Relations and Functions", "Trigonometric Functions", "Complex Numbers", "Sequences and Series"],
        },
      },
      Commerce: {
        subjects: {
          Hindi: ["गद्य एवं पद्य", "व्याकरण", "लेखन कौशल"],
          English: ["Reading Skills", "Grammar", "Writing Skills", "Literature"],
          Accountancy: ["Introduction to Accounting", "Basic Accounting Terms", "Accounting Principles", "Journal", "Ledger"],
          "Business Studies": ["Nature of Business", "Forms of Business Organisation", "Public and Private Enterprises", "Business Services"],
          Economics: ["Introduction to Economics", "Statistics", "Collection of Data", "Organisation of Data", "Presentation of Data"],
        },
      },
      Arts: {
        subjects: {
          Hindi: ["गद्य एवं पद्य", "व्याकरण", "लेखन कौशल"],
          English: ["Reading Skills", "Grammar", "Writing Skills", "Literature"],
          History: ["Early Societies", "Writing and City Life", "An Empire Across Three Continents", "Central Islamic Lands"],
          "Political Science": ["Constitution", "Rights in the Indian Constitution", "Election and Representation", "Executive"],
          Geography: ["Geography as a Discipline", "The Earth", "Interior of the Earth", "Distribution of Oceans and Continents"],
        },
      },
    },
  },
  XII: {
    streams: {
      Science: {
        subjects: {
          Hindi: ["गद्य एवं पद्य", "व्याकरण", "लेखन कौशल", "अपठित बोध"],
          English: ["Reading Comprehension", "Writing Skills", "Flamingo", "Vistas", "Grammar"],
          Physics: ["Electric Charges and Fields", "Electrostatic Potential", "Current Electricity", "Magnetism", "Ray Optics"],
          Chemistry: ["Solutions", "Electrochemistry", "Chemical Kinetics", "d and f Block Elements", "Coordination Compounds"],
          Biology: ["Reproduction", "Genetics and Evolution", "Human Health", "Biotechnology", "Ecology"],
          Mathematics: ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Integrals", "Probability"],
        },
      },
      Commerce: {
        subjects: {
          Hindi: ["गद्य एवं पद्य", "व्याकरण", "लेखन कौशल"],
          English: ["Reading Skills", "Grammar", "Writing Skills", "Literature"],
          Accountancy: ["Accounting for Partnership", "Admission of a Partner", "Retirement of a Partner", "Dissolution", "Company Accounts"],
          "Business Studies": ["Nature of Management", "Principles of Management", "Business Environment", "Planning", "Organising", "Marketing"],
          Economics: ["National Income", "Money and Banking", "Government Budget", "Balance of Payments", "Indian Economy"],
        },
      },
      Arts: {
        subjects: {
          Hindi: ["गद्य एवं पद्य", "व्याकरण", "लेखन कौशल"],
          English: ["Reading Skills", "Grammar", "Writing Skills", "Literature"],
          History: ["Bricks, Beads and Bones", "Kings, Farmers and Towns", "Kinship, Caste and Class", "Colonialism and Rural Society"],
          "Political Science": ["The End of Bipolarity", "Contemporary Centres of Power", "International Organisations", "Security in the Contemporary World"],
          Geography: ["Human Geography", "Population", "Human Development", "Primary Activities", "Transport and Communication"],
        },
      },
    },
  },
};

const examOptions = [
  "Half-Yearly Examination 2026",
  "Annual Examination 2026",
  "Unit Test 2026",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-bold tracking-[0.18em] text-[#B94A4A]">
        {eyebrow}
      </p>
      <h3 className="text-2xl font-bold text-[#292929] md:text-3xl">
        {title}
      </h3>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#292929]/60">
          {description}
        </p>
      )}
    </div>
  );
}

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#292929]/20 bg-white/60 px-5 py-12 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#292B2E] text-[#DCE1E8]">
        <Icon size={25} />
      </div>
      <h4 className="font-bold text-[#292929]">{title}</h4>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#292929]/55">
        {description}
      </p>
    </div>
  );
}

export default function Results() {
  const [activeTab, setActiveTab] = useState("results");

  // Results
  const [resultClass, setResultClass] = useState("VI");
  const [resultRoll, setResultRoll] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  // Roll Number
  const [selectedExam, setSelectedExam] = useState(examOptions[0]);
  const [rollClass, setRollClass] = useState("VI");
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [rollMessage, setRollMessage] = useState("");

  // Syllabus
  const [syllabusClass, setSyllabusClass] = useState("VI");
  const [selectedStream, setSelectedStream] = useState("Science");
  const [expandedSubject, setExpandedSubject] = useState(null);

  // Notes
  const [notesClass, setNotesClass] = useState("VI");
  const [notesStream, setNotesStream] = useState("Science");

  const currentSyllabus = syllabusData[syllabusClass];

  const currentSubjects =
    syllabusClass === "XI" || syllabusClass === "XII"
      ? currentSyllabus?.streams?.[selectedStream]?.subjects
      : currentSyllabus?.subjects;

  const handleResultSearch = (e) => {
    e.preventDefault();
    setResultMessage("");

    if (!resultRoll.trim()) {
      setResultMessage("Please enter your roll number.");
      return;
    }

    setResultMessage(
      "Online result records are not connected yet. Verified results will be available here after the school connects its result database."
    );
  };

  const handleRollSearch = (e) => {
    e.preventDefault();
    setRollMessage("");

    if (!studentName.trim() || !fatherName.trim()) {
      setRollMessage("Please enter the student's full name and father's full name.");
      return;
    }

    setRollMessage(
      "Student records are not connected yet. Roll number and seating details will appear here after the school publishes verified examination records."
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setExpandedSubject(null);
    setResultMessage("");
    setRollMessage("");
  };

  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#F0EFED] px-5 py-20 text-[#292929] md:px-10 md:py-24 lg:px-20"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#B94A4A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#292929]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B94A4A]/30 bg-white/60 px-5 py-2 text-sm font-semibold text-[#B94A4A]">
            <Sparkles size={16} />
            STUDENT RESOURCES
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#292929] md:text-6xl">
  Student
  <span className="block text-[#B94A4A]">Portal</span>
</h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#292929]/65">
            Your academic resource centre. Access examination results,
            roll numbers, syllabus and study materials in one place.
          </p>
        </motion.div>

        {/* Interactive dashboard */}
        <div className="grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* Left navigation */}
          <motion.aside
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[26px] border border-[#292929]/10 bg-white p-4 shadow-[0_12px_35px_rgba(41,41,41,0.06)] lg:sticky lg:top-28"
          >
            <div className="mb-5 rounded-2xl bg-gradient-to-br from-[#292B2E] to-[#383B40] p-5 text-white">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#DCE1E8]">
                <FolderOpen size={22} />
              </div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#DCE1E8]/65">
                STUDENT PORTAL
              </p>
              <h3 className="mt-1 text-xl font-bold">
                Resource Centre
              </h3>
              <p className="mt-2 text-xs leading-5 text-white/55">
                Select a category to continue.
              </p>
            </div>

            <div className="space-y-2">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => switchTab(item.id)}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition duration-300 ${
                      isActive
                        ? "border-[#292B2E] bg-[#292B2E] text-white shadow-lg"
                        : "border-transparent bg-[#F0EFED]/60 text-[#292929] hover:border-[#B94A4A]/25 hover:bg-[#B94A4A]/5"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                        isActive
                          ? "bg-white/10 text-[#DCE1E8]"
                          : "bg-white text-[#B94A4A] group-hover:bg-[#B94A4A]/10"
                      }`}
                    >
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold">{item.title}</p>
                      <p
                        className={`mt-1 text-[11px] ${
                          isActive ? "text-white/55" : "text-[#292929]/45"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className={`shrink-0 transition ${
                        isActive
                          ? "text-[#DCE1E8]"
                          : "text-[#292929]/30 group-hover:text-[#B94A4A]"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-[#292929]/10 bg-[#F0EFED]/70 p-4">
              <div className="flex items-center gap-2 text-[#B94A4A]">
                <ShieldCheck size={17} />
                <span className="text-xs font-bold">STUDENT INFORMATION</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-[#292929]/55">
                Use your correct academic details when accessing student resources.
              </p>
            </div>
          </motion.aside>

          {/* Right content panel */}
          <div className="min-w-0 overflow-hidden rounded-[28px] border border-[#292929]/10 bg-white shadow-[0_15px_45px_rgba(41,41,41,0.07)]">

            {/* Content header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#292B2E] via-[#303236] to-[#383B40] px-6 py-7 text-white md:px-9 md:py-8">
              <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-2 -top-12 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#DCE1E8]">
                  {activeTab === "results" && <GraduationCap size={28} />}
                  {activeTab === "roll" && <Hash size={27} />}
                  {activeTab === "syllabus" && <BookOpen size={27} />}
                  {activeTab === "notes" && <NotebookPen size={27} />}
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#DCE1E8]/65">
                    STUDENT RESOURCE CENTRE
                  </p>
                  <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                    {navigation.find((item) => item.id === activeTab)?.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-9">
              <AnimatePresence mode="wait">

                {/* RESULTS */}
                {activeTab === "results" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SectionHeading
                      eyebrow="EXAMINATION RECORDS"
                      title="Check Your Result"
                      description="Select your class and enter your roll number to search for your examination marksheet."
                    />

                    <form
                      onSubmit={handleResultSearch}
                      className="rounded-2xl border border-[#292929]/10 bg-[#F0EFED]/55 p-5 md:p-7"
                    >
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold">
                            Select Class
                          </label>
                          <select
                            value={resultClass}
                            onChange={(e) => setResultClass(e.target.value)}
                            className="w-full rounded-xl border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#B94A4A]"
                          >
                            {classes.map((item) => (
                              <option key={item} value={item}>
                                Class {item}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold">
                            Roll Number
                          </label>
                          <input
                            type="text"
                            value={resultRoll}
                            onChange={(e) => setResultRoll(e.target.value)}
                            placeholder="Enter your roll number"
                            className="w-full rounded-xl border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#B94A4A]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#B94A4A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#A64040] md:w-auto"
                      >
                        <Search size={18} />
                        Search Result
                        <ArrowUpRight size={17} />
                      </button>
                    </form>

                    {resultMessage && (
                      <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#B94A4A]/20 bg-[#B94A4A]/5 p-4 text-sm leading-6 text-[#292929]/75">
                        <FileText size={19} className="mt-0.5 shrink-0 text-[#B94A4A]" />
                        {resultMessage}
                      </div>
                    )}

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#292929]/10 bg-white p-5">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#292B2E] text-[#DCE1E8]">
                          <Award size={22} />
                        </div>
                        <h4 className="font-bold">Digital Marksheet</h4>
                        <p className="mt-2 text-sm leading-6 text-[#292929]/55">
                          View subject-wise marks, percentage, grade and result status.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#292929]/10 bg-white p-5">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#292B2E] text-[#DCE1E8]">
                          <Printer size={22} />
                        </div>
                        <h4 className="font-bold">Print & Download</h4>
                        <p className="mt-2 text-sm leading-6 text-[#292929]/55">
                          Verified marksheets will support printing and PDF download.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F0EFED] p-4">
                      <LockKeyhole size={18} className="mt-0.5 shrink-0 text-[#B94A4A]" />
                      <p className="text-xs leading-6 text-[#292929]/60">
                        Student result records will only be displayed after secure database integration and verification by the school.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ROLL NUMBER */}
                {activeTab === "roll" && (
                  <motion.div
                    key="roll"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SectionHeading
                      eyebrow="EXAMINATION INFORMATION"
                      title="Find Your Roll Number"
                      description="Select your examination and class, then enter the student's details to find the published examination information."
                    />

                    <form
                      onSubmit={handleRollSearch}
                      className="rounded-2xl border border-[#292929]/10 bg-[#F0EFED]/55 p-5 md:p-7"
                    >
                      <div className="mb-5">
                        <label className="mb-2 block text-sm font-semibold">
                          Select Examination
                        </label>
                        <select
                          value={selectedExam}
                          onChange={(e) => setSelectedExam(e.target.value)}
                          className="w-full rounded-xl border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none focus:border-[#B94A4A]"
                        >
                          {examOptions.map((exam) => (
                            <option key={exam} value={exam}>
                              {exam}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold">
                            Select Class
                          </label>
                          <select
                            value={rollClass}
                            onChange={(e) => setRollClass(e.target.value)}
                            className="w-full rounded-xl border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none focus:border-[#B94A4A]"
                          >
                            {classes.map((item) => (
                              <option key={item} value={item}>
                                Class {item}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold">
                            Student Full Name
                          </label>
                          <input
                            type="text"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            placeholder="Enter student's full name"
                            className="w-full rounded-xl border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none focus:border-[#B94A4A]"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="mb-2 block text-sm font-semibold">
                            Father's Full Name
                          </label>
                          <input
                            type="text"
                            value={fatherName}
                            onChange={(e) => setFatherName(e.target.value)}
                            placeholder="Enter father's full name"
                            className="w-full rounded-xl border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none focus:border-[#B94A4A]"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#B94A4A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#A64040] md:w-auto"
                      >
                        <Search size={18} />
                        Find Roll Number
                        <ArrowUpRight size={17} />
                      </button>
                    </form>

                    {rollMessage && (
                      <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#B94A4A]/20 bg-[#B94A4A]/5 p-4 text-sm leading-6 text-[#292929]/75">
                        <ClipboardCheck size={19} className="mt-0.5 shrink-0 text-[#B94A4A]" />
                        {rollMessage}
                      </div>
                    )}

                    <div className="mt-7 rounded-2xl border border-[#292929]/10 bg-white p-5 md:p-6">
                      <h4 className="font-bold">Information available after publication</h4>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {[
                          "Student Name",
                          "Class & Section",
                          "Roll Number",
                          "Room Number",
                          "Seat Number",
                          "Examination Name",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl bg-[#F0EFED]/70 p-3 text-sm font-medium text-[#292929]/70"
                          >
                            <ClipboardCheck size={17} className="text-[#B94A4A]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* SYLLABUS */}
                {activeTab === "syllabus" && (
                  <motion.div
                    key="syllabus"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SectionHeading
                      eyebrow="ACADEMIC CURRICULUM"
                      title="Class-wise Syllabus"
                      description="Choose your class to explore subjects and sample topics. Classes XI and XII also include stream selection."
                    />

                    <div className="mb-7">
                      <p className="mb-3 text-xs font-bold tracking-[0.15em] text-[#B94A4A]">
                        SELECT CLASS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {classes.map((item) => (
                          <button
                            key={item}
                            onClick={() => {
                              setSyllabusClass(item);
                              setExpandedSubject(null);
                            }}
                            className={`rounded-xl border px-4 py-3 text-sm font-bold transition ${
                              syllabusClass === item
                                ? "border-[#B94A4A] bg-[#B94A4A] text-white"
                                : "border-[#292929]/15 bg-[#F0EFED]/60 text-[#292929] hover:border-[#B94A4A]"
                            }`}
                          >
                            Class {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {(syllabusClass === "XI" || syllabusClass === "XII") && (
                      <div className="mb-7">
                        <p className="mb-3 text-xs font-bold tracking-[0.15em] text-[#B94A4A]">
                          SELECT STREAM
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {["Science", "Commerce", "Arts"].map((stream) => (
                            <button
                              key={stream}
                              onClick={() => {
                                setSelectedStream(stream);
                                setExpandedSubject(null);
                              }}
                              className={`rounded-xl border px-2 py-3 text-sm font-bold transition sm:px-4 ${
                                selectedStream === stream
                                  ? "border-[#292B2E] bg-[#292B2E] text-white"
                                  : "border-[#292929]/15 bg-[#F0EFED]/60 text-[#292929] hover:border-[#B94A4A]"
                              }`}
                            >
                              {stream}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-bold">Subjects & Topics</h4>
                        <p className="mt-1 text-xs text-[#292929]/50">
                          Select a subject to view its sample topics.
                        </p>
                      </div>
                      <span className="rounded-full bg-[#292B2E]/5 px-3 py-2 text-xs font-semibold text-[#292929]/60">
                        {Object.keys(currentSubjects || {}).length} Subjects
                      </span>
                    </div>

                    <div className="space-y-3">
                      {Object.entries(currentSubjects || {}).map(
                        ([subject, topics]) => {
                          const isExpanded = expandedSubject === subject;

                          return (
                            <div
                              key={subject}
                              className="overflow-hidden rounded-2xl border border-[#292929]/10 bg-white"
                            >
                              <button
                                onClick={() =>
                                  setExpandedSubject(isExpanded ? null : subject)
                                }
                                className="flex w-full items-center justify-between gap-3 p-4 text-left transition hover:bg-[#292929]/[0.03] sm:p-5"
                              >
                                <div className="flex min-w-0 items-center gap-3">
                                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#292B2E] text-[#DCE1E8]">
                                    <BookOpen size={19} />
                                  </div>
                                  <div className="min-w-0">
                                    <h5 className="font-bold">{subject}</h5>
                                    <p className="mt-1 text-xs text-[#292929]/45">
                                      {topics.length} Sample Topics
                                    </p>
                                  </div>
                                </div>
                                {isExpanded ? (
                                  <ChevronDown size={20} className="shrink-0 text-[#B94A4A]" />
                                ) : (
                                  <ChevronRight size={20} className="shrink-0 text-[#292929]/50" />
                                )}
                              </button>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="border-t border-[#292929]/10 bg-[#F0EFED]/60 px-5 py-4">
                                      <ol className="space-y-3">
                                        {topics.map((topic, index) => (
                                          <li
                                            key={topic}
                                            className="flex items-start gap-3 text-sm leading-6 text-[#292929]/75"
                                          >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B94A4A]/10 text-xs font-bold text-[#B94A4A]">
                                              {index + 1}
                                            </span>
                                            {topic}
                                          </li>
                                        ))}
                                      </ol>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        }
                      )}
                    </div>

                    {currentSyllabus?.optional && (
                      <div className="mt-7 rounded-2xl border border-[#B94A4A]/20 bg-white p-5">
                        <div className="mb-3 flex items-center gap-2">
                          <Layers3 size={19} className="text-[#B94A4A]" />
                          <h4 className="font-bold">Optional Subjects</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentSyllabus.optional.map((subject) => (
                            <span
                              key={subject}
                              className="rounded-full border border-[#292929]/10 bg-[#F0EFED] px-4 py-2 text-sm font-medium text-[#292929]/75"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-7 rounded-2xl border border-[#B94A4A]/20 bg-[#B94A4A]/5 p-4">
                      <p className="text-xs font-bold tracking-[0.12em] text-[#B94A4A]">
                        SAMPLE SYLLABUS
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#292929]/65">
                        These topics are sample academic content for website demonstration. The official school syllabus should replace them after verification.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* NOTES */}
                {activeTab === "notes" && (
                  <motion.div
                    key="notes"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SectionHeading
                      eyebrow="STUDY MATERIAL"
                      title="Class Notes & Learning Resources"
                      description="Find class-wise and subject-wise study notes. Notes and PDF files can be added here as the school prepares its learning material."
                    />

                    <div className="mb-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold">
                          Select Class
                        </label>
                        <select
                          value={notesClass}
                          onChange={(e) => setNotesClass(e.target.value)}
                          className="w-full rounded-xl border border-[#292929]/15 bg-[#F0EFED]/60 px-4 py-4 text-sm outline-none focus:border-[#B94A4A]"
                        >
                          {classes.map((item) => (
                            <option key={item} value={item}>
                              Class {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      {(notesClass === "XI" || notesClass === "XII") && (
                        <div>
                          <label className="mb-2 block text-sm font-semibold">
                            Select Stream
                          </label>
                          <select
                            value={notesStream}
                            onChange={(e) => setNotesStream(e.target.value)}
                            className="w-full rounded-xl border border-[#292929]/15 bg-[#F0EFED]/60 px-4 py-4 text-sm outline-none focus:border-[#B94A4A]"
                          >
                            {["Science", "Commerce", "Arts"].map((stream) => (
                              <option key={stream} value={stream}>
                                {stream}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-bold">
                          Class {notesClass} {notesClass === "XI" || notesClass === "XII" ? `• ${notesStream}` : ""} Notes
                        </h4>
                        <p className="mt-1 text-xs text-[#292929]/50">
                          Subject-wise study material
                        </p>
                      </div>
                      <span className="rounded-full bg-[#292B2E]/5 px-3 py-2 text-xs font-semibold text-[#292929]/60">
                        Coming Soon
                      </span>
                    </div>

                    <EmptyState
                      icon={NotebookPen}
                      title="Study Notes Coming Soon"
                      description="Class-wise notes, chapter-wise PDFs, question banks and revision material will appear here once the school uploads verified study resources."
                    />

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#292929]/10 bg-white p-5">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#292B2E] text-[#DCE1E8]">
                          <FileText size={21} />
                        </div>
                        <h4 className="font-bold">Chapter-wise Notes</h4>
                        <p className="mt-2 text-sm leading-6 text-[#292929]/55">
                          Individual chapter notes and explanations.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#292929]/10 bg-white p-5">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#292B2E] text-[#DCE1E8]">
                          <Download size={21} />
                        </div>
                        <h4 className="font-bold">PDF Study Material</h4>
                        <p className="mt-2 text-sm leading-6 text-[#292929]/55">
                          Downloadable notes, worksheets and question papers.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-[#292B2E] via-[#303236] to-[#383B40] p-7 text-center text-white md:p-9"
        >
          <div className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#DCE1E8]">
            <ShieldCheck size={25} />
          </div>
          <h3 className="text-2xl font-bold">Official Student Resources</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/60">
            Official results, examination information, syllabus and study materials will be published by the school through this portal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
