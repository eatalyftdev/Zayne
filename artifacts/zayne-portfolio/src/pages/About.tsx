import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Skills from '@/components/Skills';

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const [photoExists, setPhotoExists] = useState(true);

  const handleImageError = () => {
    setPhotoExists(false);
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col">
      {/* Hero section of About */}
      <section className="pt-32 pb-24 border-b border-border bg-background overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-green/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-center relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="show" className="order-2 md:order-1">
            <motion.div variants={item} className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">About</motion.div>
            <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Zayne
            </motion.h1>
            <motion.p variants={item} className="text-xl text-secondary-foreground font-medium mb-6">
              Founder · EataLyft · AJ Tech Company Ltd
            </motion.p>
            <motion.p variants={item} className="text-2xl text-foreground mb-8">
              "Building the infrastructure Cameroon runs on."
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 w-full max-w-[300px] mx-auto"
          >
            <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-lg border border-border bg-white flex items-center justify-center">
              {photoExists ? (
                <img 
                  src="/professional-photo.png" 
                  alt="Zayne" 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-gray-300 blur-xl opacity-40"></div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio & Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16 items-start">
            
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Four roles, one operating discipline.
              </h2>
              
              <div className="space-y-6 text-[1.1rem] leading-relaxed text-secondary-foreground">
                <p>
                  Wilton . A. NDANGA (Zayne) is a Cameroonian tech founder and full-stack operator building the infrastructure layer for how people move, eat, and transact across Cameroon. As <strong className="text-foreground font-semibold">founder of EataLyft</strong>, he leads a multi-service platform spanning rides, food and parcel delivery, bus booking, e-commerce, hotels, and handyman services — architected around a unified role-based system spanning users, vendors, drivers, agents, and admins.
                </p>
                <p>
                  As <strong className="text-foreground font-semibold">CTO at ZeeGo</strong>, he brings that same systems discipline to one of Cameroon's larger logistics platforms. At <strong className="text-foreground font-semibold">Songtai Life International</strong>, he manages brand and social media. Through <strong className="text-foreground font-semibold">AJ Tech Company Ltd</strong>, he builds and ships African-first digital products end to end — from Firebase and Next.js architecture to WhatsApp Cloud API integrations.
                </p>
                <p className="pt-6 border-t border-border mt-8 text-foreground font-medium">
                  The thread across all four: proof over promises. Every claim traces back to a shipped system.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/10 blur-3xl pointer-events-none"></div>
              
              <h3 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                Working stack
              </h3>
              
              <ul className="space-y-4 font-mono text-sm">
                <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/60 pb-3">
                  <span className="text-secondary-foreground">Frontend</span>
                  <span className="text-foreground text-right font-medium">Next.js 15 · TypeScript</span>
                </li>
                <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/60 pb-3">
                  <span className="text-secondary-foreground">Backend</span>
                  <span className="text-foreground text-right font-medium">Firebase</span>
                </li>
                <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/60 pb-3">
                  <span className="text-secondary-foreground">Data/Geo</span>
                  <span className="text-foreground text-right font-medium">Supabase</span>
                </li>
                <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/60 pb-3">
                  <span className="text-secondary-foreground">Messaging</span>
                  <span className="text-foreground text-right font-medium">WhatsApp Cloud API</span>
                </li>
                <li className="grid grid-cols-[100px_1fr] items-start border-b border-border/60 pb-3">
                  <span className="text-secondary-foreground">Styling</span>
                  <span className="text-foreground text-right font-medium">Tailwind CSS</span>
                </li>
                <li className="grid grid-cols-[100px_1fr] items-start">
                  <span className="text-secondary-foreground">Deploy</span>
                  <span className="text-foreground text-right font-medium">Vercel · Replit</span>
                </li>
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      <Skills />
    </div>
  );
}
