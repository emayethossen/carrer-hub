import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marksArray = [
        { id: 1, name: "Design", number: 60 },
        { id: 2, name: "Responsive", number: 60 },
        { id: 3, name: "Landing Page", number: 60 },
        { id: 4, name: "JS Problems", number: 60 },
        { id: 5, name: "JS DOM", number: 60 },
        { id: 6, name: " API", number: 45 },
        { id: 7, name: "Debug Practice", number: 60 },
        { id: 8, name: "React SPA", number: 60 },
    ];
    return (
        <div >
            <h2 className='font-bold text-3xl text-center mt:8 lg:mt-12'>All Assignment Marks</h2>
            <div className='flex justify-center items-center lg:py-12 py-8'>

                <AreaChart
                    width={1000}
                    height={300}
                    data={marksArray}
                    margin={{
                        left: 0,
                        right: 30
                    }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area dataKey="number" stroke="cornflowerblue" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;