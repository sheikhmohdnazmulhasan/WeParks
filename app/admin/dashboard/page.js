'use client'

import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import noData from '@/public/no-data.gif';
import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Swal from "sweetalert2";
import useSWR, { mutate } from "swr";

const fetcher = url => axios.get(url).then(res => res.data);

const Dashboard = () => {
    const { session, status } = useSession();
    const router = useRouter();

    const [showData, setShowData] = useState(false);
    const [singleData, setSingleData] = useState([]);

    const { data: allData = [], error } = useSWR('https://www.weparkhere.co.uk/api/order', fetcher);
    const data = allData.filter(order => order.hasOwnProperty('trxID'));

    async function handleShowDetails(_id) {

        const singleData = data.find(order => order._id == _id);
        setSingleData(singleData);
        setShowData(true);

    };

    async function handleVerifyPayment(_id) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Verify it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const newData = { paymentVerified: true, _id: _id };

                try {
                    const serverResponse = await axios.put(`https://www.weparkhere.co.uk/api/order`, newData);

                    if (serverResponse.data) {
                        Swal.fire({
                            title: "Verified",
                            text: "Payment has been Verified.",
                            icon: "success"
                        });

                        setShowData(false);
                        mutate('https://www.weparkhere.co.uk/api/order');
                    }

                } catch (error) {
                    console.log(error);
                }

            }
        });

    }


    async function handleReceived(_id) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Received it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const newData = { isReceived: true, _id: _id };

                try {
                    const serverResponse = await axios.put(`https://www.weparkhere.co.uk/api/order`, newData);

                    if (serverResponse.data) {
                        Swal.fire({
                            title: "Received",
                            text: "Vehicle has been Received.",
                            icon: "success"
                        });

                        setShowData(false);
                        mutate('https://www.weparkhere.co.uk/api/order');
                    }

                } catch (error) {
                    console.log(error);
                }

            }
        });

    }

    async function handleReleased(_id) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Released!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const newData = { isRelease: true, _id: _id };

                try {
                    const serverResponse = await axios.put(`https://www.weparkhere.co.uk/api/order`, newData);

                    if (serverResponse.data) {
                        Swal.fire({
                            title: "Released",
                            text: "Vehicle has been Released.",
                            icon: "success"
                        });

                        setShowData(false);
                        mutate('https://www.weparkhere.co.uk/api/order');
                    }

                } catch (error) {
                    console.log(error);
                }

            }
        });

    }

    async function handleDeleteOrder(_id) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {


                try {
                    const serverResponse = await axios.delete(`https://www.weparkhere.co.uk/api/order?id=${_id}`);

                    if (serverResponse) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        setShowData(false);
                        mutate('https://www.weparkhere.co.uk/api/order');
                    }

                } catch (error) {
                    console.log(error);
                }

            }
        });
    }

    if (status === 'loading') {

        return <div className="flex h-screen justify-center items-center">
            <ClimbingBoxLoader color="#36d7b7" />
        </div>

    } else if (status === 'unauthenticated') {

        return router.push('/admin/login');

    } else if (!data.length) {
        return <div className="flex h-screen justify-center items-center">
            <Image className="w-36" src={noData} alt="No Data Icon" />
        </div>

    } else {
        return (
            <div className="">
                {/* <div className="" onClick={() => signOut()}>
                    logout
                </div> */}
                {/* SM */}

                <div className="md:hidden h-screen flex justify-center items-center">
                    <div className="text-xl px-4 text-center">
                        You need to use a computer to operate the admin dashboard!
                    </div>
                </div>

                {/* XL */}
                <div className="m-10 hidden md:block">

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

                                {data?.map(data => <tr key={data._id} className={`cursor-pointer ${data.isRelease ? 'bg-sky-500 hover:bg-sky-600 text-white' : 'bg-transparent text-black hover:bg-gray-100'} `} title="Click For Details" onClick={() => handleShowDetails(data._id)}>

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

                            {!singleData.paymentVerified && <button className='py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white' onClick={() => handleVerifyPayment(singleData._id)}>Verify Payment</button>}

                            {!singleData.isReceived && singleData.paymentVerified && <button className='py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white' onClick={() => handleReceived(singleData._id)}>Received </button>}

                            {singleData.paymentVerified && singleData.isReceived && !singleData.isRelease && <button button className={`py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white`} onClick={() => handleReleased(singleData._id)}>Released</button>}

                            <button className={`py-2 px-3 bg-sky-500 hover:bg-sky-600  text-white`} onClick={() => setShowData(false)}>Close</button>

                            <button className='py-2 px-3 bg-red-500 hover:bg-red-600 text-white' onClick={() => handleDeleteOrder(singleData._id)}>Delete</button>

                        </div>
                    </div>
                </div >
            </div>
        );
    }


};

export default Dashboard;

