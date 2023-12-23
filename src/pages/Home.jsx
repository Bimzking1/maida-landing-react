import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HotProduct from '../components/HotProduct'
import CarouselSlick from '../components/CarouselSlick'
import AboutUs from '../components/AboutUs'
import HotFeature from '../components/HotFeature'
import ContactUs from '../components/ContactUs'
import Ships from '../assets/ships.jpg'
import Beach from '../assets/beach.jpg'
import Unloading from '../assets/unloading.jpg'
import style from '../components/style/style.module.css'

const Home = () => {

    const [activeId, setActiveId] = useState('1')
    const [activeImage, setActiveImage] = useState(Ships)
    const [activeMessage1, setActiveMessage1] = useState('Feast of Freshness')
    const [activeMessage2, setActiveMessage2] = useState('Maida Fortuna is the largest fresh commodities provider.')

    const imageStorage = [
        {
            id: '1',
            name: Ships,
            message1: 'Feast of Freshness',
            message2: 'Maida Fortuna is the largest fresh commodities provider.',
        },
        {
            id: '2',
            name: Beach,
            message1: 'Providing Commodities',
            message2: 'We provide our customer the best local commodities.',
        },
        {
            id: '3',
            name: Unloading,
            message1: 'Sea Caught Provider',
            message2: 'We have hundreds fish catchers around Indonesia.',
        },
    ]
    
    const handleSlider = (image, messages1, messages2) => {
        if (activeImage === Ships) {
            setActiveImage(Beach)
            setActiveMessage1(imageStorage[1].message1)
            setActiveMessage2(imageStorage[1].message2)
        } else if (activeImage === Beach) {
            setActiveImage(Unloading)
            setActiveMessage1(imageStorage[2].message1)
            setActiveMessage2(imageStorage[2].message2)
        } else if (activeImage === Unloading) {
            setActiveImage(Ships)
            setActiveMessage1(imageStorage[0].message1)
            setActiveMessage2(imageStorage[0].message2)
        }
    }

    function myFunction() {
    }
    // setInterval(myFunction, 5000);

  return (
    <>  
        <div id="home"></div>
        <Navbar className='z-50 top-0'/>

        <div className='flex w-full flex-col justify-center z-0'>
            <img 
                src={activeImage}
                className={`h-[100vh]`}
                // className={`bg-${activeImage} bg-no-repeat bg-cover w-full flex flex-col items-center justify-center h-screen`}
            />
            <div className={`${style.imageContainer} w-full absolute h-[100vh] flex flex-col justify-center items-center`}>
                <div className='text-center lg:flex lg:gap-4 z-0'>
                    <div className='text-center rounded-lg text-gray-100 text-6xl pt-4 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        {activeMessage1}
                    </div>
                </div>
                <div className='mt-4 md:mt-2 z-0'>
                    <div className='text-center rounded-lg text-gray-100 text-xl pt-4 mx-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        {activeMessage2}
                    </div>
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
        
        <div id="aboutus" className='w-full flex items-center justify-center'>
            <AboutUs/>
        </div>
        
        {/* <div id="products" className='bg-gray-100 w-full flex items-center justify-center'>
            <CarouselSlick/>
        </div> */}
        
        <div id="contactus" className='pt-8 bg-gray-100 w-full flex items-center justify-center'>
            <ContactUs/>
        </div>

        <Footer className='z-50'/>
    </>
  )
}

export default Home