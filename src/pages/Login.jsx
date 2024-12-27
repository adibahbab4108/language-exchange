import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { loginUser, user, setUser, signInWithGoogle } = useContext(authContext)

    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                navigate(location.state || '/')
                toast.success('Login Successfull')
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            });
    }


    const handleGoogleLogin = () => {
        signInWithGoogle().then(result => {
            const user = result.user
            setUser(user)
            navigate(location.state || '/')
            toast.success('Login Successfull')
        })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className='flex justify-center my-5'>
                        <button onClick={handleGoogleLogin} className='btn'><FcGoogle className='text-xl' /></button>

                    </div>
                    <p className="text-center my-4">
                        Don't have an account? <Link to='/register' className='link link-primary'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
