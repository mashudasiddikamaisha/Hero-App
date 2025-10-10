import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { IoLogoGithub } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FiX } from "react-icons/fi";


const Navbar = () => {

    const [click, setClick] = useState(false);

    const links = <>
        <li><NavLink to="/" onClick={() => setClick(false)} className={({isActive}) => isActive ? "font-semibold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-2 decoration-2" : "font-medium text-[16px] mr-8"}>Home</NavLink></li>
        <li><NavLink to='/apps' onClick={() => setClick(false)} className={({isActive}) => isActive ? "font-semibold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-2 decoration-2" : "font-medium text-[16px] mr-8"}>Apps</NavLink></li>
        <li><NavLink to="/installation" onClick={() => setClick(false)} className={({isActive}) => isActive ? "font-semibold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-2 decoration-2" : "font-medium text-[16px] mr-8"}>Installation</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-md px-4">
            <div className="navbar-start flex items-center">
                <img className='w-[25px] h-[25px] mr-2' src={logo} alt="logo" />
                <Link to="/" className='font-bold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>HERO.IO</Link>    
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex">
                <a className="btn btn-outline bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white" href='https://github.com/mashudasiddikamaisha' target="_blank"><IoLogoGithub /> Contribute</a>
            </div>
            <div className='navbar-end lg:hidden'>
                <button onClick={() => setClick(!click)} className='btn btn-ghost font-bold'>{click ? <FiX size={25} /> : <RiMenu3Fill size={25} />}</button>
            </div>
            {
                click && (
                    <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md lg:hidden z-50">
                        <ul className="menu flex flex-col p-4 gap-2 border-t">{links}</ul>
                    </div>
                )
            }
        </div>
        
    );
};

export default Navbar;