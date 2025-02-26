
import MinimalThreeBackground from './components/MinimalBackground';
import TestimonialCarousel from './components/TestimonialCarousel';
import ContactForm from './components/ContactForm';
import ResponsiveHero from './components/Hero';
import ServiceCards from './components/Services';

interface Testimonial {
    id: number;
    name: string;
    company: string;
    quote: string;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Jane Smith',
        company: 'Acme Solutions',
        quote: 'Guru Development transformed our online presence. Their modern approach and attention to detail led to a 40% increase in our conversion rate.',
        image: '/api/placeholder/80/80',
    },
    {
        id: 2,
        name: 'Michael Johnson',
        company: 'TechInnovate',
        quote: 'Working with Guru Development was seamless. They understood our vision and delivered a website that exceeded our expectations, all while staying on budget.',
        image: '/api/placeholder/80/80',
    },
    {
        id: 3,
        name: 'Sarah Williams',
        company: 'Greener Pastures',
        quote: 'The AI integration Guru Development implemented saves us hours every week. Their technical expertise combined with business understanding is rare and valuable.',
        image: '/api/placeholder/80/80',
    },
];



export default function Home() {
    

    return (
        <main className="min-h-screen text-white">
            <MinimalThreeBackground />

            {/* Hero Section */}
            <ResponsiveHero />

            {/* Services Section */}
            <section id="services" className="py-12 sm:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Our Services
                    </h2>
                    <ServiceCards />
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Client Testimonials
                    </h2>

                    {/* Desktop Grid Layout */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-500 ease-in-out relative overflow-hidden group"
                                style={{
                                    background:
                                        'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                                    boxShadow:
                                        '0 8px 32px rgba(31, 38, 135, 0.15)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-2 -left-2 text-4xl text-blue-400 opacity-30 group-hover:opacity-60 transition-opacity">
                                    &ldquo;
                                </div>

                                <div className="relative z-10">
                                    {/* Quote */}
                                    <p className="text-gray-300 mb-6 italic">
                                        &ldquo;{testimonial.quote}&ldquo;
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

                                {/* Decorative elements */}
                                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Testimonial Carousel */}
                    <div className="md:hidden">
                        <TestimonialCarousel testimonials={testimonials} />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Get in Touch
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Contact Information */}
                        <div className="text-gray-300 space-y-6">
                            <p className="text-xl">
                                Ready to take your digital presence to the next
                                level? We&apos;d love to hear about your
                                project.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">
                                            Email Us
                                        </h3>
                                        <p className="text-blue-400">
                                            info@gurudevelopment.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">
                                            Call Us
                                        </h3>
                                        <p className="text-purple-400">
                                            (248) 798-5570
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">
                                            Social Media
                                        </h3>
                                        <div className="flex space-x-4 mt-2">
                                            <a
                                                href="#"
                                                className="text-white hover:text-blue-400 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-white hover:text-blue-400 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-white hover:text-blue-400 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="text-white hover:text-blue-400 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="py-6">
                                <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Our Process
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 mr-3 flex items-center justify-center text-sm">
                                            1
                                        </span>
                                        Initial consultation to understand your
                                        needs
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 mr-3 flex items-center justify-center text-sm">
                                            2
                                        </span>
                                        Project proposal and scope definition
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 mr-3 flex items-center justify-center text-sm">
                                            3
                                        </span>
                                        Design and development phase
                                    </li>
                                    <li className="flex items-center text-gray-300">
                                        <span className="inline-block w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 mr-3 flex items-center justify-center text-sm">
                                            4
                                        </span>
                                        Testing, launch, and ongoing support
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-60 h-60 rounded-full bg-purple-500/5 blur-3xl"></div>
            </section>
        </main>
    );
}
