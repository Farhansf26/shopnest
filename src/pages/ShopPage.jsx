import React from 'react';
import Hero from '../components/Hero';
import NewCollection from '../components/NewCollection';
import Offer from '../components/Offer';
import PopularInWomen from '../components/PopularInWomen';

const ShopPage = () => {
   return (
      <div>
         <Hero/>
         <PopularInWomen/>
         <Offer/>
         <NewCollection/>
      </div>
   );
}

export default ShopPage;
