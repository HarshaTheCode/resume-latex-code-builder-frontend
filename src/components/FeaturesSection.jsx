import React from 'react';
import SpotlightCard from './ui/SpotlightCard';
import ScrollAnimation from './ui/ScrollAnimation';

const FeaturesSection = () => {
    const leftFeatures = [
        {
            type: "pill",
            title: "ATS-Friendly Architecture",
            color: "bg-orange-500",
            delay: 0
        },
        {
            type: "pill",
            title: "AI-Powered Content",
            color: "bg-blue-500",
            delay: 100
        },
        {
            type: "card",
            title: "Beat the bots.",
            description: "Our resumes are engineered with clean code and standardized formatting to ensure you pass Applicant Tracking Systems every time.",
            color: "bg-zinc-600",
            delay: 200
        }
    ];

    const rightFeatures = [
        {
            type: "pill",
            title: "Instant Professional Formatting",
            color: "bg-yellow-500",
            delay: 0
        },
        {
            type: "card",
            title: "Writer's block is history.",
            description: "Generate professional summaries and bullet points tailored to your industry with advanced AI assistance.",
            color: "bg-pink-500",
            delay: 100
        },
        {
            type: "card",
            title: "Focus on your experience, not the margins.",
            description: "We handle the layout, typography, and spacing automatically for a polished look.",
            color: "bg-green-500",
            delay: 200
        }
    ];

    const CheckIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
        </svg>
    );

    const FeatureItem = ({ feature, align = 'left' }) => {
        const isCard = feature.type === 'card';

        if (!isCard) {
            return (
                <SpotlightCard className="w-fit p-4 rounded-full border border-[#B8860B]/20 bg-white/60 backdrop-blur-sm hover:bg-white/90 transition-colors shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-full ${feature.color} flex items-center justify-center shadow-md`}>
                            <CheckIcon />
                        </div>
                        <span className="text-sm font-semibold text-[#1a1a1a]">{feature.title}</span>
                    </div>
                </SpotlightCard>
            );
        }

        return (
            <SpotlightCard className={`p-6 rounded-3xl border border-[#B8860B]/20 bg-white/60 backdrop-blur-sm w-full max-w-sm hover:bg-white/90 transition-colors shadow-xl ${align === 'left' ? 'ml-auto' : 'mr-auto'}`}>
                <div className="flex gap-4">
                    <div className={`shrink-0 h-10 w-10 rounded-full ${feature.color} flex items-center justify-center shadow-md`}>
                        <CheckIcon />
                    </div>
                    <div>
                        <h4 className="text-[#1a1a1a] font-bold mb-2 text-lg leading-tight">{feature.title}</h4>
                        <p className="text-sm text-[#4A4A4A] leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </div>
            </SpotlightCard>
        );
    };

    return (
        <section className="py-24 bg-[#FDFBF6] text-[#1a1a1a] overflow-hidden relative selection:bg-[#B8860B]/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">

                    {/* Left Column */}
                    <div className="flex flex-col gap-6 items-start lg:items-end">
                        {leftFeatures.map((feature, index) => (
                            <ScrollAnimation key={`left-${index}`} animation="fade-right" delay={feature.delay} className={feature.type === 'card' ? 'w-full flex justify-end' : ''}>
                                <FeatureItem feature={feature} align="left" />
                            </ScrollAnimation>
                        ))}
                    </div>

                    {/* Center Column - Text */}
                    <div className="text-center py-12 lg:py-0 order-first lg:order-none">
                        <ScrollAnimation animation="fade-up">
                            <span className="font-serif italic text-3xl md:text-4xl block mb-2 text-[#B8860B]">
                                Hallo!
                            </span>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fade-up" delay={100}>
                            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-[#1a1a1a] leading-[0.9]">
                                Engineered for<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#B8860B] to-[#8B4513]">Success.</span>
                            </h2>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fade-up" delay={200}>
                            <p className="text-xl md:text-2xl text-[#4A4A4A] font-medium leading-relaxed max-w-lg mx-auto">
                                Crafting careers with strategy, design, and empathy.
                            </p>
                        </ScrollAnimation>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 items-start">
                        {rightFeatures.map((feature, index) => (
                            <ScrollAnimation key={`right-${index}`} animation="fade-left" delay={feature.delay} className={feature.type === 'card' ? 'w-full' : ''}>
                                <div className={feature.type === 'card' ? 'w-full' : ''}>
                                    <FeatureItem feature={feature} align="right" />
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4E9D5]/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
};

export default FeaturesSection;
