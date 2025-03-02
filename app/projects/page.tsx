"use client"

import { BorderBeam } from "@/components/magicui/border-beam";
import { MenuBar } from "@/components/ui/Header";
import { FlickeringGridRoundedDemo } from "@/components/ui/Flickeringgrid";
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A task management application with AI capabilities to prioritize and categorize tasks automatically.",
    technologies: ["React", "TypeScript", "Node.js", "TensorFlow.js"],
    image: "/project1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/project2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A real-time messaging platform with features like typing indicators, read receipts, and file sharing.",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    image: "/project3.jpg",
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FlickeringGridRoundedDemo />
      </div>
      
      <MenuBar className="mb-8" />
      
      <section className="min-h-screen px-4 py-16 bg-transparent relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center relative inline-block"
                style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)' , marginTop: 'calc(15vh - 20px)' }}>
              My Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00ff00]/50"></span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge 
              and showcases different aspects of my technical skills and problem-solving abilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:border-[#00ff00]/30 hover:translate-y-[-5px]"
              >
                <div className="h-48 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#00ff00]/10 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white px-4 py-2 bg-black/50 rounded-lg border border-[#00ff00]/20 transition-all duration-300 group-hover:bg-black/70 group-hover:border-[#00ff00]/40"
                        style={{ textShadow: '0 0 8px rgba(0, 255, 0, 0.4)' }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-[#00ff00]/10 border border-[#00ff00]/20 rounded-md text-xs text-[#00ff00] transition-all duration-200 hover:bg-[#00ff00]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={project.link} 
                    className="inline-flex items-center px-4 py-2 bg-[#00ff00]/20 text-[#00ff00] border border-[#00ff00]/30 rounded-md hover:bg-[#00ff00]/30 transition-colors group"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <BorderBeam duration={12} delay={9} borderWidth={4} className="fixed inset-0 pointer-events-none" />
    </main>
  );
} 