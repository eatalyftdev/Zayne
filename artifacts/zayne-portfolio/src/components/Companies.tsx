import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const companies = [
  {
    role: "Founder",
    name: "EataLyft",
    desc: "Multi-service logistics, delivery and mobility platform — rides, food and parcel delivery, bus booking, e-commerce, hotels, handyman services, and a WhatsApp/AI-driven creators hub. Based in Bamenda, Cameroon.",
    link: "eatalyft.cm",
    url: "https://eatalyft.cm"
  },
  {
    role: "CTO",
    name: "ZeeGo",
    desc: "Engineering leadership for one of Cameroon's larger logistics platforms — bringing the same architectural discipline built at EataLyft to a bigger operating surface.",
    link: "Get in touch",
    url: "#contact"
  },
  {
    role: "Brand & Social Media Manager",
    name: "Songtai Life International",
    desc: "Wellness network-marketing brand active across Cameroon. Brand strategy, growth campaigns, and recruitment content built for the Cameroon market specifically.",
    link: "Get in touch",
    url: "#contact"
  },
  {
    role: "Founder & CEO",
    name: "AJ Tech Company Ltd",
    desc: "The studio behind the build — where product architecture, brand, and growth systems get designed and shipped for African-first digital products.",
    link: "Get in touch",
    url: "#contact"
  }
];

export default function Companies() {
  return (
    <section id="companies" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-accent-teal text-sm tracking-wider uppercase mb-4">Companies</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Where the work actually lives.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl">
            Four ventures, four functions — product, engineering, brand, and studio — run under one judgment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border border border-border">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-panel p-8 md:p-12 flex flex-col h-full hover:bg-[#151d2d] transition-colors"
            >
              <div className="font-mono text-[11px] text-accent-amber uppercase tracking-wider mb-4">
                {company.role}
              </div>
              <h3 className="text-2xl font-display font-medium text-foreground mb-4">
                {company.name}
              </h3>
              <p className="text-secondary-foreground mb-8 flex-grow leading-relaxed">
                {company.desc}
              </p>
              <a 
                href={company.url} 
                className="font-mono text-sm text-foreground hover:text-accent-teal transition-colors flex items-center gap-2 w-fit underline underline-offset-4 decoration-border hover:decoration-accent-teal"
              >
                {company.link} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
