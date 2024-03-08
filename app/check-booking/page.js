'use client'

const CheckBooking = () => {

    async function handleSearch(event) {
        event.preventDefault();
        const id = event.target.id.value;
        console.log(id);
    };

    return (
        <div className='max-w-3xl mx-auto my-20'>

            {/* Form */}
            <div className="mx-5 md:mx-0 hidden">
                <h1 className='text-xl'>Enter Your Tracing Number</h1>
                <form className="md:flex items-center mt-3" onSubmit={handleSearch}>
                    <input type="text" name="id" id="" placeholder='Enter Your Tracing Number' className='py-2 px-3 border w-full' />
                    <button className='py-2 px-3 mt-4 md:mt-0 w-full md:w-fit border border-sky-500 bg-sky-500 text-white'>Check</button>
                </form>
            </div>

            {/* Data */}
            <div className="border p-4">

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Name: </h4>
                    <h4 className='flex-1 md:pl-60'>nazmul@xxx.com</h4>
                </div>
                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Email: </h4>
                    <h4 className='flex-1 md:pl-60'>nazmul@xxx.com</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>To: </h4>
                    <h4 className='flex-1 md:pl-60'>2024-03-16T14:37</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>From: </h4>
                    <h4 className='flex-1 md:pl-60'>2024-03-16T14:37</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>From: </h4>
                    <h4 className='flex-1 md:pl-60'>2024-03-16T14:37</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Total Cost: </h4>
                    <h4 className='flex-1 md:pl-60'> £ 2133</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Discount Rate: </h4>
                    <h4 className='flex-1 md:pl-60'> 30%</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Discount: </h4>
                    <h4 className='flex-1 md:pl-60'> £ 21</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Subtotal: </h4>
                    <h4 className='flex-1 md:pl-60'> £ 210</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Airport: </h4>
                    <h4 className='flex-1 md:pl-60'> ASSS</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Airport Terminal: </h4>
                    <h4 className='flex-1 md:pl-60'> ASSS</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Vehicle Plate Number: </h4>
                    <h4 className='flex-1 md:pl-60'> eeed</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Vehicle Model Year: </h4>
                    <h4 className='flex-1 md:pl-60'> 2043</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Payment Verified: </h4>
                    <h4 className='flex-1 md:pl-60'> False</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 mb-6 border-b items-center">
                    <h4 className=' flex-1'>Is Received: </h4>
                    <h4 className='flex-1 md:pl-60'> False</h4>
                </div>

                <div className="flex justify-between gap-10 md:gap-0 items-center">
                    <h4 className=' flex-1'>Is Release: </h4>
                    <h4 className='flex-1 md:pl-60'> False</h4>
                </div>
            </div>
            <div className=" mt-4 flex justify-end pl-5 pr-5 md:pr-0">
                <button className='py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white '>Close</button>
            </div>
        </div>
    );
};

export default CheckBooking;