import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  ChevronRight, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
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

// Brand Logos
import adamAudioImg from './assets/marcas/adam_audio.png';
import arturiaImg from './assets/marcas/arturia.png';
import audioTechnicaImg from './assets/marcas/audio_technica.png';
import flStudioImg from './assets/marcas/fl_studio.png';
import novationImg from './assets/marcas/novation.png';

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
  const [typedTitle, setTypedTitle] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isStorePlaying, setIsStorePlaying] = useState(false);
  const [cart, setCart] = useState([]);
  const fullTitle = "DUVAN ON THE BEAT";

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 100); // 100ms per character for a premium feel
    return () => clearInterval(interval);
  }, []);

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

  const brands = [
    { name: "Adam Audio", logo: adamAudioImg, size: "h-24 md:h-44" },
    { name: "Arturia", logo: arturiaImg, size: "h-20 md:h-40" },
    { name: "Audio Technica", logo: audioTechnicaImg, size: "h-28 md:h-52" },
    { name: "FL Studio", logo: flStudioImg, size: "h-32 md:h-60" },
    { name: "Novation", logo: novationImg, size: "h-7 md:h-10" },
  ];

  // Altura base (si no se especifica en el objeto brand)
  const logoHeight = "h-8 md:h-12"; 

  const beats = [
    { id: 1, name: "Midnight Rain", bpm: "140", tag: "Trap", price: "$29.99", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&h=400&auto=format&fit=crop" },
    { id: 2, name: "Neon Dreams", bpm: "95", tag: "Lo-Fi", price: "$24.99", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=400&h=400&auto=format&fit=crop" },
    { id: 3, name: "Velvet Sky", bpm: "128", tag: "Reggaeton", price: "$34.99", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400&h=400&auto=format&fit=crop" },
    { id: 4, name: "Cyber City", bpm: "160", tag: "Drill", price: "$29.99", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop" },
    { id: 5, name: "Desert Rose", bpm: "90", tag: "Afrobeat", price: "$39.99", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&h=400&auto=format&fit=crop" },
    { id: 6, name: "Ice Cold", bpm: "145", tag: "Trap", price: "$29.99", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&h=400&auto=format&fit=crop" },
  ];

  const translations = {
    ES: {
      nav: { store: "Tienda", services: "Servicios", contact: "Contacto", login: "LOG IN", signup: "SIGN UP" },
      hero: { 
        badge: "Productor musical", 
        desc: "Producción musical de clase mundial para artistas que exigen excelencia. Ingeniería de sonido de élite y branding sonoro a medida.", 
        cta: "Explorar Beats", 
        producing: "Produciendo...", 
        loadTrack: "Cargar Track Local" 
      },
      brands: { badge: "Marcas" },
      artists: { 
        badge: "Inspiración", 
        title: "Nuestra Inspiración", 
        desc: "Estilos que definen nuestra visión y elevan la calidad de cada producción." 
      },
      services: { 
        badge: "Servicios", 
        title: "Nuestros Servicios", 
        desc: "Soluciones integrales para llevar tu talento al siguiente nivel con calidad de estudio profesional.",
        items: [
          { title: "Producción & Beat Making", description: "Creación de beats exclusivos y personalizados para tu próximo proyecto, adaptados a tu estilo único." },
          { title: "Grabación de Voces", description: "Equipamiento de alta gama y acústica tratada para capturar cada matiz de tu interpretación vocal." },
          { title: "Mezcla & Masterización", description: "Equilibrio sonoro y pulido final para que tu música suene competitiva en todas las plataformas globales." },
        ]
      },
      store: { 
        badge: "Store", 
        title: "Explorar Beats", 
        desc: "Producciones exclusivas diseñadas para elevar tu sonido. Licencias profesionales listas para tu próximo hit." 
      },
      pricing: { 
        badge: "Ofertas", 
        title: "Planes de Licencia", 
        desc: "Elige el nivel de libertad que tu proyecto necesita. Calidad profesional garantizada en cada beat.",
        btn: "Elegir Plan",
        recommended: "Recomendado",
        perBeat: "/Beat"
      },
      faq: { 
        badge: "Ayuda", 
        title: "Preguntas Frecuentes",
        items: [
          { question: "¿Cómo recibo mis beats tras la compra?", answer: "Inmediatamente después de completar el pago, recibirás un correo electrónico con los enlaces de descarga para los archivos de audio y el contrato de licencia correspondiente." },
          { question: "¿Los beats son exclusivos?", answer: "Depende de la licencia que elijas. Las licencias Bronze, Silver y Gold son no exclusivas, mientras que la licencia Platinum otorga derechos de propiedad exclusiva." },
          { question: "¿Puedo subir mi canción a Spotify?", answer: "Sí, todas nuestras licencias te permiten distribuir tu música en plataformas de streaming como Spotify, Apple Music y YouTube, sujeto a los límites de streams de cada plan." },
          { question: "¿Qué son los Trackouts o Stems?", answer: "Los Trackouts son las pistas individuales de cada instrumento del beat (batería, bajo, melodías, etc.) por separado, lo que te permite una mezcla y masterización profesional de tu voz con la música." },
        ]
      }
    },
    EN: {
      nav: { store: "Store", services: "Services", contact: "Contact", login: "LOG IN", signup: "SIGN UP" },
      hero: { 
        badge: "Music Producer", 
        desc: "World-class music production for artists who demand excellence. Elite sound engineering and bespoke sonic branding.", 
        cta: "Explore Beats", 
        producing: "Producing...", 
        loadTrack: "Load Local Track" 
      },
      brands: { badge: "Brands I Use" },
      artists: { 
        badge: "Inspiration", 
        title: "Our Inspiration", 
        desc: "Styles that define our vision and elevate the quality of every production." 
      },
      services: { 
        badge: "Services", 
        title: "Our Services", 
        desc: "Integral solutions to take your talent to the next level with professional studio quality.",
        items: [
          { title: "Production & Beat Making", description: "Creation of exclusive and custom beats for your next project, tailored to your unique style." },
          { title: "Vocal Recording", description: "High-end equipment and treated acoustics to capture every nuance of your vocal performance." },
          { title: "Mixing & Mastering", description: "Sound balance and final polish to make your music sound competitive on all global platforms." },
        ]
      },
      store: { 
        badge: "Store", 
        title: "Explore Beats", 
        desc: "Exclusive productions designed to elevate your sound. Professional licenses ready for your next hit." 
      },
      pricing: { 
        badge: "Offers", 
        title: "License Plans", 
        desc: "Choose the level of freedom your project needs. Professional quality guaranteed in every beat.",
        btn: "Choose Plan",
        recommended: "Recommended",
        perBeat: "/Beat"
      },
      faq: { 
        badge: "Help", 
        title: "Frequently Asked Questions",
        items: [
          { question: "How do I receive my beats after purchase?", answer: "Immediately after completing payment, you will receive an email with download links for the audio files and corresponding license agreement." },
          { question: "Are the beats exclusive?", answer: "It depends on the license you choose. Bronze, Silver, and Gold licenses are non-exclusive, while the Platinum license grants exclusive ownership rights." },
          { question: "Can I upload my song to Spotify?", answer: "Yes, all our licenses allow you to distribute your music on streaming platforms like Spotify, Apple Music, and YouTube, subject to each plan's stream limits." },
          { question: "What are Trackouts or Stems?", answer: "Trackouts are the individual tracks of each instrument in the beat (drums, bass, melodies, etc.) separately, allowing for professional mixing and mastering of your vocals with the music." },
        ]
      }
    }
  };

  const t = translations[lang];

  const plans = [
    { 
      name: "Bronze", 
      price: "$29", 
      features: lang === 'ES' ? [
        "MP3 Lease", "100k Streams", "No Exclusivo", "Audio con Tag", 
        "1 Video Musical", "100% Regalías", "Soporte Básico", "Licencia Estándar"
      ] : [
        "MP3 Lease", "100k Streams", "Non-Exclusive", "Tagged Audio", 
        "1 Music Video", "100% Royalties", "Basic Support", "Standard License"
      ], 
      color: "text-orange-400" 
    },
    { 
      name: "Silver", 
      price: "$49", 
      features: lang === 'ES' ? [
        "WAV Lease", "500k Streams", "No Exclusivo", "Audio sin Tag", 
        "3 Videos Musicales", "100% Regalías", "Soporte Prioritario", "Licencia Premium"
      ] : [
        "WAV Lease", "500k Streams", "Non-Exclusive", "Untagged Audio", 
        "3 Music Videos", "100% Royalties", "Priority Support", "Premium License"
      ], 
      color: "text-slate-300" 
    },
    { 
      name: "Gold", 
      price: "$99", 
      features: lang === 'ES' ? [
        "Trackouts (Stems)", "Streams Ilimitados", "Derechos de Ejecución", "Radio Airplay", 
        "Videos Ilimitados", "100% Regalías", "Soporte VIP 24/7", "Licencia Ilimitada"
      ] : [
        "Trackouts (Stems)", "Unlimited Streams", "Performance Rights", "Radio Airplay", 
        "Unlimited Videos", "100% Royalties", "24/7 VIP Support", "Unlimited License"
      ], 
      color: "text-yellow-400", 
      popular: true 
    },
    { 
      name: "Platinum", 
      price: lang === 'ES' ? "Personalizado" : "Custom", 
      features: lang === 'ES' ? [
        "Derechos Exclusivos", "Propiedad Total", "Transferencia de Copyright", "Producción a Medida", 
        "Todo Ilimitado", "100% Regalías", "Contacto Directo", "Contrato Legal"
      ] : [
        "Exclusive Rights", "Full Ownership", "Transfer of Copyright", "Custom Production", 
        "Unlimited Everything", "100% Royalties", "Direct Line Contact", "Legal Contract"
      ], 
      color: "text-cyan-300" 
    },
  ];

  const serviceIcons = [
    <Play className="w-6 h-6" />,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
  ];

  const [openFaq, setOpenFaq] = useState(null);

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
    if (currentTrack) setIsStorePlaying(false); // Stop store track if hero starts
  };

  const handleStorePlay = (beat) => {
    if (currentTrack?.id === beat.id) {
      setIsStorePlaying(!isStorePlaying);
    } else {
      setCurrentTrack(beat);
      setIsStorePlaying(true);
    }
    setIsPlaying(false); // Stop hero track if store starts
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
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center px-8 border-b border-white/[0.05] bg-black/40 backdrop-blur-3xl"
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          <div className="text-xl font-black tracking-[0.3em] text-white/50 hover:text-primary transition-all duration-300 cursor-pointer">
            DOB
          </div>

          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <a href="#store" className="nav-link">{t.nav.store}</a>
            <a href="#services" className="nav-link">{t.nav.services}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="text-[10px] font-bold tracking-wider text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] px-3 py-1 bg-primary/10 border border-primary/30 rounded-full transition-all hover:bg-primary/20"
            >
              {lang}
            </button>
            
            <div className="w-[1px] h-4 bg-white/10"></div>

            <div className="relative group cursor-pointer" onClick={() => {/* Toggle cart drawer */}}>
              <ShoppingCart className="w-4 h-4 text-white/30 group-hover:text-primary transition-all duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 text-primary text-[9px] font-black drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">
                  {cart.length}
                </span>
              )}
            </div>
            
            <button className="text-[10px] font-bold tracking-widest text-white px-5 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 ml-2">
              {t.nav.login}
            </button>
            <button className="text-[10px] font-bold tracking-widest text-white px-5 py-2 rounded-md bg-primary hover:bg-primary/80 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              {t.nav.signup}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col pt-10">
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen flex flex-col items-center text-center justify-center"
        >
          
          {/* Productor Musical Badge */}
          <div className="premium-badge-purple mb-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-sm h-1.5 w-1.5 bg-primary"></span>
            </span>
            {t.hero.badge}
          </div>

          {/* Background Ambient Lighting */}
          <div className="hero-glow-container" />
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[400px] bg-primary/[0.07] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 -z-10 w-[600px] h-[400px] bg-primary/[0.05] blur-[100px] rounded-full pointer-events-none" />

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black mb-6 tracking-tighter leading-[1.1] uppercase relative min-h-[1.1em]">
            <span className="text-white/95 glow-white">
              {typedTitle.slice(0, 5)}
            </span>
            <span className="text-primary glow-purple">
              {typedTitle.slice(5)}
            </span>
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
                      {t.hero.loadTrack}
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
                {/* Play Button on Left - Floating Style */}
                <button 
                  onClick={togglePlay}
                  className="p-2 shrink-0 transition-all duration-300 group"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white/30 group-hover:text-primary transition-colors" />
                  ) : (
                    <Play className="w-5 h-5 text-white/30 group-hover:text-primary fill-current transition-colors" />
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

                {/* Volume Control on Right */}
                <div className="flex items-center group/vol">
                  <button 
                    onClick={toggleMute}
                    className="p-2 transition-all"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-5 h-5 text-red-500/50 hover:text-red-500 transition-colors" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white/30 group-hover/vol:text-primary transition-all" />
                    )}
                  </button>
                  
                  {/* Minimal Volume Slider */}
                  <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-500 ease-in-out flex items-center">
                    <input 
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(parseFloat(e.target.value));
                        if (parseFloat(e.target.value) > 0) setIsMuted(false);
                      }}
                      className="w-16 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary hover:bg-white/20 transition-all"
                    />
                  </div>
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
        </motion.section>

        {/* Brand Slider Section */}
        <div className="py-20 relative overflow-hidden h-auto flex flex-col items-center gap-0">
          <div className="premium-badge-purple">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-sm h-1.5 w-1.5 bg-primary"></span>
            </span>
            {t.brands.badge}
          </div>
          
          <div className="w-full relative flex items-center h-48 md:h-64 -mt-10">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-brand-scroll gap-0 items-center px-4">
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="w-[120px] md:w-[320px] shrink-0 flex items-center justify-center grayscale"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={`max-w-full w-auto ${brand.size || logoHeight} logo-white object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      </main>

      {/* Artists Slider Section (Soundseam Inspired) */}
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
          {/* Subtle Side Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-30 pointer-events-none" />
          
          <div className="flex w-max animate-infinite-scroll gap-8 px-4">
            {/* Seamless Marquee Loop */}
            {[...artists, ...artists].map((artist, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10, scale: 1.02 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <p className="max-w-md text-white/40 text-sm leading-relaxed">
              {t.services.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] rounded-2xl p-10 transition-all duration-500"
              >
                <div className="text-primary mb-8 group-hover:scale-110 group-hover:text-primary transition-all duration-500 flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {serviceIcons[i]}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beat Store Section */}
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
            <p className="max-w-md text-white/40 text-sm leading-relaxed">
              {t.store.desc}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {beats.map((beat, i) => (
                <motion.div 
                  key={beat.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex items-center gap-6 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl p-3 pr-6 transition-all duration-300"
                >
                  {/* Play & Image */}
                  <div className="flex items-center gap-4 shrink-0">
                    <button 
                      onClick={() => handleStorePlay(beat)}
                      className="p-2 transition-all duration-300 group/play"
                    >
                      {currentTrack?.id === beat.id && isStorePlaying ? (
                        <Pause className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                      ) : (
                        <Play className="w-5 h-5 text-white/30 group-hover/play:text-primary fill-current transition-all" />
                      )}
                    </button>
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 shrink-0">
                      <img src={beat.image} alt={beat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-bold text-white mb-0.5 truncate">{beat.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{beat.tag}</span>
                      <span className="w-[1px] h-2 bg-white/10"></span>
                      <span className="text-[10px] font-medium text-white/30 uppercase tracking-widest">{beat.bpm} BPM</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center gap-8 shrink-0">
                    <span className="text-sm font-black text-white/90 tracking-tight">{beat.price}</span>
                    <button 
                      onClick={() => toggleCart(beat)}
                      className={`p-2 transition-all duration-300 group/cart`}
                    >
                      <ShoppingCart className={`w-5 h-5 transition-all duration-300 ${
                        cart.find(item => item.id === beat.id) 
                        ? 'text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]' 
                        : 'text-white/30 group-hover/cart:text-primary'
                      }`} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            <p className="max-w-md text-white/40 text-sm leading-relaxed">
              {t.pricing.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative bg-gradient-to-b from-white/[0.03] to-transparent border ${plan.popular ? 'border-primary/50 shadow-[0_20px_50px_rgba(168,85,247,0.1)]' : 'border-white/[0.05]'} rounded-2xl p-8 transition-all duration-700 flex flex-col hover:-translate-y-2 hover:bg-white/[0.05]`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-md shadow-lg shadow-primary/40 z-10">
                    {t.pricing.recommended}
                  </div>
                )}
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-primary shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="mb-8">
                  <h3 className={`text-[9px] font-black uppercase tracking-[0.4em] mb-3 text-white/30 group-hover:text-white/60 transition-colors`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white tracking-tighter italic">{plan.price}</span>
                    {plan.price !== "Custom" && plan.price !== "Personalizado" && <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{t.pricing.perBeat}</span>}
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-medium text-white/40 group-hover:text-white/80 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className={`mt-auto w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden relative group/btn ${
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-16 gap-6"
          >
            <div className="flex flex-col items-center">
              <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">{t.faq.badge}</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                {t.faq.title.split(' ')[0]} <span className="text-white/20">{t.faq.title.split(' ').slice(1).join(' ')}</span>
              </h2>
            </div>
          </motion.div>

          <div className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <div 
                key={index} 
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl transition-all duration-500 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className={`text-sm md:text-base font-bold transition-colors duration-300 ${openFaq === index ? 'text-primary' : 'text-white/60 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openFaq === index ? 'bg-primary text-white rotate-180' : 'bg-white/5 text-white/20 group-hover:bg-white/10'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="p-6 pt-0 text-sm leading-relaxed text-white/40 border-t border-white/[0.03]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

      {/* Floating Bottom Player */}
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
            {/* Track Info */}
            <div className="flex items-center gap-4 min-w-0 w-64">
              <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <img src={currentTrack.image} alt={currentTrack.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-white truncate">{currentTrack.name}</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">{currentTrack.tag} • {currentTrack.bpm} BPM</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col flex-1 gap-2">
              <div className="flex items-center justify-center gap-6">
                <button className="text-white/20 hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18V6h2v12H6zm3.5-6L19 6v12L9.5 12z"/></svg>
                </button>
                <button 
                  onClick={() => setIsStorePlaying(!isStorePlaying)}
                  className="p-2 shrink-0 transition-all duration-300 group"
                >
                  {isStorePlaying ? (
                    <Pause className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  ) : (
                    <Play className="w-6 h-6 text-white/30 group-hover:text-primary fill-current transition-colors" />
                  )}
                </button>
                <button className="text-white/20 hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 6v12h-2V6h2zM5 18V6l9.5 6L5 18z"/></svg>
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-white/20 font-medium w-8">1:24</span>
                <div className="flex-1 h-1 bg-white/10 rounded-full relative overflow-hidden group/progress cursor-pointer">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary group-hover/progress:bg-primary/80 transition-all"></div>
                </div>
                <span className="text-[10px] text-white/20 font-medium w-8">3:45</span>
              </div>
            </div>

            {/* Actions & Volume */}
            <div className="flex items-center gap-6 w-64 justify-end">
              <div className="flex items-center group/vol-bottom">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-white/40 hover:text-primary transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <div className="w-0 overflow-hidden group-hover/vol-bottom:w-20 transition-all duration-500 flex items-center">
                  <input 
                    type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-16 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
              <button onClick={() => setCurrentTrack(null)} className="text-white/20 hover:text-primary transition-colors p-2">
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

      {/* Hidden Audio for Store */}
      {currentTrack && (
        <audio 
          autoPlay={isStorePlaying}
          muted={isMuted}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder for beat audio
          ref={(el) => {
            if (el) {
              el.volume = volume;
              if (isStorePlaying) el.play().catch(() => {});
              else el.pause();
            }
          }}
        />
      )}
    </div>
  );
}

export default App;
