import { CiLocationOn } from "react-icons/ci";
import { PiAirplaneLanding, PiAirplaneTakeoff } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import card1 from '@/public/icons/1.png';
import card2 from '@/public/icons/2.png';
import card3 from '@/public/icons/3.png';
import card4 from '@/public/icons/4.png';
import x1 from '@/public/x/1.png';
import x2 from '@/public/x/2.png';
import x3 from '@/public/x/3.png';
import xx1 from '@/public/xx/1.png';
import xx2 from '@/public/xx/2.png';
import xx4 from '@/public/xx/4.png';
import xx3 from '@/public/xx/3.png';
import xx5 from '@/public/xx/5.png';
import xx6 from '@/public/xx/6.png';

export default function Home() {
  return (
    <main className="mb-20">

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
      <div className="w-[85%] md:mt-36 mt-10 mx-auto">
        <div className="bg-[url('https://i.ibb.co/GJ8y2yp/x.png')] md:rounded-3xl md:h-[600px] w-full bg-cover">
          <div className="bg-black bg-opacity-60 md:rounded-3xl px-10 h-full w-full flex flex-col justify-center text-white md:pl-20">
            <h1 className="md:text-5xl text-2xl font-bold pt-10 md:pt-0">Rely on Trusted Parking <br /> Solutions for Your <br />  UK Airport Parking Needs.</h1>
            <button className="bg-[#0074BC] ml-5 w-fit hover:bg-[#3e7ca3] text-white rounded-3xl px-8 py-2.5 uppercase mt-5 mb-8
             md:mt-16">Search Parking </button>
          </div>
        </div>
      </div>

      {/* Explore affordable parking options */}
      <div className="w-[85%] mx-auto mt-16 ">
        <h1 className="text-3xl text-[#0074BC] font-semibold">Explore affordable parking options</h1>
        <p className="mt-3">Explore our user-friendly comparison table below to simplify your decision-making process. Our packages are organized by price, ensuring that our most budget-friendly options are conveniently located at the top of the list.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Park & Ride</h1>
            <Image src={card1} width={90} alt="Card 1"></Image>
            <p className="text-sm">Alternatively known as "Parking in the airport grounds" or "Park and Stroll," this option strikes a balance between distance and price. If a transfer bus is necessary, the journey is brief. Generally, you can reach the terminal in just a few minutes.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Park & Stroll</h1>
            <Image src={card2} width={90} alt="Card 1"></Image>
            <p className="text-sm">Alternatively known as "Parking in the airport grounds" or "Park and Stroll," this option strikes a balance between distance and price. If a transfer bus is necessary, the journey is brief. Generally, you can reach the terminal in just a few minutes.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Meet & Greet</h1>
            <Image src={card3} width={90} alt="Card 1"></Image>
            <p className="text-sm">Opt for the effortless option by driving your car to a drop-off area near the terminal. Leave your vehicle with a dedicated driver who will park it in a nearby facility while you proceed directly to check-in.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Electric car?</h1>
            <Image src={card4} width={90} alt="Card 1"></Image>
            <p className="text-sm">For electric vehicle owners, visit our Airport Electric Car Charging page to discover airports, airport hotels, and airport car parks equipped with charging points.</p>
          </div>
        </div>
      </div>

      {/* Offer */}
      <div className="mt-20 w-[85%] mx-auto space-y-10 md:space-y-0 md:flex items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center text-center">
          <Image src={x1} width={70} alt="X1"></Image>
          <p className="italic mb-3">Get Exclusive Offers</p>
          <div className="flex items-center">
            <input type="email" name="" id="" placeholder="Enter Your Email Address" className="border rounded-3xl px-3 py-1" />
            <IoIosArrowForward size={30} className="border rounded-3xl cursor-pointer -ml-8" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <Image src={x2} width={70} alt="X1"></Image>
          <p className="italic mb-3">Get Exclusive Offers</p>
          <p>Top-choice airport parking: secure, reliable, stress-free, and unbeatable prices guaranteed.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src={x3} width={70} alt="X1"></Image>
          <p className="italic mb-3">Get Exclusive Offers</p>
          <p>Count on our 24/7 expert support for immediate assistance and guidance whenever you need it.</p>
        </div>
      </div>
      <div className="w-[85%] mx-auto mt-20 hidden md:block">
        <h1 className="text-3xl text-[#0074BC] font-semibold">The most popular Airport right now</h1>
        <p className="mt-3">Experience the utmost convenience at the UK's preferred airport parking facility. Offering secure and reliable services, it's the top choice for travelers seeking peace of mind while leaving their vehicles. Make your journey stress-free with our trusted and popular airport parking option.</p>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure><Image src={xx1} alt="XX1" className="w-60 " /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">London</h2>
              <p className="hidden md:block">Secure your London Airport parking effortlessly. Reserve your space now <br /> for a stress</p>
            </div>
          </div>

          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure><Image src={xx2} alt="XX1" className="w-60 " /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">London</h2>
              <p className="hidden md:block">Secure your London Airport parking effortlessly. Reserve your space now <br /> for a stress</p>
            </div>
          </div>
          
          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure><Image src={xx3} alt="XX1" className="w-60 " /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">London</h2>
              <p className="hidden md:block">Secure your London Airport parking effortlessly. Reserve your space now <br /> for a stress</p>
            </div>
          </div>

          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure><Image src={xx4} alt="XX1" className="w-60 " /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">London</h2>
              <p className="hidden md:block">Secure your London Airport parking effortlessly. Reserve your space now <br /> for a stress</p>
            </div>
          </div>

          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure><Image src={xx5} alt="XX1" className="w-60 " /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">London</h2>
              <p>Secure your London Airport parking effortlessly. Reserve your space now <br /> for a stress</p>
            </div>
          </div>

          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure><Image src={xx6} alt="XX1" className="w-72 " /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">London</h2>
              <p className="hidden md:block">Secure your London Airport parking effortlessly. Reserve your space now <br /> for a stress</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
