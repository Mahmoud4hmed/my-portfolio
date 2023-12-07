import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='flex justify-between'>
            <ul className='flex gap-4'>

                <li>
                    <a href="#about" className='duration-300'>About</a>
                </li>
                
                <li>
                    <a href="#social" className='duration-300'>Social Media</a>
                </li>
                
                <li>
                    <a href="#projects" className='duration-300'>Projects</a>
                </li>
                
                <li>
                    <a href="#contact" className='duration-300'>Contact</a>
                </li>
                
            </ul>   

            <p>&copy; 2023 Mahmoud Ahmed. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
