"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export default function Topbar() {
    const [showContacts, setShowContacts] = useState(false);

    const toggleContacts = () => {
        setShowContacts(!showContacts);
    };

    return (
        <div className="flex xl:hidden bg-dark-300 p-4 rounded-xl mb-4 flex-col relative">
            {/* Top section: Avatar, Name, Title, and Toggle Button */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex justify-center p-4 image-bg rounded-3xl w-[100px] sm:w-[140px] relative">
                    <Image
                        src="/images/avatar-tp.png"
                        alt="Avatar"
                        width={170}
                        height={170}
                        className="avatar"
                    />
                    <span className="absolute bottom-0 right-0 flex size-3">
                        <span className="custom-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                </div>
                    {/* Name and Title */}
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <h2 className='text-xl sm:text-3xl font-semibold whitespace-nowrap'>Kwaghuter Raphael</h2>
                        <p className='text-sm sm:text-base px-2 py-[2px] rounded-md bg-[#2c2c2c] w-fit'>Frontend Developer</p>
                    </div>
                </div>

                {/* Toggle Button */}
                <button 
                    onClick={toggleContacts}
                    className="flex items-center bg-dark-400 text-sm font-semibold py-2 px-4 rounded-md hover:bg-primary-400 transition-colors duration-200 absolute top-0 right-0"
                >
                    <span className="hidden sm:inline">
                    Show Contacts
                    </span>
                     {showContacts ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                </button>
            </div>

            {/* Collapsible Contact Details and Social Links */}
            {showContacts && (
                <div className="flex flex-col w-full mt-4">
                    <div className="w-full border-t border-[#333] my-4" />

                     {/* Contact Info Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>

                        {/* Email */}
                        <a
                            href="mailto:raphaelgbaorun@gmail.com"
                            className="flex items-center gap-4 w-full hover:opacity-90 transition bg-neutral-800 p-3 rounded-lg"
                        >
                            <div className='size-10 min-w-10 rounded-xl bg-dark-300 flex items-center justify-center'>
                                <Mail size={20} className='text-primary-200' />
                            </div>
                            <div className='flex-1 text-sm overflow-hidden'>
                                <span className='block text-xs text-neutral-400'>EMAIL</span>
                                <span className='block truncate whitespace-nowrap'>raphaelgbaorun@gmail.com</span>
                            </div>
                        </a>

                        {/* Phone (WhatsApp link) */}
                        <a
                            href="https://wa.me/2347040944615"
                            target="_blank"
                            rel="noopener noreferrer"
                             className="flex items-center gap-4 w-full hover:opacity-90 transition bg-neutral-800 p-3 rounded-lg"
                        >
                            <div className='size-10 min-w-10 rounded-xl bg-dark-300 flex items-center justify-center'>
                                <Phone size={20} className='text-primary-200' />
                            </div>
                            <div className='flex-1 text-sm overflow-hidden'>
                                <span className='block text-xs text-neutral-400'>PHONE</span>
                                <span className='block truncate whitespace-nowrap'>+234 704 094 4615</span>
                            </div>
                        </a>

                        {/* Location (static) */}
                        <div className="flex items-center gap-4 w-full bg-neutral-800 p-3 rounded-lg">
                            <div className='size-10 min-w-10 rounded-xl bg-dark-300 flex items-center justify-center'>
                                <MapPin size={20} className='text-primary-200' />
                            </div>
                            <div className='flex-1 text-sm overflow-hidden'>
                                <span className='block text-xs text-neutral-400'>LOCATION</span>
                                <span className='block truncate whitespace-nowrap'>Lagos, Nigeria</span>
                            </div>
                        </div>

                    </div>
                    
                    {/* Social Links */}
                     <div className='flex justify-center items-center gap-8'>
                        <Link href="https://www.linkedin.com/in/kwaghuter-raphael/" target="_blank" >
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <Link href="http://github.com/RalphFred" target="_blank" >
                            <Image
                                src="/icons/github.svg"
                                alt="Github"
                                width={24}
                                height={24}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <Link href="https://www.instagram.com/kwaghuter_r/" target="_blank" >
                            <Image
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                width={24}
                                height={24}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        {/* Assuming you have these icons and links */}
                         <Link href="#" target="_blank" >
                            <Image
                                src="/icons/twitter.svg"
                                alt="Twitter"
                                width={24}
                                height={24}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                         <Link href="#" target="_blank" >
                            <Image
                                src="/icons/globe.svg"
                                alt="Website"
                                width={24}
                                height={24}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                    </div>

                </div>
            )}
        </div>
    );
}
