"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, FileTextIcon } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'About' },
        { href: '/works', label: 'Works' },
        { href: '/playground', label: 'Playground' },
        { href: '/contact', label: 'Contact' },
        { href: '/resume.pdf', label: <FileTextIcon size={20} />, download: true }, // Added resume download link
    ];

    return (
        <nav className="bg-dark-300 border-dark-400 border-l border-b rounded-bl-3xl rounded-tr-3xl hidden md:flex justify-end space-x-12  p-6 absolute top-0 right-0">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`transition duration-300 ${pathname === link.href ? 'text-primary-200' : 'text-neutral-400 hover:text-white'}`}
                    download={link.download} // Add download attribute if present
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
