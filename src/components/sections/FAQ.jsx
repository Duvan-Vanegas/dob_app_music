import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = ({ t, openFaq, setOpenFaq }) => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">{t.faq.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              {t.faq.title.split(' ')[0]} <span className="text-white/20">{t.faq.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-2">
          {t.faq.items.map((faq, index) => (
            <div key={index} className="group relative transition-all duration-500 overflow-hidden border-b border-white/[0.05] last:border-0">
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full py-6 flex items-center justify-between text-left">
                <span className={`text-sm md:text-base font-bold transition-colors duration-300 ${openFaq === index ? 'text-primary' : 'text-white/60 group-hover:text-white'}`}>{faq.question}</span>
                <div className={`flex items-center justify-center transition-all duration-500 ${openFaq === index ? 'text-primary rotate-180' : 'text-white/20 group-hover:text-primary'}`}><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                    <div className="pb-6 pr-12 text-sm leading-relaxed text-white/40">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
