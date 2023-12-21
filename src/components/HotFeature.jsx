import React from 'react'
import video from "./../assets/citysky.mp4";
import { Link } from 'react-router-dom';

const HotFeature = () => {
  return (
    <div className='w-full xl:w-[1280px] flex flex-col items-center mb-8'>
        <Link to="/products" className='mb-8 text-2xl bg-gray-700 text-gray-100 hover:text-gray-800 hover:bg-gray-300 duration-300 px-8 py-4 rounded-full'>
            See more products
        </Link>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='w-fit p-8'>
                <video 
                    autoPlay={true} 
                    muted 
                    src={video} 
                    width="350px" 
                    height="auto" 
                    controls={false}
                    loop
                />
            </div>
            <div className='px-8 flex flex-col md:w-1/3 md:ml-4'>
                <div className='w-full text-3xl lg:text-4xl text-center font-semibold'>
                    Capture Your Moments with Our 360° Cameras
                </div>
                <div className='text-lg font-semibold my-8 text-center'>
                    The 360° camera lets you remain in the moment as 
                    you capture the spectacular. With the magnetic 
                    holders, you can conveniently use this camera
                    on your drone, your chest, or head,
                    keep your hands free, and film in FPV.
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotFeature