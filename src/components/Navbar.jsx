import React from 'react';
import nav_logo from '../Assets/logo.png'
import cart_logo from '../Assets/cart_icon.png'
import Button from './Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { pathname } = useLocation()
  const cartQuantity = useSelector(state => state.product.cartQuantity)

  const navCategory = [
    {label: 'Home', value: '/'},
    {label: 'Men', value: '/men'},
    {label: 'Women', value: '/women'},
    {label: 'Kids', value: '/kids'},
  ]
  
  const renderedCategory = navCategory.map(nav => {
    const lands = pathname === nav.value
    return (
      <div key={nav.value}>
        <ul>
          <Link to={nav.value}><li className={lands ? 'border-b-2 border-red-600 scale-105 duration-100 text-black' : 'text-gray-700'}>{nav.label}</li></Link>
        </ul>
      </div>
    )
  })

  return (
    <div className='grid grid-cols-3 border-b-2 py-4 px-10'>
      <div className=' flex items-center'>
        <img className='w-8 sm:w-20' src={nav_logo}/>
        <h1 className='text-base md:text-3xl font-bold'>SHOPNEST</h1>
      </div>
      <div className='place-content-center text-xs md:text-base flex items-center justify-center gap-10'>
        {renderedCategory}
      </div>
      <div className='place-content-end flex items-center gap-5'>
        <div className='relative'>
          <Link to='/cart'><img className='w-6 sm:w-10' src={cart_logo}/></Link>
          <p className='absolute top-[-5px] right-[-10px] bg-red-600 text-white w-6 text-center rounded-full'>{cartQuantity}</p>
        </div>
        <Button className="md:px-10 md:py-5 border hidden md:flex border-black rounded-full"><Link to='/signup'>Login</Link></Button>
      </div>
    </div>
  );
}

export default Navbar;
