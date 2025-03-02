import { BorderBeam } from "@/components/magicui/border-beam";
import { MenuBar } from "@/components/ui/Header";
import { SparklesTextDemo } from "@/components/ui/Name";
import About from "@/components/ui/About";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <MenuBar className="mb-8" />
      
      <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-transparent relative z-10">
        <h1 className="absolute top-4 left-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
          <SparklesTextDemo />
        </h1>
        <About />
        <div className="absolute bottom-4 right-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
          <SparklesTextDemo />
        </div>
      </section>
      
      <BorderBeam duration={12} delay={9} borderWidth={4} className="fixed inset-0 pointer-events-none" />
    </main>
  );
} 