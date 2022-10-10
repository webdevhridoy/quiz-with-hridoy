import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const Question = ({ ques }) => {
    console.log(ques);
    const { question, options, correctAnswer } = ques;

    const handleQuizs = (e) => {
        if (e === correctAnswer) {
            Swal.fire(
                'Good job!',
                'You selected the right one!'
            );
        } else {
            Swal.fire('false');
        }
    };

    const notify = () => toast(`Your Correct Ans: ${correctAnswer}`);

    return (
        <div>
            <div className='m-10'>
                <div className='flex justify-center items-center'>
                    <h2 className='font-semibold text-1xl mb-2 mx-2'>{question}</h2>
                    <button onClick={notify}><FontAwesomeIcon icon={faEye}>{correctAnswer}</FontAwesomeIcon></button>
                    <ToastContainer />
                </div>
                <div className='grid grid-cols-2 gap-5'>
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