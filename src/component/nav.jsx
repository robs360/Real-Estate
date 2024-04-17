import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
const Nav = () => {
    return (
        <div className="navbar bg-base-100 w-[98%] md:w-[95%] mx-auto bg-blue-900 mb-14">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to={'/'}>
                            <li className="text-[17px] font-medium"><a>Home</a></li>
                        </Link>
                        <Link to={'/reg'}>
                            <li className="text-[17px] font-medium">
                                <a>Register</a>
                            </li>
                        </Link>
                        <Link>
                            <li className="text-[17px] font-medium"><a>Item 3</a></li>
                        </Link>
                    </ul>
                </div>
               <div className="flex items-center space-x-2">
                   <img className="w-[50px] h-[50px] rounded-[50%]" src={logo} alt="" srcset="" />
                  <h1 className="text-2xl font-semibold">RlandBD</h1>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <Link>
                        <li className="text-[17px] font-medium"><a href="/">Home</a></li>
                    </Link>
                    <Link to={'/reg'}>
                        <li className="text-[17px] font-medium">
                            <a>Register</a>
                        </li>
                    </Link>
                    <Link>
                        <li className="text-[17px] font-medium"><a>Item 3</a></li>
                    </Link>
                </ul>
            </div>
            <div className="navbar-end flex space-x-2 items-center">
                <Link to={'/log'}>
                <a className="btn text-xl">Login</a>
                </Link>
            </div>
        </div>
    )
}
export default Nav