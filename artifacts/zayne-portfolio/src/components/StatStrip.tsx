import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "4", label: "Companies led" },
  { value: "9+", label: "Role types architected" },
  { value: "1", label: "Unified UID system" },
  { value: "CM", label: "Home base — Cameroon" }
];

export default function StatStrip() {
  return (
    <section className="relative z-10 border-y border-border bg-panel/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-8 md:p-10 flex flex-col justify-center border-border ${i !== 0 ? 'border-l' : ''} ${i === 1 ? 'max-md:border-l-0 max-md:border-t' : ''} ${i === 2 || i === 3 ? 'max-md:border-t' : ''}`}
            >
              <div className="font-display font-bold text-3xl md:text-[1.9rem] text-foreground mb-2">
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
