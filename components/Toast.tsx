import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toast: ToastMessage | null;
}

const Toast: React.FC<ToastProps> = ({ toast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (toast) {
      setShouldRender(true);
      // Small delay to allow render before adding animation class
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      // Wait for exit animation to finish before removing from DOM
      const timer = setTimeout(() => setShouldRender(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!shouldRender) return null;

  return (
    <div className={`fixed top-6 right-6 z-[110] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border border-white/10 transition-all duration-300 
      ${isVisible ? 'animate-slide-in-right' : 'animate-slide-out-right'}
      ${
      toast?.type === 'success' 
        ? 'bg-emerald-900/80 text-emerald-100 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]' 
        : 'bg-red-900/80 text-red-100 border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]'
    }`}>
      {toast?.type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-emerald-400 animate-tada" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-400 animate-wobble" />
      )}
      <span className="font-medium tracking-wide">{toast?.message}</span>
    </div>
  );
};

export default Toast;