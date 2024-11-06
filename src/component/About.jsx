import React from 'react';

function About() {
    return (
        <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[80px]'>
            {/* Container */}
            <div className='flex flex-col justify-center items-center w-full h-full'>
                {/* Heading Section */}
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                {/* Main Content Section */}
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <h1>Hi, I’m Client, nice to meet you. Please take a look around</h1>
                    </div>
                    <div>
                        <p>
                            Recent BS Computer Science graduate with a robust background in web development, as evidenced by a range of academic projects. Proficient in full-stack development with expertise in HTML, CSS, JavaScript, TypeScript, and frameworks such as React. Knowledgeable in server-side technologies like Node.js and Express, along with database management using SQL and PostgreSQL.
                            Well-versed in the software development life cycle and agile methodologies.
                            A collaborative team player with experience leading and participating in diverse group projects. Renowned for strong problem-solving skills and a proactive attitude towards learning and adopting new technologies,
                            I am eager to apply and further enhance my web development skills in a dynamic and forward-thinking organization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
