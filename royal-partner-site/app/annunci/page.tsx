"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ANNUNCI = [
  { id: 1, date: "01 Maggio 2026", title: "Lancio Versione 2.0", tags: ["Update", "Web"], content: "Abbiamo ufficialmente rilasciato la nuova piattaforma con integrazione Webhook avanzata." },
  { id: 2, date: "28 Aprile 2026", title: "Nuovo Partner: Zafira Service", tags: ["Partnership"], content: "Diamo il benvenuto a Zafira nel nostro network d'élite." },
];

export default function AnnunciPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white p-6 md:p-20">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition mb-12">
        <ArrowLeft size={20} /> Torna alla Home
      </Link>
      
      <header className="mb-16">
        <h1 className="text-5xl font-black mb-4">📢 Annunci <span className="text-blue-500">Royal</span></h1>
        <p className="text-slate-400 text-lg">Resta aggiornato sulle ultime novità del network.</p>
      </header>

      <div className="max-w-4xl space-y-8">
        {ANNUNCI.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/30 transition"
          >
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">
                <Calendar size={12} /> {item.date}
              </span>
              {item.tags.map(t => (
                <span key={t} className="text-[10px] font-bold text-slate-500 uppercase border border-white/10 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
            <p className="text-slate-400 leading-relaxed">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}