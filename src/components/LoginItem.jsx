import React from 'react';

const LoginItem= () => {


  return (
    <div className='w-[600px] mx-auto '>
      <form className='flex items-start justify-center flex-col p-6'>
        <label className='text-2xl font-bold'>Email :</label>
        <input className='border-2 border-black rounded w-full p-2'/>
        <label className='text-2xl font-bold mt-5'>Password :</label>
        <input className='border-2 border-black rounded w-full p-2'/>
        <button className='w-full bg-black text-white p-2 mt-2 rounded'>Submit</button>
      </form>
      <div className='px-6'>
        <p>Doesn't have an account? <span className='text-blue-500 underline'>Sign up here</span></p>
      </div>
    </div>
  );
}

export default LoginItem;
