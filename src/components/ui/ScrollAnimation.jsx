import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, className = '', animation = 'fade-up', delay = 0, duration = 700 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const getInitialClass = () => {
        switch (animation) {
            case 'fade-up': return 'opacity-0 translate-y-10';
            case 'fade-in': return 'opacity-0';
            case 'slide-left': return 'opacity-0 -translate-x-10';
            case 'slide-right': return 'opacity-0 translate-x-10';
            case 'zoom-in': return 'opacity-0 scale-95';
            default: return 'opacity-0 translate-y-10';
        }
    };

    const getFinalClass = () => {
        switch (animation) {
            case 'fade-up': return 'opacity-100 translate-y-0';
            case 'fade-in': return 'opacity-100';
            case 'slide-left': return 'opacity-100 translate-x-0';
            case 'slide-right': return 'opacity-100 translate-x-0';
            case 'zoom-in': return 'opacity-100 scale-100';
            default: return 'opacity-100 translate-y-0';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all ease-out ${isVisible ? getFinalClass() : getInitialClass()} ${className}`}
            style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
