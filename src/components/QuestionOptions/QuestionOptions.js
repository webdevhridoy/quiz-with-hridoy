import React from 'react';

const QuestionOptions = ({ opt }) => {
    // console.log(opt);
    return (
        <div className='flex justify-center items-center'>
            <input type="radio" name="file" id="" />
            <option value='submit'>{opt}</option>
        </div>
    );
};

export default QuestionOptions;