import React from 'react'
import ReactDOM from 'react-dom/client'
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
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('featured.json')
      },
      {
        path: '/:id',
        element: <JobDetails />,
        loader: ({ params }) => fetch(`https://drive.google.com/file/d/1uB7v2O7XufDWg3oRk1wy5YGC9Ggel3qE/view?usp=share_link/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/statistics',
        element: <AppliedJobs />
      },
      {
        path: '/applied-jobs',
        element: <Statistics />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
