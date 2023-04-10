import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Details.css';
import {PhoneArrowDownLeftIcon , CurrencyDollarIcon , BriefcaseIcon , EnvelopeIcon , MapPinIcon} from '@heroicons/react/24/solid'
import { getShoppingCart } from '../../utilities/fakedb';

const Details = () => {
 const [details , setDetails] = useState({}) 
 const dynamic = useParams()  ;
 const dynamicId = parseInt(dynamic.id);
 const data = useLoaderData();

 useEffect(()=>{
     if(data){
        const detailsData = data.find(dt => dt.id == dynamicId)
        setDetails(detailsData)     
     }
 },[])


//  local storage ******

const addToDb = data => {
 const previousData = JSON.parse(localStorage.getItem('apply-data'))
  let allData = [];

  if(previousData){
    const isAvailabe = previousData.find(pd => pd.id == data.id) 
        if(isAvailabe){
          alert('items added')
        }
        else{
           allData.push(...previousData , data )  ;
           localStorage.setItem('apply-data', JSON.stringify(allData))
        }
  }
else{
    allData.push(data)
    localStorage.setItem('apply-data', JSON.stringify(allData))

}




}
// end *******  






 const {jobDescription , jobResponsibility , salary , jobPost , email , address , number , education , experience } = details ;

//  console.log(details);
 return (
        <div className='mb-12'>
             <div className='text-3xl font-bold text-center pt-8 mt-12 mb-24'>
                   <h1>Job Details</h1>
             </div>
              <div className='details'>
                   <div className='p-8 ms-12'>
                        <div  className='flex mb-8'>
                              <h2 className='text-xl font-bold'>Job Description : </h2>
                              <p className='text-slate-500 ps-2'>{jobDescription}</p>
                        </div>
                         <div className='flex mb-8'>
                              <h2 className='text-xl font-bold'>Job Responsibility : </h2> <p className='text-slate-500 ps-2 my-auto'>{jobResponsibility}</p>
                         </div>
                         <div className='mb-8'>
                              <h2 className='text-xl font-bold'>Educational Requirements : </h2> <p className='text-slate-500 ps-2 mt-4'>{education}</p>
                         </div>
                         <div className='mb-8'>
                              <h2 className='text-xl font-bold'>Experiences : </h2> <p className='text-slate-500 ps-2 mt-4'>{experience}</p>
                         </div>
                   </div>
                   <div className='contact-info'>
                        <div>
                            <h2 className='text-xl font-bold mb-4'>Job Details</h2> <hr/>
                              <div className='flex items-center'>
                                <CurrencyDollarIcon className="h-4 w-4 mb-2 me-2 text-blue-500" />
                                <p className='text-slate-500 mb-2'><span className='text-lg font-bold text-black'>Salary:</span> {salary}</p>
                              </div>
                              <div className='flex items-center'>
                                <BriefcaseIcon className="h-4 w-4  mb-2 me-2 text-blue-500" />
                                <p className='text-slate-500 mb-2'><span  className='text-lg font-bold text-black'>Job Title : </span>{jobPost}</p>
                              </div>
                        </div>
                         <div className='apply-info'>
                            <h2 className='text-xl font-bold my-4'>Contact Information</h2>
                              <div className='flex items-center'>
                                 <PhoneArrowDownLeftIcon className="h-4 w-4 me-2 text-blue-500" />
                                 <p className='text-slate-500'> {number}</p>
                              </div>
                              <div className='flex items-center'>
                                <EnvelopeIcon className="h-4 w-4 me-2 text-blue-500" />
                                 <p className='text-slate-500'><span  className='text-lg font-bold text-black'>Email : </span>{email}</p>
                              </div>
                               <div className='flex items-center'>
                                   <MapPinIcon className="h-4 w-4 me-2 text-blue-500" />
                                   <p className='text-slate-500'><span  className='text-lg font-bold text-black'>Address : </span>{address}</p>
                               </div>
                            <div className='mx-auto'>
                                 <button onClick={ ()=> addToDb(details)} className='apply-btn'>Apply Now</button>
                            </div>
                        </div>
                   </div>
              </div>
        </div>
    );
};

export default Details;