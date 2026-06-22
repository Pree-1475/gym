"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "How much is a membership?",
    answer: "Our standard monthly membership is RM 150. We also offer a walk-in pass for RM 25, a 3-month package for RM 400, and a 1-year package for RM 1,000. No hidden joining or cancellation fees."
  },
  {
    question: "Do you offer trial sessions?",
    answer: "Yes, you can purchase a walk-in pass for RM 25 to try the facility. If you decide to sign up for a monthly membership on the same day, we will deduct the RM 25 from your first month's fee."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open daily from 8:00 AM to 10:00 PM, including public holidays."
  },
  {
    question: "How does personal training work?",
    answer: "Personal training is customized to your goals, whether that's strength development, fat loss, or general fitness. Packages vary based on frequency. Contact us to schedule a consultation."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, there is ample free parking available directly in front of the facility."
  },
  {
    question: "Is the gym beginner friendly?",
    answer: "Absolutely. While we cater to serious lifters, our community is built on respect and growth. Everyone starts somewhere, and our staff is always happy to help you get acquainted with the equipment."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em]">[ FAQ-07 ]</div>
      
      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col">
           <div className="mb-12 flex items-center gap-4">
             <div className="w-12 h-[1px] bg-accent" />
             <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
               07 // Information
             </span>
           </div>
          <h2 className="font-display text-[4rem] md:text-[6rem] text-primary tracking-tight leading-none uppercase">
            Questions.<br/>
            <span className="text-white/20">Answered.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-8 md:py-10 text-left focus:outline-none group"
              >
                <span className={`font-display text-2xl md:text-3xl transition-colors duration-300 uppercase ${openIndex === index ? 'text-accent' : 'text-white/70 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`font-mono text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-accent' : 'text-white/30 group-hover:text-white'}`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-white/50 pb-10 pr-8 text-sm md:text-base border-l border-accent/50 pl-4 mb-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
