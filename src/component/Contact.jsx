import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

function Contact() {
    const form = useRef();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess(false);

        // Validation: Check if all fields have values
        if (!form.current.to_name.value || !form.current.from_name.value || !form.current.message.value) {
            setError("Please fill in all fields before submitting.");
            setIsSubmitting(false);
            return;
        }

        emailjs
            .sendForm('service_oo22pcc', 'template_9p4nph4', form.current, 'VmxA3imQIGZswT7-u')
            .then(
                () => {
                    console.log('Message sent successfully');
                    setSuccess(true);
                    form.current.reset();
                    setIsSubmitting(false);
                },
                (error) => {
                    console.log('Failed to send message:', error.text);
                    setError('Failed to send message. Please try again.');
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div id="contact" className='w-full min-h-screen flex justify-center items-center p-4 pt-[100px] relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
                <div className='absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
            </div>

            <div className='max-w-[1200px] mx-auto w-full relative z-10'>
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center'>
                    {/* Left Side - Contact Info */}
                    <div className='space-y-6 sm:space-y-8 animate-fade-in-left'>
                        <div className='space-y-4 sm:space-y-6'>
                            <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
                                Let's <span className='text-[#0ef]'>Connect</span>
                            </h2>
                            <div className='w-20 sm:w-24 h-1 bg-[#0ef] rounded-full'></div>
                            <p className='text-base sm:text-xl text-gray-400 leading-relaxed'>
                                I'm always interested in hearing about new opportunities and exciting projects. 
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className='space-y-4 sm:space-y-6'>
                            <div className='flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-transparent rounded-lg border border-[#0ef]/30 hover:border-[#0ef] hover-lift shadow-[0_0_20px_rgba(0,238,255,0.3)] transition-all duration-300'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#0ef] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg'>
                                    <FaEnvelope className='text-black text-lg sm:text-xl' />
                                </div>
                                <div className='min-w-0'>
                                    <h3 className='text-white font-semibold text-sm sm:text-base'>Email</h3>
                                    <p className='text-gray-400 text-sm sm:text-base break-all'>hussainjalalcs@gmail.com</p>
                                </div>
                            </div>

                            <div className='flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-transparent rounded-lg border border-[#0ef]/30 hover:border-[#0ef] hover-lift shadow-[0_0_20px_rgba(0,238,255,0.3)] transition-all duration-300'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#0ef] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg'>
                                    <FaMapMarkerAlt className='text-black text-lg sm:text-xl' />
                                </div>
                                <div className='min-w-0'>
                                    <h3 className='text-white font-semibold text-sm sm:text-base'>Location</h3>
                                    <p className='text-gray-400 text-sm sm:text-base'>Available for remote work worldwide</p>
                                </div>
                            </div>

                            <div className='flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-transparent rounded-lg border border-[#0ef]/30 hover:border-[#0ef] hover-lift shadow-[0_0_20px_rgba(0,238,255,0.3)] transition-all duration-300'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#0ef] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg'>
                                    <FaPhone className='text-black text-lg sm:text-xl' />
                                </div>
                                <div className='min-w-0'>
                                    <h3 className='text-white font-semibold text-sm sm:text-base'>Response Time</h3>
                                    <p className='text-gray-400 text-sm sm:text-base'>Usually within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='pt-4 sm:pt-6'>
                            <h3 className='text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4'>Follow Me</h3>
                            <div className='flex space-x-3 sm:space-x-4'>
                                <a 
                                    href="https://github.com/Jalalhussain1" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg flex items-center justify-center border border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.2)]'
                                >
                                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-[#0ef] transition-colors duration-300' fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/jalal-hussain-9b13262b1/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='w-10 h-10 sm:w-12 sm:h-12 bg-transparent rounded-lg flex items-center justify-center border border-[#0ef]/30 hover:border-[#0ef] hover:bg-[#0ef]/10 transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.2)]'
                                >
                                    <svg className='w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-[#0ef] transition-colors duration-300' fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className='animate-fade-in-right'>
                        <form ref={form} onSubmit={sendEmail} className='space-y-4 sm:space-y-6 bg-transparent rounded-xl p-6 sm:p-8 border border-[#0ef]/30 shadow-[0_0_20px_rgba(0,238,255,0.3)]'>
                            <div className='text-center mb-6 sm:mb-8'>
                                <h3 className='text-xl sm:text-2xl font-bold text-white mb-2'>Send Me a Message</h3>
                                <p className='text-gray-400 text-sm sm:text-base'>I'd love to hear from you!</p>
                            </div>

                            {error && (
                                <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-3 sm:p-4'>
                                    <p className="text-red-400 text-sm">{error}</p>
                                </div>
                            )}

                            {success && (
                                <div className='bg-green-500/10 border border-green-500/20 rounded-lg p-3 sm:p-4'>
                                    <div className='flex items-center space-x-2'>
                                        <FaCheckCircle className='text-green-400' />
                                        <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
                                    </div>
                                </div>
                            )}

                            <div className='space-y-3 sm:space-y-4'>
                                <div>
                                    <label className='block text-gray-300 text-sm font-medium mb-2'>Name</label>
                                    <input 
                                        className='w-full bg-transparent border border-[#0ef]/30 text-white p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ef] focus:border-transparent transition-all duration-300 text-sm sm:text-base shadow-[0_0_10px_rgba(0,238,255,0.2)]' 
                                        type="text" 
                                        placeholder='Your name' 
                                        name='to_name' 
                                    />
                                </div>
                                
                                <div>
                                    <label className='block text-gray-300 text-sm font-medium mb-2'>Email</label>
                                    <input 
                                        className='w-full bg-transparent border border-[#0ef]/30 text-white p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ef] focus:border-transparent transition-all duration-300 text-sm sm:text-base shadow-[0_0_10px_rgba(0,238,255,0.2)]' 
                                        type="email" 
                                        placeholder='your.email@example.com' 
                                        name='from_name' 
                                    />
                                </div>
                                
                                <div>
                                    <label className='block text-gray-300 text-sm font-medium mb-2'>Message</label>
                                    <textarea 
                                        className='w-full bg-transparent border border-[#0ef]/30 text-white p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0ef] focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base shadow-[0_0_10px_rgba(0,238,255,0.2)]' 
                                        name="message" 
                                        placeholder='Tell me about your project or just say hello!' 
                                        rows="5"
                                    />
                                </div>
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className='w-full bg-[#0ef] text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#0ef]/80 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base shadow-[0_0_15px_rgba(0,238,255,0.4)]'
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className='spinner w-4 h-4 sm:w-5 sm:h-5'></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
