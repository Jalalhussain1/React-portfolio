import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function SocialSidebar() {
    return (
        <div className='hidden lg:flex fixed flex-col top-[35%] left-2.5 space-y-4 z-40'>
            <div className='group relative'>
                <a 
                    href="https://www.linkedin.com/in/jalal-hussain-9b13262b1/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300'
                >
                    <FaLinkedin size={24} className='text-white' />
                </a>
                <span className='absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                    LinkedIn
                </span>
            </div>
            
            <div className='group relative'>
                <a 
                    href="https://github.com/Jalalhussain1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300'
                >
                    <FaGithub size={24} className='text-white' />
                </a>
                <span className='absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                    GitHub
                </span>
            </div>
            
            <div className='group relative'>
                <a 
                    href="mailto:hussainjalalcs@gmail.com" 
                    className='flex items-center justify-center w-12 h-12 bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-300'
                >
                    <HiOutlineMail size={24} className='text-white' />
                </a>
                <span className='absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                    Email
                </span>
            </div>
            
            <div className='group relative'>
                <a 
                    href="/JalalHussain.pdf" 
                    className='flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300'
                >
                    <BsFillPersonLinesFill size={24} className='text-white' />
                </a>
                <span className='absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                    Resume
                </span>
            </div>
        </div>
    );
}

export default SocialSidebar;
