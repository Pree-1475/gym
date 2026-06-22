"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isMobile, setIsMobile] = useState(true); // Default true to avoid massive spotlight jump on mobile load
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    // On mobile, put the spotlight in the center by default
    if (window.innerWidth < 768) {
      setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale up the text massively on scroll to "fly through"
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const spotlightOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] bg-[#050505]">
      {/* Sticky container to hold the hero while we scroll down */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* Base Layer: Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover grayscale"
            src="/videos/hero-video.mp4"
          />
        </div>

        {/* Mask Layer: Black background, White Text, White Cursor Spotlight */}
        <div className="absolute inset-0 z-10 bg-black mix-blend-multiply overflow-hidden pointer-events-none flex items-center justify-center">
          
          {/* Spotlight */}
          <motion.div 
            style={{ opacity: spotlightOpacity }}
            className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white rounded-full blur-[80px] md:blur-[100px] origin-center -translate-x-1/2 -translate-y-1/2"
            animate={
              isMobile 
                ? { 
                    x: [mousePosition.x - 200, mousePosition.x - 100, mousePosition.x - 200], 
                    y: [mousePosition.y - 150, mousePosition.y - 250, mousePosition.y - 150] 
                  }
                : {
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300,
                  }
            }
            transition={
              isMobile
                ? { repeat: Infinity, duration: 4, ease: "easeInOut" }
                : { type: "tween", ease: "backOut", duration: 0.5 }
            }
          />

          {/* Massive Text */}
          <motion.h1 
            style={{ scale: textScale, opacity: textOpacity }}
            className="font-display text-[26vw] md:text-[22vw] leading-[0.85] md:leading-[0.8] text-white tracking-tighter text-center flex flex-col"
          >
            <span>BIG</span>
            <span>PROJECT</span>
          </motion.h1>
        </div>

        {/* UI Overlay Layer (Not multiplied, always visible) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Crosshairs */}
          <div className="absolute top-12 left-6 md:left-12 w-4 h-[1px] bg-white/30" />
          <div className="absolute top-12 left-6 md:left-12 w-[1px] h-4 bg-white/30" />
          
          <div className="absolute bottom-12 right-6 md:right-12 w-4 h-[1px] bg-white/30" />
          <div className="absolute bottom-8 right-6 md:right-12 w-[1px] h-4 bg-white/30" />

          {/* Technical Text */}
          <div className="absolute bottom-12 left-6 md:left-12 font-mono text-[10px] text-white/50 tracking-[0.3em] uppercase hidden md:block">
            <p className="mb-2">SEQ_01 // INT. FACILITY // JOHOR BAHRU</p>
            <p>Scroll to initialize</p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-auto md:left-1/2 h-24 md:h-32 flex flex-col items-center">
            <div className="w-[1px] h-full bg-white/20 relative overflow-hidden">
              <motion.div 
                className="w-full h-[50%] bg-white"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
