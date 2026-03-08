import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { TextReveal3D } from './ui/TextReveal3D';
import { ModelViewer } from './3d/ModelViewer';
import { Canvas } from '@react-three/fiber';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400">👋 Welcome to my portfolio</span>
            </div>

            <TextReveal3D
              text="Hi, I'm"
              className="text-5xl md:text-6xl lg:text-7xl mb-2 font-bold text-white block"
              delay={0}
            />
            <TextReveal3D
              text="Lakshmi Srinivas"
              className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block"
              delay={3}
            />

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              AI Engineer & Machine Learning Specialist
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              B.Tech in CSE (AI Major) at IIITDM Kancheepuram. I build intelligent systems that solve real-world problems. Specializing in deep learning, natural language processing, and computer vision with experience in developing production ML models and scalable APIs.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-blue-500 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a
                href="mailto:alex.chen@example.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-300" />
              </a>
              <button className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5 text-gray-300" />
                <span className="text-sm text-gray-300">Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image / 3D Model */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>

              {/* 3D Model Viewer Canvas */}
              <div className="absolute inset-0 z-10">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                  <ModelViewer />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
