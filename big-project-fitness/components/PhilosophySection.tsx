"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"]
  });

  const text = "WE REJECT THE OBSESSION WITH QUICK FIXES. TRUE FITNESS IS BUILT ON CONSISTENCY, DISCIPLINE, AND RELENTLESS PROGRESS. THIS IS NOT A PHASE. THIS IS A PROJECT.";
  const words = text.split(" ");

  return (
    <section id="philosophy" ref={containerRef} className="py-48 min-h-[120vh] flex flex-col justify-center bg-[#050505] text-primary relative border-t border-white/5">
      {/* Decorative lines */}
      <div className="absolute top-0 left-6 md:left-24 w-[1px] h-32 bg-white/10" />
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em]">[ PHI-01 ]</div>
      
      <div className="w-full max-w-[95vw] md:max-w-[85vw] mx-auto px-6 flex flex-col justify-center">
        <div className="mb-16 md:mb-24 flex items-center gap-4">
           <div className="w-12 h-[1px] bg-accent" />
           <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
             01 // Core Philosophy
           </span>
        </div>
        
        <h2 className="font-display text-[10vw] md:text-[6.5vw] leading-[0.85] tracking-tight flex flex-wrap gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
          {words.map((word, i) => {
            // Calculate a staggered reveal based on scroll position
            const start = i / words.length;
            const end = start + (1 / words.length);
            // We can't use hooks in callback, so we create a simple component or just use the hook outside.
            // Wait, useTransform inside map is fine if we use the same hook instance!
            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
          })}
        </h2>
      </div>
    </section>
  );
}

function Word({ word, progress, range }: { word: string, progress: MotionValue<number>, range: number[] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block uppercase">
      {word}
    </motion.span>
  );
}
