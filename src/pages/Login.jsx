import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import logoMarcaImg from '../assets/logo_marca/marca_dob.png';

const Login = () => {
  const [lang, setLang] = useState('ES');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-screen bg-black text-white font-sans selection:bg-primary/30 selection:text-white flex items-center justify-center relative overflow-hidden">
      {/* Ambient Background */}
      <div className="aurora-container">
        <div className="aurora-glow-1" /><div className="aurora-glow-2" /><div className="aurora-glow-3" />
      </div>

      {/* Absolute Header / Back */}
      <Link to="/" className="absolute top-6 left-6 md:top-8 md:left-8 z-20 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors flex items-center gap-2 group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {lang === 'ES' ? 'Volver al Inicio' : 'Back to Home'}
      </Link>
      <button 
        onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-[10px] font-bold tracking-wider text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] px-3 py-1 bg-primary/10 border border-primary/30 rounded-md transition-all hover:bg-primary/20"
      >
        {lang}
      </button>

      {/* Centered Login Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md px-6 relative z-10 flex flex-col items-center"
      >
        <div className="flex flex-col items-center mb-4 text-center">
          <Link to="/" className="group">
            <img src={logoMarcaImg} alt="DOB Logo" className="h-[200px] w-auto -mb-8 relative z-50 logo-nav" />
          </Link>
          <h1 className="text-2xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            {lang === 'ES' ? 'Iniciar Sesión' : 'Sign In'}
          </h1>
          <p className="text-white/40 text-xs mt-2">{lang === 'ES' ? 'Bienvenido de vuelta a tu portal' : 'Welcome back to your portal'}</p>
        </div>

        <form className="w-full flex flex-col gap-6 px-4 md:px-0" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col gap-8 mt-2">
            <div className="relative">
              <input type="email" id="login-email" className="peer w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all text-sm" placeholder={lang === 'ES' ? 'Tu Correo' : 'Your Email'} />
              <label htmlFor="login-email" className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/20 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary pointer-events-none">
                {lang === 'ES' ? 'Correo Electrónico' : 'Email Address'}
              </label>
            </div>

            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="login-pass" className="peer w-full bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-transparent focus:outline-none focus:border-primary transition-all text-sm pr-8" placeholder={lang === 'ES' ? 'Tu Contraseña' : 'Your Password'} />
              <label htmlFor="login-pass" className="absolute left-0 -top-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/20 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary pointer-events-none">
                {lang === 'ES' ? 'Contraseña' : 'Password'}
              </label>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-primary transition-colors focus:outline-none">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="hidden peer" />
              <div className="w-3.5 h-3.5 rounded border border-white/20 peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 group-hover:text-white/70 transition-colors">{lang === 'ES' ? 'Recordarme' : 'Remember me'}</span>
            </label>
            <a href="#" className="text-[9px] font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors">{lang === 'ES' ? '¿Olvidaste tu contraseña?' : 'Forgot password?'}</a>
          </div>

          <button type="submit" className="mt-4 w-full btn-primary uppercase tracking-[0.3em] text-[10px] flex justify-center py-3">
            {lang === 'ES' ? 'Ingresar' : 'Sign In'}
          </button>
          
          <p className="text-center text-[9px] font-bold uppercase tracking-wider text-white/40 mt-2">
            {lang === 'ES' ? '¿No tienes cuenta?' : 'Don\'t have an account?'} <Link to="/register" className="text-primary hover:text-primary/80 ml-1 transition-colors">{lang === 'ES' ? 'Regístrate' : 'Sign Up'}</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
