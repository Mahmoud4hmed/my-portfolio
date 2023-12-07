import React from 'react';
import Image from 'next/image';
import pfp from '../../assets/pfp.png'
import Lottie from "lottie-react";
import devAnimation from '../../assets/animations/dev.json'
import './hero.css'

const Hero = () => {
    return (
        <section className='flex mt-24'>

            <div className='flex-grow'>
                <div className='flex items-end'>
                    <Image id='about' src={pfp} width={100} height={100} className='rounded-full border border-[var(--blue)] p-0.5' alt='pfp'/>
                    <div className='icon-verified text-[var(--blue)]'></div>
                </div>
                <h1 className='md:text-3xl sm:text-xl font-bold text-[var(--title)]'>
                Mahmoud Ahmed - Fullstack Developer
                🌐 🖥️
                </h1>
                <p className='text-sm text-[var(--subtitle)]'>
                    Enthusiastic junior fullstack developer with a year of freelance experience. Proficient in C, Python, and web technologies (HTML, CSS, JavaScript, Bootstrap, Tailwind). Experienced in Flask, Django, Rest Framework, and React. Strong problem-solving skills, dedicated to continuous self-improvement. CS student at UoPeople with a CS50 certificate from Harvard. Solely developed AndalusEdu, an innovative educational platform. Adept at time management, committed to personal and professional growth. Fluent in Arabic and English with basic Deutsch skills. Contact me on <strong>mahmoudahmed9go@gmail.com</strong>
                </p>

                <div id='social' className='flex gap-4 text-2xl mt-4'>
                    <a href='https://github.com/Mahmoud4hmed' target='_blank' className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-github'></a>
                    <a href='https://twitter.com/Glitch01X' target='_blank' className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-x'></a>
                    <a href='https://www.linkedin.com/in/mahmoud-ahmed-450615201/' target='_blank' className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-linkedin'></a>
                    <a href='https://www.facebook.com/Mahmoudahmed9go' target='_blank' className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-facebook'></a>
                    <a href='mailto:mahmoudahmed9go@gmail.com' target='_blank' className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-email'></a>
                    <a href='https://wa.me/+201273857495' target='_blank' className='hover:scale-110 hover:text-[var(--icon-hover)] cursor-pointer duration-200 icon-whatsapp'></a>
                </div>

            </div>

            <div className='dev-animation'>
                <Lottie animationData={devAnimation} loop={true} className='w-80' />
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