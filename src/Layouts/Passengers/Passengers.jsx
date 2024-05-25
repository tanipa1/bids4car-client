import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Outlet } from 'react-router-dom';

const Passengers = () => {
    const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <p className="m-24 flex gap-5 text-4xl bg-white min-h-screen border-2 border-[#B20404] justify-center items-center text-[#B20404]">
        Loading <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }
  
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Passengers;