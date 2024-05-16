import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/2.png';
import ActiveLink from "../../Pages/shared/ActiveLink/ActiveLink";

const AdminPanel = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <p className="m-24 flex gap-5 text-4xl bg-white min-h-screen border-2 border-[#B20404] justify-center items-center text-[#B20404]">
        Loading <span className="loading loading-bars loading-lg"></span>
      </p>
    );
  }

  return (
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu a p-4 w-64 min-h-full bg-black text-white">
          {/* Sidebar content here */}
          <Link to='/'><img className="w-40 mx-auto mb-10" src={logo} alt="" /></Link>
          <div className="grid justify-center">
          <li>
            <ActiveLink to='/admin/user'>Manage Users</ActiveLink>
          </li>
          <li>
            <ActiveLink to='/admin/ridesharers' >Manage Ridesharers</ActiveLink>
          </li>
          <li>
            <ActiveLink to='/admin/rentFair' >Choose Rent Fair</ActiveLink>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
