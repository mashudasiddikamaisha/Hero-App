import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import Loader from '../../Components/Loader/Loader';

const AllApps = () => {

    const data = useLoaderData();
    const navigate = useNavigate();
    
    const [allApps, setAllApps] = useState([]);
    const [search, setSearch] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);

    useEffect(() => {
        if(Array.isArray(data)) {
            setAllApps(data);
        }
    }, [data]);

    useEffect(() => {
        setSearchLoading(true);
        const time = setTimeout(() => {
            let res = (data || []).filter((app) => app.title.toLowerCase().includes(search.toLocaleLowerCase()));
            setAllApps(res);
            setSearchLoading(false);            
        }, 200);
        return () => clearTimeout(time);
    }, [search, data]);

    if(!data) {
        return <Loader></Loader>;
    }

    return (
        <div className='max-w-7xl mx-auto p-7'>
                <div className='text-center p-4'>
                    <h1 className='font-bold text-5xl text-[#001931] mb-4'>Our All Applications</h1>
                    <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center gap-3 mb-6 flex-col sm:flex-row'>
                    <p className='font-semibold text-2xl text-[#001931]'>({allApps.length}) Apps Found</p>
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search Apps' className='border rounded p-3 w-full sm:w-64' />
                </div>

            {
                searchLoading && (
                    <div className='mb-6'><Loader></Loader></div>
                )
            }

            {
                allApps.length === 0 ? (<div className='grid grid-cols-1 items-center'>
                    <p className='text-center bg-white text-gray-800 rounded shadow p-8'>No App Found</p>

                    </div>) : (
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                            allApps.map((app) => (
                                <div key={app.id} onClick={() => navigate(`/apps/${app.id}`)} className='cursor-pointer rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition'>
                                    <img src={app.image} alt="" className='object-cover rounded mb-3 w-full h-36' />
                                    <div className='font-semibold'>{app.title}</div>
                                    <div className='text-[16px] text-gray-600d'>{app.companyName}</div>
                                    <div className='flex justify-between items-center text-gray-800 text-[16px] mt-3'>
                                        <div className='flex items-center text-[#00D390] bg-[#F1F5E8] gap-2 px-2 py-1 rounded'>
                                            <img src={downloadImg} alt="download" className='w-4 h-4' />
                                            <span>{app.downloads}M</span>
                                        </div>
                                        <div className='flex items-center text-[#FF8811] bg-[#FFF0E1] gap-2 px-2 py-1 rounded'>
                                            <img src={star} alt="ratings" className='w-4 h-4' />
                                            <span>{app.ratingAvg}</span>
                                        </div>
                                    </div>
                                </div> 
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default AllApps;