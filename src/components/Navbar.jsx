import React from 'react';
import {HiMenuAlt3 }  from 'react-icons/hi'
import { useState } from 'react';

function Navbar() {
 
    const[nav,setNav]= useState(false);
    const handleNav=()=>{
      setNav(!nav);
      if(!nav)
      {
        document.body.style.overflow='hidden';

      }
      else{
        document.body.style.overflow='scroll';


      }

    }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center' >
      <h1 className='text-white cursor-default font-bold z-20' >Experiences</h1>
      <HiMenuAlt3 onClick={handleNav}  className='z-20 text-white cursor-pointer ' size={25} />
      <div  className={nav?'ease-in duration-300 fixed top-0 left-0 flex flex-col w-full h-screen text-white p-4 bg-black/90 z-10 justify-center text-center items-center':'absolute ease-in top-0 h-screen  duration-500 z-10  left-[-100%]  '} >
        <ul  className=' w-full h-full items-center fixed justify-center flex flex-col' >
          <li className='font-bold text-xl md:text-2xl p-4 md:p-8' >Home</li>
          <li className='font-bold text-xl md:text-2xl p-4 md:p-8' >Destinations</li>
          <li className='font-bold text-xl md:text-2xl p-4 md:p-8' >Reservations</li>
          <li className='font-bold text-xl md:text-2xl p-4 md:p-8' >AboutUs</li>
          <li className='font-bold text-xl md:text-2xl p-4 md:p-8' >ContactUS</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar;