import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id,bookTitle,imageURL,bookDescription,category,bookPDFURL,authorName} = useLoaderData();
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
      setIsFavorited(!isFavorited);
    };
  

  return (
    <div className="mt-28 px-4 lg:px-24 ">
      <h1 className="text-4xl text-cyan-700 p-2 font-extrabold tracking-wide text-center items-center">{bookTitle}</h1>
      <div className='flex items-start space-x-4'>
  {/* Book Image and Title Section */}
  <div className="w-1/4 text-center ">
    
    <img className="shadow-lg rounded-xl w-full h-auto" src={imageURL} alt={bookTitle} />
  </div>

  {/* Book Details Section */}
  <div className="w-2/3 px-4 space-y-4">
    <h5 className="text-lg font-semibold text-gray-700">Author</h5>
    <p className="text-gray-600 text-base">{authorName}</p>
    
    <h5 className="text-lg font-semibold text-gray-700">Category</h5>
    <p className="text-gray-600 text-base">{category}</p>
    
    <h5 className="text-lg font-semibold text-gray-700">Description</h5>
    <p className="text-gray-600 text-sm leading-relaxed">{bookDescription}</p>
    
    <h5 className="text-lg font-semibold text-gray-700">
      Available books: <span className="font-normal text-gray-600">6</span>
    </h5>
    
    <a href={bookPDFURL} className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300">
      Download PDF
    </a>
    <button className='ml-20 bg-gradient-to-r from-indigo-800 via-emerald-900 to-teal-800 text-white font-semibold px-8 py-4 rounded hover:bg-black transition-all duration-300'>Borrow Now</button>
  </div>

  {/* Favorites Section */}
  <div className="w-1/12 relative flex justify-end">
    <button 
      className="text-3xl transition duration-300 absolute top-0 right-0 mt-4"
      onClick={handleFavoriteClick} 
      aria-label="Add to favorites"
    >
      <span className={`${isFavorited ? 'text-green-500' : 'text-gray-400'} `}>
        ★
      </span>
    </button>
  </div>
  </div>
</div>
  )
}

export default SingleBook
    