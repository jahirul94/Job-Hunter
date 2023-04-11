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
import Details from './Component/Details/Details';
import Error from './Component/Error/Error';


const router = createBrowserRouter([
  {
    path :'/',
    element :<Header></Header>,
    children : [
      {
         path : '/',
         element :<Home></Home>,
         loader : () => fetch('data.json')
      },
      {
        path : 'statistics',
        element :<Statistics></Statistics>,
        loader : () => fetch('assignmentNumber.json')

      },
      {
        path :'applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path :'blog',
        element :<Blog></Blog>
      },
      {
        path : 'details/:id',
        element : <Details></Details>,
        loader : () => fetch('/data.json')
      },
      {
        path : '*',
        element : <Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
