import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useContext(authContext)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user)
                updateUserProfile({ displayName: name, photoURL })
                    .then(() => {
                        toast.success("Registration Success!")
                        navigate('/')
                    })
                // console.log(user)
            })
            .catch(error => {
                toast.error(error.message)
                return
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" name="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center my-4">
                        Already have an account? <a href="/login" className="link link-primary">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
