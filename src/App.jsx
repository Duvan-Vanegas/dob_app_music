import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Brands from './components/sections/Brands';
import Artists from './components/sections/Artists';
import Services from './components/sections/Services';
import Store from './components/sections/Store';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import AudioPlayer from './components/layout/AudioPlayer';
import { translations, beats } from './constants/data';
import { Play } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const pricingRef = useRef(null);
  const [songName, setSongName] = useState(null);
  const [lang, setLang] = useState('ES');
  const audioRef = useRef(null);

  const baseBars = [15, 25, 40, 20, 35, 50, 45, 30, 25, 40, 55, 35, 20, 45, 60, 40, 25, 35, 50, 30, 20, 15, 25, 40, 20, 35, 45, 30, 25, 40, 50, 20, 35, 40, 25, 15];
  const initialBars = [...baseBars, ...baseBars, ...baseBars].slice(0, 80);
  const [bars, setBars] = useState(initialBars);
  const [typedTitle, setTypedTitle] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isStorePlaying, setIsStorePlaying] = useState(false);
  const [cart, setCart] = useState([]);
  const fullTitle = "DUVAN ON THE BEAT";

  const t = translations[lang];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, currentIdx));
      currentIdx++;
      if (currentIdx > fullTitle.length) {
        setTimeout(() => { currentIdx = 0; }, 2000); 
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    const centerGoldPlan = () => {
      if (pricingRef.current && window.innerWidth < 1600) {
        const container = pricingRef.current;
        if (container && container.children[2]) {
          const goldCard = container.children[2];
          const scrollPos = goldCard.offsetLeft - (container.clientWidth / 2) + (goldCard.clientWidth / 2);
          container.scrollTo({ left: scrollPos, behavior: 'smooth' });
        }
      }
    };
    
    // Ejecutar al inicio con un ligero retraso para asegurar el renderizado
    setTimeout(centerGoldPlan, 500);

    // Re-centrar si cambia el tamaño de la ventana (opcional, ayuda a mantenerlo cuando rotan el móvil o cambian tamaño)
    window.addEventListener('resize', centerGoldPlan);
    return () => window.removeEventListener('resize', centerGoldPlan);
  }, []);

  const scrollPricing = (direction) => {
    if (pricingRef.current && pricingRef.current.children.length > 0) {
      const container = pricingRef.current;
      const card = container.children[0];
      const style = window.getComputedStyle(container);
      const gap = parseInt(style.gap) || parseInt(style.columnGap) || 16;
      const cardWidth = card.clientWidth + gap;
      const { scrollLeft } = container;
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (currentTrack) setIsStorePlaying(false);
  };

  const handleStorePlay = (beat) => {
    if (currentTrack?.id === beat.id) {
      setIsStorePlaying(!isStorePlaying);
    } else {
      setCurrentTrack(beat);
      setIsStorePlaying(true);
    }
    setIsPlaying(false);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleCart = (beat) => {
    if (cart.find(item => item.id === beat.id)) {
      setCart(cart.filter(item => item.id !== beat.id));
    } else {
      setCart([...cart, beat]);
    }
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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setBars(prevBars => prevBars.map((height, i) => {
          const baseHeight = initialBars[i];
          const jitter = (Math.random() * 30) - 15;
          return Math.max(10, Math.min(100, baseHeight + jitter));
        }));
      }, 120);
    } else {
      setBars(initialBars);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const plans = [
    { 
      name: "Bronze", 
      price: "$29", 
      features: lang === 'ES' ? ["MP3 Lease", "100k Streams", "No Exclusivo", "Audio con Tag", "1 Video Musical", "100% Regalías", "Soporte Básico", "Licencia Estándar", "Uso Comercial", "Descarga Instantánea"] : ["MP3 Lease", "100k Streams", "Non-Exclusive", "Tagged Audio", "1 Music Video", "100% Royalties", "Basic Support", "Standard License", "Commercial Use", "Instant Download"], 
      color: "text-orange-400" 
    },
    { 
      name: "Silver", 
      price: "$49", 
      features: lang === 'ES' ? ["WAV Lease", "500k Streams", "No Exclusivo", "Audio sin Tag", "3 Videos Musicales", "100% Regalías", "Soporte Prioritario", "Licencia Premium", "Distribución en Spotify", "Descarga Instantánea"] : ["WAV Lease", "500k Streams", "Non-Exclusive", "Untagged Audio", "3 Music Videos", "100% Royalties", "Priority Support", "Premium License", "Spotify Distribution", "Instant Download"], 
      color: "text-slate-300"
    },
    { 
      name: "Gold", 
      price: "$99", 
      features: lang === 'ES' ? ["Trackouts (Stems)", "Streams Ilimitados", "Derechos de Ejecución", "Radio Airplay", "Videos Ilimitados", "100% Regalías", "Soporte VIP 24/7", "Licencia Ilimitada", "Monetización en YouTube", "Sin Límites de Venta"] : ["Trackouts (Stems)", "Unlimited Streams", "Performance Rights", "Radio Airplay", "Unlimited Videos", "100% Royalties", "24/7 VIP Support", "Unlimited License", "YouTube Monetization", "No Sales Limits"], 
      color: "text-yellow-400", 
      popular: true
    },
    { 
      name: "Platinum", 
      price: "$199", 
      features: lang === 'ES' ? ["Derechos Exclusivos", "Propiedad Total", "Transferencia de Copyright", "Producción a Medida", "Todo Ilimitado", "100% Regalías", "Contacto Directo", "Contrato Legal", "Marketing de Lanzamiento", "Beat Retirado de Tienda"] : ["Exclusive Rights", "Full Ownership", "Transfer of Copyright", "Custom Production", "Unlimited Everything", "100% Royalties", "Direct Line Contact", "Legal Contract", "Release Marketing", "Beat Removed from Store"], 
      color: "text-cyan-300" 
    },
    { 
      name: "Diamond", 
      price: lang === 'ES' ? "Haz una oferta" : "Make an offer", 
      features: lang === 'ES' ? [
        "Todo en Platinum", "Producción Presencial", "Mix & Master Full", "Contrato a Medida", 
        "Uso en Cine/TV", "Derechos de Autor 100%", "Consultoría Privada", "Licencia Diamante",
        "Campamento de Composición", "Estrategia de Lanzamiento"
      ] : [
        "Everything in Platinum", "In-Person Production", "Full Mix & Master", "Custom Contract", 
        "Film/TV Use", "100% Copyright", "Private Consulting", "Diamond License",
        "Songwriting Camp", "Release Strategy"
      ], 
      color: "text-blue-400" 
    },
  ];

  const serviceIcons = [
    <Play className="w-6 h-6" />,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
  ];

  const [openFaq, setOpenFaq] = useState(null);

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

      <main className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col pt-10">
        <Hero 
          t={t} typedTitle={typedTitle} isPlaying={isPlaying} togglePlay={togglePlay} 
          showMenu={showMenu} setShowMenu={setShowMenu} handleFileChange={handleFileChange} 
          audioUrl={audioUrl} audioRef={audioRef} bars={bars} isMuted={isMuted} 
          toggleMute={toggleMute} volume={volume} setVolume={setVolume} songName={songName} 
        />
        <Brands t={t} />
      </main>

      <Artists t={t} />
      <Services t={t} serviceIcons={serviceIcons} />
      <Store t={t} handleStorePlay={handleStorePlay} currentTrack={currentTrack} isStorePlaying={isStorePlaying} toggleCart={toggleCart} cart={cart} />
      <Pricing t={t} pricingRef={pricingRef} scrollPricing={scrollPricing} plans={plans} />
      <FAQ t={t} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <Contact t={t} />
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
}

export default App;
