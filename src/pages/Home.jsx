import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HotProduct from '../components/HotProduct'
import CarouselSlick from '../components/CarouselSlick'
import AboutUs from '../components/AboutUs'
import HotFeature from '../components/HotFeature'
import ContactUs from '../components/ContactUs'

const Home = () => {

    const [activeId, setActiveId] = useState('1')
    const [activeImage, setActiveImage] = useState('ships')
    const [activeMessage1, setActiveMessage1] = useState('Feast of Freshness')
    const [activeMessage2, setActiveMessage2] = useState('Maida Fortuna is the largest fresh commodities provider.')

    const imageStorage = [
        {
            id: '1',
            name: 'ships',
            message1: 'Feast of Freshness',
            message2: 'Maida Fortuna is the largest fresh commodities provider.',
        },
        {
            id: '2',
            name: 'beach',
            message1: 'Providing Commodities',
            message2: 'We provide our customer the best local commodities.',
        },
        {
            id: '3',
            name: 'unloading',
            message1: 'Sea Caught Provider',
            message2: 'We have hundreds fish catchers around Indonesia.',
        },
    ]
    
    const handleSlider = (image, messages1, messages2) => {
        setActiveImage(image)
        setActiveMessage1(messages1)
        setActiveMessage2(messages2)
    }

    function myFunction() {
        console.log("Hello World!");
        setActiveImage()
    }
    setInterval(myFunction, 5000);

  return (
    <>  
        <div id="home"></div>
        <Navbar className='z-50 top-0'/>

        <div className='flex w-full flex-col justify-center z-0'>
            <div className={`bg-${activeImage} bg-no-repeat bg-cover w-full flex flex-col items-center justify-center h-screen`}>
                <div className='text-center lg:flex lg:gap-4 z-0'>
                    <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        {activeMessage1}
                    </div>
                    {/* <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Capture
                    </div>
                    <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Incredible
                    </div>
                    <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Views
                    </div> */}
                </div>
                <div className='mt-4 md:mt-2 z-0'>
                    <div className='text-center rounded-lg text-gray-100 text-xl pt-4 mx-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        {/* DroNeeds gives you every drones you needed. */}
                        {activeMessage2}
                    </div>
                    {/* <div className='text-center rounded-lg text-gray-100 text-xl mx-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Best quality from all over the world.
                    </div> */}
                </div>
                <div className='flex mt-8 gap-2'>
                    {
                        imageStorage.map((images, value) => {
                            return (
                                <div 
                                    key={value}
                                    onClick={() => handleSlider(images.name, images.message1, images.message2)}
                                    className='bg-gray-200 rounded-xl h-[10px] w-[40px] opacity-80 hover:bg-gray-700 duration-300'
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
        <div id="aboutus" className='bg-gray-800 w-full flex items-center justify-center'>
            <AboutUs/>
        </div>
        
        <div id="products" className='bg-gray-100 w-full flex items-center justify-center'>
            <CarouselSlick/>
        </div>
        
        <div id="contactus" className='bg-gray-100 w-full flex items-center justify-center'>
            <ContactUs/>
        </div>

        <Footer className='z-50'/>
    </>
  )
}

export default Home