import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
    <div>
        <footer className="footer p-10 bg-base-100 text-base-content">
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <span className="footer-title">Company</span>
                <Link to='/about'> About Us </Link>
                <Link to='/blog'> Our Blog </Link>
                <Link to='/all'> Toy Collection </Link>
            </div>
            <div>
                <span className="footer-title">Socials</span>
                <Link>Facebook</Link>
                <Link>Instagram</Link>
                <Link>Youtube</Link>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
            
        </footer>
        <p className='text-center'>Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;