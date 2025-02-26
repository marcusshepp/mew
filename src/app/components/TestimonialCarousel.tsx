'use client';

import { useState, useEffect, useRef } from 'react';

interface TestimonialProps {
    testimonials: {
        id: number;
        name: string;
        company: string;
        quote: string;
        image?: string;
    }[];
}

export default function TestimonialCarousel({
    testimonials,
}: TestimonialProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Auto-rotate testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Update scroll position when currentIndex changes
    useEffect(() => {
        if (sliderRef.current) {
            const scrollAmount = currentIndex * (320 + 16); // width + gap
            sliderRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    // Handle manual navigation
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Handle touch/scroll events to update current index
    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollPosition = sliderRef.current.scrollLeft;
            const itemWidth = 336; // 320px + 16px gap
            const newIndex = Math.round(scrollPosition / itemWidth);

            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        }
    };

    return (
        <div className="relative">
            {/* Testimonial Slider */}
            <div
                ref={sliderRef}
                className="overflow-x-auto pb-8 snap-x snap-mandatory flex space-x-4 scrollbar-hide"
                onScroll={handleScroll}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="snap-center shrink-0 w-80 p-6 rounded-xl backdrop-blur-sm"
                        style={{
                            background:
                                'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        {/* Quote Icon */}
                        <div className="text-3xl text-blue-400 opacity-30 mb-2">
                            &ldquo;
                        </div>

                        {/* Quote */}
                        <p className="text-gray-300 mb-6 italic">
                            {testimonial.quote}&ldquo;
                        </p>

                        {/* Client Info */}
                        <div className="flex items-center mt-4">
                            {testimonial.image && (
                                <div className="mr-4 rounded-full overflow-hidden border-2 border-blue-400 p-0.5">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                </div>
                            )}
                            <div>
                                <h4 className="font-bold text-white">
                                    {testimonial.name}
                                </h4>
                                <p className="text-sm text-blue-400">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentIndex === index
                                ? 'bg-blue-400 w-4'
                                : 'bg-white opacity-50'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Navigation (optional) */}
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-70 hover:opacity-100 transition"
                onClick={() =>
                    setCurrentIndex((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                }
                aria-label="Previous testimonial"
            >
                &lt;
            </button>
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center opacity-70 hover:opacity-100 transition"
                onClick={() =>
                    setCurrentIndex((prev) =>
                        prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                }
                aria-label="Next testimonial"
            >
                &gt;
            </button>
        </div>
    );
}
