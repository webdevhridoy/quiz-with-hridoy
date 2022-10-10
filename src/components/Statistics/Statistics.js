import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';


const Statistics = () => {

    const data = [
        { name: 'React', uv: 8, },
        { name: 'JavaScript', uv: 8 },
        { name: 'CSS', uv: 9 },
        { name: 'Git', uv: 8 }
    ];
    return (
        <div className='my-32'>
            <div>
                <h2 className=' text-2xl md:text-3xl mb-5 font-semibold underline'>Check the quizs graph here</h2>
            </div>
            <div className=' flex justify-center items-center mt-32'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

        </div>
    );
};

export default Statistics;