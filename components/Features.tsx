import React from 'react';
import { Zap, ShieldCheck, Clock, Globe, Smartphone, Lock } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-neon-cyan" />,
      title: 'Instant Processing',
      desc: 'Transactions are processed automatically within seconds.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-neon-blue" />,
      title: 'Secure Gateway',
      desc: 'End-to-end encryption ensures your data remains private.',
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-400" />,
      title: '24/7 Availability',
      desc: 'Our automated systems work round the clock, anytime.',
    },
    {
      icon: <Globe className="h-6 w-6 text-emerald-400" />,
      title: 'Universal Access',
      desc: 'Accessible from any device, anywhere in the world.',
    },
    {
      icon: <Smartphone className="h-6 w-6 text-yellow-400" />,
      title: 'Mobile First',
      desc: 'Optimized interface for seamless mobile experience.',
    },
    {
      icon: <Lock className="h-6 w-6 text-red-400" />,
      title: 'Anti-Fraud',
      desc: 'Advanced detection systems to prevent unauthorized access.',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white md:text-5xl animate-blur-in">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Experience the next generation of digital payments with features designed for speed and security.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} animation="animate-fade-in-up" delay={index * 100}>
              <div className="group h-full rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10 hover:-translate-y-2 hover:animate-head-shake">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-dark-900 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:animate-swing">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;