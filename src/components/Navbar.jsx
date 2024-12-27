import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, setLoading, logOut, loading } = useContext(authContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                window.location.reload();
                toast.success('Logged Out Successfully')
            }).catch((error) => {
                toast.error(error)
            });
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/find-tutors'>Find Tutors</NavLink></li>
                        <li><NavLink to='/add-tutorials'>Add Tutorials</NavLink></li>
                        <li><NavLink to='/my-tutorials'>My Tutorials</NavLink></li>
                        <li><NavLink to='/my-booked-tutors'>My booked tutors</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">LearnEx</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/find-tutors'>Find Tutors</NavLink></li>
                    <li><NavLink to='/add-tutorials'>Add Tutorials</NavLink></li>
                    <li><NavLink to='/my-tutorials'>My Tutorials</NavLink></li>
                    <li><NavLink to='/my-booked-tutors'>My Booked Tutors</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <h3 className=' mr-1'>Hello, {user?.displayName} </h3>

                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">
                                {
                                    user?.photoURL ? <img className='w-14' src={user?.photoURL} alt="profile" />
                                        : <FaUser />
                                }

                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li onClick={() => { toast("this feature will be availabe soon!") }}><a>Update Profile</a></li>
                                <li onClick={handleLogOut}> <a >Logout</a></li>
                            </ul>
                        </div>
                    </> :
                    <>
                        <Link to='/login' className="btn">Login</Link>
                    </>}
            </div>
        </div>
    );
};

export default Navbar;