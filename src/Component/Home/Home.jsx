import React from 'react';
import CatagoryList from '../CatagoryList/CatagoryList';

const Home = () => {
    return (
        <div className='mx-12'>
              <div className='flex justify-between items-center py-12'>
                <div>
                    <h2 className='text-5xl font-bold mb-8'>One Step <br/> Closer To Your <br/> <span className='text-lime-500'> Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all <br/> your job application from start to finish.</p>
                    <button className='mt-8 bg-lime-600 px-8 py-4 rounded'>Get Started</button>
                </div>
                <div>
                    <img className='rounded-lg' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
              </div>
              <CatagoryList></CatagoryList>
        </div>
    );
};

export default Home;