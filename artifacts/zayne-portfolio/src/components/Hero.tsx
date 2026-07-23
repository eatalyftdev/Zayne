import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 border border-border bg-panel px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-amber"></span>
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wider text-secondary-foreground uppercase">
              FOUNDER · CM-BDA · ACTIVE
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.05] font-semibold text-foreground mb-6 max-w-[900px]">
            Building the infrastructure <br />
            <span className="text-accent-teal">Cameroon runs on.</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl text-secondary-foreground mb-12 max-w-[700px] leading-relaxed">
            Founder-led logistics, mobility and commerce systems — architected, shipped, and grown across four companies, not delegated to a deck.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a 
              href="#companies" 
              className="inline-flex items-center justify-center h-12 px-6 font-medium bg-accent-amber text-[#0A0F1A] hover:bg-white transition-colors duration-300 gap-2"
            >
              See the companies <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#work" 
              className="inline-flex items-center justify-center h-12 px-6 font-medium border border-border text-foreground hover:bg-panel transition-colors duration-300"
            >
              Selected work
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* 2D Background decorative path */}
      <div className="absolute right-0 bottom-10 w-1/2 h-full pointer-events-none opacity-30 z-0 hidden md:block">
        <svg viewBox="0 0 400 400" className="w-full h-full text-accent-teal" fill="none">
          <motion.path 
            d="M 50 350 L 150 250 L 250 280 L 350 100" 
            stroke="currentColor" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <circle cx="50" cy="350" r="4" fill="currentColor" />
          <circle cx="150" cy="250" r="4" fill="currentColor" />
          <circle cx="250" cy="280" r="4" fill="currentColor" />
          <circle cx="350" cy="100" r="4" fill="#FF7A1A" />
        </svg>
      </div>
    </section>
  );
}
