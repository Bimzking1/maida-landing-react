import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import MaidaWhite from './../assets/maidalogo-white.svg'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-gray-800 z-50'>
      <div className='bg-gray-800 w-full xl:w-[1280px] text-gray-100 text-sm text-center md:text-left md:py-8 md:px-8 pb-8'>
        <div className='w-full md:flex'>

            <div className='flex justify-center items-center md:items-start flex-col w-full md:w-1/4 py-2 pt-8 md:pt-2 px-2 pl-4 lg:w-2/5'>
                <a href="#home" className='flex flex-col justify-center items-center md:justify-start md:items-start lg:flex-row lg:items-center'>
                    <img
                        className='w-[80px] mb-8 lg:mb-0'
                        src={MaidaWhite}
                    />
                    <div className='font-semibold text-3xl lg:ml-4'>
                        Maida Fortuna Laut
                    </div>
                </a>
                <div className='text-lg md:text-sm my-8 px-4 md:px-0 lg:w-4/5'>
                    Maida Fortuna Laut is the largest commodities provider
                    company in Indonesia.
                    We help our customers to fullfilled their
                    satisfaction.
                </div>
                <div className='flex justify-center md:justify-start py-4 gap-4'>
                    <a href='https://www.instagram.com/' target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineInstagram style={{ width: '100%', height: '100%' }}/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <BsFacebook style={{color: "#ffffff", width: '100%', height: '100%'}} />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineYoutube style={{color: "#ffffff", width: '100%', height: '100%' }} />
                    </a>
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Products
                </div>
                <div className='md:py-1'>
                    Frozen Sea Caught
                </div>
                <div className='md:py-1'>
                    Frozen Chepalopods
                </div>
                <div className='md:py-1'>
                    Fruits and Vegetables
                </div>
                <div className='md:py-1'>
                    Farmed Fishes
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Discover
                </div>
                <div className='md:py-1'>
                    New Partnerships
                </div>
                <div className='md:py-1'>
                    New Products
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Services
                </div>
                <div className='md:py-1'>
                    Exports
                </div>
                <div className='md:py-1'>
                    Imports
                </div>
            </div>

        </div>
        <hr className='mt-8'/>
        <div className='text-center md:flex gap-8 text-xs mt-8 lg:px-4'>
            <div className='mb-2'>
                © Maida Fortuna Laut 2023. All Rights Reserved
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                About Us
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                User Agreement
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Privacy Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Terms of Services
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Cookie Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Copyright Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Brand Policy
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer