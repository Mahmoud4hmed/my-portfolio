import React from 'react';
import Image from 'next/image';
import pfp from '../../assets/pfp.png'

const Hero = () => {
    return (
        <section className='flex mt-24'>

            <div className='flex-grow'>
                <div className='flex items-end'>
                    <Image src={pfp} width={100} height={100} className='rounded-full border border-[var(--blue)] p-0.5' alt='pfp'/>
                    <div className='icon-verified text-[var(--blue)]'></div>
                </div>
                <h1 className='md:text-3xl sm:text-xl font-bold text-[var(--title)]'>
                Mahmoud Ahmed - Fullstack Developer
                🌐 🖥️
                </h1>
                <p className='text-sm text-[var(--subtitle)]'>
                    Enthusiastic junior fullstack developer with a year of freelance experience. Proficient in C, Python, and web technologies (HTML, CSS, JavaScript, Bootstrap, Tailwind). Experienced in Flask, Django, Rest Framework, and React. Strong problem-solving skills, dedicated to continuous self-improvement. CS student at UoPeople with a CS50 certificate from Harvard. Solely developed AndalusEdu, an innovative educational platform. Adept at time management, committed to personal and professional growth. Fluent in Arabic and English with basic Deutsch skills. Contact me on <strong>mahmoudahmed9go@gmail.com</strong>
                </p>

                <div className='flex gap-4 text-2xl mt-4'>
                    <div className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-github'></div>
                    <div className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-x'></div>
                    <div className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-linkedin'></div>
                    <div className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-facebook'></div>
                    <div className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-email'></div>
                    <div className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-whatsapp'></div>
                </div>

            </div>

            <div className='border border-green-500'>
                Right section for animation
            </div>

        </section>
    );
}

export default Hero;


// icon-github
// icon-x
// icon-facebook
// icon-linkedin
// icon-email
// icon-instagram
// icon-whatsapp