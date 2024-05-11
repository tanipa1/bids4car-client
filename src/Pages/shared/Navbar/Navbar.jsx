import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/2.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            const selectedUser = data.filter(selectUser => user.email === selectUser.email)
            setUsers(selectedUser);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    fetchData();
}, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <li><ActiveLink to="/">Home</ActiveLink></li>
      <li><ActiveLink to="/about">About Us</ActiveLink></li>
      {user ?
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
        }
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="mr-2">Hi,{user.displayName}!!</p>
            <button className="flex items-center gap-2" onClick={handleLogOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M10.24 0c3.145 0 6.057 1.395 7.988 3.744a.644.644 0 0 1-.103.92a.68.68 0 0 1-.942-.1a8.961 8.961 0 0 0-6.944-3.256c-4.915 0-8.9 3.892-8.9 8.692c0 4.8 3.985 8.692 8.9 8.692a8.962 8.962 0 0 0 7.016-3.343a.68.68 0 0 1 .94-.113a.644.644 0 0 1 .115.918C16.382 18.564 13.431 20 10.24 20C4.583 20 0 15.523 0 10S4.584 0 10.24 0m6.858 7.16l2.706 2.707c.262.261.267.68.012.936l-2.644 2.643a.662.662 0 0 1-.936-.01a.662.662 0 0 1-.011-.937l1.547-1.547H7.462a.662.662 0 0 1-.67-.654c0-.362.3-.655.67-.655h10.269l-1.558-1.558a.662.662 0 0 1-.011-.936a.662.662 0 0 1 .936.011"
                />
              </svg>
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm bg-white hover:bg-black hover:text-white text-black border-2 border-[#B20404]"
          >
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#B20404"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="32"
                  stroke-dashoffset="32"
                  d="M13 4L20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H13"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="32;0"
                  />
                </path>
                <path
                  stroke-dasharray="12"
                  stroke-dashoffset="12"
                  d="M3 12h11.5"
                  opacity="0"
                >
                  <set attributeName="opacity" begin="0.5s" to="1" />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="12;0"
                  />
                </path>
                <path
                  stroke-dasharray="6"
                  stroke-dashoffset="6"
                  d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5"
                  opacity="0"
                >
                  <set attributeName="opacity" begin="0.7s" to="1" />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="6;0"
                  />
                </path>
              </g>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
