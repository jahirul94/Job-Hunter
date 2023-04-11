import React from 'react';
import './Features.css'
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Featured = ({features}) => {
    
    const {id, companyName , imgUrl , jobPost , salary , location , jobType , jobType1 } = features ;
   

    return (
           <div className='m-8 p-8 mx-auto border'>
              <div>
                  <img className='w-60 h-32 rounded' src={imgUrl} alt="" />
                   <h2 className='text-2xl font-semibold mt-2'>{jobPost}</h2>
                   <p className='text-slate-500 my-2'>{companyName}</p>
                    <div>
                        <button className='btn-jobType'>{jobType}</button>
                        <button  className='btn-jobType'>{jobType1}</button>
                    </div>
                     <div className='flex justify-between my-2'>
                          <p className='flex'><MapPinIcon className="h-6 w-6 text-gray-400 me-2" />{location}</p>
                          <p className='ms-4 flex'><CurrencyDollarIcon className="h-6 w-6 text-gray-400 me-2" />Salary : {salary}</p>
                     </div>
                    <Link to={`/details/${id}`}><button className='bg-lime-300 text-lg px-8 py-2 rounded my-4'>View Details</button></Link>
              </div>
            </div>
    );
};

export default Featured;