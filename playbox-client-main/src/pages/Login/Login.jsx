import React, { useContext, useState } from 'react';
import img from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { googleLogIn, logIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    
    const navigate = useNavigate();

    // Get location from where the user has been redirected to login page
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Handle Google Log In
    const handleGoogleLogIn = () => {
        setSuccess('');
        googleLogIn()
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('You are logged in with Google.');
                setError('');
                navigate(from);
            })
            .catch(error => setError(error.message))
    }

    // Handle Log In with Email, Password
    const handleLogIn = event => {
        event.preventDefault();
        setSuccess('');
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('You are Logged In.');
                setError('');
                form.reset();
                navigate(from);
            })
            .catch(error => { setError(error.message); })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold">Log In Now </h1>
                </div>
                <div className='flex'>
                    <div>
                        <img src={img} alt="" className='px-6' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-xs'>
                                <Link to='/register'> Don't have an account? Register</Link>
                            </div>
                        </form>

                    </div>

                </div>
                <div className='text-center py-6'>

                    <button className="btn btn-outline btn-primary rounded" onClick={handleGoogleLogIn}>Log In with Google</button>
                    <p className='text-red-600'>{error}</p>

                    <p className='text-green-600'>{success}</p>

                </div>

            </div>
        </div>
    );
};

export default Login;