//import React from 'react'

import { Link } from "react-router-dom"
import BannerCard from "../Home/BannerCard"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-gradient-to-r from-sky-200 to-teal-300 flex items-center'>
     <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">All Your Books , <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">All in One Place</span></h2>
            <p className="md:w-4/5">Welcome to the ParroBook, your gateway to limitless learning and discovery. Here, you can explore an extensive collection of books, journals, and digital resources tailored to enrich your reading experience. From timeless classics to the latest releases, our catalog is designed to cater to all ages and interests. Whether you’re here to borrow a book, reserve a resource, or simply browse for inspiration, we’re committed to making your journey as seamless and engaging as possible. Dive into a world of knowledge and let the library be your guide!</p>
            <div>
                {/*<input type="search" name="search" id="search" placeholder="Search a book" className="p-2 rounded-s-sm outline-none" />*/}
                <Link to="/shop"><button className="bg-teal-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search Books</button></Link>
            </div>
        </div>
        <div>
            <BannerCard/>
        </div>
     </div>
    </div>
  )
}

export default Banner
