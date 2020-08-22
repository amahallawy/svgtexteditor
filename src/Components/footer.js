import React from 'react';
import Config from '../config';

const Footer = () => {
    return (
        <div className="text-gray-300 absolute bottom-0 text-center w-full text-xs">
            {Config.footerText}
        </div>
    )
}

export default Footer;