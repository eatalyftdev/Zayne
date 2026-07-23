import React from 'react';
import Hero from '@/components/Hero';
import StatStrip from '@/components/StatStrip';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col">
      <Hero />
      <StatStrip />
      
      {/* What I build */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">Focus Areas</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What I build
            </h2>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Logistics & Mobility", desc: "Multi-service platforms handling rides, delivery, and dispatch with real-time tracking." },
              { title: "Unified Systems", desc: "Role-based architectures that connect users, vendors, drivers, and admins under one roof." },
              { title: "Digital Commerce", desc: "E-commerce, booking engines, and conversational commerce via WhatsApp Cloud API." }
            ].map((feature, i) => (
              <motion.div key={i} variants={item} className="bg-background p-8 rounded-2xl border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center mb-6">
                  <div className="w-3.5 h-3.5 rounded-full bg-accent-green" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-secondary-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlight Case Study */}
      <section className="py-24 bg-background border-b border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">Highlight Log</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">WhatsApp Cloud API Integration</h2>
              <p className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                Replaced SMS entirely with Meta Graph API v23.0 for real-time order notifications, driver dispatch alerts, and customer support flows.
              </p>
              <Link href="/work" className="inline-flex items-center text-accent-green font-medium hover:text-accent-green/80 transition-colors gap-2">
                Read the dispatch log <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm"
            >
               <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl shrink-0">W</div>
                 <div>
                   <div className="font-bold text-foreground">Webhook active</div>
                   <div className="text-sm text-secondary-foreground">Processing templates...</div>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="h-10 bg-gray-50 rounded border border-border w-full"></div>
                 <div className="h-10 bg-gray-50 rounded border border-border w-5/6"></div>
                 <div className="h-10 bg-gray-50 rounded border border-border w-4/6"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Preview */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">Ventures</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Four companies, one operating discipline.</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
             {['EataLyft', 'ZeeGo', 'Songtai Life', 'AJ Tech Co'].map((c, i) => (
                <div key={i} className="py-8 px-4 rounded-xl border border-border bg-background flex flex-col items-center justify-center hover:border-accent-green transition-colors">
                  <span className="font-bold text-foreground text-lg">{c}</span>
                </div>
             ))}
          </div>

          <div className="flex justify-center">
            <Link href="/companies" className="inline-flex items-center justify-center h-12 px-8 font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors gap-2">
              Explore the companies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Currently Building */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-green/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">Currently Building</div>
              <h2 className="text-4xl font-bold mb-6 text-white">EataLyft</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A multi-service platform for Cameroon. Active development on the unified driver dispatch system and WhatsApp Cloud API integration for instant user bookings.
              </p>
              <Link href="/work" className="inline-flex items-center text-accent-green hover:text-white transition-colors gap-2 font-medium">
                View technical logs <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-[#1a1f2c] rounded-2xl p-8 border border-gray-800 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
                </span>
                <span className="font-mono text-sm text-gray-300">System Status: Active Deploy</span>
              </div>
              <div className="space-y-5 font-mono text-sm">
                <div className="flex flex-col gap-1 border-b border-gray-800 pb-3">
                  <span className="text-gray-500 uppercase tracking-widest text-xs">Current Phase</span>
                  <span className="text-white text-base">v2.0 Architecture</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-gray-800 pb-3">
                  <span className="text-gray-500 uppercase tracking-widest text-xs">Active Module</span>
                  <span className="text-white text-base">WhatsApp Dispatch Integration</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 uppercase tracking-widest text-xs">Last Commit</span>
                  <span className="text-accent-green text-base">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-accent-green text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to build something real?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 font-medium bg-white text-accent-green hover:bg-gray-50 transition-colors duration-300 rounded-full shadow-lg gap-2 text-lg">
            Let's talk <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
