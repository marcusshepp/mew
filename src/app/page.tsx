import ThreeBackground from './components/ThreeBackground';

export default function Home() {
    const services = [
        { id: 1, name: 'Web Design', desc: 'Beautiful, responsive designs.' },
        { id: 2, name: 'Development', desc: 'Custom web apps built to scale.' },
        { id: 3, name: 'SEO', desc: 'Rank higher on search engines.' },
        { id: 4, name: 'Automation', desc: 'Earn more by doing less.' },
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Luna Starlight',
            text: 'Guru Development launched my small biz into orbit—stunning website, stellar service!',
        },
        {
            id: 2,
            name: 'Nebula Nova',
            text: 'Their cosmic designs and swift development turned my vision into a galactic masterpiece.',
        },
        {
            id: 3,
            name: 'Astro Blaze',
            text: 'SEO that rocketed my site to the top—Guru Development is out of this world!',
        },
    ];

    return (
        <main className="relative bg-black text-white">
            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center"
            >
                <ThreeBackground />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        Guru Development
                    </h1>
                    <div className="space-y-4 text-lg md:text-2xl font-light">
                        <p className="opacity-90">
                            We whip up slick websites for small biz wizards.
                        </p>
                        <p className="opacity-90">
                            Your online glow-up, coded with swagger.
                        </p>
                        <p className="opacity-90">
                            Digital solutions that vibe with your hustle.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="mt-8 inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                    >
                        Get Started
                    </a>
                </div>
                <div className="absolute inset-0 bg-black opacity-20 z-0" />
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        Services
                    </h2>
                    <ul className="grid gap-8 md:grid-cols-3">
                        {services.map((service) => (
                            <li
                                key={service.id}
                                className="p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out"
                                style={{
                                    backgroundColor: '#ffffff1c',
                                    boxShadow:
                                        '0 10px 20px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)',
                                    animation: 'float 4s ease-in-out infinite',
                                }}
                            >
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {service.name}
                                </h3>
                                <p className="opacity-80 text-gray-200">
                                    {service.desc}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        Testimonials
                    </h2>
                    <ul className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <li
                                key={testimonial.id}
                                className="p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out"
                                style={{
                                    backgroundColor: '#ffffff1c',
                                    boxShadow:
                                        '0 10px 20px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)',
                                    animation: 'float 4s ease-in-out infinite',
                                }}
                            >
                                <p className="text-gray-200 mb-4 opacity-80">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <p className="text-white font-semibold">
                                    - {testimonial.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        Contact
                    </h2>
                    <div className="max-w-md mx-auto bg-gray-900 bg-opacity-70 rounded-xl shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out">
                        <form className="space-y-6 text-left">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-white mb-2 opacity-80"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 rounded-lg bg-gray-900 bg-opacity-50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-white mb-2 opacity-80"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 rounded-lg bg-gray-900 bg-opacity-50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-white mb-2 opacity-80"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full p-3 rounded-lg bg-gray-900 bg-opacity-50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white h-32 resize-none"
                                    placeholder="Your message"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
                            >
                                Launch Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
