import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from '@/public/logo.png';
import { LuCalendarClock } from "react-icons/lu";
import Link from "next/link";
import img1 from '@/public/paymentIcon/1.png';
import img2 from '@/public/paymentIcon/2.png';
import img3 from '@/public/paymentIcon/3.png';
import img4 from '@/public/paymentIcon/4.png';
import img5 from '@/public/paymentIcon/5.png';
import img6 from '@/public/paymentIcon/6.png';
import img7 from '@/public/paymentIcon/7.png';
import img8 from '@/public/paymentIcon/8.png';
import img9 from '@/public/paymentIcon/9.png';
import img10 from '@/public/paymentIcon/10.png';
import AuthProvider from "./AuthProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "We Park Here",
  description: "Experience the convenience of parking your car at a designated area a short distance from the airport. Utilize the transfer bus service to reach the terminal, resembling the familiar concept of city center park and ride facilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
      </head>
      <Suspense>
        <AuthProvider>
          <body className={inter.className}>

            {/* navbar */}
            <div className="">

              {/* top */}
              <div className="px-5 md:px-16 font-semibold bg-[#0074BC] py-2 shadow-lg flex gap-3 items-center justify-end text-white">
                <p className="text-2xl">07480277277</p>
                <p>Available 24 hours</p>


              </div>

              <div className="flex justify-between items-center py-4 bg-[#161616] px-5 md:px-16">
                <div className="">
                  <Link href={'/'}>  <Image src={logo} className="w-28" alt="Logo"></Image></Link>
                </div>
                <Link href={'/check-booking'}> <div className="flex text-white items-center hover:text-[#29ABE3] gap-3 cursor-pointer hover:scale-105 transition-all">
                  <LuCalendarClock size={28} />
                  <p>Check Booking</p>
                </div></Link>
              </div>
            </div>

            <div className="min-h-screen">
              {children}
            </div>

            {/* footer */}
            <div className="">

              <div className="bg-[#242424]  md:flex p-7 md:p-20 justify-between">
                <div className="">
                  <Image src={logo} className="w-28" alt="logo" />
                  <h3 className=" font-semibold text-gray-500">WE PARKS HERE</h3>
                  <p className="text-white mt-3">Explore premier airport parking <br /> services in the UK for secure, <br />convenient, and reliable <br /> options ensuring a seamless <br /> travel experience.</p>
                </div>
                <div className="">
                  <h1 className="text-white mb-6 mt-5 md:mt-0">Payment methods possible</h1>
                  <div className="flex gap-2">
                    <Image src={img1} alt="Img1" className="w-8" />
                    <Image src={img2} alt="Img1" className="w-8" />
                    <Image src={img3} alt="Img1" className="w-8" />
                    <Image src={img4} alt="Img1" className="w-8" />
                    <Image src={img5} alt="Img1" className="w-8" />
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Image src={img5} alt="Img1" className="w-8" />
                    <Image src={img7} alt="Img1" className="w-8" />
                    <Image src={img8} alt="Img1" className="w-8" />
                    <Image src={img9} alt="Img1" className="w-8" />
                    <Image src={img10} alt="Img1" className="w-8" />
                  </div>
                </div>
              </div>
              <div className="footer text-white p-4 bg-black md:pl-20 pl-7">
                <aside>
                  <p>Copyright © 2024 We Parks Here. All Rights Reserved</p>
                </aside>
              </div>
            </div>
          </body>
        </AuthProvider>
      </Suspense>
    </html>
  );
}
