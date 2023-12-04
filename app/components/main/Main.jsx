import React from 'react';
import Image from 'next/image';
import notzilla from '../../assets/Notzilla.png'
import './main.css'

const Main = () => {
    return (
        <div className='flex gap-12 globalMain'>
            <section className='flex flex-col gap-3 items-start text-center typeButtons'>
            <button>All projects</button>
            <button>Django</button>
            <button>Flask</button>
            <button>React js</button>
            <button>Fullstack</button>
            <button>C Programming</button>
            </section>

            <section className='flex flex-wrap gap-3 justify-center'>

            {[1, 2, 3, 4, 5].map((item) => {
                return(
                    <article key={item} className='border border-[--card-border] hover:border-[--blue] duration-300 w-72 rounded-lg hover:rotate-1 hover:scale-105 cursor-pointer'>
                    <Image src={notzilla} width={300} className='rounded-lg' alt='pfp'/>
                    <div className='w-72 py-3 px-2 bg-[#ffffff0d]'>
                        <h1 className='text-xl font-bold text-[var(--title)]'>Notzilla</h1>
                        <p className='text-sm text-[var(--subtitle)]'>Notzilla is a web application that allows you to create and manage your notes.</p>
                        <div className='flex gap-3 mt-3 justify-between text-lg items-center'>
                            <div className='flex gap-3 text-[var(--subtitle)]'>
                                <div className='icon-link cursor-pointer hover:text-[var(--icon-hover)]'></div>
                                <div className='icon-github cursor-pointer hover:text-[var(--icon-hover)]'></div>
                            </div>
                            <a href="" className='text-[var(--blue)] flex'>more
                            <span className='icon-arrow_forward self-center mr-2'></span>
                            </a>
                        </div>
                    </div>
                </article>
                )
            })}

            </section>
        </div>
    );
}

export default Main;
