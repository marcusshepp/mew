'use client';

import { useState, useEffect, useMemo } from 'react';

export default function ResponsiveHero() {
    // For animated typing effect
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    // Use useMemo to prevent texts array from being recreated on each render
    const texts = useMemo(
        () => [
            'small businesses.',
            'startups.',
            'online growth.',
            'digital presence.',
        ],
        []
    );

    useEffect(() => {
        let timer;
        const currentText = texts[currentIndex];

        // Handle typing and deleting
        if (!isDeleting && displayText === currentText) {
            // Full text typed - pause before deleting
            timer = setTimeout(() => {
                setIsDeleting(true);
                setTypingSpeed(50); // Faster when deleting
            }, 2000);
        } else if (isDeleting && displayText === '') {
            // Text fully deleted - move to next text
            setIsDeleting(false);
            setTypingSpeed(100); // Normal speed for typing
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
            // Either typing or deleting in progress
            timer = setTimeout(() => {
                setDisplayText((prev) => {
                    if (isDeleting) {
                        // Delete one character
                        return prev.substring(0, prev.length - 1);
                    } else {
                        // Add one character
                        return currentText.substring(0, prev.length + 1);
                    }
                });
            }, typingSpeed);
        }

        // Cleanup timer
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex, texts, typingSpeed]);

    return (
        <section
            id="home"
            className="min-h-[100svh] flex items-center justify-center px-4 relative overflow-hidden"
        >
            {/* Animated background stars/particles - reduced count for mobile */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationName: 'float',
                            animationDuration: `${5 + Math.random() * 10}s`,
                            animationIterationCount: 'infinite',
                        }}
                    />
                ))}
            </div>

            {/* Gradient glow effect */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] opacity-20 blur-3xl rounded-full"
                style={{
                    background:
                        'linear-gradient(45deg, var(--primary), var(--secondary))',
                }}
            />

            <div className="text-center max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
                    Guru Development
                </h1>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                    <p className="text-base sm:text-lg md:text-2xl opacity-90">
                        We craft cutting-edge digital solutions for
                    </p>
                    <p className="h-8 sm:h-10 text-base sm:text-lg md:text-2xl opacity-90 text-blue-300 font-semibold">
                        {displayText}
                        <span className="animate-ping">|</span>
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition text-center"
                    >
                        Get Started
                    </a>
                    <a
                        href="#services"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition backdrop-blur-sm text-center"
                    >
                        Our Services
                    </a>
                </div>

                {/* Scroll indicator - visible on larger screens or when content is taller than viewport */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
                    <span className="text-white/60 text-sm mb-2">Scroll</span>
                    <svg
                        className="w-6 h-6 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
