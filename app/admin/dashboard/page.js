'use client'

import axios from "axios";
import { useState } from "react";
import useSWR from "swr";

const fetcher = url => axios.get(url).then(res => res.data);

const Dashboard = () => {
    const [showData, setShowData] = useState(false);
    const [singleData, setSingleData] = useState([]);


    const { data = [], error } = useSWR('http://localhost:3000/api/order', fetcher);


    async function handleShowDetails(bookingId) {

        const singleData = data.find(order => order.orderNumber == bookingId);
        setSingleData(singleData);
        setShowData(true);

    };

    async function handle

    return (
        <div className="m-10">

            {/* All Data */}
            <div className={`overflow-x-auto ${showData && 'hidden'}`}>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>email</th>
                            <th>From</th>
                            <th>To</th>
                            <th>trxID</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map(data => <tr key={data._id} className="cursor-pointer hover:bg-gray-100" title="Click For Details" onClick={() => handleShowDetails(data.orderNumber)}>

                            <td>{data?.name}</td>
                            <td>{data?.email}</td>
                            <td>{data?.startDate}</td>
                            <td>{data?.EndDate}</td>
                            <td>{data?.trxID}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>

            {/* Single Data */}

            <div className={`border p-4 ${!showData && 'hidden'}`}>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Name: {singleData?.name}</h4>
                    <h4 className='flex-1 md:pl-60'>nazmul@xxx.com</h4>
                </div>
                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Email: </h4>
                    <h4 className='flex-1 md:pl-60'>{singleData?.email}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>From: </h4>
                    <h4 className='flex-1 md:pl-60'>{singleData?.startDate}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>To: </h4>
                    <h4 className='flex-1 md:pl-60'>{singleData?.EndDate}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Total Cost: </h4>
                    <h4 className='flex-1 md:pl-60'> £ {singleData?.totalPrice}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Discount Rate: </h4>
                    <h4 className='flex-1 md:pl-60'> {singleData.discountRate}%</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Discount: </h4>
                    <h4 className='flex-1 md:pl-60'> £ {singleData.totalDiscount}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Subtotal: </h4>
                    <h4 className='flex-1 md:pl-60'> £ {singleData?.subTotal}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Airport: </h4>
                    <h4 className='flex-1 md:pl-60'> {singleData?.airport}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Airport Terminal: </h4>
                    <h4 className='flex-1 md:pl-60'> {singleData?.AirportTerminal}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Vehicle Plate Number: </h4>
                    <h4 className='flex-1 md:pl-60'> {singleData.vehiclePlateNumber}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Vehicle Model Year: </h4>
                    <h4 className='flex-1 md:pl-60'> {singleData.vehicleModelYear}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Payment Verified: </h4>
                    <h4 className='flex-1 md:pl-60'> {singleData.paymentVerified == false ? 'False' : "True"}</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Is Received: </h4>
                    <h4 className='flex-1 md:pl-60'>{singleData.isReceived == false ? 'False' : "True"} </h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 items-center">
                    <h4 className=' flex-1'>Is Release: </h4>
                    <h4 className='flex-1 md:pl-60'> {singleData.isRelease == false ? 'False' : "True"}</h4>
                </div>
            </div>
            <div className={`${!showData ? 'hidden' : 'flex'} mt-4 justify-between pl-5 pr-5 md:pr-0`}>
                <div className=""></div>

                <div className="flex gap-4">
                    <button className='py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white'>Verify Payment</button>

                    <button className='py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white' onClick={() => setShowData(false)}>Close</button>
                    <button className='py-2 px-3 bg-red-500 hover:bg-red-600 text-white'>Delete</button>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;