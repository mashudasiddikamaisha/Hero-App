import React, { useEffect, useState } from 'react';
import { getInstalledApps, uninstallApp } from '../../Utility/addToDB';
import { toast } from 'react-toastify';
import { MdArrowDropDown } from "react-icons/md";
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'

const Installation = () => {

    const [install, setInstall] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        setInstall(getInstalledApps());
        console.log("data", getInstalledApps())
    }, []);

    useEffect(() => {
            const time = setTimeout(() => {
                let res = getInstalledApps().filter((app) => app.title.toLowerCase());
                if(sort === "low-high") {
                    res.sort((a, b) => a.downloads - b.downloads)
                }
                if(sort === "high-low") {
                    res.sort((a, b) => b.downloads - a.downloads)
                }                
                setInstall(res);
            }, 200);
            return () => clearTimeout(time);
        }, [sort]);

    const handleUninstall = (id) => {
        uninstallApp(id);
        const newApp = getInstalledApps();
        setInstall(newApp);
        toast.info("App Uninstalled"); 
    }

    return (
        <div className='flex flex-col bg-gray-100 min-h-screen'>
            <div className='max-w-6xl text-center mx-auto px-6 py-8 mt-10'>
                <h1 className='font-bold text-5xl text-[#001931] mb-3'>Your Installed Apps</h1>
                <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex flex-col w-full max-w-[1440px] mx-auto px-6 py-10'>
                {install.length !== 0 ? (
                    <>
                    <div className='flex justify-between items-center mb-6 w-full'>
                        <h2 className='font-semibold text-2xl text-[#001931]'>{install.length} App{install.length >1 && "s"} Found</h2>
                        <div className='flex items-center gap-4 mt-3 md:mt-0'>
                        <select value={sort} onChange={(e) => setSort(e.target.value)} className='border-2 border-gray-300 rounded-sm p-3 text-[16px] text-[#627382]'>
                            <option value="">Sort By Downloads</option>
                            <option value="high-low">High-Low</option>
                            <option value="low-high">Low-High</option>
                        </select>
                </div>
                    </div>
                    <div className='space-y-5 w-full'>
                        {install.map((app) => (
                            <div key={app.id} className='flex justify-between items-center bg-white rounded-sm p-4 hover:shadow-md transition w-full'>
                                <div className='flex items-center gap-4 flex-1'>
                                    <div className='flex bg-[#D9D9D9] rounded-lg overflow-hidden w-16 h-16 flex-shrink-0'>
                                        <img src={app.image} alt="app" className='w-full h-full object-cover' />                                 
                                    </div>   
                                    <div className='flex flex-col flex-1 ml-4'>
                                        <h2 className='font-medium text-xl text-[#001931]'>{app.title}</h2>
                                        <p className='text-[16px] text-[#627382]'>{app.companyName}</p>
                                        <div className='flex flex-col lg:flex-row items-center text-[16px] gap-4 mt-1'>
                                            <span className='flex items-center gap-1 text-[#00D390] font-medium'> <img src={download} alt="" className='w-4 h-4' /> {app.downloads}M</span>
                                            <span className='flex items-center gap-1 text-[#FF8811] font-medium'> <img src={star} alt="" className='w-4 h-4' /> {app.ratingAvg}</span>
                                            <span className='flex items-center gap-1 text-[#627382]'> {app.size} MB</span>

                                        </div>
                                    </div>  
                                </div>
 
                                <button onClick={() => handleUninstall(app.id)} className='text-white rounded-sm bg-[#00D390] hover:bg-emerald-600 transition font-semibold text-[16px] px-6 py-2 flex-shrink-0'>Uninstall</button>                             
                            </div>
                        ))}
                    </div>
                    </>

                ) : (
                    <p className='font-bold text-xl text-[#627382]'>No App Installed Yet.</p>
                )}                
            </div>
            
        </div>
    );
};

export default Installation;