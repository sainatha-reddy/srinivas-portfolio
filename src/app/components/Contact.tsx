import React, { useRef, useEffect } from 'react';
import { Mail, Linkedin, Github, Terminal, Send, MessageSquare, User } from 'lucide-react';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | HTMLDivElement)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".contact-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
        }
      });

      // Info Cards Animation
      gsap.from(cardsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 90%",
        }
      });

      // Form Animation
      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      });

      // Background decorative blobs
      gsap.to(".blob-1", {
        x: '30%',
        y: '20%',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".blob-2", {
        x: '-20%',
        y: '-30%',
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show feedback
    toast.success("Opening your mail client...");
    
    // Construct mailto link
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Open the mail client
    window.location.href = `mailto:lakshmisrinivas365@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset the form
    form.reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="relative pt-12 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030712]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="blob-1 absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="blob-2 absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind or just want to chat about the future of AI? 
            I'm always open to new opportunities and interesting conversations.
          </p>
        </div>

        {/* Contact Form Section */}
        <form 
          ref={formRef} 
          onSubmit={handleSubmit}
          className="relative p-6 md:p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden group/form"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -mr-16 -mt-16 group-hover/form:bg-blue-500/20 transition-colors duration-500"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-gray-400 ml-1 flex items-center gap-2 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" /> Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-gray-400 ml-1 flex items-center gap-2 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5" /> Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-gray-400 ml-1 flex items-center gap-2 uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" /> Message
              </label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Your message here..."
                className="w-full px-5 py-3.5 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-px font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/25 active:scale-[0.98]"
            >
              <div className="relative flex items-center justify-center gap-3 rounded-xl bg-[#030712]/50 px-8 py-4 transition-all duration-300 group-hover:bg-transparent">
                <span className="text-lg">Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </form>

        {/* Contact Cards Row */}
        <div ref={infoRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { 
              icon: Mail, 
              label: 'Email', 
              value: 'lakshmisrinivas365@gmail.com', 
              href: 'mailto:lakshmisrinivas365@gmail.com',
              color: 'blue' 
            },
            { 
              icon: Linkedin, 
              label: 'LinkedIn', 
              value: 'telaprolu-lakshmi-srinivas', 
              href: 'https://www.linkedin.com/in/telaprolu-lakshmi-srinivas-224589212/',
              color: 'indigo'
            },
            { 
              icon: Github, 
              label: 'GitHub', 
              value: 'srinivastls', 
              href: 'https://github.com/srinivastls',
              color: 'purple'
            },
            { 
              icon: Terminal, 
              label: 'CodeChef', 
              value: 'cs21b2045', 
              href: 'https://www.codechef.com/users/cs21b2045',
              color: 'blue'
            }
          ].map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={el => { if (el) cardsRef.current[index] = el; }}
              className="group flex flex-col items-center gap-2 p-3 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300 text-center"
            >
              <div className={`p-3 bg-${item.color}-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-5 h-5 text-${item.color}-400`} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                <div className="text-xs text-gray-200 font-semibold truncate max-w-[120px]">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
