//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from 'react-icons/fa6';
"use client";

import { Avatar } from "flowbite-react";
import profileIMG from "/src/assets/logo/profileIMG.jpg"
//import {profilepic} from "../assets/profil.avif";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
export default function Review() {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent'>Our Customers</h2>
      <div className=''>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className='text-green-600 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque possimus et illum quam! Animi sed molestias inventore vero voluptatum repudiandae veniam possimus debitis! Esse maxime consequatur exercitationem distinctio similique!</p>
                    <Avatar img={profileIMG} alt="avatar of Jese" className='rounded-full w-10 mb-4 ' size='md' />
                    <h5 className='text-lg font-medium'>Lee Dong Min</h5>
                    <p className='text-base'>CEO , Babel Foundation</p>  
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className='text-green-600 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque possimus et illum quam! Animi sed molestias inventore vero voluptatum repudiandae veniam possimus debitis! Esse maxime consequatur exercitationem distinctio similique!</p>
                    <Avatar img={profileIMG} alt="avatar of Jese" className='rounded-full w-10 mb-4 ' size='md' />
                    <h5 className='text-lg font-medium'>Mark Hyun</h5>
                    <p className='text-base'>CEO , Babel Foundation</p>  
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className='text-green-600 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque possimus et illum quam! Animi sed molestias inventore vero voluptatum repudiandae veniam possimus debitis! Esse maxime consequatur exercitationem distinctio similique!</p>
                    <Avatar img={profileIMG} alt="avatar of Jese" className='rounded-full w-10 mb-4 ' size='md' />
                    <h5 className='text-lg font-medium'>Mark Hyun</h5>
                    <p className='text-base'>CEO , Babel Foundation</p>  
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className='text-green-600 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque possimus et illum quam! Animi sed molestias inventore vero voluptatum repudiandae veniam possimus debitis! Esse maxime consequatur exercitationem distinctio similique!</p>
                    <Avatar img={profileIMG} alt="avatar of Jese" className='rounded-full w-10 mb-4 ' size='md' />
                    <h5 className='text-lg font-medium'>Mark Hyun</h5>
                    <p className='text-base'>CEO , Babel Foundation</p>  
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className='text-green-600 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque possimus et illum quam! Animi sed molestias inventore vero voluptatum repudiandae veniam possimus debitis! Esse maxime consequatur exercitationem distinctio similique!</p>
                    <Avatar img={profileIMG} alt="avatar of Jese" className='rounded-full w-10 mb-4 ' size='md' />
                    <h5 className='text-lg font-medium'>Mark Hyun</h5>
                    <p className='text-base'>CEO , Babel Foundation</p>  
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl py-8 px-4 md:m-5 rounded-lg border bg-white'>
            <div className='space-y-6'>
                <div className='text-green-600 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque possimus et illum quam! Animi sed molestias inventore vero voluptatum repudiandae veniam possimus debitis! Esse maxime consequatur exercitationem distinctio similique!</p>
                    <Avatar img={profileIMG} alt="avatar of Jese" className='rounded-full w-10 mb-4 ' size='md' />
                    <h5 className='text-lg font-medium'>Mark Hyun</h5>
                    <p className='text-base'>CEO , Babel Foundation</p>  
                </div>
            </div>
        </SwiperSlide>
       
       
      </Swiper>
      </div>
    </div>
  )
}
