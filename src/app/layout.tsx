import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Guru Development',
    description:
        'Web development solutions for small businesses including website creation, SEO, and AI integrations.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={montserrat.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
