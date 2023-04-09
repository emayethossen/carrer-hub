import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Home;