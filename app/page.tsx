import { BorderBeam } from "@/components/magicui/border-beam";
import { FlickeringGridRoundedDemo } from "@/components/ui/Flickeringgrid";
// import About from "@/components/ui/About";
import { MenuBar } from "@/components/ui/Header";
import RainingLetters from "@/components/ui/RainingLetters";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FlickeringGridRoundedDemo />
      </div>
      
      <MenuBar className="mb-8" />
      
      <div className="h-screen">
        <RainingLetters 
          phrases={[
            'Hi, I\'m Lakshman Reddy',
            'Full Stack Developer',
            'AI & ML Enthusiast',
          ]}
        />
      </div>
     {/*       
      <div className="container mx-auto relative z-10">
        <About />
      </div> */}
      
      <BorderBeam duration={12} delay={9} borderWidth={4} className="fixed inset-0 pointer-events-none" />
    </main>
  );
}