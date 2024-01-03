import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './Header.css'
import { Tooltip } from 'react-tooltip'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/all'>Toys</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                    </ul>
                </div>
                <div className="navbar-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/all'>Toys</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>


                        </ul>
                    </div>
                    <a className="text-xl">
                        <img src={logo} alt="logo" className='logo' />
                    </a>
                </div>
                <div className="navbar-end">

                    {user ?
                        <div>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full me-2" >

                                    <img src={user.photoURL} className='tooltip text-black' data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user.displayName}
                                        data-tooltip-place="top" />
                                        <Tooltip id="my-tooltip" />


                                </div>
                            </label>



                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-secondary">
                                    Choose an Action
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/mytoys'>See My Toys</Link></li>
                                    <li><Link to='/addtoy'>Add New Toy</Link></li>
                                    <li><Link onClick={handleLogOut}>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='text-xl'>
                            <Link to='/register' className='me-2'>Register</Link>
                            <Link to='/login'> Log In</Link>
                        </div>

                    }







                </div>
            </div>






        </div>
    );
};

export default Header;