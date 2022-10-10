import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const showQuizs = useLoaderData();
    const newQuizs = showQuizs.data;

    return (
        <div>
            <div className='bg-violet-700 flex justify-center items-center py-40'>
                <div>
                    <h3 className=' text-2xl text-white md:text-3xl mb-5 font-semibold'>Welcome QuizWithHridoy</h3>
                    <h2 className=' text-3xl text-white md:text-6xl mb-5 font-semibold'>Upgrade your skills start here with us</h2>
                    <Link className='bg-violet-700 px-10 py-3 rounded-2xl text-white hover:bg-white hover:text-violet-700 border-2 duration-300 mt-6 inline-block' to='/blogs'><button>Read Our Blogs</button></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 gap-10 py-20'>
                {
                    newQuizs.map(quizs =>
                        <Quiz
                            key={quizs.id}
                            quizs={quizs}
                        ></Quiz>
                    )
                }
            </div>
        </div>
    );
};

export default Home;