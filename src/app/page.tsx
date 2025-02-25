import ThreeBackground from './components/ThreeBackground';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black text-white flex items-center justify-center">
            {/* Three.js Background */}
            <ThreeBackground />

            {/* Hero Content */}
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
                    href="/services"
                    className="mt-8 inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                >
                    Get Started
                </a>
            </div>

            {/* Optional overlay for contrast */}
            <div className="absolute inset-0 bg-black opacity-20 z-0" />
        </main>
    );
}
