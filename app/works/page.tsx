import React from 'react';
import Image from 'next/image';

const works =[
    {
        src: "/images/popout.png", 
        href: "https://www.popouttickets.com/", 
        title: "Popout Tickets", 
        description: "A platform for sales of tickets for events"
    },
    // Add more work objects here
    {
        src: "/images/chris.png", 
        href: "#", 
        title: "Chris Portfolio website", 
        description: "Description for project two"
    },
    {
        src: "/images/enesee.png", 
        href: "#", 
        title: "Enesee Clone", 
        description: "Description for project three"
    },
    {
        src: "/images/ochexagon.png", 
        href: "#", 
        title: "OC Hexagon", 
        description: "Description for project four"
    },
]

export default function WorksPage() {
    return (
        <div className="flex-1 text-white overflow-y-auto  lg:p-6">
            <section id="works" className="mb-10">
                <h2 className="text-3xl font-bold mb-3">My Works</h2>
                <div className="w-16 h-1 bg-primary-300 mb-6 rounded-full"></div>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    works.map((work, index) => (
                       <a 
                            key={index} 
                            href={work.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-dark-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                       >
                            <div className="relative w-full bg-gray-800">
                                <Image 
                                    src={work.src} 
                                    alt={work.title} 
                                    width={1000}
                                    height={1000}
                                    className='w-full'
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-primary-200">{work.title}</h3>
                                <p className="text-gray-400 text-sm">{work.description}</p>
                            </div>
                       </a>  
                    ))
                }
               </div>
            </section>
        </div>
    );
}
