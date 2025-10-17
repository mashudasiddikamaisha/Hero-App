import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { isInstalled, storeInstalledApp } from '../../Utility/addToDB';
import { ToastContainer, toast } from 'react-toastify';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const AppDetails = () => {

    const {id} = useParams();
    const data = useLoaderData();
    const [app, setApp] = useState(null);
    const [installedApp, setInstalledApp] = useState(false);
    const [appLoading, setAppLoading] = useState(false);

    useEffect(()=> {
        if(Array.isArray(data)) {
            const find = data.find((f) => String(f.id) === String(id));
            setApp(find || null);
            setInstalledApp(find ? isInstalled(find.id) : false);
            setAppLoading(true);
        }        
    }, [data, id]);

    if(!appLoading) {
        return "loading";
    }

    if(!app) {
        return (
            <div className='text-center py-20'>
                <h2 className='font-semibold text-xl'>APP NOT FOUND</h2>
                <p className='mt-2 text-gray-600'>The app you are expecting is not available</p>
            </div>
        )
    }

    const handleInstalledApp = () => {
        if(installedApp) return;
        storeInstalledApp(app);
        setInstalledApp(true);
        toast.success("App Installed Successfully")
    }

    const chartData = app.ratings.map((r) => ({
      name: r.name.replace(" star", ""),
      count: r.count,
    })).reverse();

    return (
        <div className='max-w-6xl bg-gray-100 min-h-screen mx-auto p-4 sm:p-6 lg:p-8 overflow-hidden break-words'>
            <div className='flex flex-col lg:flex-row rounded-lg shadow-sm gap-6 p-6 mb-8 bg-white'>
                <img src={app.image} alt="" className='object-cover bg-gray-200 w-80 h-80' />
                <div className='flex-1'>
                    <h2 className='font-bold text-[#001931] text-[32px]'>{app.title}</h2>
                    <p className='text-[#627382] text-xl  mb-4'>Developed BY {""} <span className='font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text hover:underline'>{app.companyName}</span> </p>
                    <div className="flex flex-col lg:flex-row items-center text-sm gap-8 mb-4">
                        <div className="flex flex-col items-center gap-2 ">
                            <img src={download} alt="download" className='' />
                            <p className="text-[#001931] text-[16px]">Downloads</p>
                            <p className="font-extrabold text-[40px] text-[#001931]">{app.downloads.toLocaleString()}</p>
                        </div>
                    
                        <div className="flex flex-col items-center gap-2">
                            <img src={star} alt="star" className='' />
                            <p className="text-[#001931] text-[16px]">Average Rating</p>
                            <p className="font-extrabold text-[40px] text-[#001931]">{app.ratingAvg}</p>
                        </div>
                    
                        <div className="flex flex-col items-center gap-2">
                            <img src={review} alt="review" className='' />
                            <p className="text-[#001931] text-[16px]">Total Reviews</p>
                            <p className="font-extrabold text-[40px] text-[#001931]">{app.reviews.toLocaleString()}</p>
                        </div>
                    </div>
                    <button disabled={installedApp} onClick={handleInstalledApp} className={`text-white rounded-sm font-semibold text-xl px-5 py-2 transition ${installedApp ? "bg-gray-300 text-gray-700 cursor-not-allowed" : "bg-[#00D390] hover:bg-emerald-600"}`}>{installedApp ? "Installed" : `Install Now (${app.size})`} </button>
                </div>
            </div>

            <div className='bg-white rounded-lg shadow-sm mb-8 p-6'>
                <h3 className='font-semibold text-2xl text-[#001931]'>Ratings</h3>
                <div className='h-60'>
                    <ResponsiveContainer className={`w-full h-full`}>
                        <BarChart data={chartData} layout='vertical' className='mr-5'>
                            <XAxis type='number'  />
                            <YAxis dataKey='name' type='category' width={40} tick={{fontSize: 12}} />
                            <Tooltip />
                            <Bar dataKey='count' fill='#f97316' radius={[0, 5, 5, 0]} />
                        </BarChart>

                    </ResponsiveContainer>
                </div>
            </div>

            <div className='bg-white rounded-lg shadow-sm mb-8 p-6'>
                <h3 className='text-[#001931] font-semibold text-2xl mb-3'>Description</h3>
                <p className='text-xl text-[#627382]'>{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;