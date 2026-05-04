import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, TikTokIcon } from '../ui/Icons';
import logoMarcaImg from '../../assets/logo_marca/marca_dob.png';

const Navbar = ({ 
  t, lang, setLang, cart, isMobileMenuOpen, setIsMobileMenuOpen 
}) => {
  return (
    <>
      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5 animate-fade-in-up delay-500">
        <a href="https://www.instagram.com/duvanonthebeat" target="_blank" rel="noopener noreferrer" className="p-2.5 text-white/30 hover:text-primary hover:-translate-y-1 transition-all duration-300 group relative flex items-center justify-center">
          <span className="absolute right-full mr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Instagram</span>
          <InstagramIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" />
        </a>
        <a href="https://www.youtube.com/@duvanonthebeat" target="_blank" rel="noopener noreferrer" className="p-2.5 text-white/30 hover:text-primary hover:-translate-y-1 transition-all duration-300 group relative flex items-center justify-center">
          <span className="absolute right-full mr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">YouTube</span>
          <YoutubeIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" />
        </a>
        <a href="https://www.tiktok.com/@duvanonthebeat" target="_blank" rel="noopener noreferrer" className="p-2.5 text-white/30 hover:text-primary hover:-translate-y-1 transition-all duration-300 group relative flex items-center justify-center">
          <span className="absolute right-full mr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">TikTok</span>
          <TikTokIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" />
        </a>
      </div>

      {/* Modern Navbar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] h-20 flex items-center justify-center px-8 border-b border-white/[0.05] bg-black/40 backdrop-blur-3xl"
      >
        <div className="w-full max-w-7xl flex items-center justify-between relative">
          <div className="h-20 cursor-pointer group flex items-center overflow-visible -ml-4 nav:-ml-24">
            <img 
              src={logoMarcaImg} 
              alt="DOB Logo" 
              className="h-[120px] nav:h-[200px] w-auto group-hover:scale-105 transition-transform duration-300 relative z-50 logo-nav" 
            />
          </div>

          <div className="hidden nav:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <a href="#store" className="nav-link">{t.nav.store}</a>
            <a href="#services" className="nav-link">{t.nav.services}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="text-[10px] font-bold tracking-wider text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] px-3 py-1 bg-primary/10 border border-primary/30 rounded-md transition-all hover:bg-primary/20"
            >
              {lang}
            </button>
            
            <div className="w-[1px] h-4 bg-white/10"></div>

            <div className="relative group cursor-pointer">
              <ShoppingCart className="w-4 h-4 text-white/30 group-hover:text-primary transition-all duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 text-primary text-[9px] font-black drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">
                  {cart.length}
                </span>
              )}
            </div>
            
            <Link to="/login" className="hidden nav:block text-[10px] font-bold tracking-widest text-white px-5 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 ml-2">
              {t.nav.login}
            </Link>
            <Link to="/register" className="hidden nav:block text-[10px] font-bold tracking-widest text-white px-5 py-2 rounded-md bg-primary hover:bg-primary/80 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              {t.nav.signup}
            </Link>

            <button 
              className="nav:hidden p-2 text-white/50 hover:text-primary transition-colors relative z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black/98 backdrop-blur-3xl nav:hidden flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-8">
              <a href="#store" className="text-3xl font-black tracking-tighter hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.store}</a>
              <a href="#services" className="text-3xl font-black tracking-tighter hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.services}</a>
              <a href="#contact" className="text-3xl font-black tracking-tighter hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</a>
            </div>
            <div className="flex flex-col items-center gap-4 mt-8 w-full px-12">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center text-xs font-bold tracking-widest text-white px-5 py-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300">{t.nav.login}</Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center text-xs font-bold tracking-widest text-white px-5 py-4 rounded-xl bg-primary shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">{t.nav.signup}</Link>
            </div>
            <div className="flex gap-8 mt-12">
              <a href="https://www.instagram.com/duvanonthebeat" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-primary transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href="https://www.youtube.com/@duvanonthebeat" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-primary transition-colors"><YoutubeIcon className="w-6 h-6" /></a>
              <a href="https://www.tiktok.com/@duvanonthebeat" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-primary transition-colors"><TikTokIcon className="w-6 h-6" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
