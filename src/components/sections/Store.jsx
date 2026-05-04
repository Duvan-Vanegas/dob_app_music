import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ShoppingCart } from 'lucide-react';
import { beats } from '../../constants/data';

const Store = ({ t, handleStorePlay, currentTrack, isStorePlaying, toggleCart, cart }) => {
  return (
    <section id="store" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20 gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">{t.store.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              {t.store.title.split(' ')[0]} <span className="text-white/20">{t.store.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-sm leading-relaxed">{t.store.desc}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col gap-4">
            {beats.map((beat, i) => (
              <motion.div key={beat.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative flex items-center gap-6 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl p-3 pr-6 transition-all duration-300">
                <div className="flex items-center gap-4 shrink-0">
                  <button onClick={() => handleStorePlay(beat)} className="p-2 transition-all duration-300 group/play">
                    {currentTrack?.id === beat.id && isStorePlaying ? <Pause className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" /> : <Play className="w-5 h-5 text-white/30 group-hover/play:text-primary fill-current transition-all" />}
                  </button>
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 shrink-0">
                    <img src={beat.image} alt={beat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-white mb-0.5 truncate">{beat.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{beat.tag}</span>
                    <span className="w-[1px] h-2 bg-white/10"></span>
                    <span className="text-[10px] font-medium text-white/30 uppercase tracking-widest">{beat.bpm} BPM</span>
                  </div>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <span className="text-sm font-black text-white/90 tracking-tight">{beat.price}</span>
                  <button onClick={() => toggleCart(beat)} className="p-2 transition-all duration-300 group/cart">
                    <ShoppingCart className={`w-5 h-5 transition-all duration-300 ${cart.find(item => item.id === beat.id) ? 'text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]' : 'text-white/30 group-hover/cart:text-primary'}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Store;
