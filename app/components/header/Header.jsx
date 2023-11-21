import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className='flex px-6 py-1 items-center justify-between tracking-wide'>
                <div></div>
            <nav className='bg-[var(--bgHeader)] py-4 px-8 rounded-full'>
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

            <button className=' bg-slate-400 rounded-full px-2 mx-4'>
                light
            </button>
        </header>
    );
}

export default Header;
