import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
              <h2 className='text-center text-9xl text-purple-500 mt-32'> Oops !</h2>
                <h3 className='text-center text-4xl text-red-400 my-8'>404 - PAGE NOT FOUND </h3>
              <div className='text-center mb-56'>
                   <Link to ="/"><button className='py-2 px-8 rounded bg-green-500 text-white text-lg'>Go back Home Page</button></Link>
              </div>
        </div>
    );
};

export default Error;