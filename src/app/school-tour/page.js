
"use client";

import { useRef } from "react";
import { Compass, Maximize2, School } from "lucide-react";

export default function SchoolTourPage() {
  const tourRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      tourRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <main className="min-h-screen bg-[#202020] text-white">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E58A8A]">
            <Compass size={15} />
            Immersive Virtual Experience
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Green Valley Public School
          </h1>

          <p className="mt-2 text-sm text-white/50">
            Explore the campus as if you were walking through it.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/50">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          VIRTUAL TOUR DEMO
        </div>
      </header>

      {/* Walking Viewer */}
      <section className="mx-auto max-w-[1500px] px-3 pb-5 sm:px-8">
        <div
          ref={tourRef}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
        >
          {/* Top label */}
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs backdrop-blur-md">
            <School size={15} className="text-[#E58A8A]" />
            Green Valley Campus
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            aria-label="Enter fullscreen"
            className="absolute right-4 top-4 z-30 rounded-full border border-white/20 bg-black/60 p-3 text-white backdrop-blur-md transition hover:bg-[#B94A4A]"
          >
            <Maximize2 size={18} />
          </button>

          {/* 360 Degree Viewer */}
          <iframe
            title="Green Valley Public School 360 Virtual Walking Tour"
            src="/school-tour-viewer.html?scene=entrance"
            className="h-[65vh] min-h-[420px] w-full border-0 bg-[#202020] sm:h-[75vh] sm:min-h-[550px]"
            allow="fullscreen; gyroscope; accelerometer"
            allowFullScreen
          />
        </div>

        {/* Instructions */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/45">
          <span>Drag to look around</span>
          <span>Use mouse wheel to zoom</span>
          <span>Click navigation arrows to move</span>
          <span>Use fullscreen for immersion</span>
        </div>

        <p className="mt-8 text-center text-[10px] tracking-[0.2em] text-white/25">
          GREEN VALLEY PUBLIC SCHOOL · VIRTUAL CAMPUS EXPERIENCE
        </p>
      </section>
    </main>
  );
}
