import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PaymentMethod } from '../types';

interface PaymentCardProps {
  method: PaymentMethod;
  onClick: (method: PaymentMethod) => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ method, onClick }) => {
  return (
    <button 
      onClick={() => onClick(method)}
      className="group relative flex flex-col items-center justify-center gap-4 w-full overflow-hidden rounded-2xl border border-neon-cyan/10 bg-dark-800/40 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:bg-dark-700/60 hover:shadow-[0_15px_30px_-5px_rgba(100,255,218,0.2)] active:scale-95 text-center cursor-pointer perspective-1000 animate-glow-border"
    >
      {/* Dynamic Hover Background Gradient - Move In */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 via-neon-cyan/0 to-neon-cyan/0 opacity-0 transition-all duration-700 group-hover:from-neon-cyan/5 group-hover:to-neon-blue/10 group-hover:opacity-100 transform scale-150 group-hover:scale-100" />
      
      {/* Icon - Hover Rubber Band effect + float for aesthetics */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-white/95 p-2 shadow-lg transition-all duration-500 ease-in-out group-hover:animate-rubber-band group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-float">
        <img 
          src={method.iconUrl} 
          alt={method.name} 
          className="h-full w-full object-contain"
          onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=PAY";
          }}
        />
      </div>

      {/* Name - Slide Up effect on hover */}
      <div className="relative z-10 flex items-center justify-center gap-2 transform transition-all duration-300 group-hover:translate-x-1">
        <h3 className="text-xl font-bold text-white tracking-wide transition-colors group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)]">
          {method.name}
        </h3>
        <ChevronRight className="w-5 h-5 text-slate-500 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-neon-cyan animate-pulse" />
      </div>
    </button>
  );
};

export default PaymentCard;