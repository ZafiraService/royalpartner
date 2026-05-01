"use client";
import { LayoutDashboard, Check, X, ShieldAlert, FileText, Server } from 'lucide-react';

export default function GestioneDashboard() {
  return (
    <div className="min-h-screen bg-[#050508] text-white flex">
      <AdminSidebar active="gestione" />
      <main className="flex-1 p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-black uppercase italic">Master Control <span className="text-red-500">Gestione</span></h1>
          <p className="text-slate-500 text-sm">Accesso Totale: Accetta/Rifiuta ogni richiesta del sistema.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RequestBox title="Candidature Staff" icon={<ShieldAlert size={20}/>} />
          <RequestBox title="Richieste Creazione Server" icon={<Server size={20}/>} />
          <RequestBox title="Descrizioni Partnership" icon={<FileText size={20}/>} />
          <RequestBox title="Nuovi Partner" icon={<Check size={20}/>} />
        </div>
      </main>
    </div>
  );
}

function RequestBox({ title, icon }: any) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest text-slate-400">{icon} {title}</h3>
        <span className="bg-blue-600/20 text-blue-500 text-[10px] px-2 py-1 rounded-md">3 PENDENTI</span>
      </div>
      <div className="space-y-3">
        {[1, 2].map(i => (
          <div key={i} className="flex items-center justify-between bg-white/[0.02] p-4 rounded-xl border border-white/5">
            <span className="text-sm">Richiesta da: <strong>User#{i}99</strong></span>
            <div className="flex gap-2">
              <button className="p-2 bg-emerald-500/20 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition"><Check size={16}/></button>
              <button className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"><X size={16}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminSidebar({ active }: any) {
  return (
    <aside className="w-64 border-r border-white/5 p-6 bg-[#07070a]">
      <div className="text-blue-500 font-black mb-10 tracking-tighter">ROYAL ADMIN</div>
      <nav className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
        <div className="text-white bg-blue-600/10 p-3 rounded-xl border border-blue-500/20">Dashboard</div>
        <div className="hover:text-white cursor-pointer px-3">Statistiche</div>
        <div className="hover:text-white cursor-pointer px-3">Log Azioni</div>
      </nav>
    </aside>
  );
}