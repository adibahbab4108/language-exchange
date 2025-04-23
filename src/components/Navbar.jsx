import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Toggle from './Toggle';

const Navbar = () => {
    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged Out Successfully');
            })
            .catch((error) => {
                toast.error(error.message || "Logout failed");
            });
    };

    const navLinks = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/find-tutors'>Find Tutors</NavLink></li>
            <li><NavLink to='/add-tutorials'>Add Tutorials</NavLink></li>
            <li><NavLink to='/my-tutorials'>My Tutorials</NavLink></li>
            <li><NavLink to='/my-booked-tutors'>My Booked Tutors</NavLink></li>
        </>
    );

    return (
        <div className={`navbar fixed z-10 ${localStorage.getItem("theme") === 'light' ? 'bg-black text-white' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box z-[1] w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">LearnEx</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-2">
                <Toggle />
                {user ? (
                    <div className="dropdown dropdown-hover dropdown-end ">
                        <button tabIndex={0} className="m-1" aria-label="User menu">
                            {user?.photoURL ? (
                                <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="User profile" />
                            ) : (
                                <FaUser size={24} />
                            )}
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 bg-black">
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="hover:bg-gray-700 hover:text-white rounded-box"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <button
                                    className="hover:bg-gray-700 hover:text-white rounded-box"
                                    onClick={handleLogOut}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to='/login' className="btn">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
