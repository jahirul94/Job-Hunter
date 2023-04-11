import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from 'recharts';



const Statistics = () => {
    const assignmentData = useLoaderData();
    return (
        <div className='mt-20'>
             <ComposedChart
              width={900}
              height={400}
              data={assignmentData}
             >           
                        
                        <XAxis dataKey="assignmentNo"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="number" barSize={20} fill="#413ea0" />
             </ComposedChart>
        </div>
    );
};

export default Statistics;