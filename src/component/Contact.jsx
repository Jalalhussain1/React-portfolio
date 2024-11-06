import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        // Validation: Check if all fields have values
        if (!form.current.to_name.value || !form.current.from_name.value || !form.current.message.value) {
            setError("Please fill in all fields before submitting.");
            return;
        }

        // Clear error before sending
        setError('');

        emailjs
            .sendForm('service_oo22pcc', 'template_9p4nph4', form.current, 'VmxA3imQIGZswT7-u')
            .then(
                () => {
                    console.log('Message sent successfully');
                },
                (error) => {
                    console.log('Failed to send message:', error.text);
                }
            );
    };

    return (
        <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[100px]'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form or email me at hussainjalalcs@gmail.com</p>
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <input 
                    className='bg-[#ccd6f6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600' 
                    type="text" 
                    placeholder='Name' 
                    name='to_name' 
                />
                <input 
                    className='my-4 p-2 bg-[#ccd6f6] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600' 
                    type="email" 
                    placeholder='Email' 
                    name='from_name' 
                />
                <textarea 
                    className='bg-[#ccd6f6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600' 
                    name="message" 
                    placeholder='Message' 
                    rows="10"
                />
                
                <button 
                    type="submit"
                    className='text-white border-2 px-4 py-2 mt-8 mx-auto flex items-center 
                               hover:bg-pink-600 hover:border-pink-600 rounded-md 
                               transition duration-300 ease-in-out w-full sm:w-auto justify-center'>
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
}

export default Contact;
