import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>I'm a passionate Full Stack Web Developer skilled in creating responsive, user-centered web applications. With a solid foundation in HTML, CSS, JavaScript, and frameworks like React and Next.js, I bring designs to life with seamless functionality and modern aesthetics. On the backend, I work with Node.js and databases like MongoDB and MySQL to build secure, scalable applications that prioritize performance and user experience. My experience with tools like Git and Docker ensures smooth development workflows and deployment processes, enabling me to handle projects efficiently from start to finish.</p>
        <br/>
        <p className='text-xl'>Driven by a love for problem-solving and constant learning, I stay updated on the latest technologies and trends. My approach combines technical expertise with a dedication to clean, maintainable code that meets both user needs and industry standards. I'm committed to transforming complex ideas into intuitive digital experiences, creating solutions that are impactful and meaningful for users. Whether working independently or collaboratively, my goal is always to deliver polished, high-quality products that make a difference. Let's collaborate to build innovative web solutions that stand out in today's digital landscape!</p>
      </div>
    </div>
  )
}

export default About;
