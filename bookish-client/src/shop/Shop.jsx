//import React from 'react'

import { useEffect, useState } from "react"

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const[books,setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[]);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-300 via-emerald-500 to-teal-700 bg-clip-text text-transparent">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gris-cols-1">
        {
          books.map(book => 
                  <Card key={book._id}
            className="max-w-sm">
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-violet-600 to-indigo-700 bg-clip-text text-transparent">
              {book.bookTitle}
            </h5>
            {/*<p className="font-normal text-gray-700 dark:text-gray-400">
              <p>{book.bookDescription}</p>
            </p>*/}
            {/*{
                books.map(book => 
                    <Link key={book._id} to={`/book/${book._id}`}><button className="bg-emerald-600 font-semibold text-white py-2 rounded">Buy Now</button></Link>
                  )
            }*/}
            <button className="bg-emerald-600 font-semibold text-white py-2 rounded">Borrow Now</button>
          </Card>
          )
        }
      </div>
    </div>
  )
}

export default Shop
