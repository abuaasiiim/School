
"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GalleryContext = createContext(null);

export function useGalleryUI() {
  return useContext(GalleryContext);
}

const footerThemes = {
  "/about": "dark",
  "/academics": "light",
  "/facilities": "dark",
  "/admission": "dark",
  "/gallery": "light",
  "/notices": "dark",
  "/faculty": "light",
  "/results": "dark",
  "/contact": "light",
};

export default function SiteLayout({ children }) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const pathname = usePathname();

  const footerTheme =
    pathname === "/"
      ? "dark"
      : footerThemes[pathname] || "dark";

  return (
    <GalleryContext.Provider value={{ setGalleryOpen }}>
      <div className="min-h-screen flex flex-col">
        {!galleryOpen && <Navbar />}

        <main className="flex-1">
          {children}
        </main>

        {!galleryOpen && <Footer theme={footerTheme} />}
      </div>
    </GalleryContext.Provider>
  );
}
