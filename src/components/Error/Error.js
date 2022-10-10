import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <h2 className='text-9xl font-semibold'>4<span className='text-violet-700'>0</span>4</h2>
                <p className='text-5xl font-semibold my-5'>Oops! Page not found!</p>
                <Link className='bg-violet-700 p-5 rounded-2xl text-white hover:bg-white hover:text-violet-700 border-2 duration-300 mt-6 inline-block' to='/home'><button>Back to Homepage</button></Link>
            </div>
        </div>
    );
};

export default Error;