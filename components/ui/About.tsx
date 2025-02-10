import Image from 'next/image';
import { SparklesTextDemo } from "@/components/ui/Name";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-black relative">
      <h1 className="absolute top-4 left-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
      <SparklesTextDemo />
      </h1>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <div className="rounded-full overflow-hidden w-full h-full">
              <Image
                src="/profile.jpeg"
                alt="Lakshman Reddy's Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center md:justify-start gap-3">
              Hi, I&apos;m Lakshman Reddy
              <span role="img" aria-label="waving hand" className="text-4xl" key="wave">
                👋
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Techie  | AI Enthusiast 
            </h2>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I love building projects and sharing my knowledge with the community. I am a Software Engineer with a passion for building products that solve real-world problems. I am also an AI enthusiast and love to explore the latest trends in AI and Machine Learning.
          </p>

        </div>
      </div>
    </section>
  );
}