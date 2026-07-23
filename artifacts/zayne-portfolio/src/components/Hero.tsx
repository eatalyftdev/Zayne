import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import NetworkBackground from './NetworkBackground';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      <NetworkBackground />
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 border border-border bg-white px-3 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wider text-secondary-foreground uppercase">
              FOUNDER · CM-BDA · ACTIVE
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold text-foreground mb-6 max-w-[900px] tracking-tight">
            Building the infrastructure <br />
            <span className="text-accent-green">Cameroon runs on.</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl text-secondary-foreground mb-12 max-w-[700px] leading-relaxed">
            Founder-led logistics, mobility and commerce systems — architected, shipped, and grown across four companies, not delegated to a deck.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Link 
              href="/companies" 
              className="inline-flex items-center justify-center h-14 px-8 font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors gap-2 text-lg shadow-md shadow-foreground/10"
            >
              See the companies <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center h-14 px-8 font-medium border border-border bg-white text-foreground hover:bg-gray-50 transition-colors rounded-full text-lg shadow-sm"
            >
              Selected work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
