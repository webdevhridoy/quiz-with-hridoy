import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data = [
        { name: 'React', total: 8, },
        { name: 'JavaScript', total: 8 },
        { name: 'CSS', total: 9 },
        { name: 'Git', total: 8 }
    ];
    return (
        <div className='mt-32 mb-60'>
            <div>
                <h2 className=' text-2xl md:text-3xl mb-5 font-semibold underline'>Check the quizs graph here</h2>
            </div>
            <div className=' flex justify-center items-center mt-32'>
                <ResponsiveContainer width="70%" height="50%" aspect={1} className='mx-auto'>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default Statistics;