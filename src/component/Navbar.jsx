import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
    const [nav, setNav] = useState(false);

    // Toggle the nav state
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white z-50'>
            <div>
                <h1 className='font-bold text-3xl px-4 text-white'>JALAL</h1>
            </div>

            {/* Menu for larger screens */}
            <ul className='hidden md:flex gap-6'>
                <li className='hover:text-pink-600 cursor-pointer'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:text-pink-600 cursor-pointer'>
                    <Link to="/about">About</Link>
                </li>
                <li className='hover:text-pink-600 cursor-pointer'>
                    <Link to="/skills">Skills</Link>
                </li>
                <li className='hover:text-pink-600 cursor-pointer'>
                    <Link to="/work">Work</Link>
                </li>
                <li className='hover:text-pink-600 cursor-pointer'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            {/* Hamburger for mobile view */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
            </div>

            {/* Mobile Menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl hover:text-pink-600 cursor-pointer'>
                    <Link to="/" onClick={() => setNav(false)}>Home</Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 cursor-pointer'>
                    <Link to="/about" onClick={() => setNav(false)}>About</Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 cursor-pointer'>
                    <Link to="/skills" onClick={() => setNav(false)}>Skills</Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 cursor-pointer'>
                    <Link to="/work" onClick={() => setNav(false)}>Work</Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 cursor-pointer'>
                    <Link to="/contact" onClick={() => setNav(false)}>Contact</Link>
                </li>
            </ul>

            {/* Social Icons (fixed to the left side of the screen) */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-2.5'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="https://www.linkedin.com/in/jalal-hussain-9b13262b1/" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
                        <a href="https://github.com/Jalalhussain1" target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
                        <a href="mailto:hussainjalalcs@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                        <a href="/JalalHussain.pdf" className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}




export default Navbar;
