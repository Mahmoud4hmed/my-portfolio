'use client';
import { useState } from 'react';
import './header.css';

const Header = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <header className='flex px-6 py-1 items-center justify-between tracking-wide mt-4'>
            <button onClick={() => setShowModal(true)} className='rounded-full p-2 mx-4 menu icon-th-menu bg-[var(--bgHeader)] h-10 w-10 active:scale-50 duration-200'></button>
                <div></div>

            <nav className='bg-[var(--bgHeader)] py-4 px-8 rounded-full hover:shadow-md shadow-sm shadow-gray-500 duration-500 hover:shadow-[var(--blue)]'>
                <ul className='flex gap-4'>
                    <li>
                        <a href="#" className='duration-300'>About</a>
                    </li>
                    
                    <li>
                        <a href="#" className='duration-300'>Articles</a>
                    </li>
                    
                    <li>
                        <a href="#" className='duration-300'>Projects</a>
                    </li>
                    
                    <li>
                        <a href="#" className='duration-300'>Speaking</a>
                    </li>
                    
                    <li>
                        <a href="#" className='duration-300'>Contact</a>
                    </li>
                </ul>
            </nav>


        <button className='rounded-full p-2 mx-4 icon-moon bg-[var(--bgHeader)] h-10 w-10 active:scale-50 duration-200'></button>

            {showModal && (
                <div className='fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-sm'>
                    <ul className='mainModal modal w-4/5 mx-auto mt-8 rounded-2xl px-8 py-4 bg-[var(--secondary)]  hover:shadow-md shadow-sm shadow-gray-500 hover:shadow-[var(--blue)] duration-300'>
                        <li className='text-right border-none'>
                            <button onClick={() => setShowModal(false)} className='hover:text-red-600 duration-300 text-xl icon-clear rounded-full bg-[var(--bgHeader)] h-8 w-8 active:scale-50 hover:scale-125 hover:rotate-180'></button>
                        </li>
                        <li className=' text-white '>
                            <a href="#" className='duration-300'>About</a>
                        </li>
                        <li>
                            <a href="#" className='duration-300'>Articles</a>
                        </li>
                        <li>
                            <a href="#" className='duration-300'>Projects</a>
                        </li>
                        <li>
                            <a href="#" className='duration-300'>Speaking</a>
                        </li>
                        <li>
                            <a href="#" className='duration-300'>Contact</a>
                        </li>
                    </ul>
                </div>
            )}

        </header>
    );
}

export default Header;
