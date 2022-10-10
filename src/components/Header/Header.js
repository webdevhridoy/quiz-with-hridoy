import logo from '../../logo.png';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='py-8 flex justify-between items-center px-5 shadow-lg'>
            <div>
                <Link to='/home'><img className='w-64 h-auto' src={logo} alt="" /></Link>
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-900 font-semibold mr-5 text-2xl' : 'mr-5 text-2xl'} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-900 font-semibold mr-5 text-2xl' : 'mr-5 text-2xl'} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-900 font-semibold mr-5 text-2xl' : 'mr-5 text-2xl'} to='/blogs'>Blogs</NavLink>
            </div>
        </nav>
    );
};

export default Header;