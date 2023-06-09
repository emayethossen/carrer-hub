import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-200'>
            <div className="navbar bg-base-200 lg:py-8 md:py-4 lg:w-3/4 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-200 rounded-box w-52 space-y-6 font-semibold">
                            <Link to='/'>Home</Link>
                            <Link to='/statistics'>Statistics</Link>
                            <Link to='/applied-jobs'>Applied Jobs</Link>
                            <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <Link to='/' className="text-3xl font-bold text-sky-500">Remote Job</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8 font-semibold">
                        <Link to='/'>Home</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/applied-jobs'>Applied Jobs</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link className="btn">Start Applying</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;

