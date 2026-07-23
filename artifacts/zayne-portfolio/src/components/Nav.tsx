import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/companies', label: 'Companies' },
    { href: '/work', label: 'Work' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline group">
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
        
        <div className="md:hidden">
          <Link href="/contact" className="text-sm font-medium text-accent-green bg-accent-green/10 px-4 py-2 rounded-full">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
