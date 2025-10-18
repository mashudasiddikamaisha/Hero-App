import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import Loader from '../../Components/Loader/Loader';


const TopApp = () => {

    const data = useLoaderData();
    const navigate = useNavigate();
    const [apps, setApps] = useState([]);

    useEffect(() => {
        if(Array.isArray(data)) {
            setApps(data.slice(0,8))
        }
    }, [data]);
    
    if(!data) {
        return <Loader></Loader>;
    }

    return (
        <section className='max-w-7xl mx-auto mt-10 mb-10 px-6'>
            <h2 className='font-bold text-5xl mb-6 text-center'>Trending Apps</h2> 
            <p className='text-xl text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    apps.map((app) => (
                        <div key={app.id} onClick={() => navigate(`/apps/${app.id}`)} className='bg-white cursor-pointer card rounded-lg shadow-md p-4 hover:shadow-lg transition'>
                            <img src={app.image} alt="" className='w-full h-[144px] rounded object-cover mb-3' />
                            <h2 className='font-medium text-xl'>{app.title}</h2>
                            <p className='text-gray-500 text-sm'>{app.companyName}</p>
                            <div className='flex justify-between items-center text-sm text-gray-500 mt-3'>
                                <div className='flex items-center text-[#00D390] bg-[#F1F5E8] gap-2 px-2 py-1 rounded'>
                                    <img src={download} alt="download" className='h-4 w-4' /> <span>{(app.downloads).toLocaleString()}M</span>
                                </div>
                                <div className='flex items-center text-[#FF8811] bg-[#FFF0E1] gap-2 px-2 py-1 rounded'>
                                     <img src={star} alt="ratings" className='h-4 w-4' /> <span>{app.ratingAvg}</span>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='text-center mt-8'>
                    <button onClick={() => navigate('/apps')} className='font-semibold text-[16px] rounded-lg btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button>
                </div>

            </section>
    );
};

export default TopApp;