import Image from 'next/image';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-transparent relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-20">
            <div className="absolute rounded-full overflow-hidden w-full h-full shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 rounded-full z-10"></div>
              <Image
                src="/profile.jpeg"
                alt="Lakshman Reddy's Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full relative z-20"
                priority
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center md:justify-start gap-3">
              About Me
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Techie | AI Enthusiast 
            </h2>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I love building projects and sharing my knowledge with the community. I am a Software Engineer with a passion for building products that solve real-world problems. I am also an AI enthusiast and love to explore the latest trends in AI and Machine Learning.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg">
            My expertise includes full-stack development with modern technologies like React, TypeScript, Node.js, and various cloud platforms. I&apos;m constantly exploring new ways to integrate AI and machine learning into practical applications.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg">
            When I&apos;m not coding, you can find me reading tech blogs, contributing to open-source projects, or exploring the outdoors.
          </p>
        </div>
      </div>
    </section>
  );
}