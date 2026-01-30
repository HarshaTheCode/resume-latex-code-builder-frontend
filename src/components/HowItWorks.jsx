import React from 'react';
import SpotlightCard from './ui/SpotlightCard';
import ScrollAnimation from './ui/ScrollAnimation';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Discover",
            description: "We analyze your career history to identify key strengths and achievements that matter to recruiters.",
        },
        {
            number: "02",
            title: "Design",
            description: "Our AI crafts a visually stunning, ATS-optimized layout that highlights your professional story.",
        },
        {
            number: "03",
            title: "Deliver",
            description: "Receive a polished, interview-ready resume that gets you noticed by top tech companies.",
        }
    ];

    return (
        <section className="py-24 bg-[#FDFBF6] text-[#1a1a1a] relative overflow-hidden">

            {/* Enhanced Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#B8860B]/10 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#F4E9D5]/60 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">

                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollAnimation animation="fade-up">
                        <span className="font-serif italic text-xl md:text-2xl block mb-2 text-[#4A4A4A]">
                            / Our Process Explained
                        </span>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fade-up" delay={100}>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a1a]">
                            Here's how it <span className="text-[#B8860B]">works</span>
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


                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative z-10 flex flex-col items-center animate-float ${index === 1 ? 'md:-translate-y-12' : ''}`}
                            style={{ animationDelay: `${index * 1.5}s` }}
                        >
                            <ScrollAnimation animation="fade-up" delay={index * 200} className="w-full">
                                <SpotlightCard className="h-full p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-[#B8860B]/10 hover:border-[#B8860B]/40 transition-all duration-300 w-full aspect-[4/5] flex flex-col justify-between group shadow-xl shadow-[#B8860B]/5 hover:shadow-[#B8860B]/20">

                                    <div className="flex justify-between items-start w-full">
                                        <span className="text-6xl font-light text-[#1a1a1a] opacity-80 group-hover:opacity-100 transition-opacity font-mono">
                                            {step.number}
                                        </span>
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

            </div>
        </section>
    );
};

export default HowItWorks;
