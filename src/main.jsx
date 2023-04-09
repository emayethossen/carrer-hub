import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Root from './components/Layout/Root';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader:()=>fetch('https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-emayethossen/main/public/featured.json?token=GHSAT0AAAAAAB7PXUJUXFCUZLA474MQCBNOZBTPR5A')
      },
      {
        path:'/blog',
        element:<Blog />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
