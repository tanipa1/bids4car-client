import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import logo from '../../../assets/2.png';

const PassengersNav = () => {
  const { user } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/passengers/rideStatus">Ride Status</ActiveLink>
      </li>
      {/* {user ?
                <>
                    {users?.map(user =>
                        <div key={user._id}>
                            {
                                user?.accountType === "Passengers" ?
                                        <li><ActiveLink to='/passengers'>Passengers-Dashboard</ActiveLink></li> :
                                        user?.accountType === "Admin" ?
                                        <li><ActiveLink to='/admin'>Admin-Panel</ActiveLink></li> :
                                        user?.accountType === "Ridesharers" ?
                                        <li><ActiveLink to='/ridesharers'>Ridesharers-Dashboard</ActiveLink></li>:<></>
                            }
                        </div>)}
                </> : <></>
            } */}
    </>
  );

  return (
    <div className="navbar bg-black px-8 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link>
          <img className="w-32" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
        <Link
          className="btn btn-sm bg-white hover:bg-black hover:text-white text-black border-2 border-[#B20404]"
          to="/passengers"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PassengersNav;
