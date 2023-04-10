import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const assignmentData = useLoaderData();
    console.log(assignmentData);
    return (
        <div>
            <h2>this is Statistics</h2>
        </div>
    );
};

export default Statistics;