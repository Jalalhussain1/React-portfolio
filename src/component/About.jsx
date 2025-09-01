import React from 'react';
import { FaGraduationCap, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';

function About() {
    return (
        <div id="about" className='w-full min-h-screen text-gray-300 pt-[80px] relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
                <div className='absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
            </div>

            {/* Container */}
            <div className='max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-16 relative z-10'>
                {/* Heading Section */}
                <div className='text-center mb-12 sm:mb-16 animate-fade-in-up'>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
                        About <span className='text-[#0ef]'>Me</span>
                    </h2>
                    <div className='w-20 sm:w-24 h-1 bg-[#0ef] mx-auto rounded-full'></div>
                    <p className='text-base sm:text-xl text-white mt-4 sm:mt-6 max-w-2xl mx-auto px-4'>
                        Passionate about creating innovative solutions and turning ideas into reality through code
                    </p>
                </div>

                {/* Main Content Section */}
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
                    {/* Left Content - Personal Info */}
                    <div className='space-y-6 sm:space-y-8 animate-fade-in-left'>
                        <div className='space-y-4 sm:space-y-6'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6'>
                                Who I Am
                            </h3>
                            <p className='text-base sm:text-lg leading-relaxed text-white'>
                                I'm a BS Computer Science graduate with 1 year of hands-on experience in full-stack web development. 
                                My journey in technology began with a curiosity for how things work, which evolved into a passion 
                                for building digital solutions that make a difference.
                            </p>
                            <p className='text-base sm:text-lg leading-relaxed text-white'>
                                I specialize in creating seamless user experiences by combining modern frontend technologies 
                                with robust backend solutions. My approach focuses on writing clean, maintainable code and 
                                staying current with industry best practices.
                            </p>
                        </div>

                        {/* Key Highlights */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                            <div className='bg-transparent rounded-lg p-4 sm:p-6 hover-lift border border-[#0ef]/30 hover:border-[#0ef] transition-all duration-300 shadow-[0_0_20px_rgba(0,238,255,0.3)] hover:shadow-[0_0_30px_rgba(0,238,255,0.5)]'>
                                <div className='flex items-center space-x-3 mb-3'>
                                    <FaGraduationCap className='text-[#0ef] text-xl sm:text-2xl' />
                                    <h4 className='text-lg sm:text-xl font-semibold text-white'>Education</h4>
                                </div>
                                <p className='text-white text-sm sm:text-base'>BS Computer Science</p>
                            </div>
                            
                            <div className='bg-transparent rounded-lg p-4 sm:p-6 hover-lift border border-[#0ef]/30 hover:border-[#0ef] transition-all duration-300 shadow-[0_0_20px_rgba(0,238,255,0.3)] hover:shadow-[0_0_30px_rgba(0,238,255,0.5)]'>
                                <div className='flex items-center space-x-3 mb-3'>
                                    <FaCode className='text-[#0ef] text-xl sm:text-2xl' />
                                    <h4 className='text-lg sm:text-xl font-semibold text-white'>Experience</h4>
                                </div>
                                <p className='text-white text-sm sm:text-base'>1+ Year Full-Stack Development</p>
                            </div>
                            
                            <div className='bg-transparent rounded-lg p-4 sm:p-6 hover-lift border border-[#0ef]/30 hover:border-[#0ef] transition-all duration-300 shadow-[0_0_20px_rgba(0,238,255,0.3)] hover:shadow-[0_0_30px_rgba(0,238,255,0.5)]'>
                                <div className='flex items-center space-x-3 mb-3'>
                                    <FaUsers className='text-[#0ef] text-xl sm:text-2xl' />
                                    <h4 className='text-lg sm:text-xl font-semibold text-white'>Collaboration</h4>
                                </div>
                                <p className='text-white text-sm sm:text-base'>Team Player & Agile Methodologies</p>
                            </div>
                            
                            <div className='bg-transparent rounded-lg p-4 sm:p-6 hover-lift border border-[#0ef]/30 hover:border-[#0ef] transition-all duration-300 shadow-[0_0_20px_rgba(0,238,255,0.3)] hover:shadow-[0_0_30px_rgba(0,238,255,0.5)]'>
                                <div className='flex items-center space-x-3 mb-3'>
                                    <FaLightbulb className='text-[#0ef] text-xl sm:text-2xl' />
                                    <h4 className='text-lg sm:text-xl font-semibold text-white'>Problem Solving</h4>
                                </div>
                                <p className='text-white text-sm sm:text-base'>Analytical & Creative Solutions</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Skills Overview */}
                    <div className='space-y-6 sm:space-y-8 animate-fade-in-right'>
                        <div className='space-y-4 sm:space-y-6'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6'>
                                Technical Expertise
                            </h3>
                            
                            {/* Frontend Skills */}
                            <div className='space-y-3 sm:space-y-4'>
                                <h4 className='text-lg sm:text-xl font-semibold text-[#0ef]'>Frontend Development</h4>
                                <div className='space-y-2 sm:space-y-3'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white text-sm sm:text-base'>HTML/CSS</span>
                                        <div className='w-24 sm:w-32 bg-gray-700 rounded-full h-2'>
                                            <div className='bg-[#0ef] h-2 rounded-full' style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white text-sm sm:text-base'>JavaScript</span>
                                        <div className='w-24 sm:w-32 bg-gray-700 rounded-full h-2'>
                                            <div className='bg-[#0ef] h-2 rounded-full' style={{width: '85%'}}></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white text-sm sm:text-base'>React</span>
                                        <div className='w-24 sm:w-32 bg-gray-700 rounded-full h-2'>
                                            <div className='bg-[#0ef] h-2 rounded-full' style={{width: '80%'}}></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white text-sm sm:text-base'>TypeScript</span>
                                        <div className='w-24 sm:w-32 bg-gray-700 rounded-full h-2'>
                                            <div className='bg-[#0ef] h-2 rounded-full' style={{width: '75%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Backend Skills */}
                            <div className='space-y-3 sm:space-y-4'>
                                <h4 className='text-lg sm:text-xl font-semibold text-[#0ef]'>Backend Development</h4>
                                <div className='space-y-2 sm:space-y-3'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white text-sm sm:text-base'>Node.js</span>
                                        <div className='w-24 sm:w-32 bg-gray-700 rounded-full h-2'>
                                            <div className='bg-[#0ef] h-2 rounded-full' style={{width: '80%'}}></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white text-sm sm:text-base'>Express.js</span>
                                        <div className='w-24 sm:w-32 bg-gray-700 rounded-full h-2'>
                                            <div className='bg-[#0ef] h-2 rounded-full' style={{width: '75%'}}></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-white text-sm sm:text-base'>PostgreSQL</span>
                                        <div className='w-24 sm:w-32 bg-gray-700 rounded-full h-2'>
                                            <div className='bg-[#0ef] h-2 rounded-full' style={{width: '70%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Personal Qualities */}
                        <div className='bg-transparent rounded-lg p-4 sm:p-6 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)]'>
                            <h4 className='text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4'>What Drives Me</h4>
                            <div className='space-y-2 sm:space-y-3'>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-2 h-2 bg-[#0ef] rounded-full flex-shrink-0'></div>
                                    <span className='text-white text-sm sm:text-base'>Continuous learning and staying updated with latest technologies</span>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-2 h-2 bg-[#0ef] rounded-full flex-shrink-0'></div>
                                    <span className='text-white text-sm sm:text-base'>Writing clean, maintainable, and scalable code</span>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-2 h-2 bg-[#0ef] rounded-full flex-shrink-0'></div>
                                    <span className='text-white text-sm sm:text-base'>Collaborating effectively in team environments</span>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-2 h-2 bg-[#0ef] rounded-full flex-shrink-0'></div>
                                    <span className='text-white text-sm sm:text-base'>Solving complex problems with innovative solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
