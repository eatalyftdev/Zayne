import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import NetworkBackground from '@/components/NetworkBackground';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatStrip from '@/components/StatStrip';
import About from '@/components/About';
import Companies from '@/components/Companies';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

function App() {
  return (
    <TooltipProvider>
      <div className="relative w-full min-h-screen text-foreground selection:bg-accent-teal selection:text-[#0A0F1A]">
        <NetworkBackground />
        
        <Nav />
        <Hero />
        <StatStrip />
        <About />
        <Companies />
        <Work />
        <Skills />
        <Contact />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
