"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const duration = 2000; // 2 seconds
    const interval = 20; // 50 times per second
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      
      // Add some easing to the progress (fast at first, slow at end)
      const easedProgress = Math.round(100 - (100 - currentProgress) * (100 - currentProgress) / 100);
      
      setProgress(easedProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "unset";
        }, 400); // Small pause at 100%
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-display text-[25vw] leading-none text-white/5 whitespace-nowrap">
              INITIALIZING
            </span>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            <span className="font-mono text-sm tracking-[0.4em] text-accent uppercase">
              System Loading
            </span>
            <div className="font-display text-8xl md:text-[10rem] text-white tracking-tighter w-[300px] text-center">
              {progress}%
            </div>
          </div>
          
          <div className="absolute bottom-12 left-12 font-mono text-[10px] text-white/30 tracking-[0.2em] flex flex-col gap-2">
            <span>JS PRO GYM // EST 2024</span>
            <span>JOHOR BAHRU, MY</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
