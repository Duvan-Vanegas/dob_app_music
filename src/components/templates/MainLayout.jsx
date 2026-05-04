import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import AudioPlayer from '../layout/AudioPlayer';

const MainLayout = ({
  children,
  t, lang, setLang, cart,
  isMobileMenuOpen, setIsMobileMenuOpen,
  currentTrack, isStorePlaying, setIsStorePlaying,
  isMuted, setIsMuted, volume, setVolume,
  setCurrentTrack
}) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Ambient Background */}
      <div className="aurora-container">
        <div className="aurora-glow-1" /><div className="aurora-glow-2" /><div className="aurora-glow-3" />
      </div>

      <Navbar 
        t={t} lang={lang} setLang={setLang} cart={cart} 
        isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {children}

      <Footer />

      <AudioPlayer 
        currentTrack={currentTrack} isStorePlaying={isStorePlaying} setIsStorePlaying={setIsStorePlaying} 
        isMuted={isMuted} setIsMuted={setIsMuted} volume={volume} setVolume={setVolume} 
        setCurrentTrack={setCurrentTrack} 
      />

      {/* Hidden Audio for Store */}
      {currentTrack && (
        <audio autoPlay={isStorePlaying} muted={isMuted} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
          ref={(el) => { if (el) { el.volume = volume; if (isStorePlaying) el.play().catch(() => {}); else el.pause(); } }} 
        />
      )}
    </div>
  );
};

export default MainLayout;
