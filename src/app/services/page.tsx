export default function Services() {
    const services = [
        { id: 1, name: 'Web Design', desc: 'Beautiful, responsive designs.' },
        { id: 2, name: 'Development', desc: 'Custom web apps built to scale.' },
        { id: 3, name: 'SEO', desc: 'Rank higher on search engines.' },
    ];

    return (
        <main className="min-h-screen p-8">
            <section className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <ul className="grid gap-4">
                    {services.map((service) => (
                        <li key={service.id} className="p-4 border rounded">
                            <h2 className="text-xl font-semibold">
                                {service.name}
                            </h2>
                            <p>{service.desc}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
