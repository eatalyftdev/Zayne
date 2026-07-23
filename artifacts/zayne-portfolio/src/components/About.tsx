import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-accent-teal text-sm tracking-wider uppercase mb-4">About</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Four roles, one operating discipline.
            </h2>
            
            <div className="space-y-6 text-[1.1rem] leading-relaxed text-secondary-foreground">
              <p>
                Zayne is a Cameroonian tech founder and full-stack operator building the infrastructure layer for how people move, eat, and transact across Cameroon. As <strong className="text-foreground font-medium">founder of EataLyft</strong>, he leads a multi-service platform spanning rides, delivery, bus booking, e-commerce, hotels and handyman services — built around a unified role architecture spanning users, vendors, drivers, agents and admins.
              </p>
              <p>
                As <strong className="text-foreground font-medium">CTO at ZeeGo</strong>, he brings the same systems discipline to one of Cameroon's larger logistics platforms. At <strong className="text-foreground font-medium">Songtai Life International</strong>, he manages brand and social media, applying growth and positioning craft to a wellness network-marketing business. Through <strong className="text-foreground font-medium">AJ Tech Company Ltd</strong>, he builds African-first digital products end to end.
              </p>
              <p className="pt-2 border-t border-border mt-8 text-foreground">
                The thread across all four: proof over promises. Every claim traces back to a shipped system.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-panel border border-border p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent-amber/5 blur-3xl pointer-events-none"></div>
            
            <h3 className="font-display font-medium text-lg text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-amber rounded-full"></span>
              Working stack
            </h3>
            
            <ul className="space-y-4 font-mono text-sm">
              <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/50 pb-3">
                <span className="text-secondary-foreground">Frontend</span>
                <span className="text-foreground text-right">Next.js 15 · TypeScript</span>
              </li>
              <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/50 pb-3">
                <span className="text-secondary-foreground">Backend / Auth</span>
                <span className="text-foreground text-right">Firebase</span>
              </li>
              <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/50 pb-3">
                <span className="text-secondary-foreground">Data / Geo</span>
                <span className="text-foreground text-right">Supabase</span>
              </li>
              <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/50 pb-3">
                <span className="text-secondary-foreground">Messaging</span>
                <span className="text-foreground text-right">WhatsApp Cloud API</span>
              </li>
              <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/50 pb-3">
                <span className="text-secondary-foreground">Styling</span>
                <span className="text-foreground text-right">Tailwind CSS</span>
              </li>
              <li className="grid grid-cols-[100px_1fr] items-start">
                <span className="text-secondary-foreground">Deploy</span>
                <span className="text-foreground text-right">Vercel · Docker-less Replit</span>
              </li>
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
