import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const SingleQuizs = () => {
    const singleQuizs = useLoaderData();
    const singlequiz = singleQuizs.data;
    const { name, questions } = singlequiz;

    return (
        <div>
            <div className='my-20 bg-violet-700 flex justify-center items-center py-28 md:py-40'>
                <h2 className='text-3xl text-white underline'>Quiz of <span className=' font-semibold'>{name}</span></h2>
            </div>
            <div>
                {
                    questions.map(ques =>
                        <Question
                            key={ques.id}
                            ques={ques}
                        ></Question>
                    )
                }

            </div>
        </div>
    );
};

export default SingleQuizs;