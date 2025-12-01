import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Success Rate', value: '99.9%' },
    { label: 'Processing Time', value: '< 1 Min' },
    { label: 'Support', value: '24/7' },
  ];

  return (
    <div className="relative z-20 -mt-10">
      <div className="container mx-auto px-4">
        <RevealOnScroll animation="animate-zoom-in" delay={800}>
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/5 bg-dark-800/40 p-8 shadow-2xl backdrop-blur-xl md:grid-cols-4 lg:divide-x lg:divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-2 text-center">
                <span className="text-3xl font-extrabold text-white md:text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Stats;