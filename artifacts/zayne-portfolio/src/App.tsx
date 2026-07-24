import { Switch, Route, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import Nav from '@/components/Nav';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Companies from '@/pages/Companies';
import Work from '@/pages/Work';
import Contact from '@/pages/Contact';

// New routes
import Hire from '@/pages/Hire';
import Courses from '@/pages/Courses';
import EataLyft from '@/pages/EataLyft';
import ZeeGo from '@/pages/ZeeGo';
import SongtaiLife from '@/pages/SongtaiLife';
import AJTech from '@/pages/AJTech';

// Global components
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  const [location] = useLocation();

  return (
    <TooltipProvider>
      <div className="relative w-full min-h-screen text-foreground selection:bg-accent-green selection:text-white bg-background flex flex-col">
        <Nav />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex-grow flex flex-col"
          >
            <Switch location={location}>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/companies" component={Companies} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              
              {/* New Routes */}
              <Route path="/hire" component={Hire} />
              <Route path="/courses" component={Courses} />
              <Route path="/companies/eatalyft" component={EataLyft} />
              <Route path="/companies/zeego" component={ZeeGo} />
              <Route path="/companies/songtai-life" component={SongtaiLife} />
              <Route path="/companies/aj-tech" component={AJTech} />
              
              {/* Fallback to Home if route not found */}
              <Route component={Home} />
            </Switch>
          </motion.div>
        </AnimatePresence>

        <FloatingWhatsApp />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
