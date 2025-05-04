"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, FileTextIcon } from 'lucide-react';

export default function MobileNav() {
    const pathname = usePathname();

    const links = [
        { href: '/resume.pdf', label: <FileTextIcon size={20} />, download: true }, 
        { href: '/', label: 'About' },
        { href: '/works', label: 'Works' },
        { href: '/playground', label: 'Playground' },
        { href: '/contact', label: 'Contact' },
        
    ];

    return (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#121212] px-6 py-3 md:px-10 lg:py-4 rounded-full shadow-md border border-neutral-800 flex items-center md:hidden">
            {/* Nav Links */}
            <div className="flex items-center gap-4">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`transition duration-300 ${
                            pathname === link.href
                                ? 'text-primary-200 font-semibold'
                                : 'text-neutral-400 hover:text-white'
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
