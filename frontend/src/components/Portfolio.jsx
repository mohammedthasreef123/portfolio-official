import React from 'react';
import Udemy from '../assets/Udemy.png';
import Greenden from '../assets/Greenden.png';
import CredoSite from '../assets/CredoSite.png';
import WhatsApp from '../assets/WhatsApp.png';
import Airbnb from '../assets/Airbnb.png';
import SkillPlus from '../assets/Skill Plus.png';

const Portfolio = () => {
    const portfolio = [
        { id: 1, src: Udemy, demo: "https://udemy-clone-bay.vercel.app/", code: "https://github.com/mohammedthasreef123/Udemy-clone" },
        { id: 2, src: Greenden, demo: "https://greenden-clone-beta.vercel.app/", code: "https://github.com/mohammedthasreef123/Greenden-Clone" },
        { id: 3, src: CredoSite, demo: "https://credo-site.vercel.app/", code: "https://github.com/mohammedthasreef123/credo-site" },
        { id: 4, src: WhatsApp, demo: "https://whats-app-clone-gray.vercel.app/", code: "https://github.com/mohammedthasreef123/WhatsApp-clone" },
        { id: 5, src: Airbnb, demo: "https://airbnb-clone-lake-pi.vercel.app/", code: "https://github.com/mohammedthasreef123/Airbnb-clone" },
        { id: 6, src: SkillPlus, demo: "https://skill-plus-chi.vercel.app/", code: "https://github.com/firas-07/skill-plus" },
        ];

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, src, demo, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='rounded-t-lg duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                {demo && (
                                    <a href={demo} target='_blank' rel='noopener noreferrer'>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    </a>
                                )}
                                {code && (
                                    <a href={code} target='_blank' rel='noopener noreferrer'>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
