'use client'
import axios from 'axios';

import { useRouter, useSearchParams } from 'next/navigation';


import React, { Suspense } from 'react';
import { BsCurrencyPound } from "react-icons/bs";
import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data)

const Booking = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const bookingId = searchParams.get('bookingId');

    const { data = [], error } = useSWR(`http://localhost:3000/api/order?bookingId=${bookingId}`, fetcher);

    function handleNavigate() {
        return router.push(`/checkout?bookingId=${bookingId}`);
    }

    return (
        <Suspense>
            <div className='bg-[#0074BC] md:px-10 py-5 px-6 m-10 text-white space-y-10 md:h-60 md:w-[80%] md:mx-auto rounded-lg md:flex items-center gap-10 justify-between'>
                <div className="md:w-[50%]">
                    <h1 className='text-2xl font-semibold'>We Parks Meet And Greet Parking</h1>
                    <p>Arrive at the airport, and our professional drivers will meet you at the terminal. They will take care of parking your vehicle in our secure facility while you head straight to check-in.</p>
                </div>
                <div className="md:w-[25%]">
                    <h1 className='text-xl font-semibold'>Dateline</h1>
                    <h3> To: {data?.startDate}</h3>
                    <h3> From: {data?.EndDate}</h3>
                </div>
                <div className="md:w-[25%] md:flex md:flex-col md:items-end ">
                    <h1 className='text-2xl flex items-center font-semibold'> <BsCurrencyPound className='font-bold' /> {data?.subTotal}</h1>
                    <button className='py-3 w-full md:w-fit  px-5 rounded-3xl bg-black text-white font-semibold mt-5' onClick={handleNavigate}>Book Now</button>
                </div>
            </div>
        </Suspense>
    );
};

export default Booking;