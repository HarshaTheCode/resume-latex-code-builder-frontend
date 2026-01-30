

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const testimonials = [
    { tempId: 0, testimonial: "My favorite solution in the market. We work 5x faster with this tool.", by: "Alex, CEO at TechCorp", imgSrc: "https://i.pravatar.cc/150?img=1" },
    { tempId: 1, testimonial: "I'm confident my data is safe. I can't say that about other providers.", by: "Dan, CTO at SecureNet", imgSrc: "https://i.pravatar.cc/150?img=2" },
    { tempId: 2, testimonial: "I know it's cliche, but we were lost before we found this. Can't thank you guys enough!", by: "Stephanie, COO at InnovateCo", imgSrc: "https://i.pravatar.cc/150?img=3" },
    { tempId: 3, testimonial: "This product makes planning for the future seamless. Can't recommend enough!", by: "Marie, CFO at FuturePlanning", imgSrc: "https://i.pravatar.cc/150?img=4" },
    { tempId: 4, testimonial: "If I could give 11 stars, I'd give 12.", by: "Andre, Head of Design at CreativeSolutions", imgSrc: "https://i.pravatar.cc/150?img=5" },
    { tempId: 5, testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.", by: "Jeremy, Product Manager at TimeWise", imgSrc: "https://i.pravatar.cc/150?img=6" },
    { tempId: 6, testimonial: "Took some convincing, but now that we're using this, we're never going back.", by: "Pam, Marketing Director at BrandBuilders", imgSrc: "https://i.pravatar.cc/150?img=7" },
    { tempId: 7, testimonial: "I would be lost without the in-depth analytics. The ROI is EASILY 100X for us.", by: "Daniel, Data Scientist at AnalyticsPro", imgSrc: "https://i.pravatar.cc/150?img=8" },
    { tempId: 8, testimonial: "It's just the best. Period.", by: "Fernando, UX Designer at UserFirst", imgSrc: "https://i.pravatar.cc/150?img=9" },
    { tempId: 9, testimonial: "I switched 5 years ago and never looked back.", by: "Andy, DevOps Engineer at CloudMasters", imgSrc: "https://i.pravatar.cc/150?img=10" },
    { tempId: 10, testimonial: "I've been searching for a solution like this for YEARS. So glad I finally found one!", by: "Pete, Sales Director at RevenueRockets", imgSrc: "https://i.pravatar.cc/150?img=11" },
    { tempId: 11, testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.", by: "Marina, HR Manager at TalentForge", imgSrc: "https://i.pravatar.cc/150?img=12" },
    { tempId: 12, testimonial: "The customer support is unparalleled. They're always there when we need them.", by: "Olivia, Customer Success Manager at ClientCare", imgSrc: "https://i.pravatar.cc/150?img=13" },
    { tempId: 13, testimonial: "The efficiency gains we've seen since implementing this are off the charts!", by: "Raj, Operations Manager at StreamlineSolutions", imgSrc: "https://i.pravatar.cc/150?img=14" },
    { tempId: 14, testimonial: "This has revolutionized how we handle our workflow. It's a game-changer!", by: "Lila, Workflow Specialist at ProcessPro", imgSrc: "https://i.pravatar.cc/150?img=15" },
    { tempId: 15, testimonial: "The scalability of the solution is impressive. It grows with our business seamlessly.", by: "Trevor, Scaling Officer at GrowthGurus", imgSrc: "https://i.pravatar.cc/150?img=16" },
    { tempId: 16, testimonial: "I appreciate how they continually innovate. Always one step ahead.", by: "Naomi, Innovation Lead at FutureTech", imgSrc: "https://i.pravatar.cc/150?img=17" },
    { tempId: 17, testimonial: "The ROI we've seen is incredible. It's paid for itself many times over.", by: "Victor, Finance Analyst at ProfitPeak", imgSrc: "https://i.pravatar.cc/150?img=18" },
    { tempId: 18, testimonial: "The platform is so robust, yet easy to use. It's the perfect balance.", by: "Yuki, Tech Lead at BalancedTech", imgSrc: "https://i.pravatar.cc/150?img=19" },
    { tempId: 19, testimonial: "We've tried many solutions, but this stands out in terms of reliability and performance.", by: "Zoe, Performance Manager at ReliableSystems", imgSrc: "https://i.pravatar.cc/150?img=20" }
];

function TestimonialCard({ position, testimonial, handleMove, cardSize }) {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer rounded-2xl border p- transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center",
                isCenter
                    ? "z-10 bg-white/80 backdrop-blur-xl border-[#B8860B]/20 text-[#1a1a1a] shadow-[0_0_50px_rgba(184,134,11,0.1)]"
                    : "z-0 bg-white/40 backdrop-blur-sm border-black/5 text-[#4A4A4A] hover:border-black/10 opacity-40 hover:opacity-60"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          scale(${isCenter ? 1 : 0.9})
          rotate(${isCenter ? 0 : position * 2}deg)
        `,
            }}
        >
            <div className={cn(
                "mb-6 p-1 rounded-full border",
                isCenter ? "border-[#B8860B]/30" : "border-black/5"
            )}>
                <img
                    src={testimonial.imgSrc}
                    alt={`${testimonial.by.split(",")[0]}`}
                    className="h-16 w-16 rounded-full object-cover"
                />
            </div>

            <h3 className={cn(
                "text-lg sm:text-xl font-light leading-relaxed mb-6",
                isCenter ? "text-[#1a1a1a]" : "text-[#4A4A4A]"
            )}>
                "{testimonial.testimonial}"
            </h3>

            <div className="mt-auto">
                <p className={cn(
                    "text-sm font-bold tracking-wider uppercase",
                    isCenter ? "text-[#1a1a1a]" : "text-[#4A4A4A]"
                )}>
                    {testimonial.by.split(",")[0]}
                </p>
                <p className={cn(
                    "text-xs mt-1",
                    isCenter ? "text-[#4A4A4A]" : "text-[#6B7280]"
                )}>
                    {testimonial.by.split(",").slice(1).join(",")}
                </p>
            </div>
        </div>
    );
}

export function StaggerTestimonials() {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 400 : 280);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative px-50 w-full overflow-hidden bg-[#FDFBF6] py-10"
            style={{ height: 700 }}
        >
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4E9D5]/60 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F4E9D5]/60 rounded-full blur-[128px] pointer-events-none" />

            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-4 z-20">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
                        "bg-white/80 border border-black/5 text-[#1a1a1a] hover:bg-white hover:scale-110 shadow-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]/50"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
                        "bg-white/80 border border-black/5 text-[#1a1a1a] hover:bg-white hover:scale-110 shadow-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]/50"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
