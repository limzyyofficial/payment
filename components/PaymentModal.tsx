import React from 'react';
import { Copy, CheckCircle, Download, X } from 'lucide-react';
import { PaymentMethod } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  method: PaymentMethod | null;
  onCopy: (text: string) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, method, onCopy }) => {
  if (!isOpen || !method) return null;

  const isQris = method.isQris;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop - Blur In */}
      <div 
        className="absolute inset-0 bg-dark-900/80 backdrop-blur-md transition-opacity animate-fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content - Bounce In */}
      <div className="relative z-10 w-full max-w-md transform overflow-hidden rounded-2xl border border-neon-cyan/20 bg-dark-800/90 p-6 shadow-2xl backdrop-blur-xl animate-bounce-in">
        
        {/* Header - Slide Down */}
        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 animate-fade-in-down" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-lg bg-white/95 p-1 shadow-[0_0_15px_rgba(255,255,255,0.2)] group hover:animate-flip-in-x">
              <img 
                src={method.iconUrl} 
                alt={method.name} 
                className="h-full w-full object-contain"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=PAY"; }}
              />
            </div>
            <h3 className="text-xl font-bold text-white">{method.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-all hover:rotate-90 duration-300 hover:animate-jello"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        {isQris ? (
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white p-3 transform transition-transform hover:scale-105 duration-300">
               <img 
                  src={method.iconUrl} 
                  alt="QRIS Code" 
                  className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-center text-sm text-slate-400">Scan QR code using your preferred payment app</p>
            <div className="flex justify-center">
              <a 
                href={method.iconUrl} 
                download={`QRIS_${method.name}.png`}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-3 text-sm font-semibold text-neon-cyan transition-all hover:bg-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-lg hover:shadow-neon-cyan/10 hover:-translate-y-1 hover:animate-pulse"
              >
                <Download className="w-4 h-4" />
                Download QR Image
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="rounded-xl bg-dark-900/50 p-6 text-center border border-white/5 hover:border-neon-cyan/30 transition-colors duration-500 hover:animate-pulse-slow">
              <p className="text-sm text-slate-400 mb-2">Account Number</p>
              <p className="font-mono text-2xl font-bold text-neon-cyan tracking-wider break-all mb-4 drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]">
                {method.accountNumber}
              </p>
              {method.accountName && (
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <p className="text-sm text-slate-300 font-medium">
                    A/N {method.accountName}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-2">
               <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 uppercase tracking-wider animate-pulse">
                 <CheckCircle className="w-3 h-3" /> System Ready
               </span>
            </div>

            <button
              onClick={() => onCopy(method.accountNumber)}
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-neon-cyan/20 bg-neon-cyan px-4 py-3 text-sm font-bold text-dark-900 uppercase tracking-widest transition-all hover:bg-neon-cyan/90 hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-1 hover:animate-tada"
            >
              <Copy className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              Copy Number
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;