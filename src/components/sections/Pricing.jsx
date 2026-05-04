import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PricingCard = ({ plan, i, t }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className={`group relative flex-shrink-0 w-[80vw] sm:w-[280px] lg:w-[290px] min-[1600px]:w-full snap-center bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] rounded-2xl p-5 md:p-6 transition-all duration-500 flex flex-col hover:-translate-y-2`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] rounded-md shadow-lg shadow-primary/40 z-30">
          {t.pricing.recommended}
        </div>
      )}
      
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-primary shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-full opacity-50 group-hover:opacity-100 transition-opacity ${plan.popular ? 'opacity-100 w-32' : ''}`} />

      <div className="mb-6">
        <h3 className={`text-[9px] font-black uppercase tracking-[0.4em] mb-2 text-white/30 group-hover:text-white/60 transition-colors ${plan.popular ? 'text-primary/80' : ''}`}>{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl md:text-4xl font-black text-white tracking-tighter italic">{plan.price}</span>
          {plan.price !== "Custom" && plan.price !== "Personalizado" && plan.price !== "Haz una oferta" && plan.price !== "Make an offer" && <span className="text-[9px] md:text-[10px] text-white/20 font-bold uppercase tracking-widest">{t.pricing.perBeat}</span>}
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[9px] md:text-[10px] font-medium text-white/40 group-hover:text-white/80 transition-colors">
            <div className={`w-1 h-1 rounded-full transition-colors shrink-0 ${plan.popular ? 'bg-primary' : 'bg-primary/40 group-hover:bg-primary'}`} />
            <span className="truncate">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`mt-auto w-full py-3.5 md:py-4 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden relative group/btn ${
        plan.popular
        ? 'bg-primary text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]' 
        : 'bg-white/[0.03] text-white/60 hover:text-white border border-white/[0.05] hover:border-primary/50'
      }`}>
        <span className="relative z-10">{t.pricing.btn}</span>
        {plan.popular && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
        )}
      </button>
    </motion.div>
  );
};


const Pricing = ({ t, pricingRef, scrollPricing, plans }) => {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 2xl:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20 gap-6"
        >
          <div className="flex flex-col items-center">
            <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">{t.pricing.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              {t.pricing.title.split(' ')[0]} <span className="text-white/20">{t.pricing.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 text-sm leading-relaxed">{t.pricing.desc}</p>
        </motion.div>

        <div className="relative group/pricing px-4 md:px-0">
          <button onClick={() => scrollPricing('left')} className="absolute -left-2 md:-left-12 top-[40%] -translate-y-1/2 z-40 p-4 text-primary/40 hover:text-primary transition-all hidden md:flex min-[1600px]:!hidden items-center justify-center group/btn-left">
            <ChevronLeft className="w-8 h-8 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:btn-left:scale-110 transition-transform" />
          </button>
          <button onClick={() => scrollPricing('right')} className="absolute -right-2 md:-right-12 top-[40%] -translate-y-1/2 z-40 p-4 text-primary/40 hover:text-primary transition-all hidden md:flex min-[1600px]:!hidden items-center justify-center group/btn-right">
            <ChevronRight className="w-8 h-8 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:btn-right:scale-110 transition-transform" />
          </button>
          <div className="absolute inset-x-0 top-[40%] -translate-y-1/2 flex justify-between px-2 z-40 pointer-events-none md:hidden">
            <button onClick={() => scrollPricing('left')} className="p-4 text-primary pointer-events-auto active:scale-90 transition-all"><ChevronLeft className="w-7 h-7 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" /></button>
            <button onClick={() => scrollPricing('right')} className="p-4 text-primary pointer-events-auto active:scale-90 transition-all"><ChevronRight className="w-7 h-7 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" /></button>
          </div>
          <div ref={pricingRef} className="flex overflow-x-auto min-[1600px]:grid min-[1600px]:grid-cols-5 gap-4 pb-12 pt-8 snap-x snap-mandatory no-scrollbar md:px-0">
            {plans.map((plan, i) => <PricingCard key={plan.name} plan={plan} i={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
