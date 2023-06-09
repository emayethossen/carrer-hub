import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/facebook.png'
import logo2 from '../../assets/twitter.png'
import logo3 from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='bg-slate-900'>
            <footer className='grid lg:grid-cols-5 gap-12 md:grid-cols-2 w-3/4 p-10 mx-auto text-white'>
                <div className='text-center lg:text-left space-y-4'>
                    <h2 className='footer-title'>Remote Work</h2>
                    <p className='text-sm'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='space-x-3 flex justify-center md:justify-start'>
                        <img className='w-5 h-5' src={logo} alt="" />
                        <img className='w-5 h-5' src={logo2} alt="" />
                        <img className='w-5 h-5' src={logo3} alt="" />
                    </div>
                </div>
                <div className='text-center lg:text-left space-y-4 hidden lg:flex flex-col'>
                    <h2 className='footer-title'>Company</h2>
                    <Link to='/' className="link link-hover block">About Us</Link>
                    <Link to='/' className="link link-hover block">Work
                    </Link>
                    <Link to='/' className="link link-hover block">Latest News</Link>
                    <Link to='/' className="link link-hover block">Careersus</Link>
                </div>
                <div className='text-center lg:text-left space-y-4 hidden lg:flex flex-col'>
                    <h2 className='footer-title'>Product</h2>
                    <Link to='/' className="link link-hover block">Prototype</Link>
                    <Link to='/' className="link link-hover block">Plans & Pricing</Link>
                    <Link to='/' className="link link-hover block">Customers</Link>
                    <Link to='/' className="link link-hover block">Integrations</Link>
                </div>
                <div className='text-center lg:text-left space-y-4 hidden lg:flex flex-col'>
                    <h2 className='footer-title'>Support</h2>
                    <Link to='/' className="link link-hover block">Help Desk</Link>
                    <Link to='/' className="link link-hover block">Sales</Link>
                    <Link to='/' className="link link-hover block">Become a Partner</Link>
                    <Link to='/' className="link link-hover block">Developers</Link>
                </div>
                <div className='text-center lg:text-left space-y-4'>
                    <h2 className='footer-title'>Contact</h2>
                    <Link to='/' className="link link-hover block">524 Broadway , NYC</Link>
                    <Link to='/' className="link link-hover block">+1 777 - 978 - 5570</Link>
                </div>
            </footer>
            <hr className='border w-3/4 mx-auto mt-6' />
            <div className='w-3/4 text-sm text-white mx-auto flex justify-between py-12'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p className='text-right'>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;