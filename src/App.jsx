import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingCart, 
  ChevronRight, 
  Play, 
  Pause,
  Volume2,
  Share2,
  MoreHorizontal
} from 'lucide-react';

import deiVImg from './assets/dei_v.jpeg';
import luarLaLImg from './assets/luar_la_l.jpeg';
import quavoImg from './assets/quavo.png';
import crisMJImg from './assets/cris_mj.png';
import badBunnyImg from './assets/bad_bunny.jpg';
import travisScottImg from './assets/travis_scott.png';
import mykeTowersImg from './assets/myke_towers.png';
import eladioCarrionImg from './assets/eladio_carrion.jpeg';
import moraImg from './assets/mora.png';

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    stroke="currentColor" 
    strokeWidth="0.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
  </svg>
);

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [songName, setSongName] = useState(null);
  const [lang, setLang] = useState('ES');
  const audioRef = useRef(null);

  const baseBars = [15, 25, 40, 20, 35, 50, 45, 30, 25, 40, 55, 35, 20, 45, 60, 40, 25, 35, 50, 30, 20, 15, 25, 40, 20, 35, 45, 30, 25, 40, 50, 20, 35, 40, 25, 15];
  const initialBars = [...baseBars, ...baseBars, ...baseBars].slice(0, 80);
  const [bars, setBars] = useState(initialBars);

  // Artist Data
  const artists = [
    { name: "Dei V", image: deiVImg },
    { name: "Luar la L", image: luarLaLImg },
    { name: "Quavo", image: quavoImg },
    { name: "Cris MJ", image: crisMJImg },
    { name: "Bad Bunny", image: badBunnyImg },
    { name: "Travis Scott", image: travisScottImg },
    { name: "Myke Towers", image: mykeTowersImg },
    { name: "Eladio Carrión", image: eladioCarrionImg },
    { name: "Mora", image: moraImg },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      setSongName(file.name.replace(/\.[^/.]+$/, ""));
      setIsPlaying(true);
      setShowMenu(false);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Playback prevented', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioUrl]);

  // Live Audio Animation Effect
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setBars(prevBars => 
          prevBars.map((height, i) => {
            // Keep base shape but add random jitter
            const baseHeight = initialBars[i];
            const jitter = (Math.random() * 30) - 15; // Random value between -15 and +15
            return Math.max(10, Math.min(100, baseHeight + jitter));
          })
        );
      }, 120); // Fast interval for realistic sound wave update
    } else {
      setBars(initialBars);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white">
      {/* Ambient Background */}
      <div className="aurora-container">
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-5 animate-fade-in-up delay-500">
        <a href="#" className="p-2.5 text-white/30 hover:text-primary hover:-translate-y-1 transition-all duration-300 group relative flex items-center justify-center">
          <span className="absolute right-full mr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Instagram</span>
          <InstagramIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" />
        </a>
        <a href="#" className="p-2.5 text-white/30 hover:text-primary hover:-translate-y-1 transition-all duration-300 group relative flex items-center justify-center">
          <span className="absolute right-full mr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">YouTube</span>
          <YoutubeIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" />
        </a>
        <a href="#" className="p-2.5 text-white/30 hover:text-primary hover:-translate-y-1 transition-all duration-300 group relative flex items-center justify-center">
          <span className="absolute right-full mr-4 text-[10px] font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">TikTok</span>
          <TikTokIcon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all" />
        </a>
      </div>

      {/* Modern Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center px-8 border-b border-white/[0.05] bg-black/40 backdrop-blur-3xl">
        <div className="w-full max-w-7xl flex items-center justify-between">
          <div className="text-xl font-black tracking-[0.3em] text-white/50 hover:text-primary transition-all duration-300 cursor-pointer">
            DOB
          </div>

          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <a href="#beats" className="nav-link">Store</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="text-[10px] font-bold tracking-wider text-white/50 hover:text-primary transition-colors"
            >
              {lang}
            </button>
            
            <div className="w-[1px] h-4 bg-white/10"></div>

            <ShoppingCart className="w-4 h-4 text-white/30 hover:text-primary transition-all duration-300 cursor-pointer" />
            
            <button className="text-[10px] font-bold tracking-widest text-white px-5 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 ml-2">
              LOG IN
            </button>
            <button className="text-[10px] font-bold tracking-widest text-white px-5 py-2 rounded-md bg-primary hover:bg-primary/80 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <section className="min-h-screen flex flex-col items-center text-center justify-center">
          
          {/* Productor Musical Badge */}
          <div className="premium-badge-purple mb-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-sm h-1.5 w-1.5 bg-primary"></span>
            </span>
            Productor musical
          </div>

          {/* Background Ambient Lighting */}
          <div className="hero-glow-container" />
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[400px] bg-primary/[0.07] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 -z-10 w-[600px] h-[400px] bg-primary/[0.05] blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black mb-6 tracking-tighter leading-[1.1] uppercase relative">
            <span className="text-white/95 glow-white">DUVAN</span> <span className="text-primary glow-purple">ON THE BEAT</span>
          </h1>
          
          <p className="max-w-xl text-sm md:text-base text-white/40 font-medium leading-relaxed mb-6 animate-fade-in-up">
            World-class music production for artists who demand excellence. 
            Elite sound engineering and bespoke sonic branding.
          </p>
          
          <div className="flex justify-center w-full animate-fade-in-up delay-150 mb-8">
            <button className="btn-primary flex items-center gap-3 group">
              Explorar Beats <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Audio Player */}
          <div className="apple-player animate-fade-in-up delay-300">
            {/* macOS Window Header */}
            <div className="apple-player-header justify-between">
              <div className="flex gap-2">
                <button className="apple-dot dot-purple flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all">
                  <span className="text-[8px] text-white/80">✕</span>
                </button>
                <button className="apple-dot dot-purple flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all">
                  <span className="text-[8px] text-white/80">−</span>
                </button>
                <button className="apple-dot dot-purple flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all">
                  <span className="text-[8px] text-white/80">＋</span>
                </button>
              </div>
              <div className="text-[9px] font-bold text-primary tracking-[0.2em] uppercase animate-pulse">Produciendo...</div>
              <div className="relative">
                <button 
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-1 transition-colors group"
                >
                  <MoreHorizontal className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                </button>

                {showMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#111] border border-white/10 rounded-xl shadow-2xl p-1 z-50 animate-fade-in-up origin-top-right">
                    <label className="flex items-center w-full px-3 py-2 text-xs text-white/70 hover:text-primary rounded-lg cursor-pointer transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      Cargar Track Local
                      <input 
                        type="file" 
                        accept="audio/*" 
                        className="hidden" 
                        onChange={handleFileChange} 
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-5 flex flex-col gap-3 relative">
              {/* Subtle Texture Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)', backgroundSize: '40px 40px' }} />
              </div>

              {audioUrl && (
                <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
              )}

              <div className="flex items-center gap-6 relative z-10 px-8">
                {/* Play Button on Left */}
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-primary" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-1 group-hover:text-primary transition-colors" />
                  )}
                </button>

                <div 
                  className="waveform-container !px-0 flex-1 cursor-pointer group/wave" 
                  onClick={togglePlay}
                >
                  {bars.map((height, i) => (
                    <div 
                      key={i} 
                      className="waveform-bar bg-primary opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                      style={{ height: `${height}%`, boxShadow: i % 5 === 0 ? '0 0 10px rgba(168, 85, 247, 0.4)' : 'none' }}
                    />
                  ))}
                </div>
              </div>

              {/* Song Name Display */}
              {songName && (
                <div className="absolute bottom-1 left-0 right-0 flex flex-col items-center z-10 px-8 pointer-events-none">
                  {/* Fading Line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-1.5" />
                  
                  <div className="text-[8px] font-medium text-white/40 tracking-[0.2em] uppercase max-w-[80%] truncate text-center">
                    {songName}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Artists Slider Section (Soundseam Inspired) */}
      <section className="py-24 relative overflow-hidden bg-black z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex justify-center text-center">
          <p className="max-w-xl text-sm md:text-base text-white/30 font-medium leading-relaxed tracking-wide">
            Estilos que definen nuestra inspiración
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex">
          {/* Subtle Side Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-30 pointer-events-none" />
          
          <div className="flex w-max animate-infinite-scroll gap-8 px-4">
            {/* Seamless Marquee Loop */}
            {[...artists, ...artists].map((artist, idx) => (
              <div 
                key={idx} 
                className="relative w-[220px] md:w-[260px] h-[400px] md:h-[480px] shrink-0 rounded-2xl overflow-hidden group cursor-pointer bg-[#050505] border border-white/[0.05] transition-all duration-1000 shadow-2xl"
              >
                {/* Minimal Dark Overlay (Moody B&W) */}
                <div className="absolute inset-0 bg-black/70 z-10 group-hover:bg-black/20 transition-all duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-primary/15 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
                
                {/* Image */}
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />

                {/* Floating Minimal Name */}
                <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center pointer-events-none">
                  {/* Thin elegant line */}
                  <div className="w-8 h-[1px] bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-700 mb-4" />
                  <h3 className="text-[10px] font-bold text-white/40 tracking-[0.4em] uppercase group-hover:text-white group-hover:tracking-[0.5em] transition-all duration-700">
                    {artist.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-4 border-t border-white/[0.05] flex justify-center">
        <div className="text-[10px] font-medium text-white/20 tracking-[0.1em] text-center px-4">
          © 2026 Duvan On The Beat ™ Todos los derechos están reservados
        </div>
      </footer>
    </div>
  );
}

export default App;
