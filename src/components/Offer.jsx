import React from 'react';
import offerImage from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='flex justify-center gap-32 bg-gradient-to-b from-white via-purple-200 to-white'>
      <div className='flex flex-col gap-2 md:gap-7 mt-24'>
        <h1 className='text-xl md:text-6xl font-bold'>EXCLUSIVE</h1>
        <h1 className='text-xl md:text-6xl font-bold'>OFFERS</h1>
        <h1 className='text-xl md:text-6xl font-bold'>FOR YOU</h1>
        <p>Only On Best Seller Products</p>
        <button className='bg-red-500 py-3 rounded-full font-bold text-lg'>Check Now</button>
      </div>
      <div>
        <img src={offerImage}/>
      </div>
    </div>
  );
}

export default Offer;
