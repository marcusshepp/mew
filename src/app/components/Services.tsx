'use client';

import { useState, useEffect } from 'react';
import {
    FiMonitor,
    FiRefreshCw,
    FiSearch,
    FiServer,
    FiCpu,
    FiChevronDown,
    FiChevronUp,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Service {
    id: number;
    name: string;
    desc: string;
    Icon: IconType;
}

export default function ServiceCards() {
    // Track which card is expanded on mobile
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if we're on mobile on mount and when window resizes
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        // Clean up
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const services: Service[] = [
        {
            id: 1,
            name: 'Modern Web Design',
            desc: "Beautiful, responsive websites that capture your brand's essence and engage your audience.",
            Icon: FiMonitor,
        },
        {
            id: 2,
            name: 'Website Modernization',
            desc: 'Transform your existing website with modern technologies for better performance and user experience.',
            Icon: FiRefreshCw,
        },
        {
            id: 3,
            name: 'SEO & Digital Presence',
            desc: 'Boost your visibility with data-driven SEO strategies and content optimization.',
            Icon: FiSearch,
        },
        {
            id: 4,
            name: 'Hosting & Maintenance',
            desc: 'Secure, reliable hosting with continuous monitoring and maintenance.',
            Icon: FiServer,
        },
        {
            id: 5,
            name: 'Business Automation',
            desc: 'Streamline your operations with custom automation solutions.',
            Icon: FiCpu,
        },
        {
            id: 6,
            name: 'AI Integration',
            desc: 'Leverage cutting-edge AI to enhance your business processes and customer experience.',
            Icon: FiCpu,
        },
    ];

    // Toggle expanded card on mobile
    const toggleExpand = (id: number) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => {
                const Icon = service.Icon;
                const isExpanded = expandedId === service.id;

                return (
                    <div
                        key={service.id}
                        className={`relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300 ease-in-out
                            ${isExpanded ? 'scale-105 shadow-lg z-10' : ''}
                            ${isMobile ? 'p-4' : 'p-5 md:p-6 hover:scale-102 hover:shadow-lg'}`}
                        style={{
                            background:
                                'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))',
                            boxShadow: '0 4px 20px rgba(31, 38, 135, 0.15)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                        onClick={() => isMobile && toggleExpand(service.id)}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-blue-500/20">
                                    <Icon
                                        className="w-5 h-5 text-blue-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-white leading-tight">
                                    {service.name}
                                </h3>
                            </div>

                            {/* Mobile-only expand indicator */}
                            {isMobile && (
                                <button
                                    aria-label={
                                        isExpanded
                                            ? 'Collapse details'
                                            : 'Expand details'
                                    }
                                    className="p-1 rounded-full bg-blue-500/10 text-blue-400"
                                >
                                    {isExpanded ? (
                                        <FiChevronUp className="w-4 h-4" />
                                    ) : (
                                        <FiChevronDown className="w-4 h-4" />
                                    )}
                                </button>
                            )}
                        </div>

                        <div
                            className={`mt-3 transition-all duration-300 ease-in-out
                                ${isMobile && !isExpanded ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-96 opacity-100'}`}
                        >
                            <p className="text-gray-300">{service.desc}</p>
                            <button className="mt-3 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors">
                                Learn more
                            </button>
                        </div>

                        {/* Mobile preview text when collapsed */}
                        {isMobile && !isExpanded && (
                            <p className="mt-2 text-gray-400 text-sm line-clamp-2">
                                {service.desc}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
