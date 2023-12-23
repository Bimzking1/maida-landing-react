import React from 'react'
import Drone1 from './../assets/drone1.jpg'
import Drone2 from './../assets/drone2.jpg'
import Drone3 from './../assets/drone3.jpg'
import Fish1 from './../assets/redsnapper.jpg'
import Fish2 from './../assets/fishfiltering.jpg'
import Fish3 from './../assets/fishdry.jpg'

const AboutUs = () => {
  return (
    <div className='text-gray-700 py-16 w-full xl:w-[1280px] flex flex-col items-center'>
        <div className='px-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex-flex-col'>
                    <div className='mb-8'>
                        <div className='text-4xl font-semibold'>
                            We Give The Freshest Fish
                        </div>
                        <div className='text-lg font-semibold mt-8'>
                            We are a team of fish experts who wants help
                            our clients with the best solutions we can
                            offer. Established in 2013, we have 10 years
                            of experiences making our clients satisfied
                            with their needs of sea products.
                        </div>
                    </div>
                    <div className=''>
                        <img
                            src={Fish1} 
                            className={`w-full`}
                            alt="logo" 
                        />
                    </div>
                </div>
                <div className='flex-flex-col'>
                    <div className=''>
                        <img 
                            src={Fish2} 
                            className={`w-full`}
                            alt="logo" 
                        />
                    </div>
                    <div className=''>
                        <div className='text-4xl font-semibold mt-8'>
                            We Are Specialized In Quality Control
                        </div>
                        <div className='text-lg font-semibold mt-8'>
                            Our Team are capable to serve our clients
                            with the best quality of sea products.
                            We always analyze the product to serve
                            our client the best and healthy products.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className=''>
                    <div className='text-4xl font-semibold'>
                        We Are Focused to Our Core Values
                    </div>
                    <div className='text-lg font-semibold my-8'>
                        Maida Fortuna Laut focuses on three distinct parts: 
                        the products, quality, and network. 
                        Maida Fortuna Laut uses an expert team to make these
                        things delivered in the best way.

                        Our experts are focused and passionate
                        with their works and product deliveries.
                    </div>
                </div>
                <div className=''>
                    <img 
                        src={Fish3} 
                        className={`w-full`}
                        alt="logo" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs