import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative pt-32 bg-[#0A0F1A] z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <div className="font-mono text-accent-amber text-sm tracking-wider uppercase mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-accent-amber rounded-full animate-pulse"></span>
            Contact
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-[1.1]">
            Building something in logistics or mobility? Let's talk.
          </h2>
          
          <p className="text-xl text-secondary-foreground mb-12">
            Open to strategic partnerships, technical collaborators, and conversations about logistics and mobility infrastructure in Central & West Africa.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="mailto:hello@ajtechcompany.com" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-accent-amber text-[#0A0F1A] hover:bg-white transition-colors duration-300 gap-2 rounded-sm"
            >
              Email <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium border border-border text-foreground hover:bg-panel transition-colors duration-300 rounded-sm"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium border border-border text-foreground hover:bg-panel transition-colors duration-300 rounded-sm"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <footer className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-secondary-foreground uppercase tracking-widest">
            © 2026 Zayne · AJ Tech Company Ltd
          </div>
          <div className="font-mono text-xs text-secondary-foreground uppercase tracking-widest flex items-center gap-3">
            <span>BAMENDA, CM</span>
            <span className="w-1 h-1 bg-accent-teal rounded-full"></span>
            <span>05.9597° N, 10.1494° E</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
