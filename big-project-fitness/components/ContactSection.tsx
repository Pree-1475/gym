"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="absolute top-8 right-6 md:right-24 font-mono text-[10px] text-white/30 tracking-[0.2em]">[ LOC-08 ]</div>
      
      <div className="max-w-[95vw] md:max-w-[85vw] mx-auto px-6 mb-16 md:mb-24 flex flex-col lg:flex-row gap-16 justify-between">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <div className="mb-12 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-accent" />
               <span className="font-mono text-[10px] md:text-xs text-secondary tracking-[0.4em] uppercase">
                 08 // Location & Contact
               </span>
            </div>
            <h2 className="font-display text-[4rem] md:text-[6rem] text-primary tracking-tight leading-none uppercase mb-16">
              Find<br/>
              <span className="text-white/20">The Work.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
            <div>
               <h3 className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-4">ADDRESS</h3>
               <p className="font-body text-white/70 text-sm leading-relaxed max-w-[200px]">
                 No 6-01, 6-02, 8-01 & 8-02 Jalan Pertama 1,<br />
                 Pusat Perdagangan Danga Utama Skudai,<br />
                 Taman Tampoi Indah 2,<br />
                 81300 Johor Bahru.
               </p>
            </div>
            <div className="flex flex-col gap-12">
               <div>
                 <h3 className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-4">PHONE</h3>
                 <p className="font-display text-2xl text-white">+60 7-558 8868</p>
               </div>
               <div>
                 <h3 className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mb-4">HOURS</h3>
                 <p className="font-body text-white/70 text-sm">8:00 AM – 10:00 PM Daily</p>
               </div>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="https://wa.me/6075588868" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                 <svg className="w-4 h-4 text-white group-hover:text-black transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <span className="font-display tracking-[0.2em] text-white/70 group-hover:text-white transition-colors duration-500 uppercase text-xs">Message on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-square bg-[#050505] overflow-hidden relative border border-white/10 p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.518625902409!2d103.665796!3d1.503698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da73c1d9b3d4f1%3A0x6b44c66e92c286a!2sTaman%20Tampoi%20Indah%2C%2081200%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1716912345678!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="w-full h-full grayscale opacity-70 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
