import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import BrowserMockup from '@/components/BrowserMockup';

export interface CompanyLayoutProps {
  name: string;
  tagline: string;
  role: string;
  description: string;
  facts: { label: string; value: string }[];
  features: { title: string; desc: string }[];
  builtBullets: string[];
  mockupAccent: string; // e.g., 'bg-green-500'
  mockupTextAccent: string; // e.g., 'text-green-500'
  websiteUrl?: string;
}

export default function CompanyLayout({
  name,
  tagline,
  role,
  description,
  facts,
  features,
  builtBullets,
  mockupAccent,
  mockupTextAccent,
  websiteUrl = "#"
}: CompanyLayoutProps) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col pt-32 pb-24 min-h-screen bg-background">
      
      {/* Hero */}
      <section className="pb-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link href="/companies" className="inline-flex items-center text-secondary-foreground hover:text-foreground font-medium text-sm mb-12 transition-colors gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to companies
          </Link>

          <motion.div
            variants={container}
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={item} className="font-mono text-accent-green text-sm tracking-wider uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-green rounded-full"></span>
              {role}
            </motion.div>
            
            <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              {name}
            </motion.h1>
            
            <motion.p variants={item} className="text-2xl md:text-3xl text-secondary-foreground mb-12 font-display">
              {tagline}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a 
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-full shadow-md gap-2"
              >
                Visit website <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16 items-start">
            
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Overview</h2>
              <div className="prose prose-lg prose-gray max-w-none text-secondary-foreground leading-relaxed">
                <p>{description}</p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-background border border-border rounded-2xl p-8 shadow-sm"
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-accent-green mb-6">Key Facts</h3>
              <ul className="space-y-4">
                {facts.map((fact, i) => (
                  <li key={i} className="flex justify-between items-start border-b border-border/60 pb-3 last:border-0 last:pb-0">
                    <span className="text-secondary-foreground font-medium">{fact.label}</span>
                    <span className="text-foreground text-right">{fact.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          {features.map((feat, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}>
                
                {/* Text Side */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={isEven ? 'order-2 md:order-1' : 'order-2'}
                >
                  <div className="font-mono text-xs text-accent-green font-medium uppercase tracking-widest mb-4">
                    Feature {i + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">{feat.title}</h3>
                  <p className="text-lg text-secondary-foreground leading-relaxed">{feat.desc}</p>
                </motion.div>

                {/* Mockup Side */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? 30 : -30, rotateY: 3 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={isEven ? 'order-1 md:order-2 perspective-1000' : 'order-1 perspective-1000'}
                >
                  <BrowserMockup className="h-[350px] w-full border-gray-200 shadow-xl" animateFloat={true}>
                    <div className="absolute inset-0 bg-white flex flex-col p-6">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                        <div className={`text-sm font-bold ${mockupTextAccent}`}>System module</div>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 rounded-xl bg-gray-50 flex items-center justify-center relative overflow-hidden border border-gray-100">
                        <div className={`w-32 h-32 ${mockupAccent} rounded-full blur-[80px] absolute opacity-20`}></div>
                        
                        <div className="space-y-4 w-2/3 relative z-10">
                          <div className={`h-4 ${mockupAccent} rounded w-1/3 opacity-80`}></div>
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  </BrowserMockup>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </section>

      {/* What I built */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What I built</h2>
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-sm">
              <ul className="space-y-6">
                {builtBullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent-green shrink-0 shadow-[0_0_8px_rgba(22,163,74,0.6)]" />
                    <span className="text-lg text-foreground leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Have a similar project?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 font-medium bg-accent-green text-white hover:bg-accent-green/90 transition-colors duration-300 rounded-full shadow-lg gap-2 text-lg">
            Let's talk <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
