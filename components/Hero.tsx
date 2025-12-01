import React from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden">
      
      {/* Ambient Background Blobs (Infinite Animation) */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-neon-cyan/10 blur-[100px] animate-blob-bounce mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-neon-blue/10 blur-[120px] animate-blob-bounce mix-blend-screen animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-neon-purple/5 blur-[100px] animate-pulse-slow pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center z-10 perspective-500">
        
        <RevealOnScroll animation="animate-fade-in-down" className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 text-sm font-medium text-neon-cyan backdrop-blur-sm mb-6 animate-float shadow-[0_0_15px_rgba(100,255,218,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan"></span>
            </span>
            System Operational & Ready
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="animate-zoom-in" delay={200}>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:leading-tight animate-tracking-in-expand drop-shadow-2xl">
            Secure Payments for <br />
            <span className="relative inline-block mt-2">
                {/* Reduced opacity and blur for less glare */}
                <span className="absolute -inset-1 blur-md bg-gradient-to-r from-neon-cyan to-neon-blue opacity-20 animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue drop-shadow-md">
                Digital Assets
                </span>
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll animation="animate-light-speed-in-right" delay={400}>
          <div className="mt-8 flex justify-center w-full">
             <div className="relative w-fit mx-auto overflow-hidden border-r-2 border-neon-cyan whitespace-nowrap animate-typewriter text-lg md:text-xl text-slate-300 font-mono tracking-wide px-4 py-1 bg-dark-800/30 rounded-lg backdrop-blur-md">
                Fast. Encrypted. No Reference Needed.
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="animate-fade-in-up" delay={600}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a 
              href="#payment-section"
              onClick={(e) => scrollToSection(e, '#payment-section')}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-neon-cyan px-10 py-4 text-lg font-bold text-dark-900 transition-all hover:shadow-[0_0_40px_rgba(100,255,218,0.6)] active:scale-95 animate-float-delayed cursor-pointer"
            >
              <span className="relative z-10">Start Transaction</span>
              <ChevronRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-0 translate-y-[100%] bg-white transition-transform duration-300 group-hover:translate-y-[0%]" />
            </a>
            
            <a 
              href="#features"
              onClick={(e) => scrollToSection(e, '#features')}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 hover:animate-pulse cursor-pointer"
            >
              Learn More
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </RevealOnScroll>
      </div>

      {/* Decorative gradient blur at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;