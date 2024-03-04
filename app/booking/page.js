import Link from 'next/link';
import React from 'react';

const Booking = () => {
    return (
        <div className='bg-[#0074BC] md:px-10 py-5 px-6 m-10 text-white space-y-10 md:h-60 md:w-[80%] md:mx-auto rounded-lg md:flex items-center gap-10 justify-between'>
            <div className="md:w-[50%]">
                <h1 className='text-2xl font-semibold'>We Parks Meet And Greet Parking</h1>
                <p>Arrive at the airport, and our professional drivers will meet you at the terminal. They'll take care of parking your vehicle in our secure facility while you head straight to check-in.</p>
            </div>
            <div className="md:w-[25%]">
                <h1 className='text-xl font-semibold'>Dateline</h1>
                <h3> 12/32/2023 to 32/54/2033</h3>
            </div>
            <div className="md:w-[25%] md:flex md:flex-col md:items-end ">
                <h1 className='text-3xl font-semibold'>$ 23123</h1>
                <button className='py-3 w-full md:w-fit  px-5 rounded-3xl bg-black text-white font-semibold mt-5'>Book Now</button>
            </div>
        </div>
    );
};

export default Booking;