import React from 'react';
import Config from '../config';

import './header.css';

const Header = () => {

    return (
        <div className="flex-grow-0">
            <div className="bg-white shadow flex justify-center">
                <div className="flex w-4/5">
                    <div className="logo w-1/4 flex justify-center items-center text-2xl font-bold">
                        {Config.logo}
                    </div>
                    <div className="w-3/4 text-right">
                        <ul className="list-none">
                            {Config.menuLinks.map((item) => {
                                return (
                                    <li key={item.id} className="inline-block">
                                        <a href={item.link} className="block p-6 text-blue-700 hover:text-blue-900 hover:bg-gray-200">{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;