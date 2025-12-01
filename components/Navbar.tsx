import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Payments', href: '#payment-section' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/90 backdrop-blur-lg border-b border-white/5 py-4 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group relative z-50 cursor-pointer"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-neon-cyan to-neon-blue text-dark-900 shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-transform group-hover:rotate-12">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Will <span className="text-neon-cyan">Official</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 relative z-50">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#payment-section"
              onClick={(e) => scrollToSection(e, '#payment-section')}
              className="cursor-pointer rounded-full bg-white/5 border border-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neon-cyan hover:text-dark-900 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] active:scale-95"
            >
              Pay Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-neon-cyan relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-white/10 bg-dark-900/95 backdrop-blur-xl p-4 shadow-2xl md:hidden animate-slide-in-right z-40">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-neon-cyan cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a 
                  href="#payment-section"
                  onClick={(e) => scrollToSection(e, '#payment-section')}
                  className="block text-center rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 px-4 py-3 text-base font-bold text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all cursor-pointer"
                >
                  Pay Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;