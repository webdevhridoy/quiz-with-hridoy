import logo from '../../logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='py-8 flex justify-between items-center px-5 shadow-lg'>
            <div>
                <img className='w-64 h-auto' src={logo} alt="" />
            </div>
            <div>
                <Link className='mx-2' to='/home'>Home</Link>
                <Link className='mx-2' to='/statistics'>Statistics</Link>
                <Link className='mx-2' to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;