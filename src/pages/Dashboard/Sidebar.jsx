import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdOutlineDashboardCustomize, MdOutlineUpdate } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import Toggle from "../../components/Toggle";
import { authContext } from "../../provider/AuthProvider";

const Sidebar = () => {
    
    const {user} =useContext(authContext)
    const [showSideBar, setShowSideBar] = useState(true)
    const menuItems = [
        { name: "Dashboard", path: '/dashboard', icon: <MdOutlineDashboardCustomize /> },
        { name: "Profile", path: '/dashboard/profile', icon: <FaRegUserCircle /> },
        { name: "Update Profile", path: '/dashboard/update-profile', icon: <MdOutlineUpdate /> },
        { name: "Home", path: '/', icon: <CiHome /> },
    ]
    const handleSideBar = () => {
        setShowSideBar(!showSideBar)
    }
    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`relative transition-all duration-300 ease-in-out border-r  border-gray-300 min-h-screen py-2 flex flex-col
            ${showSideBar ? 'w-64' : 'w-12'}`
        }
            >
                  {/* Toggle Button */}
            <button
                onClick={handleSideBar}
                className={`cursor-pointer absolute -right-4  top-6 z-50 bg-white text-2xl p-1 rounded-full shadow transition-transform duration-300 ${!showSideBar ? 'rotate-180 hover:rotate-0 ' : 'hover:rotate-180 '
                    }`}
            >
                <FaArrowRightFromBracket />
            </button>

            <div className="flex items-center gap-2 py-4 px-2">
                <img src={user?.photoURL} alt="User" className="border w-12 h-12 rounded-full "/>
               {showSideBar &&  <h2>{user?.displayName}</h2>}
            </div>
                {menuItems.map(({ name, path, icon }, index) => (
                    <NavLink
                        to={path}
                        key={index}
                        end={"/"}
                        className={({ isActive }) =>
                            `flex items-center gap-3 ${showSideBar ? 'px-4' : 'px-2'}  py-3.5 whitespace-nowrap transition-all duration-200
                 ${isActive
                                ? 'bg-indigo-100 border-r-4 border-indigo-500 font-medium text-indigo-700'
                                : 'hover:bg-gray-100 border-r-4 border-transparent hover:border-gray-300'}`
                        }
                    >
                       <p className="text-3xl"> {icon}</p>
                        {showSideBar && <span className="text-sm">{name}</span>}
                    </NavLink>
                ))}
            </div>
        </div>


    );
};

export default Sidebar;