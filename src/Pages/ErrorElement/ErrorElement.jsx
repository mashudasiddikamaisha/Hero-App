import React from 'react';
import { useNavigate } from 'react-router';
import errorImg from '../../assets/error-404.png'

const ErrorElement = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center text-center h-screen'>
            <img src={errorImg} alt="" />
            {/* <p className='font-extrabold text-5xl text-red-800 mb-4'>404</p> */}
            <h2 className='text-3xl text-gray-600 mb-2'>Page Not Found!!!</h2>
            <p className='text-lg text-gray-500 mb-6'>The Page You're Looking For Doesn't Exist</p>
            <button onClick={() => navigate('/')} className='btn btn-primary'>Go Back to Home</button>
        </div>
    );
};

export default ErrorElement;