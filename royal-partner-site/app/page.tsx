"use client";
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { 
  Shield, Server, Code, Zap, Star, 
  CheckCircle2, ArrowRight, MessageSquare, Bell, Users, Lock, Home as HomeIcon 
} from 'lucide-react';
import Link from 'next/link';

// --- MOUSE TRACKER COMPONENT ---
function MouseTracker() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 10);
      mouseY.set(e.clientY + 10);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ x: mouseX, y: mouseY }}
    >
      <img src="/favicon.ico" alt="cursor" className="w-6 h-6 drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-300 font-sans cursor-default overflow-x-hidden">
      <MouseTracker />

      {/* SFONDO DINAMICO */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* NAVBAR COMPLETA */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="text-blue-500" size={28} />
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">RoyalPartner</span>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition"><HomeIcon size={14}/> Home</Link>
            <Link href="/annunci" className="hover:text-white transition">Annunci</Link>
            <Link href="/comunicazioni" className="hover:text-white transition">Comunicazioni</Link>
            <Link href="#partnership" className="hover:text-white transition text-blue-400">Diventa Partner</Link>
            <Link href="#collaboratore" className="hover:text-white transition">Diventa Collaboratore</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://discord.gg/vostro-invito" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl text-xs font-black transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] active:scale-95"
            >
              ENTRA NEL SERVER
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.85] tracking-tighter mb-8">
            ROYAL<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">PARTNER</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 font-medium">
            Il network d'élite per la gestione, crescita e sicurezza del tuo server Discord.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-2xl">Esplora Ora</button>
            <Link href="/login" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition">
              <Lock size={18}/> Staff Access
            </Link>
          </div>
        </motion.div>
      </section>

      {/* RESTO DEL SITO (SERVIZI & FORM) */}
      <section id="partnership" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 backdrop-blur-3xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
             <Star className="text-blue-500" /> Candidatura Partner / Collaboratore
          </h2>
          <DiscordForm />
        </div>
      </section>
    </div>
  );
}

// --- LOGICA FORM ---
function DiscordForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.target);
    const payload = {
      embeds: [{
        title: `👑 Nuova Richiesta: ${fd.get('role')}`,
        color: 0x2563eb,
        fields: [
          { name: "Utente", value: fd.get('user'), inline: true },
          { name: "Email", value: fd.get('email'), inline: true },
          { name: "Messaggio", value: fd.get('message') }
        ],
        timestamp: new Date()
      }]
    };
    await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    setStatus('success');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="user" placeholder="Nome Discord" className="bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500" required />
        <select name="role" className="bg-[#0a0b14] border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500" required>
          <option value="Partner">Diventa Partner</option>
          <option value="Collaboratore">Diventa Collaboratore</option>
          <option value="Sviluppatore">Richiesta Descrizione</option>
        </select>
      </div>
      <textarea name="message" placeholder="Spiegaci il motivo della richiesta..." className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white h-32 outline-none focus:border-blue-500" required />
      <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition shadow-lg">
        {status === 'sending' ? 'Inviando...' : status === 'success' ? 'Richiesta Inviata con Successo!' : 'Invia Candidatura'}
      </button>
    </form>
  );
}