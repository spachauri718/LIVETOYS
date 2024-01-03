import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const img = form.img.files[0];
        console.log(name, email, password, photo, img);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                setError('');

                setSuccess('Account Created Successfully!');

                updateUser(loggedUser, name, photo);

                form.reset();
            })
            .catch(error => setError(error.message))
    }

    const updateUser = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL : photo
        })
        .then()
        .catch(error => setError(error.message))
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold">Create an Account </h1>
                </div>
                <div className='text-center mb-4'>
                    <p className='text-red-600'>hey{error}</p>
                    <p className='text-green-600'>{success}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Create a Password" name='password' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" placeholder="Upload Photo URL" name='photo' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" placeholder="Upload pic" name='img' className="input input-bordered" />

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='text-xs'>
                            <Link to='/login'> Already have an account? Log In</Link>
                        </div>
                    </form>



                </div>
            </div>
        </div>

    );
};

export default Registration;