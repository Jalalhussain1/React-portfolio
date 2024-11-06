import React from 'react';
import Work1 from '../assets/Work1.png';
import Work2 from '../assets/Work2.png';
import Work3 from '../assets/Work3.png';

function Work() {
    const projects = [
        {
            image: Work1,
            title: "Javascript Application",
            description: "",
            github: "https://github.com/Jalalhussain1/github-repo-Search",
            live: "https://jalalhussain1.github.io/github-repo-Search/"
        },
        {
            image: Work2,
            title: "Bootstrap Application",
            
            github: "https://github.com/Jalalhussain1/bootstrap",
            live: "https://jalalhussain1.github.io/bootstrap/"
        },
        {
            image: Work3,
            title: "Full Stack Application",
            description: ".",
            github: "https://github.com/username/project3",
            live: "https://live-link3.com"
        }
    ];

    return (
        <div name='Work' className='bg-[#0a192f] w-full md:h-full text-gray-300 py-16'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        My Work
                    </p>
                    <p className='py-6'>Here are some projects I have worked on:</p>
                </div>

                {/* Responsive Grid Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 '>
                    {projects.map((project, index) => (
                        <div key={index} className=' shadow-lg shadow-[#040c16] group container rounded-md mx-auto p-4 bg-white'>
                            <div className='relative overflow-hidden'>
                                <img src={project.image} alt={project.title} className='rounded-md duration-200 hover:scale-110 object-cover w-full h-full max-h-32' />
                            </div>
                            <p className='text-center mt-4 font-semibold text-black'>{project.title}</p>
                            <p className='text-center min-h-20 mt-2 text-black'>{project.description}</p>
                            <div className='flex justify-center gap-4 mt-4'>
                                <a href={project.github} target='_blank' rel='noopener noreferrer' className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 ease-in-out w-1/2 text-center'>
                                    GitHub
                                </a>
                                <a href={project.live} target='_blank' rel='noopener noreferrer' className='bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all duration-200 ease-in-out w-1/2 text-center'>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
