import React from 'react';
import { Book, Briefcase, Download } from 'lucide-react';

export default function ResumePage() {
    return (
        <div className="flex-1 text-white overflow-y-auto p-6">
            <section id="resume" className="mb-10">
                <h2 className="text-3xl font-bold mb-3">Resume</h2>
                <div className="w-16 h-1 bg-primary-300 mb-6 rounded-full"></div>

                {/* Education and Experience Section */}
                <div className="grid grid-cols-1 gap-12"> {/* Changed from md:grid-cols-2 to grid-cols-1 */}
                    {/* Education Column */}
                    <div>
                         <div className="flex items-center mb-6">
                            <Book className="text-primary-300 size-7 mr-3" />
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>
                        <div className="space-y-8">
                            {/* Education Entry 1 */}
                            <div className="border-l-2 border-primary-300 pl-6 pb-6">
                                <p className="text-sm text-neutral-400">2017 - 2021</p>
                                <h4 className="text-xl font-semibold mb-1">Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)</h4>
                                <p className="text-neutral-300">Nihareeka College Of Management And Information Technology</p>
                                {/* <p className="text-neutral-400 text-sm">[Brief Description/Achievements]</p> */}
                            </div>

                            {/* Education Entry 2 */}
                            <div className="border-l-2 border-primary-300 pl-6">
                                <p className="text-sm text-neutral-400">2015 - 2017</p>
                                <h4 className="text-xl font-semibold mb-1">+2 Science</h4>
                                <p className="text-neutral-300">Greenland International College</p>
                                {/* <p className="text-neutral-400 text-sm">[Brief Description/Achievements]</p> */}
                            </div>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center mb-6">
                            <Briefcase className="text-primary-300 size-7 mr-3" />
                            <h3 className="text-2xl font-semibold">Experience</h3>
                        </div>
                        <div className="space-y-8">
                            {/* Experience Entry 1 */}
                            <div className="border-l-2 border-primary-300 pl-6 pb-6">
                                <p className="text-sm text-primary-300">Aug, 2024 — Present • 10 mos</p>
                                <h4 className="text-xl font-semibold mb-1">Mid-Level Flutter Developer</h4>
                                <p className="text-neutral-300">Tokma Technologies</p>
                                <p className="text-neutral-400 text-sm mb-2">Kathmandu, Nepal</p>
                                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2">
                                    <li>Developed new features and implemented UI designs into code using Flutter.</li>
                                    <li>Identified and resolved bugs, improving app stability and performance.</li>
                                    <li>Wrote clean, maintainable, and testable code following best practices.</li>
                                    <li>Utilization of latest version of support libraries to ensure backend compatibility.</li>
                                    <li>Integrated payment solution like eSewa, for secure and seamless transactions.</li>
                                    <li>Collaborated with backend developers, designers, and cross-functional teams to deliver scalable, high-quality solutions.</li>
                                    <li>Performed code review and deployed the app in Playstore and Appstore.</li>
                                </ul>
                            </div>

                            {/* Experience Entry 2 */}
                            <div className="border-l-2 border-primary-300 pl-6">
                                 <p className="text-sm text-primary-300">May, 2022 — Sep, 2022 • 5 mos</p>
                                <h4 className="text-xl font-semibold mb-1">Flutter Developer Intern</h4>
                                <p className="text-neutral-300">YAJ Tech Pvt. Ltd</p>
                                <p className="text-neutral-400 text-sm mb-2">Kathmandu, Nepal</p>
                                <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2">
                                    <li>Assisted in developing and maintaining Flutter applications, ensuring seamless functionality and user-friendly interfaces.</li>
                                    <li>Supported the implementation of visually appealing UI designs that aligned with client requirements and design principles.</li>
                                    <li>Collaborated with cross-functional teams, including back-end developers and designers, to deliver efficient, high-quality, and scalable solutions.</li>
                                    <li>Gained hands-on experience in debugging, troubleshooting, and refining app features to improve user experience.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Download CV Button */}
                <div className="flex justify-center mt-10">
                    <button
                        className="px-8 py-3 bg-primary-300 text-dark-900 font-semibold rounded-full shadow hover:bg-primary-400 transition duration-300 flex items-center"
                    >
                         <Download className="w-5 h-5 mr-2" />
                        Download CV
                    </button>
                </div>
            </section>
        </div>
    );
}
