import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


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
 const {jobDescription , jobResponsibility , salary , jobPost , email , address , number} = details ;

 console.log(details);
 return (
        <div>
             <div className='text-3xl font-bold text-center my-12'>
                   <h1>Job Details</h1>
             </div>
              <div className='details'>
                   <div>
                       <h2>Job Description : <p>{jobDescription}</p></h2>
                       <h2>Job Responsibility : <p>{jobResponsibility}</p></h2>
                   </div>
                   <div>
                        <div>
                            <h2>Job Details</h2>
                             <p>{salary}</p>
                             <p>{jobPost}</p>
                        </div>
                        <div>
                            <h2>Contact Information</h2>
                             <p>{number}</p>
                        </div>
                   </div>
              </div>
        </div>
    );
};

export default Details;