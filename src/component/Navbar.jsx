import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setNav(false); // Close mobile menu
    };

    // Toggle the nav state
    const handleClick = () => setNav(!nav);

    return (
        <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 z-50 transition-all backdrop-blur-sm duration-300 ${
            scrolled 
                ? 'bg-black/20 shadow-2xl border-b border-[#0ef]/20' 
                : 'bg-transparent'
        }`}>
            {/* Logo */}
            <div className='flex items-center'>
                <button 
                    onClick={() => scrollToSection('home')}
                    className='flex items-center space-x-2 group cursor-pointer'
                >
                    <div className='w-10 h-10 bg-[#0ef] rounded-lg flex items-center justify-center shadow-lg'>
                        <span className='text-black font-bold text-lg'>JH</span>
                    </div>
                    <h1 className='font-bold text-2xl text-white group-hover:text-[#0ef] transition-colors duration-300'>
                        Jalal Hussain
                    </h1>
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center space-x-8'>
                <li className='relative group'>
                    <button 
                        onClick={() => scrollToSection('home')}
                        className='text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Home
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ef] group-hover:w-full transition-all duration-300'></span>
                    </button>
                </li>
                <li className='relative group'>
                    <button 
                        onClick={() => scrollToSection('about')}
                        className='text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        About
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ef] group-hover:w-full transition-all duration-300'></span>
                    </button>
                </li>
                <li className='relative group'>
                    <button 
                        onClick={() => scrollToSection('skills')}
                        className='text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Skills
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ef] group-hover:w-full transition-all duration-300'></span>
                    </button>
                </li>
                <li className='relative group'>
                    <button 
                        onClick={() => scrollToSection('work')}
                        className='text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Work
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ef] group-hover:w-full transition-all duration-300'></span>
                    </button>
                </li>
                <li className='relative group'>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className='text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Contact
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ef] group-hover:w-full transition-all duration-300'></span>
                    </button>
                </li>
                <li>
                    <a 
                        href="/JalalHussain.pdf" 
                        download
                        className='bg-[#0ef] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#0ef]/80 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,238,255,0.4)]'
                    >
                        Resume
                    </a>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer '>
                <div className={`w-6 h-6 flex flex-col justify-around transition-all duration-300 ${nav ? 'rotate-90' : ''}`}>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${nav ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${nav ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${nav ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/30 mt-20 transition-transform duration-300 ${
                nav ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className='flex flex-col justify-center backdrop-blur-lg bg-black/30 items-center h-full  space-y-8'>
                    <button 
                        onClick={() => scrollToSection('home')}
                        className='text-4xl text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => scrollToSection('about')}
                        className='text-4xl text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        About
                    </button>
                    <button 
                        onClick={() => scrollToSection('skills')}
                        className='text-4xl text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Skills
                    </button>
                    <button 
                        onClick={() => scrollToSection('work')}
                        className='text-4xl text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Work
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className='text-4xl text-gray-300 hover:text-[#0ef] transition-colors duration-300 font-medium'
                    >
                        Contact
                    </button>
                    <a 
                        href="/JalalHussain.pdf" 
                        download
                        className='bg-[#0ef] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#0ef]/80 transition-all duration-300 shadow-[0_0_15px_rgba(0,238,255,0.4)]'
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
