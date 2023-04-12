import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import './AppliedJobs.css'
import ShowAppliedData from '../ShowAppliedData/ShowAppliedData';

const AppliedJobs = () => {
   const [localData , setLocalData ] = useState(getShoppingCart());
// onsite 
   const filterOnSite = () =>{
        const localData1 = getShoppingCart();
        const onSiteData = localData1.filter(ld => ld.jobType == "Onsite")
        setLocalData(onSiteData)
      
    }
//    remote 
    const filterRemote = () =>{
        const localData1 = getShoppingCart();
        const remoteData = localData1.filter(ld => ld.jobType == "Remote")
        setLocalData(remoteData)
    }
 

    return (
        <div className='mb-60'>
             <div className='text-center mb-20 mt-8'>
                  <h2 className='text-3xl font-bold'>Applied Jobs</h2>
               </div>
                <div>
                    <div className='flex justify-end me-60 mb-12'>
                          <div className="dropdown">
                             <button className="dropBtn px-8 py-2 mb-2">Filter By </button>
                                <div className="dropdown-content">
                                    <button onClick={filterOnSite} className='px-8 py-2 bg-green-400 text-white rounded mb-2 me-2'>On-Site</button>
                                    <button onClick={filterRemote} className='px-8 py-2 bg-green-400 text-white rounded mb-2 me-2'>Remote</button>
                                </div>
                            </div>
                         {/* btn  */}                       
                 </div>
                      {
                       localData.map( ld => <ShowAppliedData key={ld.id} localData = {ld}></ShowAppliedData>)
                      }
                </div>
        </div>
    );
};

export default AppliedJobs;