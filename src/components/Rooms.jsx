import React from 'react'
import img from '../assets/heroimg.jpg'
function Rooms() {
  return (
    <div className='max-w-[1200px] h-[450px] bg-blue-100 lg:mb-[20%] md:mb-[35%] mx-auto my-20 pt-16 px-4 grid gap-4 lg:grid-cols-3 ' >
      <div className='lg:top-20 lg:col-span-1  col-span-2 ' > 
        <h1 className='text-2xl font-bold' >Find frontend webDeveloper</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deserunt, asperiores repellat distinctio temporibus natus.</p>
      </div>

      <div className='grid grid-cols-2 gap-2 col-span-2 grid-rows-2' >
        <img className='w-full h-full object-cover'  src={img} alt="" />
        <img className='row-span-2 w-full h-full object-cover'  src={img} alt="" />
        <img className='w-full h-full object-cover' src={img} alt="" />
      </div>
    </div>
  )
}

export default Rooms;