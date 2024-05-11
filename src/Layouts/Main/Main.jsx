import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/shared/Navbar/Navbar';
import Footer from '../../Pages/shared/Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <p className="m-24 flex gap-5 text-4xl bg-white min-h-screen border-2 border-[#B20404] justify-center items-center text-[#B20404]">Loading <span className="loading loading-bars loading-lg"></span></p>
    }

    return (
        <div className=' min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;