import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between w-3/4 mx-auto'>
            <div>
                <h1>Career Hub</h1>
            </div>
            <nav className='space-x-8'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied-jobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
            <div>
                <button className='btn btn-ghost'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;