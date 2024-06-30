import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature.jsx/productSlice';

const DetailItem = ({ product }) => {
  const [selected, setSelected] = useState('')
  const dispatch = useDispatch()
  const cart = useSelector(state => state.product.cartItems)
  console.log(cart);
  
  const handleSelected = (size) => {
    if(size === selected){
      setSelected('')
      return
    }
    setSelected(size)
  }

  const sizes = [
    {size: 'S'},
    {size: 'M'},
    {size: 'L'},
    {size: 'XL'},
    {size: 'XXL'},
  ]
  
  const renderedSize = sizes.map(item => {
    const sizeSelected = item.size === selected
    return <button onClick={() => handleSelected(item.size)} 
    className={`px-7 py-5 border-2 shadow-md ${sizeSelected ? 'bg-gray-400' : ''}`} key={item.size}>{item.size}</button>
  })

  const handleAddToCart = () => {
    if(!selected){
      alert('Kamu belum memilih ukuran')
      return
    }
    dispatch(addToCart({id: product.id, name: product.name, category: product.category, 
      image: product.image, price: product.new_price, size: selected}))
    }

  return (
    <div className='grid grid-cols-7'>
      <div className='flex gap-5 col-span-4 place-content-end'>
        <div className='flex flex-col justify-between'>
          <img className='w-[125px]' src={product.image}/>
          <img className='w-[125px]' src={product.image}/>
          <img className='w-[125px]' src={product.image}/>
          <img className='w-[125px]' src={product.image}/>
        </div>
        <div>
          <img className='w-[550px]' src={product.image}/>
        </div>
      </div>
      <div className='col-span-3 pl-11 pr-28 flex items-start flex-col gap-5'>
        <h1 className='text-4xl font-bold'>{product.name}</h1>
        <div>
          <p className='text-xl line-through text-red-500'>${product.old_price}</p>
          <p className='text-2xl font-bold'>${product.new_price}</p>
        </div>
        <p className='text-xl font-bold text-gray-500'>Select Size</p>
        <div className='flex gap-4'>
          {renderedSize}
        </div>
        <button onClick={handleAddToCart} className='bg-red-600 px-12 text-white uppercase font-bold py-4'>Add To Cart</button>
      </div>
    </div>
  );
}

export default DetailItem;
