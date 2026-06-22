/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FACILITY_AREAS = [
  { 
    name: "TRAINING FLOOR", 
    desc: "Open layout designed for optimal flow and focus.",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
  },
  { 
    name: "RACKS & BENCHES", 
    desc: "Competition-grade combo racks and power cages.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
  },
  { 
    name: "DEADLIFT AREA", 
    desc: "Dedicated lifting platforms with calibrated plates.",
    img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1470&auto=format&fit=crop"
  },
  { 
    name: "STRENGTH MACHINES", 
    desc: "Curated selection of plate-loaded and selectorized machines.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
  },
];

export function FacilitySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="facility" className="py-24 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em]">[ FAC-02 ]</div>

      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 mb-12 md:mb-16 flex flex-col justify-between gap-8">
        <div className="flex flex-col">
           <div className="mb-12 flex items-center gap-4">
             <div className="w-12 h-[1px] bg-accent" />
             <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
               02 // The Facility
             </span>
           </div>
          <h2 className="font-display text-[4rem] md:text-[6rem] text-primary tracking-tight leading-none uppercase">
            Engineered <span className="text-white/20">For</span><br/>Strength.
          </h2>
        </div>
      </div>

      {/* Hover Accordion */}
      <div className="w-full flex flex-col md:flex-row h-[80vh] md:h-[60vh] max-w-[95vw] md:max-w-[85vw] mx-auto border-t border-white/10 md:border-b">
        {FACILITY_AREAS.map((area, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={area.name}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onClick={() => isMobile && setHoveredIndex(index)}
              animate={{
                flex: isHovered ? (isMobile ? 3 : 4) : 1,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10 cursor-pointer flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[#050505] z-0" />
              <motion.img 
                src={area.img} 
                alt={area.name} 
                className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
                animate={{
                   scale: isHovered ? 1 : 1.15,
                   opacity: isHovered ? 0.5 : 0.15
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
              
              <div className="absolute bottom-6 md:bottom-12 left-6 md:left-10 right-6 z-20 flex flex-col pointer-events-none">
                <motion.div
                   animate={
                     isMobile 
                       ? { rotate: 0, x: 0, y: 0 }
                       : { 
                           rotate: isHovered ? 0 : -90, 
                           x: isHovered ? 0 : 20, 
                           y: isHovered ? 0 : -40 
                         }
                   }
                   className="origin-bottom-left"
                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide whitespace-nowrap">
                    {area.name}
                  </h3>
                </motion.div>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    y: isHovered ? 0 : 20,
                    height: isHovered ? "auto" : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-white/60 text-xs md:text-sm mt-2 md:mt-4 max-w-xs md:max-w-sm border-l border-accent/50 pl-4">
                    {area.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
