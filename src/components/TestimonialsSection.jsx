import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "This resume builder completely transformed my job search. The ATS-friendly templates are a game-changer!",
        company: "Google"
    },
    {
        id: 2,
        name: "David Chen",
        role: "Product Manager",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I landed interviews at top tech companies thanks to the professional formatting. Highly recommended!",
        company: "Microsoft"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Simple, fast, and effective. The AI suggestions helped me articulate my achievements perfectly.",
        company: "Spotify"
    },
    {
        id: 4,
        name: "Michael Chang",
        role: "Data Scientist",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        text: "The best resume tool I've used. Clean designs that actually get read by recruiters.",
        company: "Netflix"
    },
    {
        id: 5,
        name: "Jessica Lee",
        role: "UX Designer",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        text: "As a designer, I'm picky about aesthetics. These templates are clean, modern, and professional.",
        company: "Airbnb"
    }
];

const TestimonialsSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 400; // Adjust scroll amount as needed
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-24 bg-[#FDFBF6] text-[#1a1a1a] relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="font-serif italic text-xl text-[#B8860B] block mb-2">
                            / Success Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-4">
                            Loved by <span className="font-serif italic">Professionals</span>
                        </h2>
                        <p className="text-[#4A4A4A] text-lg leading-relaxed">
                            See what our users have to say about their experience building resumes.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full border border-[#1a1a1a]/10 bg-white hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full border border-[#1a1a1a]/10 bg-white hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="min-w-[320px] md:min-w-[400px] p-8 rounded-3xl bg-white border border-[#1a1a1a]/5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] snap-start hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-auto"
                        >
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-[#B8860B] fill-[#B8860B]" />
                                    ))}
                                </div>
                                <p className="text-[#1a1a1a] text-lg leading-relaxed font-medium mb-8">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-[#1a1a1a]/5 pt-6 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h3 className="font-bold text-[#1a1a1a]">{testimonial.name}</h3>
                                    <p className="text-sm text-[#4A4A4A]">{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
