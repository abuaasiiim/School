
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CalendarDays,
  ArrowUpRight,
  Megaphone,
  GraduationCap,
  BookOpen,
  Sparkles,
  Search,
  FileDown,
  X,
  Newspaper,
  Trophy,
  Camera,
  Info,
  ChevronRight,
  ExternalLink,
  Clock3,
} from "lucide-react";

const announcements = [
  {
    id: 1,
    category: "RESULTS",
    date: "Date to be announced",
    title: "Annual Examination Results Published",
    description:
      "Annual examination results have been uploaded to the Student Portal. Students and parents can visit the portal to check the result using the required student details.",
    details:
      "The annual examination result will be available through the Student Portal once officially published by the school. Students and parents are requested to visit the Results section and follow the instructions provided there.",
    link: "/results",
    linkText: "Open Student Portal",
    isDemo: true,
    important: true,
    icon: Trophy,
  },
  {
    id: 2,
    category: "EXAMINATION",
    date: "Date to be announced",
    title: "Examination Schedule Update",
    description:
      "Students are advised to check the examination schedule and prepare according to the officially announced timetable.",
    details:
      "The school will publish the examination timetable after it has been finalized. Students should regularly check this section for examination-related announcements and updates.",
    isDemo: true,
    important: true,
    icon: CalendarDays,
  },
  {
    id: 3,
    category: "ADMISSION",
    date: "Date to be announced",
    title: "Admission Information",
    description:
      "Information regarding admission for Classes VI to XII will be shared here when officially announced.",
    details:
      "Parents and guardians can check this section for admission announcements, important instructions, required documents and other admission-related information.",
    link: "/admission",
    linkText: "Admission Information",
    isDemo: true,
    icon: GraduationCap,
  },
  {
    id: 4,
    category: "HOLIDAY",
    date: "Date to be announced",
    title: "School Holiday Announcement",
    description:
      "Official information about school holidays and changes in the academic schedule will be published here.",
    details:
      "Parents and students are requested to follow official announcements published by the school regarding holidays, school timings and academic schedule changes.",
    isDemo: true,
    icon: Info,
  },
  {
    id: 5,
    category: "EVENTS",
    date: "Date to be announced",
    title: "School Events & Activities",
    description:
      "Updates about upcoming school functions, competitions and student activities will appear in this section.",
    details:
      "The school will share event schedules, participation details and other important instructions through official announcements.",
    isDemo: true,
    icon: Sparkles,
  },
];

const newsItems = [
  {
    id: 1,
    category: "CAMPUS LIFE",
    date: "School update",
    title: "A Place Where Learning Goes Beyond Classrooms",
    description:
      "Explore the learning environment, activities and everyday experiences that shape school life.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    isDemo: true,
  },
  {
    id: 2,
    category: "STUDENT ACTIVITIES",
    date: "School update",
    title: "Encouraging Students to Learn and Grow",
    description:
      "A glimpse into student participation, creativity and learning activities.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85",
    isDemo: true,
  },
  {
    id: 3,
    category: "EDUCATION",
    date: "School update",
    title: "Building Strong Foundations for the Future",
    description:
      "Education is about developing knowledge, confidence and responsible individuals.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
    isDemo: true,
  },
];

const categories = [
  "ALL",
  "RESULTS",
  "EXAMINATION",
  "HOLIDAY",
  "ADMISSION",
  "EVENTS",
  "GENERAL",
];

export default function Notices() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  const filteredAnnouncements = announcements.filter((notice) => {
    const matchesCategory =
      activeCategory === "ALL" ||
      notice.category === activeCategory;

    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="overflow-hidden bg-[#F0EFED] text-[#292929]">

      {/* ================= ANNOUNCEMENTS ================= */}

      <section className="relative px-5 py-24 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#B94A4A]" />
                <span className="text-xs font-bold tracking-[0.3em] text-[#B94A4A]">
                  SCHOOL UPDATES
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Notices &
                <span className="block text-[#B94A4A]">
                  Announcements.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#666] md:text-base">
                Stay informed with the latest official announcements,
                examination updates, results, holidays and important
                information from the school.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-[#D8D5D1] bg-white/60 px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B94A4A]/10 text-[#B94A4A]">
                <Bell size={21} />
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {announcements.length.toString().padStart(2, "0")}
                </p>
                <p className="text-[10px] font-bold tracking-[0.15em] text-[#777]">
                  ANNOUNCEMENTS
                </p>
              </div>
            </div>
          </motion.div>

          {/* Demo Content Warning */}

          <div className="mb-7 flex items-start gap-3 border-l-4 border-[#B94A4A] bg-[#B94A4A]/[0.06] px-5 py-4">
            <Info className="mt-0.5 shrink-0 text-[#B94A4A]" size={19} />

            <div>
              <p className="text-xs font-bold tracking-[0.12em] text-[#B94A4A]">
                PREVIEW CONTENT
              </p>
              <p className="mt-1 text-xs leading-6 text-[#666] md:text-sm">
                These are sample announcements for website preview.
                Replace them with officially approved school updates
                before publishing.
              </p>
            </div>
          </div>

          {/* Notification Panel */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-[#D9D6D2] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.045)]"
          >

            {/* Panel Header */}

            <div className="flex flex-col justify-between gap-5 border-b border-[#E7E4E0] px-5 py-6 md:flex-row md:items-center md:px-8">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#292929] text-white">
                  <Megaphone size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-bold md:text-xl">
                    School Notification Panel
                  </h2>
                  <p className="mt-1 text-xs text-[#888]">
                    Important information for students and parents
                  </p>
                </div>
              </div>

              <div className="relative w-full md:max-w-xs">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search announcements..."
                  className="w-full rounded-full border border-[#E2DFDB] bg-[#F8F7F5] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#B94A4A]"
                />
              </div>
            </div>

            {/* Category Filters */}

            <div className="flex gap-2 overflow-x-auto border-b border-[#E7E4E0] px-5 py-4 md:flex-wrap md:px-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-bold tracking-[0.12em] transition-all ${
                    activeCategory === category
                      ? "bg-[#292929] text-white"
                      : "bg-[#F0EFED] text-[#777] hover:bg-[#E4E1DD] hover:text-[#292929]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Notification Feed */}

            <div>
              {filteredAnnouncements.length > 0 ? (
                filteredAnnouncements.map((notice, index) => {
                  const Icon = notice.icon;

                  return (
                    <motion.button
                      key={notice.id}
                      type="button"
                      onClick={() => setSelectedNotice(notice)}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      className="group w-full border-b border-[#ECE9E5] px-5 py-6 text-left transition-colors hover:bg-[#F8F7F5] last:border-b-0 md:px-8 md:py-7"
                    >
                      <div className="flex items-start gap-4 md:gap-6">

                        {/* Icon */}

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0EFED] text-[#B94A4A] transition-colors group-hover:bg-[#B94A4A] group-hover:text-white md:h-12 md:w-12">
                          <Icon size={21} />
                        </div>

                        {/* Announcement Content */}

                        <div className="min-w-0 flex-1">

                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className="rounded-sm bg-[#292929] px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] text-white">
                              {notice.category}
                            </span>

                            {notice.important && (
                              <span className="rounded-sm bg-[#B94A4A]/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.12em] text-[#B94A4A]">
                                IMPORTANT
                              </span>
                            )}

                            <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[#999]">
                              <Clock3 size={12} />
                              {notice.date}
                            </span>
                          </div>

                          <h3 className="text-base font-bold leading-snug text-[#292929] transition-colors group-hover:text-[#B94A4A] md:text-lg">
                            {notice.title}
                          </h3>

                          <p className="mt-2 max-w-3xl text-xs leading-6 text-[#777] md:text-sm">
                            {notice.description}
                          </p>

                          {notice.link && (
                            <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-[#B94A4A]">
                              {notice.linkText}
                              <ArrowUpRight size={14} />
                            </span>
                          )}
                        </div>

                        {/* Arrow */}

                        <ChevronRight
                          size={20}
                          className="mt-1 shrink-0 text-[#AAA] transition-all group-hover:translate-x-1 group-hover:text-[#B94A4A]"
                        />
                      </div>
                    </motion.button>
                  );
                })
              ) : (
                <div className="px-5 py-16 text-center">
                  <Search
                    size={30}
                    className="mx-auto mb-4 text-[#AAA]"
                  />
                  <h3 className="font-bold text-[#444]">
                    No announcements found
                  </h3>
                  <p className="mt-2 text-xs text-[#999]">
                    Try another category or search term.
                  </p>
                </div>
              )}
            </div>

            {/* Panel Footer */}

            <div className="flex flex-col justify-between gap-2 border-t border-[#E7E4E0] bg-[#F8F7F5] px-5 py-4 text-[10px] text-[#888] md:flex-row md:items-center md:px-8">
              <span>
                Official school announcements will appear here.
              </span>
              <span className="font-bold tracking-[0.12em]">
                S P R I C · NOTICE BOARD
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= LATEST NEWS ================= */}

      <section className="relative bg-[#292B2E] px-5 py-24 text-white md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* News Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#B94A4A]" />
                <span className="text-xs font-bold tracking-[0.3em] text-[#D88B8B]">
                  FROM OUR CAMPUS
                </span>
              </div>

              <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Latest
                <span className="block text-[#C8CDD5]">
                  News & Stories.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#B8BBC0]">
                Discover school activities, student experiences,
                achievements and moments from our campus.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.12em] text-[#C8CDD5]">
              <Newspaper size={19} />
              CAMPUS JOURNAL
            </div>
          </motion.div>

          {/* News Preview Warning */}

          <div className="mb-8 flex items-start gap-3 border-l-2 border-[#B94A4A] bg-white/[0.04] px-5 py-4">
            <Info size={17} className="mt-0.5 shrink-0 text-[#D88B8B]" />
            <p className="text-xs leading-6 text-[#B8BBC0]">
              Sample news and images are being used for preview.
              Replace them with actual school news and photographs.
            </p>
          </div>

          {/* Editorial News Layout */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

            {/* Featured News */}

            <motion.button
              type="button"
              onClick={() => setSelectedNews(newsItems[0])}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative min-h-[420px] overflow-hidden rounded-2xl text-left lg:col-span-7 lg:min-h-[570px]"
            >
              <img
                src={newsItems[0].image}
                alt="School campus preview"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">

                <span className="mb-4 inline-block bg-[#B94A4A] px-3 py-2 text-[9px] font-bold tracking-[0.18em] text-white">
                  {newsItems[0].category}
                </span>

                <p className="mb-3 text-[10px] font-medium tracking-[0.12em] text-white/65">
                  {newsItems[0].date}
                </p>

                <h3 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">
                  {newsItems[0].title}
                </h3>

                <p className="mt-4 max-w-lg text-xs leading-6 text-white/75 md:text-sm">
                  {newsItems[0].description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-white">
                  READ STORY
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </motion.button>

            {/* Smaller News */}

            <div className="flex flex-col gap-6 lg:col-span-5">

              {newsItems.slice(1).map((news, index) => (
                <motion.button
                  key={news.id}
                  type="button"
                  onClick={() => setSelectedNews(news)}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex min-h-[250px] flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#35383D] text-left transition-colors hover:bg-[#3D4046] sm:flex-row lg:flex-col"
                >
                  <div className="relative min-h-[190px] overflow-hidden sm:w-[42%] lg:min-h-[210px] lg:w-full">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-5 md:p-6">

                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-[9px] font-bold tracking-[0.15em] text-[#D88B8B]">
                        {news.category}
                      </span>

                      <span className="text-[9px] text-white/40">
                        {news.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug transition-colors group-hover:text-[#D88B8B]">
                      {news.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-[#B8BBC0]">
                      {news.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-[#DCE1E8]">
                      READ STORY
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </motion.button>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* ================= ANNOUNCEMENT POPUP ================= */}

      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNotice(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-[#F0EFED] p-6 text-[#292929] shadow-2xl md:p-10"
            >

              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#292929]/[0.07] transition hover:bg-[#B94A4A] hover:text-white"
                aria-label="Close announcement"
              >
                <X size={19} />
              </button>

              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#292929] text-white">
                  <Bell size={21} />
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#B94A4A]">
                    SCHOOL ANNOUNCEMENT
                  </p>
                  <p className="mt-1 text-xs text-[#888]">
                    {selectedNotice.date}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="bg-[#292929] px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] text-white">
                  {selectedNotice.category}
                </span>

                {selectedNotice.important && (
                  <span className="bg-[#B94A4A]/10 px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] text-[#B94A4A]">
                    IMPORTANT
                  </span>
                )}
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-4xl">
                {selectedNotice.title}
              </h2>

              <div className="my-7 h-[2px] w-16 bg-[#B94A4A]" />

              <p className="text-sm leading-8 text-[#666]">
                {selectedNotice.details}
              </p>

              {selectedNotice.isDemo && (
                <p className="mt-6 border-l-2 border-[#B94A4A] bg-[#B94A4A]/[0.06] px-4 py-3 text-xs leading-6 text-[#888]">
                  This is a sample announcement. Official information
                  will be added by the school.
                </p>
              )}

              {selectedNotice.link && (
                <a
                  href={selectedNotice.link}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#B94A4A] px-6 py-4 text-xs font-bold tracking-[0.1em] text-white transition hover:bg-[#A64040]"
                >
                  {selectedNotice.linkText}
                  <ExternalLink size={15} />
                </a>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= NEWS POPUP ================= */}

      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[#F0EFED] text-[#292929] shadow-2xl"
            >

              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-[#B94A4A]"
                aria-label="Close news"
              >
                <X size={19} />
              </button>

              <div className="relative h-64 overflow-hidden md:h-80">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <span className="absolute bottom-6 left-6 bg-[#B94A4A] px-3 py-2 text-[9px] font-bold tracking-[0.15em] text-white">
                  {selectedNews.category}
                </span>
              </div>

              <div className="p-6 md:p-10">

                <p className="mb-4 text-xs text-[#999]">
                  {selectedNews.date}
                </p>

                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  {selectedNews.title}
                </h2>

                <div className="my-6 h-[2px] w-16 bg-[#B94A4A]" />

                <p className="text-sm leading-8 text-[#666]">
                  {selectedNews.description}
                </p>

                {selectedNews.isDemo && (
                  <p className="mt-6 border-l-2 border-[#B94A4A] bg-[#B94A4A]/[0.06] px-4 py-3 text-xs leading-6 text-[#888]">
                    This is a sample news preview. Actual school
                    news and photographs can be added later.
                  </p>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
