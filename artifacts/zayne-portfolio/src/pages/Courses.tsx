import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

export default function Courses() {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      setTimeout(() => setJoined(false), 5000);
      setEmail('');
    }
  };

  const courses = [
    {
      title: "Building Multi-Service Platforms",
      desc: "Learn to architect and ship complex multi-service apps: role-based systems, unified auth, real-time dispatch. Based on the EataLyft build.",
      duration: "~6 weeks",
      level: "Intermediate",
      status: "Coming Soon"
    },
    {
      title: "WhatsApp Cloud API Masterclass",
      desc: "Complete integration guide: Meta Graph API v23.0, webhooks, message templates, order flows, and conversational commerce.",
      duration: "~3 weeks",
      level: "All levels",
      status: "Coming Soon"
    },
    {
      title: "Next.js + Firebase Production Stack",
      desc: "Production-grade Next.js 15 apps with Firebase auth, Supabase database, Drizzle ORM, and Vercel deployment.",
      duration: "~4 weeks",
      level: "Intermediate",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="flex flex-col pt-32 pb-24 min-h-screen bg-background">
      
      {/* Hero */}
      <section className="pb-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-accent-green/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="font-mono text-accent-green text-sm tracking-wider uppercase mb-6 flex items-center gap-3">
              <BookOpen className="w-4 h-4" /> Education
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Learn to build for Africa.
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-foreground leading-relaxed">
              Practical courses from someone who actually ships — not theory, but real systems built for African market realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground">What's coming</h2>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {courses.map((course, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className="bg-background border border-border p-8 rounded-3xl flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-mono font-medium uppercase tracking-widest">
                    {course.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{course.title}</h3>
                <p className="text-secondary-foreground leading-relaxed mb-8 flex-grow">{course.desc}</p>
                
                <div className="flex items-center gap-6 pt-6 border-t border-border/60 text-sm font-mono text-secondary-foreground">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 uppercase tracking-widest text-[10px]">Duration</span>
                    <span className="text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 uppercase tracking-widest text-[10px]">Level</span>
                    <span className="text-foreground">{course.level}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-border rounded-3xl p-10 md:p-16 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Be first to know</h2>
            <p className="text-secondary-foreground mb-8 text-lg">
              Get notified the moment a course opens. Limited early-access pricing for the waitlist.
            </p>
            
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow h-14 px-6 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all"
              />
              <button 
                type="submit"
                className="h-14 px-8 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
              >
                {joined ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-accent-green" /> Joined
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
            {joined && (
              <p className="text-accent-green text-sm mt-4 font-medium animate-in fade-in">
                You're on the list! Keep an eye on your inbox.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why learn from Zayne */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Why learn here?</h2>
              
              <ul className="space-y-6">
                {[
                  { title: "Built real platforms, not demos", desc: "Every lesson comes from production experience, not abstract documentation." },
                  { title: "African market context built in", desc: "Learn to handle poor connectivity, diverse payment systems, and local user behavior." },
                  { title: "From architecture to deployment", desc: "Full-stack focus. We don't just build the UI, we wire the whole system." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent-green/10 text-accent-green flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-secondary-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-background rounded-2xl p-10 border border-border flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-white border border-border rounded-full flex items-center justify-center mb-6 text-2xl shadow-sm">
                💬
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Have a specific topic you want covered?</h3>
              <p className="text-secondary-foreground mb-8">I shape the curriculum around what builders actually need.</p>
              <Link href="/contact" className="text-accent-green font-medium flex items-center gap-2 hover:opacity-80 transition-opacity">
                Tell me what to teach <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
