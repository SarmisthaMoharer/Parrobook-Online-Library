//import React from 'react'

import { Link } from "react-router-dom"
import BannerCard from "../Home/BannerCard"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-gradient-to-r from-sky-200 to-teal-300 flex items-center'>
     <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">All Your Books , <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">All in One Place</span></h2>
            <p className="md:w-4/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, fuga. Ipsa ab quasi tempora obcaecati sint quo veniam placeat ea reiciendis qui a sequi, consectetur accusantium, quos eos odio ducimus!</p>
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
