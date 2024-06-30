import React from 'react';
import hero_image from '../Assets/hero_image.png'
import hand_icon from '../Assets/hand_icon.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='md:flex items-center md:justify-center grid grid-cols-2 gap-5 md:gap-20 px-10 bg-gradient-to-b from-white via-slate-400 to-white'>
      <div className='flex flex-col items-center lg:translate-y-[-60px]'>
        <img className='w-20 md:w-52' src={hand_icon}/>
        <h1 className='lg:text-5xl md:text-3xl text-sm font-bold'>RAMADHAN SALE <br/>UP TO <span className='lg:text-9xl text-4xl md:text-7xl text-red-600'>63%</span></h1>
        <button className='border-black border-2 text-[9px] lg:text-base px-3.5 py-1 rounded-full lg:px-10 lg:py-4 flex gap-2 bg-white font-bold'>Go To Catalog <FaArrowRightLong className='lg:text-2xl text-base'/></button>
      </div>
      <div>
        <img className='scale-75 md:scale-100' src={hero_image}/>
      </div>
    </div>
  );
}

export default Hero;
