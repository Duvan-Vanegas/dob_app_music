import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Pause, MoreHorizontal, Volume2, VolumeX } from 'lucide-react';

const Hero = ({ 
  t, typedTitle, isPlaying, togglePlay, showMenu, setShowMenu, handleFileChange, 
  audioUrl, audioRef, bars, isMuted, toggleMute, volume, setVolume, songName 
}) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen flex flex-col items-center text-center justify-center"
    >
      <div className="premium-badge-purple mb-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-sm h-1.5 w-1.5 bg-primary"></span>
        </span>
        {t.hero.badge}
      </div>

      <div className="hero-glow-container" />

      <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black mb-6 tracking-tighter leading-[1.1] uppercase relative min-h-[1.1em]">
        <span className="text-white/95 glow-white">{typedTitle.slice(0, 5)}</span>
        <span className="text-primary glow-purple">{typedTitle.slice(5)}</span>
        <span className="animate-pulse border-r-4 border-primary ml-1"></span>
      </h1>
      
      <p className="max-w-xl text-sm md:text-base text-white/40 font-medium leading-relaxed mb-6 animate-fade-in-up">
        {t.hero.desc}
      </p>
      
      <div className="flex justify-center w-full animate-fade-in-up delay-150 mb-8">
        <a href="#store" className="btn-primary flex items-center gap-3 group">
          {t.hero.cta} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="apple-player animate-fade-in-up delay-300 w-full max-w-lg">
        <div className="apple-player-header justify-between">
          <div className="flex gap-2">
            <button className="apple-dot dot-purple flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all"><span className="text-[8px] text-white/80">✕</span></button>
            <button className="apple-dot dot-purple flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all"><span className="text-[8px] text-white/80">−</span></button>
            <button className="apple-dot dot-purple flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all"><span className="text-[8px] text-white/80">＋</span></button>
          </div>
          <div className="text-[9px] font-bold text-primary tracking-[0.2em] uppercase animate-pulse">Produciendo...</div>
          <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)} className="p-1 transition-colors group">
              <MoreHorizontal className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#111] border border-white/10 rounded-xl shadow-2xl p-1 z-50 animate-fade-in-up origin-top-right">
                <label className="flex items-center w-full px-3 py-2 text-xs text-white/70 hover:text-primary rounded-lg cursor-pointer transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  {t.hero.loadTrack}
                  <input type="file" accept="audio/*" className="hidden" onChange={handleFileChange} />
                </label>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-5 flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)', backgroundSize: '40px 40px' }} />
          </div>

          {audioUrl && <audio ref={audioRef} src={audioUrl} onEnded={() => togglePlay()} className="hidden" />}

          <div className="flex items-center gap-2 md:gap-6 relative z-10 px-2 md:px-8">
            <button onClick={togglePlay} className="p-2 shrink-0 transition-all duration-300 group">
              {isPlaying ? <Pause className="w-5 h-5 text-white/30 group-hover:text-primary transition-colors" /> : <Play className="w-5 h-5 text-white/30 group-hover:text-primary fill-current transition-colors" />}
            </button>
            <div className="waveform-container !px-0 flex-1 cursor-pointer group/wave overflow-hidden" onClick={togglePlay}>
              {bars.slice(0, 40).map((height, i) => (
                <div key={i} className="waveform-bar bg-primary opacity-60 hover:opacity-100 transition-opacity cursor-pointer" style={{ height: `${height}%`, boxShadow: i % 5 === 0 ? '0 0 10px rgba(168, 85, 247, 0.4)' : 'none' }} />
              ))}
            </div>
            <div className="flex items-center group/vol">
              <button onClick={toggleMute} className="p-2 transition-all">
                {isMuted || volume === 0 ? <VolumeX className="w-5 h-5 text-red-500/50 hover:text-red-500 transition-colors" /> : <Volume2 className="w-5 h-5 text-white/30 group-hover/vol:text-primary transition-all" />}
              </button>
              <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-500 flex items-center">
                <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="w-16 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary hover:bg-white/20 transition-all" />
              </div>
            </div>
          </div>

          {songName && (
            <div className="absolute bottom-1 left-0 right-0 flex flex-col items-center z-10 px-8 pointer-events-none">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-1.5" />
              <div className="text-[8px] font-medium text-white/40 tracking-[0.2em] uppercase max-w-[80%] truncate text-center">{songName}</div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
