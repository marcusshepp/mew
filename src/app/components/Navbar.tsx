import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full p-4 bg-black bg-opacity-75 text-white z-20">
            <ul className="flex space-x-4 max-w-4xl mx-auto">
                <li>
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/services" className="hover:underline">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
