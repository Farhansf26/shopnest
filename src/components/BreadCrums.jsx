import React from 'react';
import breadrum from '../Assets/breadcrum_arrow.png'

const BreadCrums = ({ product }) => {
  return (
    <div className='flex items-center gap-2 pl-44 py-6'>
      <p>HOME</p>
      <img src={breadrum}/>
      <p>SHOP</p>
      <img src={breadrum}/>
      <p className='uppercase'>{product.category}</p>
      <img src={breadrum}/>
      <p>{product.name}</p>
    </div>
  );
}

export default BreadCrums;
