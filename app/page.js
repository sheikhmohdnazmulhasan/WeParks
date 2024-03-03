import { CiLocationOn } from "react-icons/ci";

import { PiAirplaneLanding, PiAirplaneTakeoff } from "react-icons/pi";

export default function Home() {
  return (
    <main>

      {/* Banner */}

      {/* for PC */}
      <div className="bg-[url('https://i.ibb.co/XYJy5pR/banner.png')] md:block hidden h-[450px] bg-cover item-left">

        <div className="bg-black w-full h-full bg-opacity-45 flex items-center p-20">
          <div className="flex-1"></div>
          <div className="text-end">
            <h2 className='text-4xl text-[#29ABE3] font-bold'>Park your car safely <br /> on Airport</h2>
            <p className='text-white mt-3 font-semibold'>Your gateway to the world</p>
          </div>
        </div>

        {/* Form */}
        <form className="flex items-center gap-4 w-[85%] -mt-12 rounded-t-3xl rounded-b-md bg-white shadow-lg h-28 px-10 mx-auto">

          <div className=" w-[28.33%] ">
            <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
              <CiLocationOn size={20} />
              <p className="text-xl">Airport?</p>
            </div>
            <select name="" id="" className='w-full border p-2 rounded-3xl' >
              <option value="">ABCD</option>
            </select>
          </div>

          <div className=" w-[28.33%] ">
            <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
              <PiAirplaneTakeoff size={20} />
              <p className="text-xl">Parking From?</p>
            </div>
            <input type="datetime-local" name="" id="" className='w-full border p-2 rounded-3xl' />
          </div>

          <div className=" w-[28.33%] ">
            <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
              <PiAirplaneLanding size={20} />
              <p className="text-xl">Collect car?</p>
            </div>
            <input type="datetime-local" name="" id="" className='w-full border p-2 rounded-3xl' />
          </div>

          <div className="w-[15%] mt-8">

            <button className="bg-[#0074BC] hover:bg-[#3e7ca3] text-white rounded-3xl px-2 py-3 uppercase w-full">Book Now</button>
          </div>

        </form>
      </div>

      {/* for mobile */}

      <div className="bg-[url('https://i.ibb.co/XYJy5pR/banner.png')] py-10 bg-cover md:hidden">
        <div className="bg-black bg-opacity-70 h-full w-full">
          <form className=" flex flex-col pt-5 justify-center w-full px-5">

            {/* location */}
            <div>
              <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
                <CiLocationOn size={20} />
                <p className="text-xl">Airport?</p>
              </div>
              <div className="w-full">
                <select name="" id="" className="w-full border text-white bg-transparent p-2.5 rounded-3xl">
                  <option value="ABCD">Abdc</option>
                </select>
              </div>
            </div>

            {/* perking form */}
            <div className="mt-4">
              <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
                <PiAirplaneTakeoff size={20} />
                <p className="text-xl">Airport?</p>
              </div>
              <div className="w-full">
                <input type="datetime-local" name="" id="" className='w-full border bg-transparent text-white p-2 rounded-3xl' />
              </div>
            </div>

            {/* landing */}
            <div className="mt-4">
              <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
                <PiAirplaneLanding size={20} />
                <p className="text-xl">Airport?</p>
              </div>
              <div className="w-full">
                <input type="datetime-local" name="" id="" className='w-full border bg-transparent text-white p-2 rounded-3xl' />
              </div>
            </div>
            <button className="bg-[#0074BC] hover:bg-[#3e7ca3] text-white rounded-3xl px-2 py-2.5 uppercase w-full mt-6">Book Now</button>
          </form>
        </div>
      </div>

      {/* 2nd */}
      <div className="w-[85%] md:mt-36 mt-10 mx-auto mb-10">
        <div className="bg-[url('https://i.ibb.co/GJ8y2yp/x.png')] md:rounded-3xl md:h-[600px] w-full bg-cover">
          <div className="bg-black bg-opacity-60 md:rounded-3xl px-10 h-full w-full flex flex-col justify-center text-white md:pl-20">
            <h1 className="md:text-5xl text-2xl font-bold pt-10 md:pt-0">Rely on Trusted Parking <br /> Solutions for Your <br />  UK Airport Parking Needs.</h1>
            <button className="bg-[#0074BC] ml-5 w-fit hover:bg-[#3e7ca3] text-white rounded-3xl px-8 py-2.5 uppercase mt-5 mb-8
             md:mt-16">Search Parking </button>
          </div>

        </div>
      </div>
    </main>
  )
}
