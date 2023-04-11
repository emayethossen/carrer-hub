import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollar, faPhone, faEnvelope, faTasks } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const JobCard = ({ card }) => {
    const { id, image, title, companyName, jobType, description, location, salary, responsibilities, phone, email, place, experience, education } = card
    return (
        <div className='border shadow-xl rounded-xl space-y-4'>
            <img className='object-cover h-56 md:h-72 rounded w-full' src={image} alt="" />
            <div className='p-6 font-semibold space-y-5'>
                <h2 className='text-2xl'>{title}</h2>
                <p>{companyName} </p>
                <div>
                    <span className='border rounded border-cyan-400 p-2 mr-6'>{jobType} </span>
                    <span className='border rounded border-cyan-400 p-2'>{place} </span>
                </div>
                <div className='flex justify-between font-semibold'>
                    <p><FontAwesomeIcon icon={faLocation} /> {location} </p>
                    <p><FontAwesomeIcon icon={faDollar} /> Salary: {salary} </p>
                </div>
                <Link to={`/title/${id}`}>
                    <button className='btn btn-primary mt-4'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;