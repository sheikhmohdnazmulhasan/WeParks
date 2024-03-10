'use client'

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsCurrencyPound } from "react-icons/bs";
import useSWR from "swr";
const fetcher = url => axios.get(url).then(res => res.data);

const Checkout = () => {

    const searchParams = useSearchParams();
    const bookingId = searchParams.get('bookingId');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [vehiclePlateNumber, setVehiclePlateNumber] = useState('');
    const [vehicleModelYear, setVehicleModelYear] = useState('');
    const [AirportTerminal, setAirportTerminal] = useState('');
    const [conEmail, setConEmail] = useState('');

    const { data = [], error } = useSWR(`http://localhost:3000/api/order?bookingId=${bookingId}`, fetcher);

    async function handleNewData() {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            toast.error('places Provide Valid Email');
            return

        } else if (email !== conEmail) {
            toast.error('Email Did Not Match');
            return

        } else {
            const dataForBackEnd = { name: firstName + ' ' + lastName, email, vehiclePlateNumber, vehicleModelYear, AirportTerminal, paymentVerified: false, isReceived: false, isRelease: false, trxID: '' };

            const newData = { ...data, ...dataForBackEnd }

            try {
                const serverResponse = await axios.put(`http://localhost:3000/api/order`, newData);

                console.log(serverResponse);
            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <div className='md:flex justify-between md:m-20 gap-8'>
            <div><Toaster /></div>
            <div className="md:w-[70%] border-b mb-5 md:shadow-xl p-6 rounded-md">
                <h1 className='text-[#0074BC] text-2xl'>Fill Your Info</h1>
                <p className='opacity-75'>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID.</p>

                {/* form */}
                <form className='flex flex-col mt-10'>

                    {/* First Name */}
                    <label htmlFor="nameF" className='font-semibold mb-2 text-[#0074BC]'>First Name <span className='text-red-500'>*</span></label>
                    <input type="text" name="" id="" placeholder='First Name' className='border mb-4 py-2 px-3 rounded-md' required onChange={(event) => setFirstName(event.target.value)} />

                    {/* Last Name */}
                    <label htmlFor="nameL" className='font-semibold mb-2 text-[#0074BC]'>Last Name <span className='text-red-500'>*</span></label>
                    <input type="text" name="" id="" placeholder='Last Name' className='border mb-4 py-2 px-3 rounded-md' required onChange={(event) => setLastName(event.target.value)} />

                    {/* Email */}
                    <label htmlFor="email" className='font-semibold mb-2 text-[#0074BC]'>Email Address <span className='text-red-500'>*</span></label>
                    <input type="email" name="" id="" placeholder=' Email Address' className='border mb-4 py-2 px-3 rounded-md' required onChange={(event) => setEmail(event.target.value)} />

                    {/* Confirm Email Address */}
                    <label htmlFor="email" className='font-semibold mb-2 text-[#0074BC]'>Confirm Email Address <span className='text-red-500'>*</span></label>
                    <input type="email" name="" id="" placeholder=' Confirm Email Address' className='border mb-4 py-2 px-3 rounded-md' required onChange={(event) => setConEmail(event.target.value)} />

                    {/* Vehicle Plate Number */}
                    <label htmlFor="VehiclePlateNumber" className='font-semibold mb-2 text-[#0074BC]'>Vehicle Plate Number <span className='text-red-500'>*</span></label>
                    <input type="text" name="" id="" placeholder=' Vehicle Plate Number' className='border mb-4 py-2 px-3 rounded-md' required onChange={(event) => setVehiclePlateNumber(event.target.value)} />

                    {/* Vehicle Model Year */}
                    <label htmlFor="VehiclePlateNumber" className='font-semibold mb-2 text-[#0074BC]'>Vehicle Model Year <span className='text-red-500'>*</span></label>
                    <input type="text" name="" id="" placeholder=' Vehicle Model Year' className='border mb-4 py-2 px-3 rounded-md' required onChange={(event) => setVehicleModelYear(event.target.value)} />

                    {/* Vehicle Model Year */}
                    <label htmlFor="VehiclePlateNumber" className='font-semibold mt-10 text-[#0074BC] mb-2'>Airport Terminal (if any)</label>
                    <input type="text" name="" id="" placeholder=' Terminal - 1' className='border mb-4 py-2 px-3 rounded-md' onChange={(event) => setAirportTerminal(event.target.value)} />
                </form>
            </div>
            <div className="md:w-[30%] shadow-xl h-[550px] p-6 rounded-md">
                <h1 className='text-xl font-semibold'>Booking summary</h1>
                <p className='pb-2'>We Parks Meet And Greet Parking</p>
                <hr />

                <div className="flex pb-4 font-semibold mt-8 justify-between">
                    <h4>From: </h4>
                    <h4>{data?.startDate} </h4>
                </div>
                <hr />

                <div className="flex pb-4 font-semibold mt-8 justify-between">
                    <h4>To: </h4>
                    <h4>{data?.EndDate} </h4>
                </div>
                <hr />

                <div className="flex pb-4 font-semibold mt-8 justify-between">
                    <h4>Total: </h4>
                    <h4 className=' flex items-center'> <BsCurrencyPound className='font-bold' /> {data.totalPrice}</h4>
                </div>
                <hr />

                <div className="flex pb-4 font-semibold mt-8 justify-between">
                    <h4>Discount: </h4>
                    <h4 className=' flex items-center'> <BsCurrencyPound className='font-bold' /> {data.totalDiscount}</h4>
                </div>
                <hr />

                <div className="flex pb-4 font-semibold mt-8 justify-between">
                    <h4>Subtotal: </h4>
                    <h4 className=' flex items-center'> <BsCurrencyPound className='font-bold' /> {data.subTotal}</h4>
                </div>

                <div className=" flex justify-center mt-8">
                    <button className='w-full py-3 bg-[#0074BC] hover:bg-[#4381a7] transition-all uppercase rounded-md text-white' onClick={handleNewData}>Checkout</button>
                </div>
            </div>

        </div>
    );
};

export default Checkout;