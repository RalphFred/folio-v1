"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'About' },
        { href: '/resume', label: 'Resume' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/playground', label: 'Playground' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-dark-300 border-dark-400 border-l border-b rounded-bl-3xl rounded-tr-3xl flex justify-end space-x-8  p-6 absolute top-0 right-0">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`transition duration-300 ${pathname === link.href ? 'text-primary-200' : 'text-neutral-400 hover:text-white'}`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}