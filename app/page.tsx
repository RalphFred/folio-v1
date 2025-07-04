import Image from "next/image";
import { Code, Smartphone, Settings, Palette } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex-1 text-white overflow-y-auto">
            <section id="about" className="mb-10">
                <h2 className="text-3xl font-bold mb-3">About Me</h2>
                <div className="w-16 h-1 bg-primary-300 mb-6 rounded-full"></div> {/* Underline */}
                <p className="text-neutral-300 leading-relaxed mb-4">
                    I am Kwaghuter Raphael, a dedicated Frontend Developer passionate about crafting exceptional digital experiences. I specialize in building high-performing, SEO-optimized, and conversion-focused websites and web applications that truly resonate with your audience and drive measurable results.
                </p>
                <p className="text-neutral-300 leading-relaxed mb-4">
                    Using modern tools like React, Next.js, TypeScript, GSAP, and Tailwind CSS, I develop solutions that are not just visually premium, but also intuitive, incredibly fast, and unforgettable. From seamless user interactions to scalable architecture, every line of code is written with precision and purpose.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                    Whether you need a sleek portfolio, a robust SaaS dashboard, or a high-converting e-commerce platform, I focus on delivering:

                    <ul className="list-disc ml-6 mt-2">
                        <li>Clarity: User-friendly interfaces that guide visitors effortlessly.</li>
                        <li>Performance: Blazing-fast load times and smooth functionality.</li>
                        <li>Polish: Meticulous attention to detail for a truly professional feel.</li>
                    </ul>
                </p>

            </section>

            {/* What I'm Doing Section */}
            <section id="what-im-doing" className="mb-10">
                <h2 className="text-3xl font-bold mb-6">What I'm Doing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 2: Web Development */}
                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center">
                            <div className='size-12 min-w-12 rounded-lg bg-dark-400 flex items-center justify-center mr-4'>
                                <Code className="text-primary-300 size-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Web Development</h3>
                                <p className="text-neutral-200 text-sm">
                                    High-quality development of sites at the professional level.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 1: Mobile Apps */}
                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center">
                            <div className='size-12 min-w-12 rounded-lg bg-dark-400 flex items-center justify-center mr-4'>
                                <Smartphone className="text-primary-300 size-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Mobile Apps</h3>
                                <p className="text-neutral-200 text-sm">
                                    Professional development of applications for Android and ios.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Backend Development */}
                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center">
                            <div className='size-12 min-w-12 rounded-lg bg-dark-400 flex items-center justify-center mr-4'>
                                <Settings className="text-primary-300 size-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Backend Development</h3>
                                <p className="text-neutral-200 text-sm">
                                    High-performance backend services designed for scalability and seamless user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: UI/UX Design */}
                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center">
                            <div className='size-12 min-w-12 rounded-lg bg-dark-400 flex items-center justify-center mr-4'>
                                <Palette className="text-primary-300 size-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">UI/UX Design</h3>
                                <p className="text-neutral-200 text-sm">
                                    The most modern and high-quality design made at a professional level.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            {/* Skills Section */}
            <section id="skills" className="mb-10">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <div className="flex overflow-x-auto space-x-6 custom-scrollbar pb-12">
                    {/* Skill Icon: React */}
                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg flex-none w-48 h-48 flex items-center justify-center">
                        <Image src="/react.svg" alt="React icon" width={64} height={64} className="size-24" />
                    </div>

                    {/* Skill Icon: Next.js */}
                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg flex-none w-48 h-48 flex items-center justify-center">
                        <Image src="/next-js.svg" alt="Next.js icon" width={64} height={64} className="size-24" />
                    </div>

                    {/* Skill Icon: React Native */}
                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg flex-none w-48 h-48 flex items-center justify-center">
                        <Image src="/react-native.svg" alt="React Native icon" width={64} height={64} className="size-24" />
                    </div>

                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg flex-none w-48 h-48 flex items-center justify-center">
                        <Image src="/firebase.svg" alt="Firebase icon" width={64} height={64} className="size-24" />
                    </div>

                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg flex-none w-48 h-48 flex items-center justify-center">
                        <Image src="/figma.svg" alt="Figma icon" width={64} height={64} className="size-24" />
                    </div>

                    <div className="bg-dark-300 border border-dark-400 p-6 rounded-lg shadow-lg flex-none w-48 h-48 flex items-center justify-center">
                        <Image src="/typescript.svg" alt="TypeScript icon" width={64} height={64} className="size-24" />
                    </div>
                </div>
            </section>
        </div>
    );
}
