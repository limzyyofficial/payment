import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, MessageCircle } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import PaymentCard from './components/PaymentCard';
import PaymentModal from './components/PaymentModal';
import TermsSection from './components/TermsSection';
import Toast from './components/Toast';
import RevealOnScroll from './components/RevealOnScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Footer from './components/Footer';
import { PAYMENT_METHODS, QRIS_DATA, CONTACT_INFO } from './constants';
import { ToastMessage, PaymentMethod } from './types';

function App() {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3'); 
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      showToast('Music Paused', 'success');
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      showToast('Music Playing', 'success');
    }
  };

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToast({ id, message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCopy = (text: string) => {
    const cleanText = text.replace(/-/g, "").replace(/\s/g, "");
    navigator.clipboard.writeText(cleanText)
      .then(() => showToast('Number copied successfully!', 'success'))
      .catch(() => showToast('Failed to copy', 'error'));
  };

  const handleCardClick = (method: PaymentMethod) => {
    setSelectedMethod(method);
  };

  const handleCloseModal = () => {
    setSelectedMethod(null);
  };

  return (
    <div className="relative min-h-screen w-full font-sans text-slate-200 antialiased selection:bg-neon-cyan/30 selection:text-white overflow-x-hidden">
      <ParticleBackground />
      <Toast toast={toast} />
      <Navbar />

      <PaymentModal 
        isOpen={!!selectedMethod}
        method={selectedMethod}
        onClose={handleCloseModal}
        onCopy={handleCopy}
      />

      {/* Main Content Sections */}
      <Hero />
      <Stats />
      <Features />

      {/* Payment Section */}
      <section id="payment-section" className="py-24 relative">
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          
          <RevealOnScroll animation="animate-fade-in-down" className="mb-16 text-center">
             <span className="text-neon-cyan font-bold tracking-wider uppercase text-sm mb-2 block">Select Provider</span>
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Payment Methods</h2>
             <p className="text-slate-400 max-w-xl mx-auto">Choose your preferred transaction method below. All payments are processed securely.</p>
          </RevealOnScroll>

          {/* Payment Grid */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 perspective-1000">
            {PAYMENT_METHODS.map((method, index) => (
              <RevealOnScroll key={method.id} animation="animate-fade-in-up" delay={index * 150}>
                   <PaymentCard method={method} onClick={handleCardClick} />
              </RevealOnScroll>
            ))}
            {/* QRIS Card */}
            <RevealOnScroll animation="animate-fade-in-up" delay={PAYMENT_METHODS.length * 150}>
              <PaymentCard method={QRIS_DATA} onClick={handleCardClick} />
            </RevealOnScroll>
          </div>

          {/* Terms Section */}
          <RevealOnScroll animation="animate-flip-in-x" delay={800}>
              <TermsSection />
          </RevealOnScroll>
        </div>
      </section>

      {/* Support / CTA Section */}
      <section id="support" className="py-20 relative">
         <div className="container mx-auto px-4">
            <RevealOnScroll animation="animate-zoom-in">
                <div className="rounded-3xl border border-neon-cyan/20 bg-gradient-to-br from-dark-800/90 to-dark-900/90 p-12 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(0,180,255,0.1)]">
                    <h2 className="text-3xl font-bold text-white mb-6">Need Assistance?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Our support team is available 24/7 to help you with any transaction issues or general inquiries.</p>
                    
                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <a 
                        href={CONTACT_INFO.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-full bg-neon-cyan px-8 py-4 font-bold text-dark-900 shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95"
                        >
                        <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
                        Chat Support
                        </a>

                        <button 
                        onClick={toggleMusic}
                        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
                        >
                        {isPlaying ? <Volume2 className="h-5 w-5 text-neon-cyan animate-pulse" /> : <VolumeX className="h-5 w-5 text-slate-400" />}
                        {isPlaying ? 'Mute Sound' : 'Play Sound'}
                        </button>
                    </div>
                </div>
            </RevealOnScroll>
         </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;