import React from 'react'
import img from '../assets/heroimg.jpg'

function Plan() {
  return (
    <div className='max-w-[1400px] grid lg:grid-cols-2 m-auto p-8 gap-8 items-center ' >
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]                                                                                              ' >
            <img className='w-full h-full object-cover row-span-3 ' src={img} alt="" />
            <img className='w-full h-full object-cover row-span-2 ' src={img} alt="" />
            <img className='w-full h-full object-cover row-span-2 ' src={img} alt="" />
            <img className='w-full h-full object-cover row-span-3 ' src={img} alt="" />
            <img className='w-full h-full object-cover row-span-2 ' src={img} alt="" />
        </div>
        <div className='space-y-1 md:space-y-4' >
            <h3 className='text-2xl font-bold uppercase' >Some of our projects</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sunt natus eaque necessitatibus laboriosam porro sint accusantium quia facilis, obcaecati, error nisi dolorum sapiente, iusto voluptas quisquam perspiciatis commodi ducimus? </p>
            <button className='rounded-full font-bold px-6 w-[170px] bg-white border-2 border-black  hover:bg-white hover:text-black text-whi'>SignUp Now</button>
            <button className='rounded-full font-bold text-white px-6 w-[170px] border-2 border-black hover:border-2 bg-black mx-4 hover:bg-white hover:text-black text-whi'>Hire Today</button>
        </div>
    </div>
  )
}

export default Plan;                                                                                                                            