import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eos aliquam recusandae commodi iure veritatis repellat, debitis deleniti tempora, ex cum. Qui vero esse explicabo non cupiditate quisquam repellat rem suscipit natus maxime, cum sequi debitis quidem! Ratione, assumenda reprehenderit!</p>
        
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>900+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>600+</h3>
                    <p className='text-base'>Registered Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1500+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>
            <Link to="/shop" className='mt-8 block'><button className='bg-gradient-to-r from-indigo-700 via-emerald-500 to-teal-700 text-white font-semibold px-5 py-4 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook
