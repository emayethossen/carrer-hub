import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import JobCard from '../JobCard/JobCard';

const Home = () => {
    const { jobCards } = useLoaderData()
    console.log(jobCards);
    // console.log(cards);
    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     fetch('category.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    return (
        <div>
            {/* Header  Section */}
            <section className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
            </section>
            {/* Job Category Section */}
            {/* <section >
                <h1 className='font-bold text-center text-3xl mt-8'>Job Category List</h1>
                <div className='w-3/4 my-8 mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category} />)
                    }
                </div>
            </section> */}
            {/* Featured Section */}
            <section>
                <h1 className='font-bold my-8 text-center text-3xl mt-8'>Featured Jobs</h1>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='w-3/4 my-8 mx-auto grid md:grid-cols-2 gap-6'>

                </div>
            </section>
        </div>
    );
};

export default Home;