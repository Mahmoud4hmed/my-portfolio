import React from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contactAnimation from '../../assets/animations/done.json'
import emailAnimation from '../../assets/animations/email.json'

const Contact = () => {

    const [state, handleSubmit] = useForm("mqkvrplp");

    if (state.succeeded) {
        return <h3 className='text-xl flex'>
            <Lottie animationData={contactAnimation} loop={false} className='w-8' />
            Thank you for your message! I will contact you shortly.</h3>;
    }

    return (
    <section id='contact' className='flex gap-4 justify-between'>

            <div className='py-3 pl-5 gap-8'>
                <h1 className='text-3xl gap-3 flex text-[var(--title)]'>
                    <span className='icon-email'></span>
                    Contact me
                </h1>
                <p className='text-[var(--subtitle)] pt-4'>Feel free to reach out for collaboration, inquiries, or just a tech chat!</p>

                <form onSubmit={handleSubmit} className='pt-8 flex flex-col gap-8'>
                    <div className='flex flex-wrap'>
                        <label className='mr-3 mb-2 text-[var(--title)]' htmlFor="email">Email Address: </label>
                        <input autoComplete="off" type="email" required name="email" id="email" placeholder='Enter your email' className='bg-[var(--bgHeader)] text-[var(--title)] rounded-md border focus:border-[var(--blue)] border-[#4e4e5f] p-1 w-64 focus:scale-105 duration-200 hover:border-[var(--blue)]' />
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        />
                    </div>
                
                    <div className='flex flex-wrap'>
                        <label className='mr-3 mb-2 text-[var(--title)]' htmlFor="message">Your message: </label>
                        <textarea name="message" required id="message" placeholder='Enter your message' className='bg-[var(--bgHeader)] text-[var(--title)] rounded-md border focus:border-[var(--blue)] border-[#4e4e5f] p-1 w-64 focus:scale-105 duration-200 hover:border-[var(--blue)] min-h-[9rem]' />
                        <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                    </div>

                    <button type="submit" disabled={state.submitting} className='bg-[var(--ButtonBG)] self-center text-xl hover:scale-95 py-1 w-28 opacity-75 rounded-md hover:opacity-100 duration-200 border border-[var(--blue)]'>Send</button>
                </form>

            </div>


            <div className='email-animation'>
                <Lottie animationData={emailAnimation} className='w-80' />
            </div>
        </section>
    );
}

export default Contact;
