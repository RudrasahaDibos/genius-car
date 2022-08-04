import React from 'react';
import './Footer.css';

const Footer = () => {
    const today =new Date()
    const year =today.getFullYear()
    return (
        <div className='text-center text-centerr'>
    <p><small>Copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;