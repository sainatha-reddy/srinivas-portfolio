import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
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
          <Skills />
          <Experience />

          {/* Interactive Physics Playground */}
          <section className="h-[60vh] w-full relative border-y border-gray-800 bg-gray-950/80 backdrop-blur-sm">
            <div className="absolute inset-x-0 top-8 text-center z-10 pointer-events-none">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interactive Playground
              </h2>
              <p className="text-gray-400 mt-2">Throw the physics objects around!</p>
            </div>
            {/* Z-index allows pointer events here */}
            <div className="w-full h-full relative z-20">
              <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <Ballpit />
              </Canvas>
            </div>
          </section>

          <Contact />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}
