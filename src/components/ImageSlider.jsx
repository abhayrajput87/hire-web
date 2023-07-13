import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
function ImageSlider() {
 const slides=[
    { url: img1,
      title: 'imdxzg1' },
      { url: img2,
        title: 'imdxzg1' },
        { url: img3,
          title: 'imdxzg1' },
          { url: img4,
            title: 'imdxzg1' }
 ];
 
    return (
    <div className='max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative '>
        <div className='w-full h-full bg-center rounded-2xl  duration-500 bg-cover' 
        style={{backgroundImage: `url(${slides[2].url})`}}>

        </div>
    </div>
  )
}

export default ImageSlider;