import React from 'react';

const CheckBooking = () => {
    return (
        <div className='max-w-3xl mx-auto mt-20'>

            {/* Form */}
            <div className="hidden">
                <h1 className='text-xl'>Enter Your Tracing Number</h1>
                <div className="flex items-center mt-3">
                    <input type="text" name="" id="" placeholder='Enter Your Tracing Number' className='py-2 rounded-l-lg px-3 border w-full' />
                    <button className='py-2 px-3 border border-sky-500 rounded-r-lg bg-sky-500 text-white'>Check</button>
                </div>
            </div>

            {/* Data */}
            <div className="border p-4">
                <div className="flex justify-between items-center">
                    <h4>Name: </h4>
                    <h4>Nazmul Hasan</h4>
                </div>
            </div>
        </div>
    );
};

export default CheckBooking;