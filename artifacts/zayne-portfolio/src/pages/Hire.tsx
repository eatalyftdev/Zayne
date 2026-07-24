import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Code2, Database, LayoutTemplate, Briefcase, Smartphone, Settings } from 'lucide-react';
import { Link } from 'wouter';

export default function Hire() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const services = [
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Platform Architecture",
      desc: "Design and build multi-service platforms, role-based systems, and unified backends from scratch."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile & Web Apps",
      desc: "Full-stack Next.js and React Native applications, from MVP to production."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "API Integrations",
      desc: "WhatsApp Cloud API, Firebase, Supabase, payment gateways, and third-party service connections."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Brand & Digital Strategy",
      desc: "Brand positioning, social media systems, and digital growth for African market businesses."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Technical Consulting",
      desc: "Architecture review, team workflows, code quality, and engineering process improvement."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "AI-Assisted Tooling",
      desc: "Custom internal tools, automations, and AI-assisted workflows for operational efficiency."
    }
  ];

  return (
    <div className="flex flex-col pt-32 pb-24 min-h-screen bg-background">
      
      {/* Hero */}
      <section className="pb-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-green/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent-green rounded-full"></span>
              Client Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Need something built?
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-foreground leading-relaxed">
              AJ Tech Company Ltd takes selected client projects — logistics platforms, mobile apps, API integrations, brand systems. High-quality work, African-market expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground">Capabilities</h2>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((svc, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className="bg-background border border-border p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-accent-green/10 text-accent-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{svc.title}</h3>
                <p className="text-secondary-foreground leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">How it works</h2>
            <p className="text-lg text-secondary-foreground">A straightforward process optimized for momentum.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-border z-0"></div>
            
            {[
              { step: "01", title: "Reach out", desc: "Send a message via email or WhatsApp describing what you need." },
              { step: "02", title: "Scoping call", desc: "Quick call to understand the project, timeline, and fit." },
              { step: "03", title: "We build it", desc: "Hands-on execution from architecture through launch." }
            ].map((step, i) => (
              <motion.div key={i} variants={item} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border border-border rounded-full flex items-center justify-center mb-6 shadow-sm font-display font-bold text-2xl text-accent-green">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-secondary-foreground px-4">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground">Who this is for</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-border rounded-2xl bg-gray-50/50">
                <div className="font-bold text-foreground mb-2">Early-stage startups</div>
                <p className="text-secondary-foreground text-sm leading-relaxed">Who need a technical co-builder to architect and ship the MVP the right way.</p>
              </div>
              <div className="p-6 border border-border rounded-2xl bg-gray-50/50">
                <div className="font-bold text-foreground mb-2">Established businesses</div>
                <p className="text-secondary-foreground text-sm leading-relaxed">Expanding digitally and needing modern infrastructure to scale their operations.</p>
              </div>
              <div className="p-6 border border-border rounded-2xl bg-gray-50/50">
                <div className="font-bold text-foreground mb-2">International teams</div>
                <p className="text-secondary-foreground text-sm leading-relaxed">Needing local African market expertise to tailor their products to the region.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-foreground rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-accent-green/10 pointer-events-none"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Ready to start?</h2>
            <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 font-medium bg-accent-green text-white hover:bg-accent-green/90 transition-colors duration-300 rounded-full shadow-lg shadow-accent-green/20 gap-2 text-lg relative z-10">
              Let's talk <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
