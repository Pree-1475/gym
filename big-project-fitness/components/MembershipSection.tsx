"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const MEMBERSHIPS = [
  {
    name: "Walk-In Pass",
    price: "RM 25",
    period: "per day",
    desc: "Perfect for visitors or those wanting to try the facility.",
    features: ["Full day facility access", "No commitment", "Locker usage included"],
  },
  {
    name: "Monthly",
    price: "RM 150",
    period: "per month",
    desc: "Standard access for regular training.",
    features: ["Unlimited facility access", "Free parking", "Community events access"],
  },
  {
    name: "3-Month",
    price: "RM 400",
    period: "per 3 months",
    desc: "Commit to your progress and save.",
    features: ["Everything in Monthly", "Guest pass (1/month)", "Priority event registration"],
  },
  {
    name: "1-Year",
    price: "RM 1,000",
    period: "per year",
    desc: "The ultimate commitment. Best value.",
    features: ["Lowest monthly rate", "Guest pass (2/month)", "Free BiG Project apparel"],
    featured: true,
  },
];

export function MembershipSection() {
  return (
    <section id="memberships" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto">
        <div className="mb-12 flex items-center gap-4">
           <div className="w-12 h-[1px] bg-accent" />
           <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
             04 // Memberships
           </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <h2 className="font-display text-[4rem] md:text-[6rem] text-primary tracking-tight leading-none uppercase">
            No Hidden <span className="text-white/20">Fees.</span><br/>
            Straightforward.
          </h2>
        </motion.div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
          {MEMBERSHIPS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col p-8 md:p-10 border w-[85vw] md:w-auto shrink-0 snap-center ${
                plan.featured ? "border-accent bg-white/5" : "border-white/10 bg-[#050505]"
              }`}
            >
              <div className="mb-8">
                <h3 className="font-display text-3xl text-primary mb-2 tracking-wide uppercase">{plan.name}</h3>
                <p className="text-white/50 font-body text-sm min-h-[40px]">{plan.desc}</p>
              </div>
              
              <div className="mb-8 flex items-end gap-2">
                <span className="font-display text-5xl text-primary">{plan.price}</span>
                <span className="text-white/50 font-body pb-1.5">{plan.period}</span>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-4 text-center font-display tracking-widest text-lg transition-colors duration-300 uppercase ${
                  plan.featured
                    ? "bg-accent text-black hover:bg-white"
                    : "bg-white/5 text-white border border-white/10 hover:border-white hover:bg-white hover:text-black"
                }`}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
