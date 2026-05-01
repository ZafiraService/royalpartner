"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Handshake, Check, X, Users } from 'lucide-react';

export default function PartnerDashboard() {
  const [richieste, setRichieste] = useState<any[]>([]);

  // CARICAMENTO DATI REALI
  useEffect(() => {
    fetchRichieste();
  }, []);

  async function fetchRichieste() {
    const { data } = await supabase
      .from('richieste')
      .select('*')
      .eq('tipo_richiesta', 'Partner')
      .eq('stato', 'pendente')
      .order('created_at', { ascending: false });
    
    if (data) setRichieste(data);
  }

  async function gestisciRichiesta(id: number, nuovoStato: 'accettato' | 'rifiutato') {
    await supabase
      .from('richieste')
      .update({ stato: nuovoStato })
      .eq('id', id);
    
    fetchRichieste(); // Aggiorna la lista
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white p-10">
      <h1 className="text-3xl font-black mb-10 flex items-center gap-3">
        <Handshake className="text-emerald-500" /> Richieste Partnership Reali
      </h1>

      <div className="grid gap-4">
        {richieste.length === 0 && <p className="text-slate-500 italic">Nessuna richiesta in attesa...</p>}
        
        {richieste.map((r) => (
          <div key={r.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-lg">{r.user_discord}</span>
                <span className={`text-[10px] px-2 py-1 rounded-full font-black uppercase ${r.membri_server >= 500 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                  {r.membri_server} Membri
                </span>
              </div>
              <p className="text-slate-400 text-sm italic">"{r.messaggio}"</p>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <button 
                onClick={() => gestisciRichiesta(r.id, 'accettato')}
                className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-xl font-bold transition"
              >
                Accetta
              </button>
              <button 
                onClick={() => gestisciRichiesta(r.id, 'rifiutato')}
                className="flex-1 md:flex-none bg-white/5 hover:bg-red-600 px-6 py-2 rounded-xl font-bold transition"
              >
                Rifiuta
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}