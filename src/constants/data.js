import deiVImg from '../assets/dei_v.jpeg';
import luarLaLImg from '../assets/luar_la_l.jpeg';
import quavoImg from '../assets/quavo.png';
import crisMJImg from '../assets/cris_mj.png';
import badBunnyImg from '../assets/bad_bunny.jpg';
import travisScottImg from '../assets/travis_scott.png';
import mykeTowersImg from '../assets/myke_towers.png';
import eladioCarrionImg from '../assets/eladio_carrion.jpeg';
import moraImg from '../assets/mora.png';

import adamAudioImg from '../assets/marcas/adam_audio.png';
import arturiaImg from '../assets/marcas/arturia.png';
import audioTechnicaImg from '../assets/marcas/audio_technica.png';
import flStudioImg from '../assets/marcas/fl_studio.png';
import novationImg from '../assets/marcas/novation.png';

export const artists = [
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

export const brands = [
  { name: "Adam Audio", logo: adamAudioImg, size: "h-24 md:h-44" },
  { name: "Arturia", logo: arturiaImg, size: "h-20 md:h-40" },
  { name: "Audio Technica", logo: audioTechnicaImg, size: "h-28 md:h-52" },
  { name: "FL Studio", logo: flStudioImg, size: "h-32 md:h-60" },
  { name: "Novation", logo: novationImg, size: "h-7 md:h-10" },
];

export const beats = [
  { id: 1, name: "Midnight Rain", bpm: "140", tag: "Trap", price: "$29.99", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 2, name: "Neon Dreams", bpm: "95", tag: "Lo-Fi", price: "$24.99", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 3, name: "Velvet Sky", bpm: "128", tag: "Reggaeton", price: "$34.99", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 4, name: "Cyber City", bpm: "160", tag: "Drill", price: "$29.99", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 5, name: "Desert Rose", bpm: "90", tag: "Afrobeat", price: "$39.99", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 6, name: "Ice Cold", bpm: "145", tag: "Trap", price: "$29.99", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&h=400&auto=format&fit=crop" },
];

export const translations = {
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
    },
    contactSection: { 
      badge: "Contacto", 
      title: "Ponte en Contacto", 
      desc: "¿Tienes alguna pregunta o proyecto en mente? Escríbenos y hagamos música juntos.",
      name: "Tu Nombre",
      email: "Tu Correo Electrónico",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
      successTitle: "¡Enviado con Éxito!",
      successDesc: "Nos pondremos en contacto contigo lo antes posible.",
      successBtn: "Aceptar"
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
        { question: "Can I upload my song to Spotify?", answer: "Yes, all our licenses allow you to distribute your music on streaming platforms like Spotify, Apple Music and YouTube, subject to each plan's stream limits." },
        { question: "What are Trackouts or Stems?", answer: "Trackouts are the individual tracks of each instrument in the beat (drums, bass, melodies, etc.) separately, allowing for professional mixing and mastering of your vocals with the music." },
      ]
    },
    contactSection: { 
      badge: "Contact", 
      title: "Get in Touch", 
      desc: "Have a question or a project in mind? Write to us and let's make music together.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      successTitle: "Successfully Sent!",
      successDesc: "We will get back to you as soon as possible.",
      successBtn: "Accept"
    }
  }
};
