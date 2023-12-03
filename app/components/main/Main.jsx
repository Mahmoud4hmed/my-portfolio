import React from 'react';

const Main = () => {
    return (
        <div className='flex gap-12'>
            <section className='flex flex-col gap-3 text-center'>
                <button className='bg-[var(--ButtonBG)] py-3 w-44 opacity-75 active:opacity-100 rounded-md hover:opacity-100 duration-300 active:font-bold border border-[var(--blue)]'>All projects</button>
                <button className='bg-[var(--ButtonBG)] py-3 w-44 opacity-75 active:opacity-100 rounded-md hover:opacity-100 duration-300 active:font-bold border border-[var(--blue)]'>Django</button>
                <button className='bg-[var(--ButtonBG)] py-3 w-44 opacity-75 active:opacity-100 rounded-md hover:opacity-100 duration-300 active:font-bold border border-[var(--blue)]'>Flask</button>
                <button className='bg-[var(--ButtonBG)] py-3 w-44 opacity-75 active:opacity-100 rounded-md hover:opacity-100 duration-300 active:font-bold border border-[var(--blue)]'>React js & Tailwind</button>
                <button className='bg-[var(--ButtonBG)] py-3 w-44 opacity-75 active:opacity-100 rounded-md hover:opacity-100 duration-300 active:font-bold border border-[var(--blue)]'>Fullstack</button>
                <button className='bg-[var(--ButtonBG)] py-3 w-44 opacity-75 active:opacity-100 rounded-md hover:opacity-100 duration-300 active:font-bold border border-[var(--blue)]'>C Programming</button>
            </section>
            <section className='border border-green-500 flex-grow'>Left Section</section>
        </div>
    );
}

export default Main;
