import React from "react";

const RidesharersDetails = ({ ridesharer }) => {
  return (
    <div className="drawer drawer-end lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-primary lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4  w-60 min-h-screen bg-black text-white">
          {/* Sidebar content here */}
          <div className="grid justify-center">
            <img className="w-32 rounded-full" src={ridesharer.image} alt="" />
          </div>
          <div className="grid justify-center">
            <h1 className="mt-5 font-bold text-2xl">{ridesharer.name}</h1>
            <p className="mt-3"><span className="font-bold">Driving Licence:</span> {ridesharer.license}</p>
            <p><span className="font-bold">Car Registration Number:</span> {ridesharer.car_reg}</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RidesharersDetails;
