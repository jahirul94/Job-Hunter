import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import Blog from './Component/Blog/Blog';
import CatagoryList from './Component/CatagoryList/CatagoryList';
import Featured from './Component/Featured/Featured';


const router = createBrowserRouter([
  {
    path :'/',
    element :<Header></Header>,
    children : [
      {
         path : '/',
         element :<Home></Home>
      },
      {
        path : '/',
        element : <Featured></Featured>
      },
      {
        path : 'statistics',
        element :<Statistics></Statistics>

      },
      {
        path :'applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path :'blog',
        element :<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
