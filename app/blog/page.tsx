"use client"

import { BorderBeam } from "@/components/magicui/border-beam";
import { MenuBar } from "@/components/ui/Header";
import { FlickeringGridRoundedDemo } from "@/components/ui/Flickeringgrid";
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with TypeScript and React",
    excerpt: "Learn how to set up a new project with TypeScript and React, and discover the benefits of using TypeScript in your React applications.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Development",
    slug: "getting-started-with-typescript-and-react"
  },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is transforming the software development landscape and what developers need to know to stay ahead.",
    date: "June 22, 2023",
    readTime: "8 min read",
    category: "AI",
    slug: "future-of-ai-in-software-development"
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Discover how to create beautiful, responsive user interfaces quickly and efficiently using the utility-first CSS framework, Tailwind CSS.",
    date: "July 10, 2023",
    readTime: "6 min read",
    category: "Design",
    slug: "building-responsive-uis-with-tailwind-css"
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Learn advanced techniques for optimizing the performance of your React applications, from code splitting to memoization.",
    date: "August 5, 2023",
    readTime: "10 min read",
    category: "Performance",
    slug: "optimizing-react-performance"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FlickeringGridRoundedDemo />
      </div>
      
      <MenuBar className="mb-8" />
      
      <section className="min-h-screen px-4 py-16 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center relative inline-block" 
                style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)', marginTop: 'calc(15vh - 20px)' }}>
              Blog
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00ff00]/50"></span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Thoughts, ideas, and insights about technology, development, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:border-[#00ff00]/30 hover:translate-y-[-5px]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-medium px-3 py-1 bg-[#00ff00]/10 text-[#00ff00] rounded-full border border-[#00ff00]/20">
                      {post.category}
                    </span>
                    <div className="text-gray-500 text-sm">
                      {post.date} · {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#00ff00] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-[#00ff00] hover:text-[#00ff00]/80 transition-colors group"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <BorderBeam duration={12} delay={9} borderWidth={4} className="fixed inset-0 pointer-events-none" />
      
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(-50%, 0px);
          }
          50% {
            transform: translate(-50%, -10px);
          }
          100% {
            transform: translate(-50%, 0px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
} 