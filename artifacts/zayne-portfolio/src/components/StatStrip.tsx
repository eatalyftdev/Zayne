import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { value: "4", label: "Companies led" },
  { value: "9+", label: "Role types architected" },
  { value: "1", label: "Unified UID system" },
  { value: "CM", label: "Home base — Cameroon" }
];

export default function StatStrip() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="relative z-10 border-y border-border bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-8 md:p-10 flex flex-col justify-center border-border ${i !== 0 ? 'md:border-l' : ''} ${i % 2 !== 0 ? 'border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
            >
              <div className="font-display font-bold text-3xl md:text-[2rem] text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-secondary-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
