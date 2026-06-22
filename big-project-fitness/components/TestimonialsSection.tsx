"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    text: "The cleanest facility I've ever trained in. The equipment is competition standard.",
    author: "Jason L.",
    highlight: "Quality Equipment",
  },
  {
    text: "Extremely welcoming community. The environment here is incredibly supportive.",
    author: "Amanda K.",
    highlight: "Friendly Staff",
  },
  {
    text: "Straightforward pricing. Hard to find a gym with this level of quality in JB.",
    author: "David C.",
    highlight: "Value",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em]">[ VER-06 ]</div>
      
      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 mb-12">
        <div className="mb-12 flex items-center gap-4">
           <div className="w-12 h-[1px] bg-accent" />
           <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
             06 // The Verdict
           </span>
        </div>
      </div>

      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 border-t border-white/10">
        {REVIEWS.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="border-b border-white/10 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-16 group cursor-default"
          >
            <div className="md:w-1/4">
               <span className="text-white/20 font-mono text-[10px] tracking-[0.2em] group-hover:text-accent transition-colors duration-500 uppercase">
                 {review.highlight}
               </span>
            </div>
            <div className="md:w-3/4 flex flex-col">
              <p className="font-display text-3xl md:text-5xl text-white/50 leading-[1.1] tracking-tight mb-8 group-hover:text-white transition-colors duration-500 uppercase">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-6 h-[1px] bg-accent/50 group-hover:bg-accent transition-colors duration-500" />
                 <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                   {review.author}
                 </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
