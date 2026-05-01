"use client";
import { Bell, Send, MessageSquare } from 'lucide-react';

export default function ModerazioneDashboard() {
  const sendNews = async (type: string) => {
    alert(`Invio ${type} al server Discord in corso...`);
    // Qui si usa il Webhook specifico per le news
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white p-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <Bell className="text-yellow-500" />
        <h1 className="text-2xl font-bold uppercase tracking-widest">Pannello Comunicazioni</h1>
      </div>
      
      <div className="grid gap-6">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">Testo Annuncio Ufficiale</label>
          <textarea className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 mb-4 h-40 focus:border-yellow-500 outline-none transition" placeholder="Scrivi l'annuncio che verrà inviato su Discord..." />
          <button onClick={() => sendNews('ANNUNCIO')} className="bg-yellow-500 text-black font-black px-6 py-3 rounded-xl hover:scale-105 transition flex items-center gap-2">
            <Send size={18}/> INVIA ANNUNCIO
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">Comunicazione Interna</label>
          <textarea className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 mb-4 h-32 focus:border-blue-500 outline-none transition" placeholder="Messaggio per lo staff..." />
          <button onClick={() => sendNews('COMUNICAZIONE')} className="bg-blue-600 text-white font-black px-6 py-3 rounded-xl hover:scale-105 transition flex items-center gap-2">
            <MessageSquare size={18}/> INVIA COMUNICAZIONE
          </button>
        </div>
      </div>
    </div>
  );
}