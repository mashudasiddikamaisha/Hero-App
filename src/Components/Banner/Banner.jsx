import React from 'react';
import appStore from '../../assets/App-Store-Logo.png'
import playStore from '../../assets/google-play-store.webp'
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <section className='text-center bg-white px-5 py-2'>
            <div className='max-w-6xl mx-auto space-y-6'>
                <h1 className='font-bold text-5xl md:text-7xl text-[#001931]'>We Build <br /> <span className='font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
                <p className='text-[#627382] text-xl mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex flex-wrap justify-center gap-4 font-semibold text-xl'>
                    <a href="https://play.google.com/store/apps" target='_blank' className='flex items-center gap-2 border-gray-200 border px-4 py-2 rounded-sm hover:bg-gray-100 transition'><img src={playStore} alt="playstore" className='h-[25px] w-[25px] mr-2' /> Google Play</a>
                    <a href="https://www.apple.com/app-store/" target='_blank' className='flex items-center gap-2 border-gray-200 border px-4 py-2 rounded-sm hover:bg-gray-100 transition'><img src={appStore} alt="appstore" className='h-[25px] w-[36px] mr-2' /> App Store</a>
                </div>

                <div className='flex justify-center mt-10'>
                    <img src={heroImg} alt="hero image" />
                </div>

            </div>

        </section>
    );
};

export default Banner;