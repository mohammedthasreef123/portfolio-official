import React from 'react';
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full-Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Dedicated software developer with strong problem-solving skills, experienced in building, testing and deploying software. Skilled in understanding business needs, working in Agile teams, and meeting deadlines. Committed to delivering quality solutions and continuously learning new technologies.
          </p>
          <div className="flex space-x-2 mt-4 sm:space-x-5">
            <Link 
              to='portfolio' 
              smooth duration={500} 
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
            <a 
              href="https://drive.google.com/file/d/1RGWS9YnK8IyvcAd3CpyYN0z6JIXHYlNz/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer" 
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer sm:hidden'
            >
              View My CV
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </a>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-96 md:w-'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
