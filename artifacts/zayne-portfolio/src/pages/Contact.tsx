import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-32 pb-12 min-h-[100dvh] bg-foreground text-background flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-24"
          >
            <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
              Contact
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Building something in logistics or mobility? Let's talk.
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Open to strategic partnerships, technical collaborators, and conversations about logistics and mobility infrastructure in Central & West Africa.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="mailto:hello@ajtechcompany.com" 
                className="inline-flex items-center justify-center h-14 px-8 font-medium bg-accent-green text-white hover:bg-accent-green/90 transition-colors duration-300 gap-2 rounded-full shadow-lg shadow-accent-green/20"
              >
                Email me <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/zayne" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 font-medium border border-gray-700 text-white hover:bg-gray-800 transition-colors duration-300 rounded-full"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/eatalyftdev" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 font-medium border border-gray-700 text-white hover:bg-gray-800 transition-colors duration-300 rounded-full"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full mt-auto">
        <footer className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Zayne · AJ Tech Company Ltd
          </div>
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest flex items-center gap-3">
            <MapPin className="w-3.5 h-3.5 text-accent-green" />
            <span>BAMENDA, CM</span>
            <span className="w-1 h-1 bg-accent-green rounded-full"></span>
            <span>4.1527° N, 15.4028° E</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
