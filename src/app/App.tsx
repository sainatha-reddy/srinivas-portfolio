import React, { Suspense, lazy, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Canvas } from '@react-three/fiber';
import { AntigravityParticles } from './components/3d/AntigravityParticles';
import { Prism } from './components/3d/Prism';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy load components
const Hero = lazy(() => import('./components/Hero').then(module => ({ default: module.Hero })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Education = lazy(() => import('./components/Education').then(module => ({ default: module.Education })));
const Achievements = lazy(() => import('./components/Achievements').then(module => ({ default: module.Achievements })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

const LoadingSection = () => (
  <div className="h-screen flex items-center justify-center bg-gray-950">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after a slight delay to allow lazy components to fully render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
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
          <Suspense fallback={<LoadingSection />}>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Achievements />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </div>
    </ReactLenis>
  );
}
