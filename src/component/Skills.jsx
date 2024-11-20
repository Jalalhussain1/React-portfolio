import React from 'react';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/Javascript.png';
import GitHub from '../assets/GitHub.png';
import Node from '../assets/Node.png';
import Tailwind from '../assets/TailWind.png';
import Postgres from '../assets/Postgres.png';
import ReactIcon from '../assets/React.png';

function Skills() {
    return (
        <div name='Skills' className='bg-[#0a192f] w-full min-h-screen pt-[80px] flex justify-center items-center p-4 text-gray-300'>
            {/* Flex container */}
            <div className='flex flex-col justify-center items-center w-full h-full'>
                {/* Heading */}
                <div className='mb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Skills
                    </p>
                    <p className='py-4'>
                        Here are the technologies I have worked with
                    </p>
                </div>
                {/* Skills Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20'>
                    {/* Skill 1 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={HTML} alt='HTML icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>HTML</p>
                    </div>
                    {/* Skill 2 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={CSS} alt='CSS icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>CSS</p>
                    </div>
                    {/* Skill 3 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={JavaScript} alt='JavaScript icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>JavaScript</p>
                    </div>
                    {/* Skill 4 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={GitHub} alt='GitHub icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>GitHub</p>
                    </div>
                    {/* Skill 5 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={Node} alt='Node.js icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>Node.js</p>
                    </div>
                    {/* Skill 6 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={Tailwind} alt='Tailwind CSS icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>Tailwind CSS</p>
                    </div>
                    {/* Skill 7 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={Postgres} alt='PostgreSQL icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>PostgreSQL</p>
                    </div>
                    {/* Skill 8 */}
                    <div className='shadow-lg shadow-[#040c16] hover:scale-105 duration-500 flex flex-col items-center justify-center'>
                        <img src={ReactIcon} alt='React icon' className='w-20 h-20' />
                        <p className='py-4 text-center text-xl'>React</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
