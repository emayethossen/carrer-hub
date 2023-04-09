import React from 'react';

const JobCard = ({ card }) => {
    const { image, title, companyName, jobType, description, location, salary, responsibilities, phone, email, experience, education } = card
    return (
        <div className='border shadow-xl rounded-xl space-y-4'>
            <img className='h-56 md:h-72 rounded w-full' src={image} alt="" />
            <div className='p-6 space-y-3 font-semibold'>
                <h2 className='text-2xl'>{title}</h2>
                <p className='mb-20'>{companyName} </p>
                <span className='border rounded border-cyan-400 p-2'>{jobType} </span>
                <div className='flex justify-between font-semibold'>
                    <p>{location} </p>
                    <p>Salary: {salary} </p>
                </div>
                <button className='btn btn-primary mt-4'>View Details</button>
            </div>
        </div>
    );
};

export default JobCard;