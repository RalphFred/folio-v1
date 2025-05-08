'use client';

import React, { FormEvent, useState } from 'react';
import { Send } from 'lucide-react'; // Import the Send icon
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast
import Link from 'next/link';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isSubmitting) return;

        const form = event.currentTarget; // ✅ Fix: capture form reference early

        const formData = new FormData(form);
        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const subject = formData.get('subject')?.toString().trim();
        const message = formData.get('message')?.toString().trim();

        if (!name || !email || !subject || !message) {
            toast.error('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response.ok) {
                toast.success('Boom! Your message is in — Raphael will get back to you shortly. Sit tight, excellence is on the way.');
                form.reset();
            } else {
                const data = await response.json();
                toast.error(data.message || 'Failed to send message.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }

        console.log('Form submitted:', { name, email, subject, message });
    };



    return (

        <div className="flex-1 text-white overflow-y-auto">
            <Toaster /> {/* Add Toaster component here */}
            <section id="contact" className="mb-10">
                <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
                <div className="w-16 h-1 bg-primary-300 mb-6 rounded-full"></div>

                {/* Google Map */}
                {/* <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1317972314873!2d3.3481138748698465!3d6.504995593487277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3d1128a477%3A0x7950266f39268a83!2s33%20Adegoke%20St%2C%20Ikate%2C%20Lagos%20101241%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sch!4v1745786446624!5m2!1sen!2sch"
                        width="100%"
                        height="350"
                        style={{ border: '0', filter: 'invert(90%)' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div> */}

                <div className="mb-10">
                    <Link
                        href="https://cal.com/kwaghuter-gbaorun-tyxu3t" // 🔁 Replace with your actual cal.com link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-dark-300 font-semibold rounded-xl border border-dark-400 shadow flex items-center justify-center transition duration-300 text-primary-300"
                    >
                        Book a Meeting with Me
                    </Link>
                </div>

                <div className='flex items-center gap-4 mb-10'>
                    <span className='flex-1 h-[2px] rounded-full bg-dark-400'></span>
                    <span>OR</span>
                    <span className='flex-1 h-[2px] rounded-full bg-dark-400'></span>
                </div>


                {/* Contact Form */}
                <h2 className="text-3xl font-bold mb-6">Shoot Me a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[1px]">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary-300"
                            required // Added required attribute
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary-300"
                            required // Added required attribute
                        />
                    </div>
                    <div className='px-[1px] space-y-6'>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary-300"
                            required // Added required attribute
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary-300"
                            required // Added required attribute
                        ></textarea>
                    </div>
                    {/* Button container aligned to the right */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-3 bg-dark-300 font-semibold rounded-xl border border-dark-400 shadow flex items-center justify-center transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-400'
                                } text-primary-300`}
                        >
                            {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5 mr-2 text-primary-300" /> Send Message</>}
                        </button>

                    </div>
                </form>
            </section>
        </div>
    );
}
