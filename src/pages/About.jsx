import React from 'react';
import { ArrowRight, Code, Database, Brain, Globe, Shield, Zap } from 'lucide-react';
import Navcomponent from '../components/Navcomponent';
import SpotlightCard from '../components/ui/SpotlightCard';
import ScrollAnimation from '../components/ui/ScrollAnimation';

const About = () => {
  const journeySteps = [
    {
      number: "01",
      title: "Backend",
      description: "Developed robust backend structural features, integrated database schema, and optimized for speed and quality.",
      icons: [Database, Shield]
    },
    {
      number: "02",
      title: "Frontend",
      description: "Implemented modern UI/UX systems, responsive layouts, and interactive animations with seamless transitions.",
      icons: [Code, Zap]
    },
    {
      number: "03",
      title: "AI Integration",
      description: "Rigorous testing with various LLM models, seamless prompt engineering workflow, and fine-tuned responses.",
      icons: [Brain, Globe]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E5D5B0] selection:text-[#1A1A1A]">
      {/* Navigation */}
      <Navcomponent />

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 relative">
          <div className="space-y-8 z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[#1A1A1A]">
              Technical Journey &
              <span className="font-serif italic text-[#B8860B]  ">Vision</span>
            </h1>

          </div>

          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#D4AF37]/20 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute top-10 right-10 w-[400px] h-[400px] border border-[#D4AF37]/10 rounded-full pointer-events-none" />

            {/* Using a placeholder or code illustration if image is flexible, 
                matching the "lines of code" abstract visual in design */}
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-white/60 shadow-xl w-full max-w-md transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-2 w-full bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Section Divider Arrow */}
         
        </section>

        {/* Project Overview Stats */}
      
        {/* Technical Journey Timeline */}
        <section className="relative overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#B8860B]/10 rounded-full blur-[100px] animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F4E9D5]/60 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          </div>

          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <ScrollAnimation animation="fade-up">
              <span className="font-serif italic text-xl md:text-2xl block mb-2 text-[#4A4A4A]">
                / Our Development Story
              </span>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A1A1A]">
                Technical <span className="text-[#B8860B]">Journey</span>
              </h2>
            </ScrollAnimation>
          </div>

          {/* Steps Container */}
          <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

            {/* Connecting Looping Lines (Desktop Only) */}
            <div className="hidden md:block absolute top-[40%] left-0 w-full h-40 -translate-y-1/2 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 150" overflow="visible" preserveAspectRatio="none">
                {/* Loop from Card 1 to Card 2 */}
                <path
                  d="M 220 70 C 280 10, 300 120, 480 50"
                  fill="none"
                  stroke="#B8860B"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="opacity-40"
                />
                <circle cx="220" cy="70" r="4" fill="#B8860B" className="opacity-60" />
                <circle cx="480" cy="50" r="4" fill="#B8860B" className="opacity-60" />

                {/* Loop from Card 2 to Card 3 */}
                <path
                  d="M 540 50 C 620 150, 700 -20, 800 70"
                  fill="none"
                  stroke="#B8860B"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="opacity-40"
                />
                <circle cx="540" cy="50" r="4" fill="#B8860B" className="opacity-60" />
                <circle cx="800" cy="70" r="4" fill="#B8860B" className="opacity-60" />
              </svg>
            </div>

            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative z-10 flex flex-col items-center animate-float ${index === 1 ? 'md:-translate-y-8' : ''}`}
                style={{ animationDelay: `${index * 1.5}s` }}
              >
                <ScrollAnimation animation="fade-up" delay={index * 200} className="w-full">
                  <SpotlightCard className="h-full p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-[#B8860B]/10 hover:border-[#B8860B]/40 transition-all duration-300 w-full aspect-[4/5] flex flex-col justify-between group shadow-xl shadow-[#B8860B]/5 hover:shadow-[#B8860B]/20">

                    <div className="flex justify-between items-start w-full">
                      <span className="text-6xl font-light text-[#1a1a1a] opacity-80 group-hover:opacity-100 transition-opacity font-mono">
                        {step.number}
                      </span>
                      <div className="flex gap-2 text-[#B8860B]/60 group-hover:text-[#B8860B] transition-colors">
                        {step.icons.map((Icon, iconIndex) => (
                          <Icon key={iconIndex} size={22} />
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#B8860B] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#4A4A4A] leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>

                  </SpotlightCard>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
