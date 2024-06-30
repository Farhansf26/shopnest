import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartItems';
import { removeFromCart } from '../feature.jsx/productSlice';

const CartPage = () => {
  const cartItems = useSelector(state => state.product.cartItems)
  const dispatch = useDispatch()

  let total = 0
  for(let i of cartItems){
    total += i.priceQuantity
  }

  const handleRemoveFromCart = (id, size, price) => {
    dispatch(removeFromCart({id, size, price}))
  }

  const renderedItem = cartItems.map((item, i) => {
    return (
      <tr key={i} className='border-b-4 grid grid-cols-12 items-center'>
        <td className='p-5 col-span-2'><img className='w-20 mx-auto' src={item.image}/></td>
        <td className='p-5 col-span-4'>{item.name}</td>
        <td className='p-5 col-span-1'>${item.price}</td>
        <td className='p-5 col-span-1'>{item.size}</td>
        <td className='p-5 col-span-1'>{item.quantity}</td>
        <td className='p-5 col-span-1'>${item.priceQuantity}</td>
        <td className='p-5 col-span-2'><button onClick={() => handleRemoveFromCart(item.id, item.size, item.price)}>x</button></td>
      </tr>
    )
  })
  
  return (
    <div className='mb-24'>
      <CartItems item={renderedItem}/>
      <div className='text-xl w-[85%] mx-auto text-end font-bold'>Your Total is : ${total}</div>
    </div>
  );
}

export default CartPage;
