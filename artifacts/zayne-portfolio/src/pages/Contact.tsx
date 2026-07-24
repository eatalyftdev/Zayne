import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Zayne, I'd like to talk about...")}`;

  return (
    <div className="pt-32 pb-12 min-h-[100dvh] bg-[#0f1117] text-white flex flex-col relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 w-full py-12">
          <motion.div
            variants={container}
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={item} className="font-mono text-accent-green text-sm tracking-wider uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
              Direct Access
            </motion.div>
            
            <motion.h1 variants={item} className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Let's build something.
            </motion.h1>
            
            <motion.p variants={item} className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed max-w-2xl">
              Reach out directly — no form, no waiting, no friction.
            </motion.p>

            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {/* Email Card */}
              <a 
                href="mailto:hello@ajtechcompany.com"
                className="group flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-accent-green group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-2">Email</div>
                  <div className="text-xl font-bold text-white mb-4 break-all">hello@ajtechcompany.com</div>
                  <p className="text-gray-400 mt-auto text-sm leading-relaxed">
                    Best for project proposals, partnerships, and press.
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-2">WhatsApp</div>
                  <div className="text-xl font-bold text-white mb-4">+{WHATSAPP_NUMBER}</div>
                  <p className="text-gray-400 mt-auto text-sm leading-relaxed">
                    Best for quick conversations, urgent needs, and real-time questions.
                  </p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400 font-mono text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-green" />
                <span>Based in Bamenda, Cameroon</span>
              </div>
              <span className="hidden md:inline text-gray-600">·</span>
              <span>Available for remote collaboration globally</span>
              <span className="hidden md:inline text-gray-600">·</span>
              <span className="bg-white/10 px-2 py-1 rounded text-xs">4.1527° N, 15.4028° E</span>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 mt-auto pt-12">
        <footer className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Zayne
          </div>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            <a href="https://linkedin.com/in/zayne" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/eatalyftdev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
