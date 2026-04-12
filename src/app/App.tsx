import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Canvas } from '@react-three/fiber';
import { Prism } from './components/3d/Prism';
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { Toaster } from 'sonner';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function App() {
  useEffect(() => {
    // Normalize scroll for performance and sync across all devices
    ScrollTrigger.normalizeScroll(true);

    // Refresh ScrollTrigger to ensure all positions are calculated correctly
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
        {/* Floating Prism Background Layer - Optimized for all devices */}
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-0"
          style={{ animation: 'fadePrism 3s ease-in-out forwards' }}
        >
          <style>{`
            @keyframes fadePrism {
              from { opacity: 0; }
              to { opacity: 0.25; }
            }
          `}</style>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            dpr={[1, 1.5]} // Limit DPR further for performance stability
            performance={{ min: 0.5 }} // Automatic performance scaling
            gl={{
              antialias: false,
              powerPreference: "high-performance",
              alpha: true,
              stencil: false,
              depth: true,
              failIfMajorPerformanceCaveat: true
            }}
          >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <Prism />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
          <Footer />
          <Toaster position="bottom-right" expand={false} richColors />
        </div>
      </div>
    </ReactLenis>
  );
}
