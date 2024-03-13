"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FaHouseUser } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from 'react'
import CheckOutForm from "@/components/checkout/CheckoutForm";

import useSWR from 'swr';
import { useSearchParams } from "next/navigation";
import axios from "axios";
const fetcher = url => axios.get(url).then(res => res.data)


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
    const [open, setOpen] = useState(false)
    const searchParams = useSearchParams();
    const bookingId = searchParams.get('bookingId');

    const { data = [], error } = useSWR(`https://we-parks-gamma.vercel.app/api/order?bookingId=${bookingId}`, fetcher);


    function closeModal() {
        setOpen(true);
    }

    return (
        <div>
            <>
                <Transition appear show={true} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className="flex flex-col md:flex-row mt-10">
                                            <div className="lg:w-1/2">

                                                <h1 className="text-start text-4xl font-bold">We Park Here</h1>

                                                <div className="overflow-x-auto">
                                                    <p className="py-5 pr-10">Rely on Trusted Parking Solutions for Your UK Airport Parking Needs.</p>
                                                </div>
                                            </div>
                                            <div className="lg:w-1/2">
                                                <Elements stripe={stripePromise}>
                                                    <CheckOutForm information={data} />
                                                </Elements>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </div>
    );
};

export default Payment;
