'use client';

import { useState, useEffect, useMemo } from 'react';

export default function ResponsiveHero() {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const texts = useMemo(
        () => [
            'small businesses.',
            'startups.',
            'online growth.',
            'digital presence.',
            'wizardry.',
        ],
        []
    );

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentText = texts[currentIndex];

        if (!isDeleting && displayText === currentText) {
            timer = setTimeout(() => {
                setIsDeleting(true);
                setTypingSpeed(50);
            }, 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTypingSpeed(100);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
            timer = setTimeout(() => {
                setDisplayText((prev) => {
                    if (isDeleting) {
                        return prev.substring(0, prev.length - 1);
                    } else {
                        return currentText.substring(0, prev.length + 1);
                    }
                });
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex, texts, typingSpeed]);

    return (
        <section
            id="home"
            className="min-h-[100svh] flex items-center justify-center px-4 relative overflow-hidden"
        >
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
            </div>
        </section>
    );
}
