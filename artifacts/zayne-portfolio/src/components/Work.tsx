import React from 'react';
import { motion } from 'framer-motion';

const logs = [
  {
    uid: "EL-ARCH-0001",
    label: "Role architecture",
    title: "Unified role system across 9 user types",
    desc: "Designed and shipped EataLyft's role-based architecture spanning user, vendor, driver, agent, creator, handyman, dispatch, ledger and admin — with a custom UID format (EL-{PREFIX}-{YYYYMMDD}-{seq}) used consistently across every collection."
  },
  {
    uid: "EL-COMM-0002",
    label: "Messaging integration",
    title: "WhatsApp Cloud API integration, end to end",
    desc: "Built a complete WhatsApp Cloud API integration on Meta Graph API v23.0 — webhook handling, message templates across every service line, and an admin CRM inbox for support and operations."
  },
  {
    uid: "EL-INFRA-0003",
    label: "Auth migration",
    title: "Auth migrated to Firebase, geo retained on Supabase",
    desc: "Migrated authentication from Supabase to Firebase while deliberately retaining Supabase for geolocation and operational data — consolidating role-based portals under a single domain with role-prefixed routing."
  }
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-accent-teal text-sm tracking-wider uppercase mb-4">Selected work</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Recent dispatch log.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl">
            Real systems shipped, not case-study fiction.
          </p>
        </motion.div>

        <div className="border-t border-border">
          {logs.map((log, i) => (
            <motion.div
              key={log.uid}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-12 py-10 border-b border-border group hover:bg-panel/40 transition-colors px-4 -mx-4 md:px-6 md:-mx-6 rounded-lg"
            >
              <div className="flex flex-col gap-1 mt-1">
                <div className="font-mono text-sm text-accent-teal flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-teal/60 rounded-full group-hover:bg-accent-teal transition-colors"></span>
                  {log.uid}
                </div>
                <div className="font-mono text-xs text-secondary-foreground uppercase tracking-widest pl-3.5">
                  {log.label}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-medium text-foreground mb-3 group-hover:text-accent-amber transition-colors">
                  {log.title}
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  {log.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
