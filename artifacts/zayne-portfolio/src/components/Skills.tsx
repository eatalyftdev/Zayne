import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const skillCategories = [
  {
    label: "Product & Architecture",
    items: [
      "Platform architecture",
      "Role-based access design",
      "API design",
      "System integration",
      "Product roadmapping",
      "Mobile-first UX"
    ]
  },
  {
    label: "Engineering",
    items: [
      "Next.js 15 & TypeScript",
      "Firebase & Supabase",
      "WhatsApp Cloud API",
      "Tailwind CSS",
      "Drizzle ORM & PostgreSQL",
      "React Native"
    ]
  },
  {
    label: "Brand & Growth",
    items: [
      "Brand strategy",
      "Social media management",
      "Recruitment campaigns",
      "Network marketing",
      "Content systems"
    ]
  }
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 z-10 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">Capability</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What sits under one roof.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm"
            >
              <div className="font-mono text-xs text-accent-green font-medium uppercase tracking-widest mb-6">
                {cat.label}
              </div>
              <ul className="flex flex-col">
                {cat.items.map((item) => (
                  <li 
                    key={item}
                    className="py-3 border-b border-border/40 text-foreground font-medium flex items-center gap-3 last:border-0 last:pb-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-border shrink-0"></span>
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
