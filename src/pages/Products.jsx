import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Products = () => {
    const product = [
      {
        url: 'https://cdn.mos.cms.futurecdn.net/YaVTFsBMYS9avufa8Q4bR5-970-80.jpg.webp',
        name: 'DJI Mini 3 Pro',
        price: 'Rp 10.670.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/sqoKrfZnPEsSzNkQ65zwEd-970-80.jpg.webp',
        name: 'DJI Air 3',
        price: 'Rp 23.400.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/rEw44YcG6bXnBexUbYSX98-970-80.jpg.webp',
        name: 'DJI Mavic 3 Pro',
        price: 'Rp 33.750.000',
      },
  
      {
        url: 'https://cdn.mos.cms.futurecdn.net/kfoMMbTb8zaQM9bBtRYWtN-970-80.jpg.webp',
        name: 'Autel Evo Lite+',
        price: 'Rp 20.275.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/x2vV3qc5cKuF238C6MgudA-970-80.jpg.webp',
        name: 'DJI Mini 3',
        price: 'Rp 10.270.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/GsygCgUBmkuFszb6Hmmg4S-970-80.jpg.webp',
        name: 'DJI Mavic 3 Classic',
        price: 'Rp 23.930.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/veWp9jCSS8AmtZ6XjT8uKh-970-80.jpg.webp',
        name: 'Ryze Tello',
        price: 'Rp 1.500.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/qfpn2RgubdxTH6Nt83RttV-970-80.jpg.webp',
        name: 'DJI Avata',
        price: 'Rp 16.560.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/AeiUH7MxzPrkt8jFBDf9Tm-970-80.jpg.webp',
        name: 'Autel Evo Nano+',
        price: 'Rp 11.149.000',
      },
      {
        url: 'https://cdn.mos.cms.futurecdn.net/huLrW5iN3rtrBgbikRoF5X-970-80.jpg.webp',
        name: 'BetaFPV Cetus Pro Kit',
        price: 'Rp 3.479.000',
      },
    ];

    const [filteredProduct, setFilteredProduct] = useState(product);

    const filterBySearch = (event) => {
        const query = event.target.value;
        var updatedList = [...product];
        updatedList = updatedList.filter((item) => {
            return (
                item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
            );
        });
        setFilteredProduct(updatedList);
    };
    
    return (
        <>
            <Navbar className=''/>

            <div className='flex w-full flex-col justify-center'>
                <div className='bg-rocky bg-no-repeat bg-cover w-full flex flex-col items-center justify-center'>
                    <div className='px-8 md:mx-8 lg:mx-8 bg-gray-200 mt-32 mb-16 bg-white lg:w-[1280px] flex flex-col justify-center items-center rounded-3xl'>
                        <div className='text-4xl font-semibold mt-8'>
                            Our Products
                        </div>
                        <div className='my-4 w-full flex gap-2'>
                            <Link to='/' className='w-fit flex items-center rounded-full'>
                                <div className='bg-white rounded-full hover:bg-gray-300 duration-300'>
                                    <RiArrowGoBackFill className='h-[40px] w-[40px] m-2'/>
                                </div>
                            </Link>
                            <input
                                className="text-gray-800 font-semibold text-xl bg-gray-200 w-full py-4 pl-8 md:px-8 my-4 rounded-3xl"
                                type="search"
                                placeholder="Search product ..."
                                onChange={filterBySearch}
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8'>
                            {filteredProduct.map((filtered, index) => {
                                {
                                    return (
                                        <div key={index} className='shadow bg-white rounded-xl flex flex-col justify-center items-center'>
                                            <div className=''>
                                                <img
                                                    src={filtered.url}
                                                    className='rounded-t-xl'
                                                />
                                            </div>
                                            <div className='text-2xl font-semibold py-2'>
                                                {filtered.name}
                                            </div>
                                            <div className='text-xl font-semibold mb-4 text-red-800'>
                                                {filtered.price}
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <Footer className=''/>
        </>
    )
}

export default Products