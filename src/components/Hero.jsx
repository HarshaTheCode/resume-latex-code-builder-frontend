import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import CTAButton from './CTAButton';
import { div } from 'framer-motion/client';

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  const rotatingText = [
    { main: "Get Hired", highlight: "Faster" },
    { main: "Land Jobs", highlight: "Easier" },
    { main: "Stand Out", highlight: "Instantly" },
    { main: "Code Your", highlight: "Future" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingText.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (



    <div className="relative h-screen w-full bg-gradient-to-b from-[#FDFBF6] via-[#F4E9D5] to-[#C8B298] overflow-hidden">
      <div className="h-full w-full flex flex-col pt-20">

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto">
            <img
              src="/model.png"
              alt="Professional Developer"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[65vh] md:h-[95vh] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col">

          {/* Top Section: Headlines */}
          <div className="flex flex-col items-center text-center space-y-6 mt-8 md:mt-12">
            <div className="flex -mt-10 items-center gap-2 text-[#4A4A4A] font-medium text-sm md:text-base animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <Trophy className="w-5 h-5 text-[#B8860B]" />
              <span>#1 Rated Tech Resume Builder 2025</span>
            </div>

            <div className="space-y-2 ">
              <h1 className="text-3xl -mt-2 md:text-6xl lg:text-8xl font-bold text-[#1a1a1a] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Want to get a  Job?
              </h1>
              <div className='flex  justify-center  md:gap-6 animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
                <div key={taglineIndex} className="flex   md:gap-6 animate-fade-in-up">
                  <h2 className="text-3xl md:text-6xl lg:text-8xl font-serif italic text-[#1a1a1a]">
                    {rotatingText[taglineIndex].main}
                  </h2>
                  <span className="text-3xl md:text-6xl lg:text-8xl font-serif italic text-[#B8860B]">
                    {rotatingText[taglineIndex].highlight}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle & Bottom Section: Floating Elements */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 md:pb-10 relative">

            {/* Left Column */}
            <div className="md:col-span-3 flex flex-col h-full relative">
              <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 lg:left-8 z-20">
                <div className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-5 py-3 rounded-full shadow-lg whitespace-nowrap">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-medium text-sm">500+ Devs Placed this Month</span>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 relative z-20">
                <div className="flex -space-x-3">
                  {[
                    "https://i.pinimg.com/1200x/43/8f/80/438f80b684aee056afe2201ad32ea79c.jpg",
                    "https://i.pinimg.com/736x/50/b7/16/50b716a944c630c9a324b54be6a90027.jpg",
                    "https://i.pinimg.com/736x/50/d4/29/50d429ea5c9afe0ef9cb3c96f784bea4.jpg"
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#D8C0A6] overflow-hidden">
                      <img src={src} alt={`User ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#4A4A4A] font-medium max-w-[200px] leading-tight">
                  Trusted by candidates now working at Google, Amazon, and Meta.
                </p>
              </div>
            </div>

            {/* Center Column (Spacer) */}
            <div className="md:col-span-6 hidden md:block"></div>

            {/* Right Column */}
            <div className="md:col-span-3 flex flex-col h-full items-start md:items-end text-left md:text-right relative">
              <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 lg:right-8 max-w-xs z-20">
                <p className="text-[#1a1a1a] text-lg leading-relaxed">
                  Stop getting filtered out. We use the world's smartest LLMs to craft ATS-proof resumes that highlight your code and get you straight to the interview.
                </p>
              </div>

              <div className="mt-auto relative z-20">
                <CTAButton
                  to="/details"
                  className="px-8 py-4 bg-black text-white hover:bg-black/90 transition-colors"
                >
                  Build My Dev Resume
                </CTAButton>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>

  );
};

export default Hero;
