import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaLaptop, FaUsers, FaRocket } from 'react-icons/fa';

function Home() {
    return (
        <div id="home" className='w-full h-screen relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-20 left-20 w-96 h-96 bg-[#0ef] rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
                <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#0ef] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
            </div>

            {/* Main Content */}
            <div className='max-w-[1200px] mx-auto px-4 sm:px-8 h-full flex items-center relative z-10'>
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                    {/* Left Content */}
                    <div className='space-y-4 sm:space-y-6 animate-fade-in-left'>
                        <div className='space-y-2 sm:space-y-4'>
                            <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight'>
                                Hi, I'm <span className='text-[#0ef]'>Jalal Hussain</span>
                            </h1>
                            <h2 className='text-xl sm:text-3xl md:text-5xl font-semibold text-gray-300'>
                                Full-Stack Developer
                            </h2>
                            <p className='text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed'>
                                Passionate about creating innovative web solutions and turning ideas into reality through clean, efficient code.
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6'>
                            <button 
                                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                                className='bg-[#0ef] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#0ef]/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base shadow-[0_0_15px_rgba(0,238,255,0.4)]'
                            >
                                <span>View My Work</span>
                                <FaArrowDown className='animate-bounce' />
                            </button>
                            <button 
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className='border border-[#0ef]/50 text-[#0ef] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#0ef]/10 hover:border-[#0ef] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base shadow-[0_0_10px_rgba(0,238,255,0.2)]'
                            >
                                <span>Get In Touch</span>
                                <FaRocket />
                            </button>
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8'>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl font-bold text-[#0ef]'>1+</div>
                                <div className='text-sm sm:text-base text-gray-400'>Years Experience</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl font-bold text-[#0ef]'>10+</div>
                                <div className='text-sm sm:text-base text-gray-400'>Projects Completed</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl font-bold text-[#0ef]'>100%</div>
                                <div className='text-sm sm:text-base text-gray-400'>Client Satisfaction</div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='flex justify-center sm:justify-start space-x-4 sm:space-x-6 pt-4 sm:pt-6'>
                            <a 
                                href="https://github.com/Jalalhussain1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg flex items-center justify-center border border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.2)] group'
                            >
                                <FaGithub className='text-gray-300 group-hover:text-[#0ef] transition-colors duration-300 text-lg sm:text-xl' />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/jalal-hussain-9b13262b1/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg flex items-center justify-center border border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.2)] group'
                            >
                                <FaLinkedin className='text-gray-300 group-hover:text-[#0ef] transition-colors duration-300 text-lg sm:text-xl' />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Animated Code Blocks */}
                    <div className='animate-fade-in-right'>
                        <div className='relative'>
                            {/* Code Block 1 */}
                            <div className='bg-transparent rounded-lg p-4 sm:p-6 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)] mb-4 animate-float'>
                                <div className='flex items-center space-x-2 mb-3'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                </div>
                                <div className='space-y-2 text-sm sm:text-base'>
                                    <div className='text-[#0ef]'>const developer = {`{`}</div>
                                    <div className='text-gray-300 ml-4'>name: <span className='text-[#0ef]'>'Jalal Hussain'</span>,</div>
                                    <div className='text-gray-300 ml-4'>role: <span className='text-[#0ef]'>'Full-Stack Developer'</span>,</div>
                                    <div className='text-gray-300 ml-4'>passion: <span className='text-[#0ef]'>'Creating amazing web apps'</span></div>
                                    <div className='text-[#0ef]'>{`}`};</div>
                                </div>
                            </div>

                            {/* Code Block 2 */}
                            <div className='bg-transparent rounded-lg p-4 sm:p-6 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)] mb-4 animate-float' style={{animationDelay: '0.5s'}}>
                                <div className='flex items-center space-x-2 mb-3'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                </div>
                                <div className='space-y-2 text-sm sm:text-base'>
                                    <div className='text-[#0ef]'>function createProject() {`{`}</div>
                                    <div className='text-gray-300 ml-4'>return <span className='text-[#0ef]'>'Something amazing'</span>;</div>
                                    <div className='text-[#0ef]'>{`}`}</div>
                                </div>
                            </div>

                            {/* Code Block 3 */}
                            <div className='bg-transparent rounded-lg p-4 sm:p-6 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)] animate-float' style={{animationDelay: '1s'}}>
                                <div className='flex items-center space-x-2 mb-3'>
                                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                </div>
                                <div className='space-y-2 text-sm sm:text-base'>
                                    <div className='text-[#0ef]'>if (you.needDeveloper) {`{`}</div>
                                    <div className='text-gray-300 ml-4'>hireMe();</div>
                                    <div className='text-[#0ef]'>{`}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                <FaArrowDown className='text-[#0ef] text-2xl' />
            </div>
        </div>
    );
}

export default Home;
