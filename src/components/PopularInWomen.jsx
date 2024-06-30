import React from 'react';
import items from '../Assets/data'
import Items from './Items';

const PopularInWomen = () => {
  const renderedPopular = items.map(item => {
    return <Items item={item} key={item.id}/>
  })

  return (
    <div className='py-5'>
      <h1 className='text-center font-bold text-3xl'>POPULAR IN WOMEN</h1>
      <div className='itemList'>
        {renderedPopular}
      </div>
    </div>
  );
}

export default PopularInWomen;
