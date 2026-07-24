import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/companies', label: 'Companies' },
    { href: '/work', label: 'Work' },
    { href: '/hire', label: 'Hire Me' },
    { href: '/courses', label: 'Courses' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3' : 'bg-transparent border-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline group relative z-50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green"></span>
            </span>
            <span className="font-display font-bold text-lg text-foreground tracking-wide group-hover:text-accent-green transition-colors">
              Zayne
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={`transition-colors ${location === link.href ? 'text-accent-green' : 'text-secondary-foreground hover:text-foreground'}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="h-9 px-5 inline-flex items-center justify-center rounded-full bg-accent-green text-white font-medium hover:bg-accent-green/90 transition-colors shadow-sm">
              Let's talk
            </Link>
          </div>
          
          <div className="md:hidden relative z-50 flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium text-accent-green bg-accent-green/10 px-4 py-2 rounded-full">
              Contact
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-1 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-2xl font-display font-semibold mb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className={`block ${location === link.href ? 'text-accent-green' : 'text-foreground'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-12"
            >
              <div className="h-px w-full bg-border mb-8"></div>
              <p className="text-sm text-secondary-foreground mb-4">Ready to build something?</p>
              <Link href="/contact" className="flex items-center justify-center w-full h-14 rounded-xl bg-accent-green text-white font-medium text-lg shadow-md">
                Start a conversation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
