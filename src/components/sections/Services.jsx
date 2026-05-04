import React from 'react';
import { motion } from 'framer-motion';

const Services = ({ t, serviceIcons }) => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20 gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">{t.services.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              {t.services.title.split(' ')[0]} <span className="text-white/20">{t.services.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-sm leading-relaxed">{t.services.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] rounded-2xl p-10 transition-all duration-500 ${i === 2 ? 'md:col-span-2 lg:col-span-1 md:max-w-[calc(50%-12px)] md:mx-auto lg:max-w-none lg:mx-0' : ''}`}
            >
              <div className={`text-primary mb-8 group-hover:scale-110 group-hover:text-primary transition-all duration-500 flex items-center ${i === 2 ? 'md:justify-center lg:justify-start' : ''}`}>
                <div className="w-8 h-8 flex items-center justify-center">{serviceIcons[i]}</div>
              </div>
              <h3 className={`text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors ${i === 2 ? 'md:text-center lg:text-left' : ''}`}>{service.title}</h3>
              <p className={`text-sm text-white/30 leading-relaxed group-hover:text-white/50 transition-colors ${i === 2 ? 'md:text-center lg:text-left' : ''}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
