import { BorderBeam } from "@/components/magicui/border-beam";
import { FlickeringGridRoundedDemo } from "@/components/ui/Flickeringgrid";
import About from "@/components/ui/About";

export default function Home() {
  return (
    <>
      <About />
      <BorderBeam  duration={12} delay={9} borderWidth={4} className="fixed inset-0" />
      <FlickeringGridRoundedDemo />
    </>
  );
}