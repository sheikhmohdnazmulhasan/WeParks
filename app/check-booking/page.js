'use client'

import axios from "axios";
import { useState } from "react";

const CheckBooking = () => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState('');
    const [showData, setShowData] = useState(false);

    async function handleSearch(event) {
        event.preventDefault();
        const id = event.target.id.value;
        setErr('')

        try {
            const serverResponse = await axios.get(`http://localhost:3000/api/order?bookingId=${id}`);
            if (serverResponse.data) {
                setData(serverResponse.data);
                setShowData(true);


            } else {
                setErr('Invalid Tracing Number');
            }

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className='max-w-3xl mx-auto my-20'>

            {/* Form */}
            <div className={`mx-5 md:mx-0 ${showData && 'hidden'}`}>
                <h1 className='text-xl'>Enter Your Tracing Number</h1>
                <form className="md:flex items-center mt-3" onSubmit={handleSearch}>
                    <input type="text" name="id" id="" placeholder='Enter Your Tracing Number' className='py-2 px-3 border w-full' />

                    <button className='py-2 px-3 mt-4 md:mt-0 w-full md:w-fit border border-sky-500 bg-sky-500 text-white'>Check</button>
                </form>
                <p className="text-red-400 text-sm mt-2">{err}</p>
            </div>

            {/* Data */}
            <div className={`border p-4 ${!showData && 'hidden'}`}>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Name: </h4>
                    <h4 className='flex-1 md:pl-60'>{data.name}</h4>
                </div>
                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Email: </h4>
                    <h4 className='flex-1 md:pl-60'>{data.email}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>From: </h4>
                    <h4 className='flex-1 md:pl-60'>{data?.startDate}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>To: </h4>
                    <h4 className='flex-1 md:pl-60'>{data.EndDate}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Total Cost: </h4>
                    <h4 className='flex-1 md:pl-60'> £ {data?.totalPrice}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Discount Rate: </h4>
                    <h4 className='flex-1 md:pl-60'> {data.discountRate}%</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Discount: </h4>
                    <h4 className='flex-1 md:pl-60'> £ {data.totalDiscount}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Subtotal: </h4>
                    <h4 className='flex-1 md:pl-60'> £ {data?.subTotal}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Airport: </h4>
                    <h4 className='flex-1 md:pl-60'> {data?.airport}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Airport Terminal: </h4>
                    <h4 className='flex-1 md:pl-60'> {data?.AirportTerminal}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Vehicle Plate Number: </h4>
                    <h4 className='flex-1 md:pl-60'> {data.vehiclePlateNumber}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Vehicle Model Year: </h4>
                    <h4 className='flex-1 md:pl-60'> {data.vehicleModelYear}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Payment Verified: </h4>
                    <h4 className='flex-1 md:pl-60'> {data.paymentVerified == false ? 'False' : "True"}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Is Received: </h4>
                    <h4 className='flex-1 md:pl-60'>{data.isReceived == false ? 'False' : "True"} </h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 items-center">
                    <h4 className=' flex-1'>Is Release: </h4>
                    <h4 className='flex-1 md:pl-60'> {data.isRelease == false ? 'False' : "True"}</h4>
                </div>
            </div>
            <div className={`${!showData ? 'hidden' : 'flex'} mt-4 justify-end pl-5 pr-5 md:pr-0`}>
                <button className='py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white' onClick={() => setShowData(false)}>Close</button>
            </div>
        </div>
    );
};

export default CheckBooking;