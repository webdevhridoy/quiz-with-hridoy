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
        <div>
            <div className='mb-20 bg-violet-700 flex justify-center items-center py-28 md:py-40'>
                <h2 className=' text-2xl md:text-3xl mb-5 font-semibold text-white uppercase'>Check the quizs graph here</h2>
            </div>
            <div className=' flex justify-center items-center my-32'>
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