import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quizs }) => {
    const { name, logo, total } = quizs;

    const navigate = useNavigate();

    const handleQuiz = () => {
        navigate(`/singlequiz/${quizs.id}`);
    };

    return (
        <div className='border-violet-100 border-2 p-10 m-8 hover:shadow-lg duration-500'>
            <div>
                <img className='mx-auto' src={logo} alt="" />
            </div>
            <div>
                <h2 className='text-2xl md:text-3xl my-2 font-semibold'>{name}</h2>
                <p>Q-{total}</p>
            </div>
            <div>
                <button onClick={handleQuiz} className='bg-violet-700 px-6 py-3 rounded-2xl text-white hover:bg-white hover:text-violet-700 border-2 duration-300 mt-6 inline-block'>Check out Quizs</button>
            </div>
        </div>
    );
};

export default Quiz;