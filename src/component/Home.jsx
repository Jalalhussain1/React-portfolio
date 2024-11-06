import React from 'react'

function Home() {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>JALAL HUSSAIN</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I M Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> Recent BS Computer Science graduate with a robust background 
            in web development, as evidenced by a range of academic projects. Proficient in full- stack development with 
            expertise in HTML, CSS, JavaScript, TypeScript, and frameworks such as React. Knowledgeable in server-side technologies 
            like Node.js and Express, along with database management using SQL and PostgreSQL. Well-versed in the software development life cycle 
            and agile methodologies. A collaborative team player with experience leading and participating in diverse group projects. Renowned for 
            strong problem-solving skills and a proactive attitude towards learning and adopting new technologies, I am eager to apply and further
             enhance my web development skills in a dynamic and forward-thinking organization.</p>

        </div>
    </div>
  )
}

export default Home
