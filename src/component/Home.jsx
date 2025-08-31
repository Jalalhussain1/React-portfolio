import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaCode, FaLaptop, FaUsers, FaRocket } from 'react-icons/fa';

function Home() {
    return (
        <div id="home" className='w-full min-h-screen relative overflow-hidden flex items-center justify-center'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-20 left-20 w-96 h-96 bg-[#0ef] rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
                <div className='absolute bottom-20 right-20 w-96 h-96 bg-[#0ef] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
            </div>

            {/* Main Content */}
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10 mt-20 sm:mt-24 md:mt-28 mb-8 sm:mb-12 md:mb-16'>
                <div className='grid xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full'>
                    {/* Left Content */}
                    <div className='space-y-6 sm:space-y-8 text-center xl:text-left order-1'>
                        <div className='space-y-4 sm:space-y-6'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight'>
                                Hi, I'm <span className='text-[#0ef]'>Jalal Hussain</span>
                            </h1>
                            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-300'>
                                Full-Stack Developer
                            </h2>
                            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mx-auto xl:mx-0 leading-relaxed'>
                                Passionate about creating innovative web solutions and turning ideas into reality through clean, efficient code.
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 justify-center xl:justify-start'>
                            <button 
                                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                                className='bg-[#0ef] text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-semibold hover:bg-[#0ef]/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-base sm:text-lg shadow-[0_0_15px_rgba(0,238,255,0.4)]'
                            >
                                <span>View My Work</span>
                                <FaArrowDown className='animate-bounce text-sm sm:text-base' />
                            </button>
                            <button 
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className='border-2 border-[#0ef]/50 text-[#0ef] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-semibold hover:bg-[#0ef]/10 hover:border-[#0ef] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-base sm:text-lg shadow-[0_0_10px_rgba(0,238,255,0.2)]'
                            >
                                <span>Get In Touch</span>
                                <FaRocket className='text-sm sm:text-base' />
                            </button>
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10'>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#0ef]'>1+</div>
                                <div className='text-sm sm:text-base md:text-lg text-gray-400'>Years Experience</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#0ef]'>10+</div>
                                <div className='text-sm sm:text-base md:text-lg text-gray-400'>Projects Completed</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#0ef]'>100%</div>
                                <div className='text-sm sm:text-base md:text-lg text-gray-400'>Client Satisfaction</div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='flex justify-center xl:justify-start space-x-4 sm:space-x-6 md:space-x-8 pt-6 sm:pt-8'>
                            <a 
                                href="https://github.com/Jalalhussain1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-transparent rounded-lg flex items-center justify-center border-2 border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.2)] group'
                            >
                                <FaGithub className='text-gray-300 group-hover:text-[#0ef] transition-colors duration-300 text-lg sm:text-xl md:text-2xl' />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/jalal-hussain-9b13262b1/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-transparent rounded-lg flex items-center justify-center border-2 border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.2)] group'
                            >
                                <FaLinkedin className='text-gray-300 group-hover:text-[#0ef] transition-colors duration-300 text-lg sm:text-xl md:text-2xl' />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Animated Code Blocks */}
                    <div className='animate-fade-in-right order-2 mb-8 lg:mb-0'>
                        <div className='relative space-y-4 sm:space-y-6'>
                            {/* Code Block 1 */}
                            <div className='bg-transparent rounded-lg p-4 sm:p-5 md:p-6 border-2 border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)] animate-float'>
                                <div className='flex items-center space-x-2 mb-3 sm:mb-4'>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full'></div>
                                </div>
                                <div className='space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg'>
                                    <div className='text-[#0ef] font-mono'>const developer = {`{`}</div>
                                    <div className='text-gray-300 ml-4 sm:ml-6 font-mono'>name: <span className='text-[#0ef]'>'Jalal Hussain'</span>,</div>
                                    <div className='text-gray-300 ml-4 sm:ml-6 font-mono'>role: <span className='text-[#0ef]'>'Full-Stack Developer'</span>,</div>
                                    <div className='text-gray-300 ml-4 sm:ml-6 font-mono'>passion: <span className='text-[#0ef]'>'Creating amazing web apps'</span></div>
                                    <div className='text-[#0ef] font-mono'>{`}`};</div>
                                </div>
                            </div>

                            {/* Code Block 2 */}
                            <div className='bg-transparent rounded-lg p-4 sm:p-5 md:p-6 border-2 border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)] animate-float' style={{animationDelay: '0.5s'}}>
                                <div className='flex items-center space-x-2 mb-3 sm:mb-4'>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full'></div>
                                </div>
                                <div className='space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg'>
                                    <div className='text-[#0ef] font-mono'>function createProject() {`{`}</div>
                                    <div className='text-gray-300 ml-4 sm:ml-6 font-mono'>return <span className='text-[#0ef]'>'Something amazing'</span>;</div>
                                    <div className='text-[#0ef] font-mono'>{`}`}</div>
                                </div>
                            </div>

                            {/* Code Block 3 */}
                            <div className='bg-transparent rounded-lg p-4 sm:p-5 md:p-6 border-2 border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)] animate-float' style={{animationDelay: '1s'}}>
                                <div className='flex items-center space-x-2 mb-3 sm:mb-4'>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full'></div>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full'></div>
                                    <div className='w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full'></div>
                                </div>
                                <div className='space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg'>
                                    <div className='text-[#0ef] font-mono'>if (you.needDeveloper) {`{`}</div>
                                    <div className='text-gray-300 ml-4 sm:ml-6 font-mono'>hireMe();</div>
                                    <div className='text-[#0ef] font-mono'>{`}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                <FaArrowDown className='text-[#0ef] text-xl sm:text-2xl' />
            </div>
        </div>
    );
}

export default Home;
