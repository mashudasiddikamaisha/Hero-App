import React from 'react';
import logo from '../../assets/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-[#001931] text-white'>
            <div className='mx-auto px-6 py-8'>
                <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[25px] h-[25px] mr-2' src={logo} alt="logo" />
                        <p className='font-bold text-[16px]'>HERO.IO</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 mt-4 md:mt-0 lg:mt-0'>
                        <p className='font-medium text-xl'>Social Links</p>
                        <div className='flex gap-3'>
                            <a href="https://x.com/" target='_blank' className='bg-white rounded-full p-2 text-[#001931] hover:bg-gray-200 transition'><FaXTwitter size={18} /></a>
                            <a href="https://www.linkedin.com/" target='_blank' className='bg-white rounded-full p-2 text-[#001931] hover:bg-gray-200 transition'><FaLinkedinIn size={18} /></a>
                            <a href="https://www.facebook.com/" target='_blank' className='bg-white rounded-full p-2 text-[#001931] hover:bg-gray-200 transition'><FaFacebookF size={18} /></a>
                        </div>
                    </div>
                </div>
                <hr className='border-[#E5E7EB] my-4' />
                <p className='text-center text-[16px]'>Copyright © 2025 - All right reserved</p>
            </div>

        </footer>
    );
};

export default Footer;