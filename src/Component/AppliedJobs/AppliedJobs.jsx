import React, { useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import './AppliedJobs.css'
import ShowAppliedData from '../ShowAppliedData/ShowAppliedData';

const AppliedJobs = () => {
   const localData1 = getShoppingCart(); 
   
//    const getData = (ld)=>{
//        setLocalData(ld)
//     }
//     const [localData , setLocalData ] = useState({})
   
//    console.log(localData);
//  const  filterOnSite = () =>{
//         const newData = getData();
//         // const newData1 = localData.filter(ld => ld.jobType == "Onsite")
//     }

//   const filterRemote = () =>{
//         console.log('remote');
//     }
    
    return (
        <div className='mb-60'>
             <div className='text-center mb-40 mt-8'>
                  <h2 className='text-3xl font-bold'>Applied Jobs</h2>
               </div>
                <div>
                    <div className='flex justify-end me-60 mb-8'>
                         {/* btn  */}
                        <button  className='me-2 px-8 py-2 bg-green-400 text-white rounded'>Remote</button>
                        <button className='px-8 py-2 bg-green-400 text-white rounded'>Onsite</button>
                    </div>
                    {
                       localData1.map( ld => <ShowAppliedData key={ld.id} localData = {ld}></ShowAppliedData>)
                    }
                </div>
        </div>
    );
};

export default AppliedJobs;