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
import { AntigravityParticles } from './components/3d/AntigravityParticles';
import { Prism } from './components/3d/Prism';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger to ensure all positions are calculated correctly
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-x-hidden">
        {/* Fixed 3D Background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <AntigravityParticles />
          </Canvas>
        </div>

        {/* Floating Prism Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
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
        </div>
      </div>
    </ReactLenis>
  );
}
