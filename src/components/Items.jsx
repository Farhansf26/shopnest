import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ item }) => {
  return (
    <div className='w-[250px] rounded-lg hover:scale-105 duration-200 opacity-90 shadow-lg hover:opacity-100'>
        <div className='rounded-t-lg'>
          <Link to={`/product/${item.id}`}><img className='cursor-pointer rounded-lg' src={item.image}/></Link>
        </div>
        <div className='px-2 py-1.5'>
          <p className='truncate font-bold text-base'>{item.name}</p>
        </div>
        <div className='px-2 py-1.5'>
          <p className='line-through text-red-500 text-sm'>${item.old_price}</p>
          <p className='text-lg'>${item.new_price}</p>
        </div>
      </div>
    );
}

export default Items;
