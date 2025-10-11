import React from 'react';

const States = () => {

    const state = [
        {
            id: 1,
            title: 'Total Downloads',
            value: '29.6M',
            subtitle: '21% More Than Last Month'
        },
        {
            id: 2,
            title: 'Total Reviews',
            value: '906K',
            subtitle: '46% More Than Last Month'
        },
        {
            id: 3,
            title: 'Active Apps',
            value: '132+',
            subtitle: '31 More Will Launch'
        }
    ]

    return (
        <section className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20 text-white'>
            <div className='text-center mb-10'>
                <h2 className='font-bold text-5xl'>Trusted by Millions, Built for You</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 text-center mx-auto gap-10 px-6'>
                {
                    state.map( (s) => (
                        <div key={s.id} className='flex flex-col items-center'>
                            <p className='text-[16px] mt-1'>{s.title}</p>
                            <p className='font-bold text-[64px] mt-1'>{s.value}</p>
                            <p className='text-[16px] mt-1'>{s.subtitle}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default States;