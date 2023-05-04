import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobItem from '../AppliedJobItem/AppliedJobItem';

const AppliedJobs = () => {
    const cart = useLoaderData()
    console.log(cart);

    return (
        <div className='lg:my-16'>
            <h2 className='lg:text-4xl text-2xl font-bold text-center my-10'>Applied Jobs</h2>
            {
                cart.map(detail => <AppliedJobItem 
                    key={detail.id} 
                    detail={detail} />)
            }
        </div>
    );
};

export default AppliedJobs;