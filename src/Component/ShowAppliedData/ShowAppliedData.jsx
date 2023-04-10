import React from 'react';
import { CurrencyDollarIcon , MapPinIcon} from '@heroicons/react/24/solid'

const ShowAppliedData = ({localData}) => {

    const {imgUrl , companyName , jobPost , jobType , jobType1 , location , salary , } = localData;

    return (
        <div>
             <div className='flex justify-between mx-44 px-10 mb-8'>
                   <div className='flex'>
                        <img className='w-56 h-48 me-8 rounded' src={imgUrl} alt="" />
                        <div>
                             <h2 className='text-2xl font-bold'>{jobPost}</h2>
                              <p className='text-slate-500 text-lg font-semibold'>{companyName}</p>
                              <div className='my-4'>
                                  <button className='btn-jobType'>{jobType}</button>
                                  <button className='btn-jobType'>{jobType1}</button>
                              </div>
                               <div className='flex justify-around'>
                                    <div className='flex items-center'>
                                        <MapPinIcon className="h-4 w-4 me-2 text-gray-600" />
                                        <p className='text-slate-500'>{location}</p>
                                    </div>
                                     <div className='flex items-center'>
                                         <CurrencyDollarIcon className="h-4 w-4 me-2 text-gray-600" />
                                         <p className='text-slate-500'>{salary}</p>
                                     </div>
                               </div>
                        </div>
                   </div>
   
                    <div className='flex items-center me-8'>
                         <button className='btn-details'>View Details</button>
                    </div>
              </div>
        </div>
    );
};

export default ShowAppliedData;