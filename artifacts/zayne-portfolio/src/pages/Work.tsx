import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import BrowserMockup from '@/components/BrowserMockup';

const cases = [
  {
    uid: "EL-ARCH-0001",
    label: "Role architecture",
    title: "Role architecture across 9 user types",
    desc: "Designed and implemented a unified role-based system covering users, vendors, drivers, bus agents, hotel managers, admin, super-admin, handyman, and corporate clients. Single auth layer, per-role dashboards.",
    color: "bg-blue-50 text-blue-500",
    dot: "bg-blue-500"
  },
  {
    uid: "EL-COMM-0002",
    label: "Messaging integration",
    title: "WhatsApp Cloud API integration",
    desc: "Integrated Meta Graph API v23.0 for real-time order notifications, driver dispatch alerts, and customer support flows. Replaced SMS entirely, delivering rich transactional updates.",
    color: "bg-green-50 text-accent-green",
    dot: "bg-accent-green"
  },
  {
    uid: "EL-INFRA-0003",
    label: "Auth migration",
    title: "Firebase auth migration, Supabase geo retained",
    desc: "Migrated authentication from a legacy provider to Firebase while preserving Supabase for geolocation queries. Executed a zero-downtime, phased rollout for live users.",
    color: "bg-orange-50 text-orange-500",
    dot: "bg-orange-500"
  }
];

export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-3xl"
        >
          <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-4">Selected Work</div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Recent dispatch log.
          </h1>
          <p className="text-xl text-secondary-foreground">
            Real systems shipped, not case-study fiction.
          </p>
        </motion.div>

        <div className="space-y-32">
          {cases.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={item.uid} className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}>
                
                {/* Text Side */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={isEven ? 'order-2 md:order-1' : 'order-2'}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-secondary-foreground">
                      {item.uid}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-green font-medium">
                      {item.label}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {item.title}
                  </h2>
                  <p className="text-lg text-secondary-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>

                {/* Mockup Side */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={isEven ? 'order-1 md:order-2' : 'order-1'}
                >
                  <BrowserMockup className="h-[350px] w-full border-gray-200">
                    <div className="absolute inset-0 flex flex-col p-6 bg-white">
                      <div className="h-8 w-1/3 bg-gray-100 rounded mb-6"></div>
                      <div className="flex-1 rounded-md border border-gray-100 bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                         <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]"></div>
                         <div className="text-center w-full relative z-10">
                           <div className={`mx-auto w-16 h-16 rounded-full mb-4 flex items-center justify-center ${item.color}`}>
                             <div className={`w-4 h-4 rounded-full ${item.dot}`}></div>
                           </div>
                           <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-3"></div>
                           <div className="h-3 bg-gray-100 rounded w-3/4 mx-auto"></div>
                         </div>
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
