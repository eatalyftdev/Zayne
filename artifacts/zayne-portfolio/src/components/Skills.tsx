import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: "Product & Architecture",
    items: [
      "Multi-role platform design",
      "Systems & data architecture",
      "Product strategy",
      "UID / entity design"
    ]
  },
  {
    label: "Engineering",
    items: [
      "Next.js 15 · TypeScript",
      "Firebase · Supabase",
      "API & webhook integration",
      "Cloud deployment"
    ]
  },
  {
    label: "Brand & Growth",
    items: [
      "Brand strategy & positioning",
      "Social & recruitment campaigns",
      "Content systems",
      "Market-specific growth"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 z-10 bg-panel border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="font-mono text-accent-teal text-sm tracking-wider uppercase mb-4">Capability</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            What sits under one roof.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="font-mono text-xs text-accent-amber uppercase tracking-widest mb-6">
                {cat.label}
              </div>
              <ul className="flex flex-col">
                {cat.items.map((item, j) => (
                  <li 
                    key={item}
                    className="py-4 border-b border-border/50 text-foreground font-medium flex items-center gap-3"
                  >
                    <span className="text-secondary-foreground/30 font-mono text-xs select-none">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
