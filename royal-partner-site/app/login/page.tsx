"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // LOGICA 4 DASHBOARD
    if (email === 'gestione@support' && pass === 'gestioneserver') {
      window.location.href = "https://royalpartner/adminpanel.vercel.app/gestione"; 
    } else if (email === 'admin@support' && pass === 'adminserver') {
      window.location.href = "https://royalpartner/adminpanel.vercel.app/admin";
    } else if (email === 'moderazione@support' && pass === 'moderazioneserver') {
      window.location.href = "https://royalpartner/adminpanel.vercel.app/moderazione";
    } else if (email === 'partner@support' && pass === 'partnerserver') {
      window.location.href = "https://royalpartner/adminpanel.vercel.app/partner";
    } else {
      alert("Credenziali errate!");
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center p-6 text-white">
      <form onSubmit={handleLogin} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] w-full max-w-md backdrop-blur-xl">
        <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter">Staff Login</h2>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" onChange={(e)=>setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" onChange={(e)=>setPass(e.target.value)} required />
          <button className="w-full bg-blue-600 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-500 transition">ACCEDI AL PANNELLO</button>
        </div>
      </form>
    </div>
  );
}