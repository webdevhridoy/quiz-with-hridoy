import React from 'react';

const Question = ({ ques }) => {
    console.log(ques);
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
                <h2 className='font-semibold text-1xl mb-2'>{question}</h2>
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
    );
};

export default Question;



// {/* <QuestionOptions
//                             key={opt.id}
//                             opt={opt}
//                         ></QuestionOptions> */}