import React from 'react';
import CatagoryList from '../CatagoryList/CatagoryList';
import Featured from '../Featured/Featured';
import { useLoaderData} from 'react-router-dom';

const Home = () => {
 const data = useLoaderData();
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
                <div>
                    <section className='text-center mt-24 mb-8'>
                            <h1 className='text-5xl font-bold mb-4'>Featured Jobs</h1>
                            <p className='text-slate-600 text-md'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </section>
                    <div className='features'>
                            {
                            data.map((features) => (<Featured key={features.id} features ={features}></Featured>))
                            }
                    </div>
                      <div className='text-center mb-12'>
                          <button className='bg-sky-400 px-8 py-2 rounded text-white'>See All Jobs</button>
                      </div>
                </div>
        </div>
    );
};

export default Home;