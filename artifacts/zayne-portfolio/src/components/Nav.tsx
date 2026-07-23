import React from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1A]/85 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-amber"></span>
          </span>
          <span className="font-display font-semibold text-foreground tracking-wide group-hover:text-accent-amber transition-colors">
            Zayne
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="text-secondary-foreground hover:text-foreground transition-colors">About</a>
          <a href="#companies" className="text-secondary-foreground hover:text-foreground transition-colors">Companies</a>
          <a href="#work" className="text-secondary-foreground hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="text-secondary-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
