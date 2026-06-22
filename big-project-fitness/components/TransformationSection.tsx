/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TRANSFORMATIONS = [
  {
    name: "Marcus T.",
    duration: "18 Months",
    metric: "+15kg Muscle Mass",
    story: "I spent years program hopping with minimal results. The structured approach and environment at BiG Project completely changed my trajectory.",
    beforeImg: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sarah L.",
    duration: "12 Months",
    metric: "-20kg Body Fat",
    story: "It wasn't just about the weight loss. It was about building a sustainable routine that fit into a demanding career. No extremes, just consistent effort.",
    beforeImg: "https://images.unsplash.com/photo-1627483298235-f3abe6cdd080?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop"
  }
];

export function TransformationSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section id="transformations" className="py-24 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em]">[ TRN-03 ]</div>
      
      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 mb-12 md:mb-24">
        <div className="mb-12 flex items-center gap-4">
           <div className="w-12 h-[1px] bg-accent" />
           <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
             03 // The Results
           </span>
        </div>
        <h2 className="font-display text-[4rem] md:text-[6rem] text-primary tracking-tight leading-none uppercase">
          Real Work.<br/>
          <span className="text-white/20">Real Results.</span>
        </h2>
      </div>

      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 border-t border-white/10 relative">
        {TRANSFORMATIONS.map((item, index) => (
          <div 
            key={item.name}
            className="group relative border-b border-white/10 py-12 md:py-16 flex flex-col items-start justify-between cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center w-full justify-between gap-4 md:gap-12 z-10">
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-12">
                <h3 className="font-display text-4xl md:text-6xl text-white/40 group-hover:text-white transition-colors duration-500 uppercase">
                  {item.name}
                </h3>
                <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase md:pb-2">
                  {item.metric} // {item.duration}
                </p>
              </div>
              
              <div className="hidden md:block z-10">
                <span className="font-display text-xl text-white/20 group-hover:text-accent transition-colors duration-500">
                  VIEW RECORD
                </span>
              </div>
            </div>

            {/* Mobile Inline Images */}
            <div className="flex md:hidden gap-4 mt-8 w-full overflow-x-auto pb-4 snap-x">
               <div className="relative w-[70vw] shrink-0 aspect-[4/5] overflow-hidden snap-center">
                  <img src={item.beforeImg} alt="Before" className="w-full h-full object-cover grayscale opacity-70" />
                  <span className="absolute top-3 left-3 bg-black/90 px-2 py-1 text-[10px] font-mono tracking-[0.2em] text-white/80 uppercase">BEFORE</span>
               </div>
               <div className="relative w-[70vw] shrink-0 aspect-[4/5] overflow-hidden snap-center">
                  <img src={item.afterImg} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-black/90 px-2 py-1 text-[10px] font-mono tracking-[0.2em] text-white/80 uppercase">AFTER</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Image Reveal (Desktop Only) */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:flex gap-4 p-4 bg-[#050505]/90 backdrop-blur-md border border-white/10"
        animate={{
          x: mousePosition.x + 40,
          y: mousePosition.y - 150,
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.5 }}
      >
        {hoveredIndex !== null && (
          <>
            <div className="relative w-[200px] h-[250px] overflow-hidden">
               <img src={TRANSFORMATIONS[hoveredIndex].beforeImg} alt="Before" className="w-full h-full object-cover grayscale opacity-70" />
               <span className="absolute top-3 left-3 bg-black/90 px-2 py-1 text-[10px] font-mono tracking-[0.2em] text-white/80 uppercase">BEFORE</span>
            </div>
            <div className="relative w-[200px] h-[250px] overflow-hidden">
               <img src={TRANSFORMATIONS[hoveredIndex].afterImg} alt="After" className="w-full h-full object-cover" />
               <span className="absolute top-3 left-3 bg-black/90 px-2 py-1 text-[10px] font-mono tracking-[0.2em] text-white/80 uppercase">AFTER</span>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}
