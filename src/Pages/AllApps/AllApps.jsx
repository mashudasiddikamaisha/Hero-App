import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'

const AllApps = () => {

    const data = useLoaderData();
    const navigate = useNavigate();
    
    const [allApps, setAllApps] = useState([]);
    // const [sort, setSort] = useState('');
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
            // if(sort === "low-high") {
            //     res = [...res].sort((a, b) => a.downloads - b.downloads)
            // }
            // if(sort === "high-low") {
            //     res = [...res].sort((a, b) => b.downloads - a.downloads)
            // }

            setAllApps(res);
            setSearchLoading(false);
            
        }, 200);
        return () => clearTimeout(time);
    }, [search, data]);

    if(!data) {
        return "loading";
    }

    return (
        <div className='max-w-7xl mx-auto p-7'>
            {/* <div className='flex justify-between items-center flex-col md:flex-row lg:flex-row mb-6'> */}
                <div className='text-center p-4'>
                    <h1 className='font-bold text-5xl text-[#001931] mb-4'>Our All Applications</h1>
                    <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center gap-3 mb-6 flex-col sm:flex-row'>
                    <p className='font-semibold text-2xl text-[#001931]'>({allApps.length}) Apps Found</p>
                    {/* <input type="text" placeholder='search' /> */}
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search Apps...' className='border rounded p-3 w-full sm:w-64' />
                </div>

                <div className='flex items-center gap-4 mt-3 md:mt-0'>
                    {/* <select value={sort} onChange={(e) => setSort(e.target.value)} className='border rounded p-3'>
                        <option value="">Sort By Downloads</option>
                        <option value="high-low">High-Low</option>
                        <option value="low-high">Low-High</option>
                    </select> */}
                    {/* <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search Apps...' className='border rounded p-3' /> */}
                </div>
            {/* </div> */}

            {
                searchLoading && (
                    <div className='mb-6'>Loading...</div>
                )
            }

            {
                allApps.length === 0 ? (<div className='text-center bg-white text-gray-800 rounded shadow p-8'>No App Found</div>) : (
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
                                            <span>{app.downloads}</span>
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