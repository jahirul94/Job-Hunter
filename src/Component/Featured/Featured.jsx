import React from 'react';
import './Features.css'
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Featured = ({features}) => {
    const {companyName , imgUrl , jobPost , salary , location } = features ;
    console.log(features);
    return (
           <div className='m-8 p-12 mx-auto'>
              <div>
                  <img className='w-60 h-32 rounded' src={imgUrl} alt="" />
                   <h2 className='text-2xl font-semibold mt-2'>{jobPost}</h2>
                   <p className='text-slate-500 my-2'>{companyName}</p>
                     <div className='flex justify-between my-2'>
                          <p className='flex'><MapPinIcon className="h-6 w-6 text-gray-400 me-2" />{location}</p>
                          <p className='ms-4 flex'><CurrencyDollarIcon className="h-6 w-6 text-gray-400 me-2" />Salary : {salary}</p>
                     </div>
                    <button className='bg-lime-300 text-lg px-8 py-2 rounded my-4'>View Details</button>
              </div>
            </div>
    );
};

export default Featured;