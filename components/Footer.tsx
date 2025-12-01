import React from 'react';
import { Shield, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-dark-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-neon-cyan to-neon-blue text-dark-900">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-white">
                Will <span className="text-neon-cyan">Official</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed text-sm">
              Premium futuristic payment gateway solutions. Secure, fast, and reliable transactions for the digital era.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-neon-cyan transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-neon-cyan transition-colors">Features</a></li>
              <li><a href="#payment-section" className="hover:text-neon-cyan transition-colors">Payments</a></li>
              <li><a href="#support" className="hover:text-neon-cyan transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Dispute Resolution</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-neon-cyan hover:text-dark-900 transition-all hover:-translate-y-1">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-neon-blue hover:text-white transition-all hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-purple-500 hover:text-white transition-all hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Will Official. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Server Status: <span className="text-emerald-400">Online</span></span>
            <span>Version: 2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;