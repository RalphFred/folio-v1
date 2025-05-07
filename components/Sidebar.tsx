import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="sidebar hidden xl:flex flex-col items-center w-[280px] shrink-0">
            <div className='flex flex-col items-center'>
                <div className="flex justify-center p-4 image-bg rounded-3xl w-[160px] mb-6 relative">
                    <Image
                        src="/images/avatar-tp.png"
                        alt="Avatar"
                        width={200}
                        height={200}
                        className="avatar"
                    />
                    <span className="absolute bottom-0 right-0 flex size-3">
                        <span className="custom-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                </div>
                <h2 className='text-2xl font-semibold whitespace-nowrap mb-4'>Kwaghuter Raphael</h2>
                <p className='text-xs px-3 py-1 rounded-lg bg-[#2c2c2c]'>Frontend Developer</p>
            </div>

            <div className="w-[90%] border-t border-[#333] my-6" />

            <div className='flex flex-col gap-3 w-full'>

                {/* Email */}
                <Link
                    href="mailto:raphaelgbaorun@gmail.com"
                    className="flex items-center gap-4 w-full hover:opacity-90 transition"
                >
                    <div className='size-12 min-w-12 rounded-xl bg-neutral-800 flex items-center justify-center'>
                        <Mail size={24} className='text-primary-200' />
                    </div>
                    <div className='flex-1 text-sm overflow-hidden'>
                        <span className='block text-xs text-neutral-400'>EMAIL</span>
                        <span className='block truncate whitespace-nowrap'>raphaelgbaorun@gmail.com</span>
                    </div>
                </Link>

                {/* Phone (WhatsApp link) */}
                <Link
                    href="https://wa.me/2347040944615"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 w-full hover:opacity-90 transition"
                >
                    <div className='size-12 min-w-12 rounded-xl bg-neutral-800 flex items-center justify-center'>
                        <Phone size={24} className='text-primary-200' />
                    </div>
                    <div className='flex-1 text-sm overflow-hidden'>
                        <span className='block text-xs text-neutral-400'>PHONE</span>
                        <span className='block truncate whitespace-nowrap'>+234 704 094 4615</span>
                    </div>
                </Link>

                {/* Location (static) */}
                <div className="flex items-center gap-4 w-full">
                    <div className='size-12 min-w-12 rounded-xl bg-neutral-800 flex items-center justify-center'>
                        <MapPin size={24} className='text-primary-200' />
                    </div>
                    <div className='flex-1 text-sm overflow-hidden'>
                        <span className='block text-xs text-neutral-400'>LOCATION</span>
                        <span className='block truncate whitespace-nowrap'>Lagos, Nigeria</span>
                    </div>
                </div>
                
                {/* <div className='flex justify-center items-center gap-8 mt-4'>
                    <Link href="https://www.linkedin.com/in/kwaghuter-raphael/" target="_blank" >
                         <Linkedin size={24} className='text-primary-200' />
                    </Link>
                    <Link href="http://github.com/RalphFred" target="_blank" >
                        <Github size={24} className='text-primary-200' />
                    </Link>
                    <Link href="https://www.instagram.com/kwaghuter_r/" target="_blank" >
                        <Instagram size={24} className='text-primary-200' />
                    </Link>
                </div> */}

                <div className='flex justify-center items-center gap-8 mt-4'>
                    <Link href="https://www.linkedin.com/in/kwaghuter-raphael/" target="_blank" >
                        <Image
                            src="/icons/linkedin.svg"
                            alt="Avatar"
                            width={24}
                            height={24}
                            className=""
                        />
                    </Link>
                    <Link href="http://github.com/RalphFred" target="_blank" >
                        <Image
                            src="/icons/github.svg"
                            alt="Avatar"
                            width={24}
                            height={24}
                            className=""
                        />
                    </Link>
                    <Link href="https://www.instagram.com/kwaghuter_r/" target="_blank" >
                        <Image
                            src="/icons/instagram.svg"
                            alt="Avatar"
                            width={24}
                            height={24}
                            className=""
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
