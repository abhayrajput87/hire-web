import React from 'react'
import heroimg from '../assets/heroimg.jpg'
function Hero() {
  return (
    <div className='w-full h-screen' >
        
         
        <img className='w-full h-screen object-cover top-0 left-0 ' src={heroimg} alt="" />
        
        {/* for overlay */}
        <div className=' bg-black/50  absolute w-full h-screen top-0 left-0 ' />
        <div className='absolute top-0 left-0 justify-center h-screen w-full flex flex-col text-white '>
            <div className='md:left-[10%] absolute max-w-[1100px]  p-4 ' >
                <p>All inclusive</p>
                <h1 className=' text-2xl md:text-5xl font-bold' >Private features</h1>
                <p className='max-w-[600px] drop-shadow-2xl md:text-xl' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam praesentium, esse sed quae dolorum deserunt deleniti eum reprehenderit laborum delectus.
                </p>
                <button className='mt-2 hover:bg-white hover:text-black ' > SignUp Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;