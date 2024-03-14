"use client";
import { CiLocationOn } from "react-icons/ci";
import { PiAirplaneLanding, PiAirplaneTakeoff } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import card1 from "@/public/icons/1.png";
import card2 from "@/public/icons/2.png";
import card3 from "@/public/icons/3.png";
import card4 from "@/public/icons/4.png";
import x1 from "@/public/x/1.png";
import x2 from "@/public/x/2.png";
import x3 from "@/public/x/3.png";
import xx1 from "@/public/xx/1.png";
import xx2 from "@/public/xx/2.png";
import xx4 from "@/public/xx/4.png";
import xx3 from "@/public/xx/3.png";
import xx5 from "@/public/xx/5.png";
import xx6 from "@/public/xx/6.png";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const initialPrice = 100;
  let price = {};
  const router = useRouter();

  const calculateDiscount = (times, discount) => {
    let discountRate = discount * 100;
    let totalPrice = initialPrice * times;
    let totalDiscount = totalPrice * discount;
    let subTotal = totalPrice - totalDiscount;

    const priceHistory = {
      totalPrice,
      discountRate,
      totalDiscount,
      subTotal,
    };

    return priceHistory;
  };

  async function handleHomeForm(event) {
    event.preventDefault();
    const airport = event.target.airport.value;
    const from = event.target.from.value;
    const to = event.target.to.value;

    const momentFrom = moment(from);
    const momentTo = moment(to);
    const spendHours = momentTo.diff(momentFrom, "hours");

    const randomNumber = Math.random();

    if (momentFrom > momentTo) {
      toast.error('please Provide Valid Date');
      return

    }

    if (spendHours <= 24) {
      price = calculateDiscount(1, 0);
    } else if (spendHours > 24 && spendHours <= 48) {
      // let totalPrice = initialPrice * 2;
      // let discount = totalPrice * .05;
      // price = totalPrice - discount;
      price = calculateDiscount(2, 0.05);
    } else if (spendHours > 48 && spendHours <= 72) {
      price = calculateDiscount(3, 0.1);
    } else if (spendHours > 72 && spendHours <= 96) {
      price = calculateDiscount(4, 0.15);
    } else if (spendHours > 96 && spendHours <= 120) {
      price = calculateDiscount(5, 0.2);
    } else if (spendHours > 120 && spendHours <= 144) {
      price = calculateDiscount(6, 0.25);
    } else {
      let day = spendHours / 24;
      price = calculateDiscount(day, 0.3);
    }

    const dataForServer = {
      totalDiscount: price.totalDiscount,
      totalPrice: price.totalPrice,
      discountRate: price.discountRate,
      subTotal: price.subTotal,
      startDate: to,
      EndDate: from,
      airport,
      orderNumber: randomNumber
    };

    try {
      const serverResponse = await axios.post('https://www.weparkhere.co.uk/api/order', dataForServer);

      if (serverResponse.data.success) {
        router.push(`/booking?bookingId=${randomNumber}`);

      }

    } catch (error) {
      toast.error('Internal Server Error')
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main className="mb-20 overflow-hidden">
      {/* Banner */}
      <Toaster />
      {/* for PC */}
      <div className="bg-[url('https://i.ibb.co/XYJy5pR/banner.png')] md:block hidden h-[450px] bg-cover item-left">
        <div className="bg-black w-full h-full bg-opacity-45 flex items-center p-20">
          <div className="flex-1"></div>
          <div className="text-end">
            <h2 className="text-4xl text-[#29ABE3] font-bold">
              Park your car safely <br /> on Airport
            </h2>
            <p className="text-white mt-3 font-semibold">
              Your gateway to the world
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          className="flex items-center gap-4 w-[85%] -mt-12 rounded-t-3xl rounded-b-md bg-white shadow-lg h-28 px-10 mx-auto"
          data-aos="fade-up"
          onSubmit={handleHomeForm}
        >
          <div className=" w-[28.33%] ">
            <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
              <CiLocationOn size={20} />
              <p className="text-xl">Airport?</p>
            </div>
            <select
              name="airport"
              id=""
              className="w-full border p-2 rounded-3xl"
            >
              <option value="Bristol">Bristol</option>
            </select>
          </div>

          <div className=" w-[28.33%] ">
            <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
              <PiAirplaneTakeoff size={20} />
              <p className="text-xl">Parking From?</p>
            </div>
            <input
              type="datetime-local"
              name="from"
              id=""
              className="w-full border p-2 rounded-3xl"
            />
          </div>

          <div className=" w-[28.33%] ">
            <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
              <PiAirplaneLanding size={20} />
              <p className="text-xl">Collect car?</p>
            </div>
            <input
              type="datetime-local"
              name="to"
              id=""
              className="w-full border p-2 rounded-3xl"
            />
          </div>

          <div className="w-[15%] mt-8">
            <button className="bg-[#0074BC] hover:bg-[#3e7ca3] text-white rounded-3xl px-2 py-3 uppercase w-full">
              Book Now
            </button>
          </div>
        </form>
      </div>

      {/* for mobile */}

      <div className="bg-[url('https://i.ibb.co/XYJy5pR/banner.png')] py-10 bg-cover md:hidden">
        <div className="bg-black bg-opacity-70 h-full w-full">
          <form className=" flex flex-col pt-5 justify-center w-full px-5" onSubmit={handleHomeForm}>
            {/* location */}
            <div>
              <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
                <CiLocationOn size={20} />
                <p className="text-xl">Airport?</p>
              </div>
              <div className="w-full">
                <select
                  name="airport"
                  id=""
                  className="w-full border text-white bg-transparent p-2.5 rounded-3xl"
                >
                  <option value="Bristol">Bristol</option>
                </select>
              </div>
            </div>

            {/* perking form */}
            <div className="mt-4">
              <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
                <PiAirplaneTakeoff size={20} />
                <p className="text-xl">Parking From?</p>
              </div>
              <div className="w-full">
                <input
                  type="datetime-local"
                  name="from"
                  id=""
                  className="w-full border bg-transparent text-white p-2 rounded-3xl"
                />
              </div>
            </div>

            {/* landing */}
            <div className="mt-4">
              <div className="flex gap-2 items-center text-[#0084BD] mb-2 ">
                <PiAirplaneLanding size={20} />
                <p className="text-xl">Collect car?</p>
              </div>
              <div className="w-full">
                <input
                  type="datetime-local"
                  name="to"
                  id=""
                  className="w-full border bg-transparent text-white p-2 rounded-3xl"
                />
              </div>
            </div>
            <button className="bg-[#0074BC] hover:bg-[#3e7ca3] text-white rounded-3xl px-2 py-2.5 uppercase w-full mt-6">
              Book Now
            </button>
          </form>
        </div>
      </div>

      {/* 2nd */}
      <div className="w-[85%] md:mt-36 mt-10 mx-auto">
        <div className="bg-[url('https://i.ibb.co/GJ8y2yp/x.png')] md:rounded-3xl md:h-[600px] w-full bg-cover">
          <div className="bg-black bg-opacity-60 md:rounded-3xl px-10 h-full w-full flex flex-col justify-center text-white md:pl-20">
            <h1 className="md:text-5xl text-2xl font-bold pt-10 md:pt-0">
              Rely on Trusted Parking <br /> Solutions for Your <br /> UK
              Airport Parking Needs.
            </h1>
            <button
              className="bg-[#0074BC] ml-5 w-fit hover:bg-[#3e7ca3] text-white rounded-3xl px-8 py-2.5 uppercase mt-5 mb-8
             md:mt-16"
            >
              Start From £ 99
            </button>
          </div>
        </div>
      </div>

      {/* Explore affordable parking options */}
      <div className="w-[85%] mx-auto mt-16 ">
        <h1
          className="text-3xl text-[#0074BC] font-semibold"
          data-aos="fade-right"
        >
          Explore affordable parking options
        </h1>
        <p className="mt-3">
          Explore our user-friendly comparison table below to simplify your
          decision-making process. Our packages are organized by price, ensuring
          that our most budget-friendly options are conveniently located at the
          top of the list.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Park & Ride</h1>
            <Image src={card1} width={90} alt="Card 1"></Image>
            <p className="text-sm">
              Experience the convenience of parking your car at a designated area a short distance from the airport. Utilize the transfer bus service to reach the terminal, resembling the familiar concept of city center park and ride facilities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Park & Stroll</h1>
            <Image src={card2} width={90} alt="Card 1"></Image>
            <p className="text-sm">
              Alternatively known as &quot; Parking in the airport grounds&quot; or &quot;Park
              and Stroll,&quot; this option strikes a balance between distance and
              price. If a transfer bus is necessary, the journey is brief.
              Generally, you can reach the terminal in just a few minutes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Meet & Greet</h1>
            <Image src={card3} width={90} alt="Card 1"></Image>
            <p className="text-sm">
              Opt for the effortless option by driving your car to a drop-off
              area near the terminal. Leave your vehicle with a dedicated driver
              who will park it in a nearby facility while you proceed directly
              to check-in.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#BAEAFF] p-5 hover:scale-105 transition-all">
            <h1 className="text-2xl font-semibold">Electric car?</h1>
            <Image src={card4} width={90} alt="Card 1"></Image>
            <p className="text-sm">
              For electric vehicle owners, visit our Airport Electric Car
              Charging page to discover airports, airport hotels, and airport
              car parks equipped with charging points.
            </p>
          </div>
        </div>
      </div>

      {/* Offer */}
      <div className="mt-20 w-[85%] mx-auto space-y-10 md:space-y-0 md:flex items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center text-center">
          <Image src={x1} width={70} alt="X1"></Image>
          <p className="italic mb-3">Get Exclusive Offers</p>
          <div className="flex items-center">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email Address"
              className="border rounded-3xl px-3 py-1"
            />
            <IoIosArrowForward
              size={30}
              className="border rounded-3xl cursor-pointer -ml-8"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <Image src={x2} width={70} alt="X1"></Image>
          <p className="italic mb-3">Get Exclusive Offers</p>
          <p>
            Top-choice airport parking: secure, reliable, stress-free, and
            unbeatable prices guaranteed.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image src={x3} width={70} alt="X1"></Image>
          <p className="italic mb-3">Get Exclusive Offers</p>
          <p>
            Count on our 24/7 expert support for immediate assistance and
            guidance whenever you need it.
          </p>
        </div>
      </div>
      <div className="w-[85%] mx-auto mt-20 hidden md:block">
        <h1
          className="text-3xl text-[#0074BC] font-semibold"
          data-aos="fade-right"
        >
          The most popular Airport right now
        </h1>
        <p className="mt-3">
          Experience the utmost convenience at the UK&apos;s preferred airport
          parking facility. Offering secure and reliable services, it&apos;s the top
          choice for travelers seeking peace of mind while leaving their
          vehicles. Make your journey stress-free with our trusted and popular
          airport parking option.
        </p>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure>
              <Image src={xx1} alt="XX1" className="w-60 " />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">London</h2>
              <p className="hidden md:block">
                Secure your London Airport parking effortlessly. Reserve your
                space now for a stress
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure>
              <Image src={xx2} alt="XX1" className="w-60 " />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">
                Manchester
              </h2>
              <p className="hidden md:block">
                Secure your parking spot at Manchester Airport for a hassle-free
                travel experience
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure>
              <Image src={xx3} alt="XX1" className="w-60 " />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">Luton</h2>
              <p className="hidden md:block">
                Secure parking at Luton Airport. Reserve your spot for
                hassle-free travel
              </p>
            </div>
          </div>

          {/* card 4 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure>
              <Image src={xx4} alt="XX1" className="w-60 " />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">Liverpool</h2>
              <p className="hidden md:block">
                Dependable Liverpool Airport parking. Book your space for a
                hassle-free departure and return
              </p>
            </div>
          </div>

          {/* card 5 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure>
              <Image src={xx5} alt="XX1" className="w-60 " />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">Edinburgh</h2>
              <p>
                Secure Edinburgh Airport parking. Book your space for a
                worry-free departure and return
              </p>
            </div>
          </div>

          {/* card 1 */}
          <div className="card h-36 card-side mt-10 border cursor-pointer hover:scale-105 transition-all">
            <figure>
              <Image src={xx6} alt="XX1" className="w-72 " />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[#0074BC]">
                Bermingham
              </h2>
              <p className="hidden md:block">
                Secure Birmingham Airport parking. Reserve your space for a
                stress-free departure and return
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
