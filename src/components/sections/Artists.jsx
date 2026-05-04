import React from 'react';
import { motion } from 'framer-motion';
import { artists } from '../../constants/data';

const Artists = ({ t }) => {
  return (
    <section className="py-24 relative overflow-hidden z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-16 gap-6"
      >
        <div className="flex flex-col items-center">
          <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">{t.artists.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
            {t.artists.title.split(' ')[0]} <span className="text-white/20">{t.artists.title.split(' ')[1]}</span>
          </h2>
        </div>
        <p className="max-w-md text-white/40 text-sm leading-relaxed">
          {t.artists.desc}
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden flex">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-30 pointer-events-none" />
        
        <div className="flex w-max animate-infinite-scroll gap-8 px-4">
          {[...artists, ...artists].map((artist, idx) => (
            <motion.div key={idx} className="relative w-[220px] md:w-[260px] h-[400px] md:h-[480px] shrink-0 rounded-2xl overflow-hidden group cursor-pointer bg-[#050505] border border-white/[0.05] transition-all duration-1000 shadow-2xl">
              <div className="absolute inset-0 bg-black/70 z-10 group-hover:bg-black/20 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/15 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" />
              <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center pointer-events-none">
                <div className="w-8 h-[1px] bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-700 mb-4" />
                <h3 className="text-[10px] font-bold text-white/40 tracking-[0.4em] uppercase group-hover:text-white group-hover:tracking-[0.5em] transition-all duration-700">{artist.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
