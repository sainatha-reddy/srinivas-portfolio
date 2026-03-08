import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { OpenSource } from './components/OpenSource';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Canvas } from '@react-three/fiber';
import { AntigravityParticles } from './components/3d/AntigravityParticles';
import { AsciiText } from './components/3d/AsciiText';
import { Ballpit } from './components/3d/Ballpit';
import { Prism } from './components/3d/Prism';

export default function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative">

        {/* Fixed 3D Background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            {/* Toggle between these uncommenting one or the other */}
            <AntigravityParticles />
            {/* <AsciiText text="AI ENGINEER" /> */}
          </Canvas>
        </div>

        {/* Floating Prism Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Prism />
          </Canvas>
        </div>

        {/* Content - Must be relative and z-10 to sit above canvas backgrounds */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <Projects />
          <OpenSource />
          <Skills />
          <Experience />
          <Achievements />

          

          <Contact />
          
        </div>
      </div>
    </ReactLenis>
  );
}
