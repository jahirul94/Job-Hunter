import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
         <div>
           <nav className='flex justify-between my-8 mx-10'> 
              <h2 className='text-3xl font-bold'>Job Hunter</h2>
               <div className='nav-links'>
                    <Link to ='/'>Home</Link>
                    <Link to ='/statistics'>Statistics</Link>
                    <Link to ='/applied'>Applied Jobs</Link>
                    <Link to ='/blog'>Blog</Link>
               </div>
                 <button className='nav-btn'>Star Applying</button>
             </nav>
             <Outlet></Outlet>
         </div>
    );
};

export default Header;