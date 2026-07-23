import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface BrowserMockupProps {
  children: React.ReactNode;
  className?: string;
  animateFloat?: boolean;
}

export default function BrowserMockup({ children, className = "", animateFloat = false }: BrowserMockupProps) {
  const shouldReduceMotion = useReducedMotion();
  const doAnimate = animateFloat && !shouldReduceMotion;

  return (
    <motion.div 
      className={`rounded-xl border border-border bg-white shadow-lg overflow-hidden flex flex-col ${className}`}
      animate={doAnimate ? { y: [0, -6, 0] } : {}}
      transition={doAnimate ? { repeat: Infinity, duration: 5, ease: "easeInOut" } : {}}
    >
      <div className="h-12 border-b border-border bg-gray-50/80 backdrop-blur-sm flex items-center px-4 gap-2 shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
      </div>
      <div className="flex-1 relative bg-gray-50 flex flex-col overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
