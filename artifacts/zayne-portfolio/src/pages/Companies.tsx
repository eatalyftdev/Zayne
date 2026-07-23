import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BrowserMockup from '@/components/BrowserMockup';

const companies = [
  {
    role: "Founder",
    name: "EataLyft",
    desc: "Multi-service logistics platform handling rides, food and parcel delivery, bus booking, e-commerce, hotels, and handyman services.",
    bullets: [
      "Unified role architecture across 9+ user types",
      "Real-time driver dispatch and geo-tracking",
      "Seamless payment integrations for local markets"
    ]
  },
  {
    role: "CTO",
    name: "ZeeGo",
    desc: "Logistics platform engineering. Bringing systems architecture and technical leadership to scale delivery operations.",
    bullets: [
      "Systems architecture and technical roadmap",
      "Engineering team leadership and code quality",
      "High-availability infrastructure planning"
    ]
  },
  {
    role: "Brand & Social Media Manager",
    name: "Songtai Life International",
    desc: "Wellness network-marketing brand active across Cameroon. Focused on growth, positioning, and direct sales strategy.",
    bullets: [
      "Brand strategy & visual identity alignment",
      "Social growth and community engagement",
      "Recruitment campaigns across Cameroon"
    ]
  },
  {
    role: "Founder & CEO",
    name: "AJ Tech Company Ltd",
    desc: "The studio behind all of it. A dedicated space for building and shipping African-first digital products end to end.",
    bullets: [
      "Next.js, Firebase, and Supabase stack",
      "WhatsApp Cloud API integrations",
      "AI-assisted internal tooling and automations"
    ]
  }
];

export default function Companies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">Ventures</div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Where the work actually lives.
          </h1>
          <p className="text-xl text-secondary-foreground">
            Four ventures, four functions — product, engineering, brand, and studio — running under one judgment.
          </p>
        </motion.div>

        <div className="space-y-32">
          {companies.map((company, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={company.name} className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}>
                
                {/* Text Side */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={isEven ? 'order-2 md:order-1' : 'order-2'}
                >
                  <div className="font-mono text-xs text-accent-green font-medium uppercase tracking-widest mb-4">
                    {company.role}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {company.name}
                  </h2>
                  <p className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                    {company.desc}
                  </p>
                  
                  <ul className="space-y-4">
                    {company.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-foreground">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-green shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Mockup Side */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={isEven ? 'order-1 md:order-2' : 'order-1'}
                >
                  <BrowserMockup className="h-[400px] w-full border-gray-200" animateFloat={true}>
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-300 mb-2">{company.name}</div>
                        <div className="text-sm text-gray-400 font-mono uppercase tracking-widest">System UI</div>
                      </div>
                    </div>
                  </BrowserMockup>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
