import React from 'react';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/Javascript.png';
import GitHub from '../assets/GitHub.png';
import Node from '../assets/Node.png';
import Tailwind from '../assets/TailWind.png';
import Postgres from '../assets/Postgres.png';
import ReactIcon from '../assets/React.png';
import { FaCode, FaDatabase, FaTools, FaCloud } from 'react-icons/fa';

function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <FaCode className="text-2xl sm:text-3xl text-[#0ef]" />,
            skills: [
                { name: "HTML", icon: HTML, level: 90 },
                { name: "CSS", icon: CSS, level: 85 },
                { name: "JavaScript", icon: JavaScript, level: 85 },
                { name: "React", icon: ReactIcon, level: 80 },
                { name: "Tailwind CSS", icon: Tailwind, level: 85 }
            ]
        },
        {
            title: "Backend Development",
            icon: <FaDatabase className="text-2xl sm:text-3xl text-[#0ef]" />,
            skills: [
                { name: "Node.js", icon: Node, level: 80 },
                { name: "PostgreSQL", icon: Postgres, level: 75 }
            ]
        },
        {
            title: "Tools & Version Control",
            icon: <FaTools className="text-2xl sm:text-3xl text-[#0ef]" />,
            skills: [
                { name: "GitHub", icon: GitHub, level: 85 }
            ]
        }
    ];

    return (
        <div id="skills" className='w-full min-h-screen pt-[80px] flex justify-center items-center p-4 text-gray-300 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
                <div className='absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
            </div>

            {/* Main Container */}
            <div className='max-w-[1200px] mx-auto relative z-10'>
                {/* Heading */}
                <div className='text-center mb-12 sm:mb-16 animate-fade-in-up'>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
                        Technical <span className='text-[#0ef]'>Skills</span>
                    </h2>
                    <div className='w-20 sm:w-24 h-1 bg-[#0ef] mx-auto rounded-full mb-4 sm:mb-6'></div>
                    <p className='text-base sm:text-xl text-white max-w-2xl mx-auto px-4'>
                        A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Categories */}
                <div className='space-y-8 sm:space-y-12'>
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className={`animate-fade-in-up`} style={{animationDelay: `${categoryIndex * 0.2}s`}}>
                            <div className='flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8'>
                                {category.icon}
                                <h3 className='text-xl sm:text-3xl font-bold text-white'>{category.title}</h3>
                            </div>
                            
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6'>
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex} 
                                        className='group bg-transparent rounded-xl p-4 sm:p-6 border border-[#0ef]/30 hover:border-[#0ef] hover-lift transition-all duration-300 shadow-[0_0_20px_rgba(0,238,255,0.3)] hover:shadow-[0_0_30px_rgba(0,238,255,0.5)]'
                                    >
                                        <div className='flex flex-col items-center space-y-3 sm:space-y-4'>
                                            <div className='relative'>
                                                <img 
                                                    src={skill.icon} 
                                                    alt={`${skill.name} icon`} 
                                                    className='w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-300' 
                                                />
                                                <div className='absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#0ef] rounded-full flex items-center justify-center'>
                                                    <span className='text-black text-xs font-bold'>{skill.level}%</span>
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <h4 className='text-sm sm:text-lg font-semibold text-white mb-2'>{skill.name}</h4>
                                                <div className='w-full bg-gray-700 rounded-full h-2'>
                                                    <div 
                                                        className='bg-[#0ef] h-2 rounded-full transition-all duration-1000 ease-out'
                                                        style={{width: `${skill.level}%`}}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <div className='mt-12 sm:mt-16 animate-fade-in-up'>
                    <div className='bg-transparent rounded-xl p-6 sm:p-8 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)]'>
                        <h3 className='text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center'>Additional Skills & Technologies</h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4'>
                            {[
                                "TypeScript", "Express.js", "REST APIs", "JSON",
                                "Git", "Agile/Scrum", "Responsive Design", "UI/UX",
                                "Problem Solving", "Team Collaboration", "Debugging", "Testing"
                            ].map((skill, index) => (
                                <div key={index} className='flex items-center space-x-2 p-2 sm:p-3 bg-transparent rounded-lg hover:bg-[#0ef]/10 transition-colors duration-300 border border-[#0ef]/20 hover:border-[#0ef]/50'>
                                    <div className='w-2 h-2 bg-[#0ef] rounded-full'></div>
                                    <span className='text-white text-sm sm:text-base'>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Learning Section */}
                <div className='mt-12 sm:mt-16 text-center animate-fade-in-up'>
                    <div className='bg-transparent rounded-xl p-6 sm:p-8 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)]'>
                        <h3 className='text-xl sm:text-2xl font-bold text-white mb-4'>Always Learning</h3>
                        <p className='text-white mb-4 sm:mb-6 text-sm sm:text-base'>
                            I'm constantly expanding my skill set and staying updated with the latest technologies and best practices.
                        </p>
                        <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
                            {["AWS", "Docker", "Next.js", "GraphQL", "MongoDB"].map((tech, index) => (
                                <span key={index} className='px-3 sm:px-4 py-2 bg-transparent rounded-full text-white border border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-colors duration-300 text-sm sm:text-base shadow-[0_0_10px_rgba(0,238,255,0.2)]'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
