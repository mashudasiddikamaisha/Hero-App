import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full py-10 bg-gray-100'>
            <div className='flex flex-col items-center gap-4'>
                <span className="loading loading-spinner loading-xl"></span>
                <p className='text-2xl font-bold text-gray-500'>Loading. Please Wait....</p>

            </div>
        </div>
    );
};

export default Loader;