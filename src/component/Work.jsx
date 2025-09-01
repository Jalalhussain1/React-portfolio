import React from 'react';
import Work1 from '../assets/work1.png';
import Work2 from '../assets/work2.png';
import Work3 from '../assets/work3.png';
import Work4 from '../assets/work4.png';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptop } from 'react-icons/fa';

function Work() {
    const projects = [
        {
            image: Work1,
            title: "GitHub Repository Search",
            description: "A dynamic web application that allows users to search and explore GitHub repositories. Built with JavaScript, featuring real-time search functionality and responsive design.",
            technologies: ["JavaScript", "HTML", "CSS", "GitHub API"],
            github: "https://github.com/Jalalhussain1/github-repo-Search",
            live: "https://jalalhussain1.github.io/github-repo-Search/",
            category: "Frontend"
        },
        {
            image: Work2,
            title: "Bootstrap Portfolio",
            description: "A modern, responsive portfolio website built with Bootstrap framework. Features clean design, smooth animations, and mobile-first approach.",
            technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
            github: "https://github.com/Jalalhussain1/bootstrap",
            live: "https://jalalhussain1.github.io/bootstrap/",
            category: "Frontend"
        },
        {
            image: Work3,
            title: "JavaScript Stack Application",
            description: "A full-stack JavaScript application demonstrating modern web development practices. Features user authentication, data management, and responsive UI.",
            technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/username/project3",
            live: "https://live-link3.com",
            category: "Full-Stack"
        },
        {
            image: Work4,
            title: "API Integration Project",
            description: "A comprehensive project showcasing API integration and data handling. Demonstrates RESTful API consumption and dynamic content rendering.",
            technologies: ["JavaScript", "REST APIs", "HTML", "CSS"],
            github: "https://github.com/Jalalhussain1/Api-Calling.git",
            live: "https://jalalhussain1.github.io/Api-Calling/",
            category: "Frontend"
        },
    ];

    return (
        <div id="work" className='w-full min-h-screen text-white pt-[80px] relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-20 right-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
                <div className='absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
            </div>

            <div className='max-w-[1200px] mx-auto p-4 sm:p-8 relative z-10'>
                {/* Header Section */}
                <div className='text-center mb-12 sm:mb-16 animate-fade-in-up'>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
                        Featured <span className='text-[#0ef]'>Projects</span>
                    </h2>
                    <div className='w-20 sm:w-24 h-1 bg-[#0ef] mx-auto rounded-full mb-4 sm:mb-6'></div>
                    <p className='text-base sm:text-xl white max-w-2xl mx-auto px-4'>
                        A showcase of my recent work, demonstrating my skills in full-stack development and problem-solving
                    </p>
                </div>

                {/* Projects Grid */}
                <div className='grid md:grid-cols-2 gap-6 sm:gap-8'>
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className='group bg-transparent rounded-xl overflow-hidden border border-[#0ef]/30 hover:border-[#0ef] hover-lift transition-all duration-300 animate-fade-in-up shadow-[0_0_20px_rgba(0,238,255,0.3)] hover:shadow-[0_0_30px_rgba(0,238,255,0.5)]'
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {/* Project Image */}
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500' 
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                
                                {/* Category Badge */}
                                <div className='absolute top-3 sm:top-4 left-3 sm:left-4'>
                                    <span className='px-2 sm:px-3 py-1 bg-[#0ef] text-black text-xs sm:text-sm font-semibold rounded-full shadow-lg'>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className='p-4 sm:p-6'>
                                <h3 className='text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#0ef] transition-colors duration-300'>
                                    {project.title}
                                </h3>
                                
                                <p className='text-white mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base'>
                                    {project.description}
                                </p>

                                {/* Technologies Used */}
                                <div className='mb-4 sm:mb-6'>
                                    <h4 className='text-xs sm:text-sm font-semibold text-[#0ef] mb-2 flex items-center'>
                                        <FaCode className='mr-2' />
                                        Technologies Used
                                    </h4>
                                    <div className='flex flex-wrap gap-1 sm:gap-2'>
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className='px-2 sm:px-3 py-1 bg-transparent text-white text-xs sm:text-sm rounded-full border border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-colors duration-300 shadow-[0_0_10px_rgba(0,238,255,0.2)]'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                                    <a 
                                        href={project.github} 
                                        target='_blank' 
                                        rel='noopener noreferrer' 
                                        className='flex-1 bg-gray-800 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 group/btn text-sm sm:text-base shadow-[0_0_10px_rgba(0,238,255,0.2)] border border-[#0ef]/30 hover:border-[#0ef]'
                                    >
                                        <FaGithub className='group-hover/btn:scale-110 transition-transform duration-300' />
                                        <span>View Code</span>
                                    </a>
                                    <a 
                                        href={project.live} 
                                        target='_blank' 
                                        rel='noopener noreferrer' 
                                        className='flex-1 bg-[#0ef] text-black px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-[#0ef]/80 transition-all duration-300 flex items-center justify-center space-x-2 group/btn text-sm sm:text-base font-semibold shadow-[0_0_15px_rgba(0,238,255,0.4)]'
                                    >
                                        <FaLaptop className='group-hover/btn:scale-110 transition-transform duration-300' />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className='text-center mt-12 sm:mt-16 animate-fade-in-up'>
                    <div className='bg-transparent rounded-xl p-6 sm:p-8 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)]'>
                        <h3 className='text-xl sm:text-2xl font-bold text-white mb-4'>Interested in Working Together?</h3>
                        <p className='text-white mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base'>
                            I'm always open to discussing new opportunities and exciting projects. 
                            Let's create something amazing together!
                        </p>
                        <button 
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className='inline-flex items-center space-x-2 bg-[#0ef] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#0ef]/80 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-[0_0_15px_rgba(0,238,255,0.4)]'
                        >
                            <span>Get In Touch</span>
                            <FaExternalLinkAlt />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
