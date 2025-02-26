'use client';

import { useEffect, useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Close menu when resizing to desktop width
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close menu after clicking
    };

    return (
        <nav
            className={`fixed top-0 w-full z-20 transition-all duration-500 ease-in-out ${
                isVisible || isMenuOpen
                    ? 'bg-black bg-opacity-90 backdrop-blur-sm'
                    : 'bg-transparent'
            }`}
        >
            <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
                <div
                    className="text-white flex items-center cursor-pointer z-30"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => scrollToSection('hero')}
                >
                    <div
                        className={`transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 120 40"
                            width="120"
                            height="40"
                        >
                            {/* Background cosmic gradient */}
                            <defs>
                                <linearGradient
                                    id="cosmicGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#1e3a8a" />
                                    <stop offset="100%" stopColor="#6b21a8" />
                                </linearGradient>
                                <filter
                                    id="glow"
                                    x="-20%"
                                    y="-20%"
                                    width="140%"
                                    height="140%"
                                >
                                    <feGaussianBlur
                                        stdDeviation="2"
                                        result="blur"
                                    />
                                    <feComposite
                                        in="SourceGraphic"
                                        in2="blur"
                                        operator="over"
                                    />
                                </filter>
                            </defs>

                            {/* Circular orbit */}
                            <ellipse
                                cx="22"
                                cy="20"
                                rx="18"
                                ry="18"
                                fill="none"
                                stroke="url(#cosmicGradient)"
                                strokeWidth="1.5"
                                opacity="0.7"
                                className={`${isHovered ? 'animate-pulse' : ''}`}
                            />

                            {/* Guru symbol (stylized figure in meditation pose) */}
                            <path
                                d="M22 10 L22 30 M16 24 Q22 30 28 24"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                                filter="url(#glow)"
                            />

                            {/* Digital elements (circuit-like paths) */}
                            <path
                                d="M35 20 L45 20 M45 20 L55 14 M45 20 L55 26"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                opacity="0.9"
                            />

                            {/* Text */}
                            <text
                                x="55"
                                y="18"
                                fontFamily="Montserrat, Arial"
                                fontSize="12"
                                fontWeight="600"
                                fill="#ffffff"
                            >
                                GURU
                            </text>
                            <text
                                x="55"
                                y="28"
                                fontFamily="Montserrat, Arial"
                                fontSize="7"
                                fontWeight="300"
                                fill="#ffffff"
                                letterSpacing="0.5"
                            >
                                DEVELOPMENT
                            </text>

                            {/* Small stars/dots */}
                            <circle
                                cx="12"
                                cy="14"
                                r="1"
                                fill="#ffffff"
                                className={`${isHovered ? 'animate-ping' : ''}`}
                            />
                            <circle
                                cx="32"
                                cy="26"
                                r="1"
                                fill="#ffffff"
                                className={`${isHovered ? 'animate-ping' : ''}`}
                            />
                            <circle cx="16" cy="30" r="0.7" fill="#ffffff" />
                            <circle cx="29" cy="13" r="0.7" fill="#ffffff" />
                        </svg>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul
                    className={`hidden md:flex space-x-8 text-white transition-opacity duration-500 ${
                        isVisible
                            ? 'opacity-100'
                            : 'opacity-80 hover:opacity-100'
                    }`}
                >
                    {['home', 'services', 'testimonials', 'contact'].map(
                        (section) => (
                            <li key={section}>
                                <button
                                    onClick={() => scrollToSection(section)}
                                    className="relative text-lg font-light tracking-wider hover:text-[var(--primary)] group"
                                >
                                    {section.charAt(0).toUpperCase() +
                                        section.slice(1)}
                                    <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </button>
                            </li>
                        )
                    )}
                </ul>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-white z-30 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <FiX className="w-6 h-6" />
                    ) : (
                        <FiMenu className="w-6 h-6" />
                    )}
                </button>

                {/* Mobile menu overlay */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-90 backdrop-blur-lg z-20 md:hidden transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col justify-center items-center h-full">
                        <ul className="flex flex-col items-center space-y-8">
                            {[
                                'home',
                                'services',
                                'testimonials',
                                'contact',
                            ].map((section) => (
                                <li key={section}>
                                    <button
                                        onClick={() => scrollToSection(section)}
                                        className="text-2xl font-light text-white hover:text-blue-400 transition-colors px-4 py-2"
                                    >
                                        {section.charAt(0).toUpperCase() +
                                            section.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Social links in mobile menu */}
                        <div className="flex space-x-6 mt-12">
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
