import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faDollar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const JobDetails = () => {
    const card = useLoaderData()
    console.log(card);
    const { id, image, title, companyName, jobType, description, location, salary, responsibilities, phone, email, experience, education } = card
    return (
        <div className=' w-3/4 mx-auto'>
            <h2 className='text-3xl text-center font-bold my-8 md:my-12'>Job Details</h2>
            <div className='font-semibold grid md:grid-cols-3 gap-8'>
                <div className='md:col-span-2 md:mt-24 space-y-6'>

                    <p><span className='font-bold text-xl'>Job Description:</span> {description}</p>
                    <p><span className='font-bold text-xl'>Job Responsibilities</span>: {responsibilities}</p>
                    <p><span className='font-bold text-xl'>Educational Qualification:</span> {education}</p>
                    <p><span className='font-bold text-xl'>Experience:</span> {experience}</p>

                </div>
                <div className='bg-slate-100 rounded-xl p-6'>
                    <h2 className='font-semibold text-2xl'>Job details</h2>
                    <hr className='border border-emerald-500 my-6' />
                    <div className='space-y-2'>
                        <p><FontAwesomeIcon icon={faDollar} /> Salary: {salary} </p>
                        <p><FontAwesomeIcon icon={faTasks} /> Job Title: {title}</p>
                    </div>
                    <h2 className='font-semibold text-2xl my-8'>Contact Information</h2>
                    <hr className='border border-emerald-500 my-6' />
                    <div className='space-y-2'>
                        <p><FontAwesomeIcon icon={faPhone} />Phone: {phone} </p>
                        <p><FontAwesomeIcon icon={faEnvelope} />Email:{email}</p>
                        <p><FontAwesomeIcon icon={faLocation} /> Address:{location} </p>
                    </div>

                    <Link to='/'>
                        <button className='btn btn-primary mt-4 w-full'>Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;