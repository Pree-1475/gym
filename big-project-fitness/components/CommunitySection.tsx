/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CommunitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section id="community" ref={containerRef} className="py-32 md:py-48 bg-[#050505] relative overflow-hidden border-t border-white/5 min-h-[120vh] flex flex-col justify-center">
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em]">[ COM-05 ]</div>
      
      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 mb-24 z-40 w-full pointer-events-none">
        <div className="mb-12 flex items-center gap-4">
           <div className="w-12 h-[1px] bg-accent" />
           <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
             05 // The Culture
           </span>
        </div>
        <h2 className="font-display text-[4rem] md:text-[6rem] text-primary tracking-tight leading-none uppercase mix-blend-difference drop-shadow-lg">
          Shared Respect.<br/>
          <span className="text-white/30">Shared Progress.</span>
        </h2>
      </div>

      {/* Floating Parallax Images */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
        {/* Center Main Image */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute z-20 w-[70vw] md:w-[35vw] aspect-[4/5] border border-white/10 shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop" alt="Community" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
        </motion.div>

        {/* Left Parallax Image */}
        <motion.div 
          style={{ x: x1, y: "-20%" }}
          className="absolute z-10 left-[5%] md:left-[15%] w-[40vw] md:w-[20vw] aspect-square border border-white/10 opacity-60"
        >
          <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1470&auto=format&fit=crop" alt="Partners" className="absolute inset-0 w-full h-full object-cover grayscale" />
        </motion.div>

        {/* Right Parallax Image */}
        <motion.div 
          style={{ x: x2, y: "20%" }}
          className="absolute z-30 right-[5%] md:right-[10%] w-[50vw] md:w-[25vw] aspect-[16/9] border border-white/10 opacity-80"
        >
          <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop" alt="Group" className="absolute inset-0 w-full h-full object-cover grayscale" />
        </motion.div>
      </div>
    </section>
  );
}
