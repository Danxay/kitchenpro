'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const getAnimationStyles = () => {
        const baseStyles = {
            opacity: isVisible ? 1 : 0,
            transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        };

        const transforms: Record<string, string> = {
            'fade-up': isVisible ? 'translateY(0)' : 'translateY(40px)',
            'fade-in': 'translateY(0)',
            'scale-in': isVisible ? 'scale(1)' : 'scale(0.95)',
            'slide-left': isVisible ? 'translateX(0)' : 'translateX(-40px)',
            'slide-right': isVisible ? 'translateX(0)' : 'translateX(40px)',
        };

        return {
            ...baseStyles,
            transform: transforms[animation] || transforms['fade-up'],
        };
    };

    return (
        <div ref={ref} style={getAnimationStyles()} className={className}>
            {children}
        </div>
    );
};

// Hook for staggered children animations
export const useStaggeredReveal = (itemCount: number, baseDelay: number = 100) => {
    return Array.from({ length: itemCount }, (_, i) => i * baseDelay);
};
