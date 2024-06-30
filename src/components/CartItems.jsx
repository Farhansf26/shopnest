import React from 'react';

const CartItems = ({ item }) => {

  return (
    <div className='flex justify-center py-10'>
      <table className='text-center'>
        <thead>
          <tr className='grid grid-cols-12'>
            <th className='p-5 col-span-2'>Products</th>
            <th className='p-5 col-span-4'>Title</th>
            <th className='p-5 col-span-1'>Price</th>
            <th className='p-5 col-span-1'>Size</th>
            <th className='p-5 col-span-1'>Quantity</th>
            <th className='p-5 col-span-1'>Total</th>
            <th className='p-5 col-span-2'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {item}
        </tbody>
      </table>
    </div>
  );
}

export default CartItems;
