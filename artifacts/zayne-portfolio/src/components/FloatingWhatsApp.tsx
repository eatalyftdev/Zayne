import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const shouldReduceMotion = useReducedMotion();
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show && !shouldReduceMotion) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Zayne Tech, I'd like to discuss a project")}`;

  return (
    <AnimatePresence>
      {(show || shouldReduceMotion) && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors group"
          initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0, opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Chat with Zayne"
        >
          {/* Subtle pulse behind the button */}
          {!shouldReduceMotion && !isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
            />
          )}
          
          <div className="relative z-10 flex items-center h-12 md:h-14 px-3 md:px-4 overflow-hidden">
            <MessageCircle className="w-6 h-6 shrink-0" />
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  className="whitespace-nowrap font-medium text-sm md:text-base"
                >
                  Chat on WhatsApp
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
