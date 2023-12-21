import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const CarouselSlick = () => {
  const slides = [
    {
      url: 'https://cdn.mos.cms.futurecdn.net/YaVTFsBMYS9avufa8Q4bR5-970-80.jpg.webp',
      name: 'DJI Mini 3 Pro',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/sqoKrfZnPEsSzNkQ65zwEd-970-80.jpg.webp',
      name: 'DJI Air 3',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/rEw44YcG6bXnBexUbYSX98-970-80.jpg.webp',
      name: 'DJI Mavic 3 Pro',
    },

    {
      url: 'https://cdn.mos.cms.futurecdn.net/kfoMMbTb8zaQM9bBtRYWtN-970-80.jpg.webp',
      name: 'Autel Evo Lite+',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/x2vV3qc5cKuF238C6MgudA-970-80.jpg.webp',
      name: 'DJI Mini 3',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/GsygCgUBmkuFszb6Hmmg4S-970-80.jpg.webp',
      name: 'DJI Mavic 3 Classic',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/veWp9jCSS8AmtZ6XjT8uKh-970-80.jpg.webp',
      name: 'Ryze Tello',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/qfpn2RgubdxTH6Nt83RttV-970-80.jpg.webp',
      name: 'DJI Avata',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/AeiUH7MxzPrkt8jFBDf9Tm-970-80.jpg.webp',
      name: 'Autel Evo Nano+',
    },
    {
      url: 'https://cdn.mos.cms.futurecdn.net/huLrW5iN3rtrBgbikRoF5X-970-80.jpg.webp',
      name: 'BetaFPV Cetus Pro Kit',
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-500 rounded-full`}
        style={{ 
          ...style, 
          display: "block", 
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-500 rounded-full`}
        style={{ 
          ...style,
        }}
        onClick={onClick}
      />
    );
  }

    const settings = {
      className: "center m-4 p-4",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      dots: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
  return (
    <div className='w-full xl:w-[1280px] my-16'>
      <div className='text-center text-5xl font-semibold mb-16'>
        Our Products
      </div>
      <Slider {...settings} className='w-full'>
        {slides.map((slide, index) => {
          return(
            <Link to='/products' key={index} className='flex flex=col items-center justify-center'>
              <div
                  className='mx-4 text-center'>
                <img
                  src={slide.url}
                />
              </div>
              <div className='text-center my-4 text-xl font-semibold mx-8'>
                {slide.name}
              </div>
            </Link>
          )
        })}
      </Slider>
    </div>
  )
}

export default CarouselSlick