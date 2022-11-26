import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-gradient-to-r from-[#27dec0] to-blue-500 '>
       <div className='flex justify-between items-center h-14 max-w-[1240px] mx-auto  w-full'>
      <h1 className='w-full text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500'> </h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Company</li>
        <li className='p-4 cursor-pointer'>Resources</li>
        <li className='p-4 cursor-pointer'>About</li>
        <li className='p-4 cursor-pointer text-white'>ContactUs</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>  
      {/* md:hidden dile midium hole menu icons dekhabe sma:dile khob choto hole menu dekahbe */}
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      
    </div>

    </div>
   
  );
};

export default Navbar;