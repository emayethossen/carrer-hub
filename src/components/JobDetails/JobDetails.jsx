import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const card=useLoaderData()
    console.log(card);
    return (
        <div>
            {card.id}
        </div>
    );
};

export default JobDetails;