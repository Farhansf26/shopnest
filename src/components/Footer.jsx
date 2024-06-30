import React from 'react';
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-7 py-9'>
      <div className='flex items-center'>
        <img src={logo}/>
        <h1 className='text-4xl font-bold'>SHOPNEST</h1>
      </div>
      <div>
        <ul className='flex justify-center items-center gap-10 text-lg'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex justify-center items-center gap-9'>
        <button className='border p-3.5'><img src={instagram_icon}/></button>
        <button className='border p-3.5'><img src={pintester_icon}/></button>
        <button className='border p-3.5'><img src={whatsapp_icon}/></button>
      </div>
      <hr className='bg-gray-600 h-1 w-[80%]'/>
      <p>Copyright @ 2023 - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
