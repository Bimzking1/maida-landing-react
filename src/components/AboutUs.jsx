import React from 'react'
import Drone1 from './../assets/drone1.jpg'
import Drone2 from './../assets/drone2.jpg'
import Drone3 from './../assets/drone3.jpg'

const AboutUs = () => {
  return (
    <div className='text-gray-300 py-16 w-full xl:w-[1280px] flex flex-col items-center'>
        <div className='text-5xl font-semibold mb-16'>
            About Us
        </div>
        <div className='px-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex-flex-col'>
                    <div className='mb-8'>
                        <div className='text-4xl font-semibold'>
                            We Give The Best Drone Solutions
                        </div>
                        <div className='text-lg font-semibold mt-8'>
                            We are a team of drone experts who wants help
                            our clients with the best solutions we can
                            offer. Established in 2013, we have 10 years
                            of experiences making our clients satisfied
                            with their needs of drones.
                        </div>
                    </div>
                    <div className=''>
                        <img
                            src={Drone1} 
                            className={`w-full`}
                            alt="logo" 
                        />
                    </div>
                </div>
                <div className='flex-flex-col'>
                    <div className=''>
                        <img 
                            src={Drone2} 
                            className={`w-full`}
                            alt="logo" 
                        />
                    </div>
                    <div className=''>
                        <div className='text-4xl font-semibold mt-8'>
                            We Are Specialized In Drone Advanced Technology
                        </div>
                        <div className='text-lg font-semibold mt-8'>
                            Our Team are capable to serve our clients
                            with the best current technologies.
                            We always make our team updated
                            and always do a year evaluation of
                            technologies.
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
                        DroNeeds focuses on three distinct parts: 
                        the vision, core values, and network. 
                        DroNeeds uses an expert team to make these
                        things delivered in the best way.

                        Our experts are focused and passionate
                        with their works and product deliveries.
                    </div>
                </div>
                <div className=''>
                    <img 
                        src={Drone3} 
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