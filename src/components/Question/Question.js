import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const Question = ({ ques }) => {
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
                <div className='flex flex-col md:flex-row justify-between items-center py-5'>
                    <h2 className='font-semibold text-2xl mb-2 mx-2 py-2'>{question}</h2>
                    <span>
                        <button onClick={notify}><FontAwesomeIcon icon={faEye}>{correctAnswer}</FontAwesomeIcon></button>
                        <ToastContainer />
                    </span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        options.map((opt, index) =>
                            <label className='flex justify-center items-center bg-violet-100 hover:bg-violet-300 p-10 text-xl'>
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