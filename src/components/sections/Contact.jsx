import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = ({ t }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">{t.contactSection.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              {t.contactSection.title.split(' ')[0]} <span className="text-white/20">{t.contactSection.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto mt-6 text-sm leading-relaxed">{t.contactSection.desc}</p>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-5 max-w-2xl mx-auto w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6 mt-4">
            <div className="relative">
              <input type="text" id="contact-name" className="peer w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all" placeholder={t.contactSection.name} />
              <label htmlFor="contact-name" className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/20 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary pointer-events-none">
                {t.contactSection.name}
              </label>
            </div>
            <div className="relative mt-2">
              <input type="email" id="contact-email" className="peer w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all" placeholder={t.contactSection.email} />
              <label htmlFor="contact-email" className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/20 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary pointer-events-none">
                {t.contactSection.email}
              </label>
            </div>
          </div>
          <div className="relative mt-4">
            <textarea id="contact-message" rows="3" className="peer w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all resize-none" placeholder={t.contactSection.message}></textarea>
            <label htmlFor="contact-message" className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/20 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary pointer-events-none">
              {t.contactSection.message}
            </label>
          </div>
          <button type="submit" className="mt-8 w-full btn-primary uppercase tracking-[0.3em] text-[10px] flex justify-center">
            {t.contactSection.send}
          </button>
        </motion.form>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-sm w-full flex flex-col items-center text-center relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <svg className="w-12 h-12 text-primary drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{t.contactSection.successTitle}</h3>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">{t.contactSection.successDesc}</p>
              <button onClick={() => setIsSubmitted(false)} className="w-full btn-primary uppercase tracking-[0.2em] text-[10px] flex justify-center">
                {t.contactSection.successBtn}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
