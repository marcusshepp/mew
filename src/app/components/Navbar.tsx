'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-20 transition-all duration-500 ease-in-out ${
                isVisible ? 'bg-black bg-opacity-90' : 'bg-transparent'
            }`}
        >
            <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
                {/* Meditating Figure */}
                <div className="text-white opacity-80">
                    <span
                        className="text-2xl"
                        role="img"
                        aria-label="Meditating Guru"
                    >
                        🧘
                    </span>
                </div>

                {/* Links */}
                <ul
                    className={`flex space-x-8 text-white ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-500`}
                >
                    <li>
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="relative text-lg font-light tracking-wider hover:text-gray-300 group"
                        >
                            Home
                            <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="relative text-lg font-light tracking-wider hover:text-gray-300 group"
                        >
                            Services
                            <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="relative text-lg font-light tracking-wider hover:text-gray-300 group"
                        >
                            Contact
                            <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
