"use client";
import Image from "next/image";
import GlanceSection from "./components/GlanceSection";
import Footer from "./components/footer";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen font-montserrat">
     
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start px-12 text-white">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/panelsongrass.jpg"
            alt="Cityscape"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#004225]/15 -z-10" />

        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            United for Efficiency Initiative <br /> in
            <span className="text-green-800"> Nigeria</span>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed text-left">
            The Africa Minigrids Program is supporting access to clean energy by increasing 
            the financial viability, and promoting scaled-up commercial investment, in 
            renewable energy minigrids in Africa
          </p>
        </div>
      </section>

      {/* News section */}
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#b59d2a]">Latest updates</h2>
          <a
            href="/news"
            className="text-sm text-gray-600 hover:text-[#b59d2a] transition"
          >
            See all news →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured big card */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow">
              <Image
                src="/latest.jpeg"
                alt="Main update"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs mb-1">25 September 2025</p>
                <h3 className="text-sm font-medium line-clamp-2">
                  Invitation For Prequalification For The Africa Minigrids Program
                  Grant For Pilot Minigrids in Rural Communities And Agricultural Value...
                </h3>
              </div>
            </div>
          </div>

          {/* Smaller 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-36 rounded-lg overflow-hidden shadow"
              >
                <Image
                  src="/latest.jpeg"
                  alt={`Update ${i}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <p className="text-[10px] mb-1">25 September 2025</p>
                  <h4 className="text-xs font-medium line-clamp-2">
                    Invitation For Prequalification For The Africa Minigrids Program
                    Grant For Pilot Minigrids...
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Local Energy Grids Section */}
      <section className="bg-[#133d2f] py-16 px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-left">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-[#FFD700]">
            Supporting Local <br /> Energy Grids
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-white">
            The Africa Minigrids Program is supporting access to clean energy by
            increasing the financial viability, and promoting scaled-up
            commercial investment in renewable energy minigrids in Africa, with
            a focus on cost-reduction levers and innovative business models.
          </p>
        </div>

        <div className="flex-1 w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/5AvrfIN1HwE"
            title="Africa Minigrids Program - Clean Energy Access"
            allowFullScreen
          />
        </div>
      </section>

      <section>
        <GlanceSection />
      </section>

      {/* Section 2: Partners */}
      <section className="bg-white py-16 px-8 lg:px-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="font-semibold mb-4">Implementing partner</h3>
            <div className="flex justify-center">
              <Image
                src="/main_logo.png"
                alt="Implementing partner logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4">Led by</h3>
            <div className="flex justify-center">
              <Image
                src="/unep.svg"
                alt="Led by logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold mb-4">Supported by</h3>
            <div className="flex justify-center">
              <Image
                src="/gef_logo.png"
                alt="Supported by logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}
