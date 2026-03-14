import { Mail, Linkedin, Github, Terminal, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Open to exciting opportunities, collaborations, and conversations about AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-6 text-white">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects, opportunities,
              or just chatting about the latest developments in AI and machine learning.
              Feel free to reach out through any of these channels.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:lakshmisrinivas365@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-white">lakshmisrinivas365@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/telaprolu-lakshmi-srinivas-224589212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <div className="text-white">telaprolu-lakshmi-srinivas</div>
                </div>
              </a>

              <a
                href="https://github.com/srinivastls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">GitHub</div>
                  <div className="text-white">github.com/srinivastls</div>
                </div>
              </a>

              <a
                href="https://www.codechef.com/users/cs21b2045"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Terminal className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">CodeChef</div>
                  <div className="text-white">cs21b2045</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-white">Chennai, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
