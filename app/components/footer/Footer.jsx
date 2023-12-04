import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='flex justify-between'>
            <ul className='flex gap-4'>

                <li className=''>
                    <a href="#">About</a>
                </li>
                <li className=''>
                    <a href="#">Articles</a>
                </li>
                <li className=''>
                    <a href="#">Projects</a>
                </li>
                <li className=''>
                    <a href="#">Speaking</a>
                </li>
                <li className=''>
                    <a href="#">Contact</a>
                </li>
                
            </ul>   

            <p>&copy; 2023 Mahmoud Ahmed. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
