import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import { TERMS } from '../constants';

const TermsSection: React.FC = () => {
  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-neon-cyan/20 bg-dark-800/60 p-6 md:p-8 backdrop-blur-md">
      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-neon-cyan/10 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          <ShieldCheck className="w-6 h-6 text-neon-cyan" />
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">Syarat & Ketentuan</h2>
        </div>

        <ul className="space-y-4">
          {TERMS.map((term, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-cyan/10 text-xs font-bold text-neon-cyan">
                {index + 1}
              </span>
              <p className="text-sm md:text-base leading-relaxed">{term}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-4 text-yellow-200/90">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <p className="text-xs md:text-sm font-medium">Harap periksa kembali nominal transfer sebelum mengirim.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;