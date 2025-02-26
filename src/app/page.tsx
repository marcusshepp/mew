import {
    FiMonitor,
    FiRefreshCw,
    FiSearch,
    FiServer,
    FiCpu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import MinimalThreeBackground from './components/MinimalBackground';

// Define the service type
interface Service {
    id: number;
    name: string;
    desc: string;
    Icon: IconType;
}

export default function Home() {
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

    return (
        <main className="min-h-screen text-white">
            <MinimalThreeBackground />

            {/* Hero Section */}
            <section
                id="hero"
                className="min-h-screen flex items-center justify-center px-4"
            >
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Guru Development
                    </h1>
                    <div className="space-y-4 text-lg md:text-2xl mb-12">
                        <p className="opacity-90">
                            We craft cutting-edge digital solutions for
                            forward-thinking small businesses.
                        </p>
                        <p className="opacity-90">
                            Your vision, powered by modern technology.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition"
                        >
                            Get Started
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition backdrop-blur-sm"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Our Services
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const Icon = service.Icon;
                            return (
                                <div
                                    key={service.id}
                                    className="p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-500 ease-in-out"
                                    style={{
                                        background:
                                            'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                                        boxShadow:
                                            '0 8px 32px rgba(31, 38, 135, 0.15)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <Icon className="w-8 h-8 mb-4 text-blue-400" />
                                    <h3 className="text-xl font-semibold mb-3 text-white">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-300">
                                        {service.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
