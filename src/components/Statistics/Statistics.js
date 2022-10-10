import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';


const Statistics = () => {

    const data = [
        { name: 'React', uv: 8, pv: 2400, amt: 2400 },
        { name: 'JavaScript', uv: 400, pv: 2400, amt: 2400 },
        { name: 'CSS', uv: 9, pv: 2400, amt: 2400 },
        { name: 'Git', uv: 8, pv: 2400, amt: 2400 }
    ];
    return (
        <div className=' flex justify-center items-center h-screen'>

            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;