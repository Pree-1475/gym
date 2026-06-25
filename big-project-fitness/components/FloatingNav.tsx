"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "THE PROJECT", href: "#philosophy" },
  { name: "THE FACILITY", href: "#facility" },
  { name: "THE RESULTS", href: "#transformations" },
  { name: "THE COACHING", href: "#coaching" },
  { name: "THE CULTURE", href: "#community" },
  { name: "THE DETAILS", href: "#faq" },
  { name: "THE LOCATION", href: "#contact" },
];

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none"
      >
        <div className="w-full px-6 md:px-12 py-6 md:py-10 flex items-start justify-between pointer-events-auto">
          <div className="flex flex-col">
            <a href="#" onClick={() => setIsOpen(false)} className="font-display text-2xl md:text-3xl text-white uppercase tracking-widest hover:opacity-70 transition-opacity">
              JS PRO GYM
            </a>
            <span className="font-mono text-[10px] text-white/50 tracking-[0.3em] mt-1 hidden md:block">JOHOR BAHRU, MY</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-4 group"
          >
            <span className="font-mono text-xs md:text-sm text-white tracking-[0.2em] group-hover:text-accent transition-colors uppercase">
              {isOpen ? "CLOSE" : "MENU"}
            </span>
            <div className={`h-[1px] bg-white group-hover:bg-accent transition-all duration-500 ${isOpen ? 'w-16' : 'w-8'}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-6 md:px-12"
          >
            <div className="flex flex-col gap-1 md:gap-3 mt-24 md:mt-32">
              {NAV_LINKS.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-block font-display text-[9vw] md:text-[4vw] leading-[0.9] text-white/40 hover:text-white hover:translate-x-4 md:hover:translate-x-8 transition-all duration-500 uppercase"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 md:bottom-12 left-6 md:left-24 flex flex-wrap gap-6 md:gap-12 font-mono text-[10px] text-white/30 tracking-[0.2em]"
            >
              <span>SYS.ACTIVE</span>
              <span>EST. 2024</span>
              <span>[ +60 7-558 8868 ]</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
