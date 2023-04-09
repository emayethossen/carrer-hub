import React from 'react';

const Category = ({ category }) => {
    const { name, img, jobs } = category
    return (
        <div className='bg-slate-100 rounded-xl space-y-4'>
            <img className='rounded w-full h-44' src={img} alt="" />
            <div className='p-6 space-y-3'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p>{jobs}</p>
            </div>
        </div>
    );
};

export default Category;