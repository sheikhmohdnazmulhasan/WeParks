import bannerImg from '@/public/banner.png';
import Image from 'next/image';

export default function Home() {
  return (
    <main>

      {/* Banner */}
      <div className="bg-[url('https://i.ibb.co/XYJy5pR/banner.png')] h-[450px] bg-cover item-left">
        <div className="bg-black w-full h-full bg-opacity-45 flex items-center p-20">
          <div className="flex-1"></div>
          <div className="text-end">
            <h2 className='text-4xl text-[#29ABE3] font-bold'>Park your car safely <br /> on Airport</h2>
            <p className='text-white mt-3 font-semibold'>Your gateway to the world</p>
          </div>
        </div>

      </div>
    </main>
  )
}
