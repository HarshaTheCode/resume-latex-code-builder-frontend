import React from 'react';
import ScrollAnimation from './ui/ScrollAnimation';
import { Marquee } from '@/components/ui/marquee';

const companies = [
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png' },
    { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
];

const ClientsSection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-[#FDFBF6]">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

            <div className="container mx-auto px-4 mb-12 text-center relative z-10">
                <ScrollAnimation animation="fade-up">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
                        Trusted by experts. <span className="text-[#4A4A4A]">Used by the leaders.</span>
                    </h2>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-up" delay={100}>
                    <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
                        Join thousands of professionals who have secured their dream jobs at top-tier companies.
                    </p>
                </ScrollAnimation>
            </div>

            {/* Infinite Scroll Container */}
            <ScrollAnimation animation="fade-in" delay={200} duration={1000}>
                <div className="relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-[#FDFBF6] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-[#FDFBF6] to-transparent z-20 pointer-events-none"></div>

                    <Marquee className="w-full" speed={40} pauseOnHover>
                        {companies.map((company, index) => (
                            <div key={`logo-${index}`} className="flex flex-col items-center justify-center group min-w-[120px] mx-6 md:mx-12">
                                <div className="h-12 md:h-16 w-auto flex items-center justify-center">
                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        className="h-full w-auto object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <span className="hidden text-xl font-bold text-[#1a1a1a]">{company.name}</span>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </ScrollAnimation>
        </section>
    );
};

export default ClientsSection;
