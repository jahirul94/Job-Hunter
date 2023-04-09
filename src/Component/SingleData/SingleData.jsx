import React from 'react';

const SingleData = ({data}) => {
    console.log(data);
    const {title , img , jobsAvailable} = data;
    return (
        <div className='my-12'>
             <img className='h-20 w-20 rounded mb-2' src={img} alt="" />
             <h3 className='text-xl font-bold'>{title}</h3>
             <p>{jobsAvailable} Jobs Available</p>
        </div>
    );
};

export default SingleData;