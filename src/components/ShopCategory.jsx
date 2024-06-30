import React from 'react';
import all_product from '../Assets/all_product';
import Items from './Items';

const ShopCategory = ({ banner, category }) => {
  const renderedItems = all_product.map(product => {
    if(product.category === category){
      return <Items item={product} key={product.id}/>
    }
  })

  return (
    <div>
      <div className='scale-90'>
        <img src={banner}/>
      </div>
      <h1 className='uppercase text-center font-bold text-3xl py-5'>CLOTHES FOR {category}</h1>
      <div className='itemList'>
        {renderedItems}
      </div>
    </div>
  );
}

export default ShopCategory;
