import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Question = ({ ques }) => {
    // console.log(ques);
    const { question, options, correctAnswer } = ques;

    const handleQuizs = (e) => {
        if (e === correctAnswer) {
            alert('right');
        } else {
            alert('false');
        }
    };

    return (
        <div>
            <div className='m-10'>
                <div className='flex justify-center items-center'>
                    <h2 className='font-semibold text-1xl mb-2 mx-2'>{question}</h2>
                    <button><FontAwesomeIcon icon={faEye}>{correctAnswer}</FontAwesomeIcon></button>
                </div>
                <div>
                    {
                        options.map((opt, index) =>
                            <label className='flex justify-center items-center'>
                                <input type="radio"
                                    name='quiz'
                                    value={opt.value}
                                    key={index}
                                    className='mx-2'
                                    defaultChecked={opt.value === correctAnswer}
                                    onChange={() => handleQuizs(opt)}
                                />
                                {opt}
                            </label>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;



// {/* <QuestionOptions
//                             key={opt.id}
//                             opt={opt}
//                         ></QuestionOptions> */}