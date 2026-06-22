/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export function PersonalTrainingSection() {
  return (
    <section id="coaching" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5 min-h-[100vh] flex items-center">
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em] z-20">[ PT-04 ]</div>
      
      {/* Marquee Text Background */}
      <div className="absolute inset-0 flex flex-col justify-center items-start gap-4 md:gap-8 opacity-60 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
           <h2 className="font-display text-[20vw] leading-none text-white/5 tracking-tighter mr-8 select-none">
              EXPERT COACHING • EXPERT COACHING • EXPERT COACHING •
           </h2>
        </motion.div>
        
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
           <h2 className="font-display text-[20vw] leading-none text-transparent stroke-text tracking-tighter mr-8 select-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}>
              SUSTAINABLE PROGRESS • SUSTAINABLE PROGRESS •
           </h2>
        </motion.div>
      </div>

      {/* Floating Foreground Content */}
      <div className="relative z-20 w-full px-6 flex items-center justify-center">
        <motion.div 
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
           <div className="w-[70vw] md:w-[30vw] aspect-[3/4] relative overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-500 group-hover:bg-black/0" />
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" alt="Coaching" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 z-0" />
           </div>
           
           <div className="flex flex-col max-w-md bg-[#050505]/80 backdrop-blur-md p-8 md:p-10 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent to-transparent" />
              <div className="mb-8 flex items-center gap-4">
                 <div className="w-8 h-[1px] bg-accent" />
                 <span className="font-mono text-[10px] text-accent tracking-[0.4em] uppercase">Private Coaching</span>
              </div>
              <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-10 border-l border-white/10 pl-4">
                 Rooted in education, proper mechanics, and sustainable progress. We don&apos;t just count reps; we teach you how to train effectively for the rest of your life.
              </p>
              <a href="#contact" className="self-start text-[10px] md:text-xs font-display tracking-[0.2em] text-white hover:text-accent transition-colors duration-300 uppercase border-b border-white/20 hover:border-accent pb-2">
                Inquire About Coaching
              </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
