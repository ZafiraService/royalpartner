"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdminPanelReale() {
  const [richieste, setRichieste] = useState<any[]>([]);

  useEffect(() => {
    const fetchRichieste = async () => {
      const { data } = await supabase
        .from('richieste')
        .select('*')
        .eq('stato', 'pendente')
        .order('created_at', { ascending: false });
      if (data) setRichieste(data);
    };
    fetchRichieste();
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-indigo-500">Staff Admin</h1>
            <p className="text-slate-400">Monitoraggio richieste in tempo reale</p>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/20 px-6 py-3 rounded-2xl">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Totale Pendenti: {richieste.length}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {richieste.map((r) => (
            <div key={r.id} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] hover:bg-white/[0.04] transition-all">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-500">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{r.user_discord}</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{r.tipo_richiesta}</p>
                  </div>
                </div>
                <div className="text-right text-sm text-slate-400">
                  {new Date(r.created_at).toLocaleDateString()}
                </div>
              </div>
              <div className="mt-4 p-4 bg-black/20 rounded-xl text-slate-300 italic border border-white/5">
                "{r.messaggio}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}