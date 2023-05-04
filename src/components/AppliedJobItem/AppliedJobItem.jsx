import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';
const AppliedJobItem = ({ detail }) => {

    const { companyName, title, image, place, salary, location, jobType } = detail

    return (
        <div className='border rounded lg:w-3/4 lg:mx-auto lg:p-10 lg:flex items-center justify-between gap-5 mx-4 my-4 p-4'>
            <div className='flex items-center justify-center gap-8'>
                <img className='rounded lg:w-96 lg:h-64 w-36 h-36' src={image} alt="" />
                <div>
                    <div>
                        <p className='font-bold'>{title}</p>
                        <p className='font-semibold'>{companyName}</p>
                    </div>
                    <div className='my-4'>
                        <p className='border rounded border-cyan-400 p-2 mr-6 inline'>{jobType} </p>
                        <p className='border rounded border-cyan-400 p-2 inline'>{place} </p>
                    </div>

                    <div className='lg:space-y-3 font-semibold'>
                        <p><FontAwesomeIcon icon={faLocation} /> {location} </p>
                        <p><FontAwesomeIcon icon={faDollar} /> Salary: {salary} </p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-6'>
            <Link to='/' >
            <button className='btn'>Veiw Details</button>
            </Link>
            </div>
        </div>
    );
};

export default AppliedJobItem;