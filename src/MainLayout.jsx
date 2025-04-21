import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Bounce, ToastContainer } from 'react-toastify';
const MainLayout = () => {
    return (
        <div className='bg-white dark:bg-gray-800 dark:text-white'>
            <div className='pb-20'>
                <Navbar />
            </div>
            <Outlet />
            <Footer />

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default MainLayout;