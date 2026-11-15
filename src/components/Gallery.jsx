
"use client";

import { useGalleryUI } from "@/components/SiteLayout";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Camera,
  Sparkles,
  Star,
} from "lucide-react";

const photos = [
  {
    id: 1,
    title: "Our School Campus",
    category: "Campus",
    caption:
      "A welcoming learning environment where students grow and achieve.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=90",
    featured: true,
  },
  {
    id: 2,
    title: "Learning Together",
    category: "Classroom",
    caption:
      "Every classroom is a space for curiosity, knowledge and discovery.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "A Place to Learn",
    category: "Campus",
    caption:
      "Spaces designed to encourage reading, learning and exploration.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Celebrating Together",
    category: "Events",
    caption:
      "School celebrations bring students together through shared memories.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "A Welcoming Campus",
    category: "Campus",
    caption:
      "A glimpse of the environment where our school community comes together.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Moments of Achievement",
    category: "Achievements",
    caption:
      "Recognising effort, dedication and the joy of accomplishment.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Inside the Classroom",
    category: "Classroom",
    caption:
      "Learning through participation, teamwork and everyday experiences.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    title: "A Day to Remember",
    category: "Events",
    caption:
      "Special occasions that become lasting school memories.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "All",
  "Campus",
  "Classroom",
  "Events",
  "Achievements",
];

export default function Gallery() {
  const { setGalleryOpen } = useGalleryUI();

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const touchStartX = useRef(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter(
          (photo) => photo.category === activeCategory
        );

  const selectedIndex = filteredPhotos.findIndex(
    (photo) => photo.id === selectedPhoto?.id
  );

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setGalleryOpen(false);
  };

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
    setGalleryOpen(true);
  };

  const showPrevious = () => {
    if (selectedIndex === -1) return;

    const previousIndex =
      (selectedIndex - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[previousIndex]);
  };

  const showNext = () => {
    if (selectedIndex === -1) return;

    const nextIndex =
      (selectedIndex + 1) % filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, selectedIndex, filteredPhotos]);

  // Mobile swipe navigation
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;

    if (Math.abs(difference) > 55) {
      if (difference > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-[#303236] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Metallic graphite background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#292B2E_0%,#383B40_48%,#292B2E_100%)]" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DCE1E8]/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-[130px]" />

        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DCE1E8]/60 to-transparent" />

        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:65px_65px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C8CDD5]/40 bg-white/[0.06] px-5 py-2 text-xs font-semibold uppercase tracking-[0.23em] text-[#DCE1E8] backdrop-blur-md">
            <Camera size={15} />
            Moments & Memories
          </div>

          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-[#DCE1E8] to-[#AEB6C2] sm:text-5xl lg:text-6xl">
            Life at
            <span className="block bg-gradient-to-r from-[#F4F6F9] via-[#C8CDD5] to-[#929BA8] bg-clip-text font-serif italic text-transparent">
              Our Campus
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#DCE1E8]/70 sm:text-base">
            A collection of moments, experiences and memories
            that make school life special.
          </p>
        </motion.div>

        {/* Featured photo */}
        {activeCategory === "All" && (
          <motion.button
            layout
            onClick={() => openPhoto(photos[0])}
            className="group relative mb-10 block min-h-[320px] w-full overflow-hidden rounded-3xl border border-[#C8CDD5]/30 text-left sm:min-h-[430px] lg:min-h-[500px]"
          >
            <img
              src={photos[0].image}
              alt={photos[0].title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#17191D]/90 via-[#17191D]/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17191D]/65 to-transparent" />

            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:left-9 sm:top-9">
              <Star size={14} />
              Featured Memory
            </div>

            <div className="absolute bottom-0 left-0 max-w-2xl p-7 sm:p-10 lg:p-14">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#DCE1E8]">
                {photos[0].category}
              </span>

              <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                {photos[0].title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                {photos[0].caption}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#DCE1E8]">
                Explore Photograph
                <ArrowUpRight size={18} />
              </span>
            </div>
          </motion.button>
        )}

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                closeLightbox();
              }}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#DCE1E8] bg-gradient-to-b from-[#DCE1E8] to-[#AEB6C2] text-[#292B2E]"
                  : "border-[#C8CDD5]/25 bg-white/[0.05] text-[#DCE1E8]/75 hover:border-[#DCE1E8]/70 hover:bg-white/[0.12] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Editorial photo grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos
              .filter(
                (photo) =>
                  !(activeCategory === "All" && photo.featured)
              )
              .map((photo, index) => {
                const layoutClasses = [
                  "lg:col-span-2 lg:row-span-2 min-h-[340px] lg:min-h-[540px]",
                  "lg:col-span-1 min-h-[260px]",
                  "lg:col-span-1 min-h-[260px]",
                  "lg:col-span-2 min-h-[280px]",
                  "lg:col-span-1 min-h-[260px]",
                  "lg:col-span-1 min-h-[260px]",
                  "lg:col-span-2 min-h-[280px]",
                ];

                return (
                  <motion.button
                    layout
                    key={photo.id}
                    initial={{ opacity: 0, y: 25, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => openPhoto(photo)}
                    className={`group relative block overflow-hidden rounded-2xl border border-[#C8CDD5]/25 bg-[#292B2E] text-left shadow-[0_10px_35px_rgba(0,0,0,0.22)] transition-all duration-500 hover:border-[#DCE1E8]/70 hover:shadow-[0_0_25px_rgba(220,225,232,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCE1E8] ${
                      activeCategory === "All"
                        ? layoutClasses[index % layoutClasses.length]
                        : "min-h-[280px] sm:min-h-[320px]"
                    }`}
                    aria-label={`View ${photo.title}`}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#17191D]/95 via-[#292B2E]/10 to-transparent opacity-90" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DCE1E8]">
                          {photo.category}
                        </span>

                        <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                          {photo.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/65">
                          {photo.caption}
                        </p>
                      </div>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCE1E8]/50 bg-[#292B2E]/65 text-[#DCE1E8] backdrop-blur-md transition-all duration-300 group-hover:bg-[#DCE1E8] group-hover:text-[#292B2E]">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-3 text-center"
        >
          <Sparkles
            size={22}
            className="text-[#DCE1E8]"
          />

          <p className="text-sm text-[#DCE1E8]/65">
            Every picture tells a story of learning and growth.
          </p>
        </motion.div>
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              className="fixed right-4 top-4 z-[120] flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#292B2E] sm:right-7 sm:top-7 sm:h-14 sm:w-14"
              aria-label="Close gallery"
            >
              <X size={25} />
            </button>

            {/* Previous */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#292B2E] sm:left-8 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft size={25} />
            </button>

            {/* Image and caption */}
            <motion.div
              key={selectedPhoto.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              className="flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[68vh] w-auto max-w-full rounded-xl object-contain shadow-[0_0_40px_rgba(220,225,232,0.12)]"
              />

              <div className="mt-5 max-w-2xl px-3 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DCE1E8]">
                  {selectedPhoto.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {selectedPhoto.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {selectedPhoto.caption}
                </p>

                <p className="mt-3 text-xs font-medium tracking-[0.2em] text-[#DCE1E8]/75">
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(filteredPhotos.length).padStart(2, "0")}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#292B2E] sm:right-8 sm:h-12 sm:w-12"
              aria-label="Next image"
            >
              <ChevronRight size={25} />
            </button>

            <div className="pointer-events-none absolute bottom-3 text-[10px] uppercase tracking-[0.2em] text-white/35 sm:hidden">
              Swipe to explore
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
