import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = ({ 
  currentTrack, isStorePlaying, setIsStorePlaying, isMuted, setIsMuted, volume, setVolume, setCurrentTrack 
}) => {
  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.div 
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl"
        >
          <div className="bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-6">
            <div className="flex items-center gap-4 min-w-0 w-64">
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <img src={currentTrack.image} alt={currentTrack.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-white truncate">{currentTrack.name}</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">{currentTrack.tag} • {currentTrack.bpm} BPM</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-2">
              <div className="flex items-center justify-center gap-6">
                <button className="text-white/20 hover:text-primary transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18V6h2v12H6zm3.5-6L19 6v12L9.5 12z"/></svg></button>
                <button onClick={() => setIsStorePlaying(!isStorePlaying)} className="p-2 shrink-0 transition-all duration-300 group">
                  {isStorePlaying ? <Pause className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" /> : <Play className="w-6 h-6 text-white/30 group-hover:text-primary fill-current transition-colors" />}
                </button>
                <button className="text-white/20 hover:text-primary transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 6v12h-2V6h2zM5 18V6l9.5 6L5 18z"/></svg></button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-white/20 font-medium w-8">1:24</span>
                <div className="flex-1 h-1 bg-white/10 rounded-full relative overflow-hidden group/progress cursor-pointer"><div className="absolute top-0 left-0 h-full w-1/3 bg-primary group-hover/progress:bg-primary/80 transition-all"></div></div>
                <span className="text-[10px] text-white/20 font-medium w-8">3:45</span>
              </div>
            </div>

            <div className="flex items-center gap-6 w-64 justify-end">
              <div className="flex items-center group/vol-bottom">
                <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-white/40 hover:text-primary transition-colors">{isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}</button>
                <div className="w-0 overflow-hidden group-hover/vol-bottom:w-20 transition-all duration-500 flex items-center">
                  <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={(e) => setVolume(parseFloat(e.target.value))} className="w-16 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" />
                </div>
              </div>
              <button onClick={() => setCurrentTrack(null)} className="text-white/20 hover:text-primary transition-colors p-2">✕</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioPlayer;
