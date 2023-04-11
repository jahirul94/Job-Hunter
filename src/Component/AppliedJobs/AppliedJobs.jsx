import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import './AppliedJobs.css'
import ShowAppliedData from '../ShowAppliedData/ShowAppliedData';

const AppliedJobs = () => {
    const localData1 = getShoppingCart();
    

    return (
        <div>
             <div className='text-center mb-40 mt-8'>
                  <h2 className='text-3xl font-bold'>Applied Jobs</h2>
               </div>
                <div>
                    {
                    localData1.map( ld => <ShowAppliedData key={ld.id} localData = {ld}></ShowAppliedData>)
                    }
                </div>
        </div>
    );
};

export default AppliedJobs;