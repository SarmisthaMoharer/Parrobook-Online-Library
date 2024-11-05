import { useEffect, useState } from "react"

import { Card } from "flowbite-react";
const BrowseBooks = () => {
    const [search, setSearch] = useState('');
    const[books,setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[]);
  return (
    <div className='px-4 my-12'>
      <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Browse Books</h2>
      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-blue-300 rounded w-full mb-6"
      />
      {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-700">Book Title 1</h3>
          <p className="text-gray-600">Author: Jane Doe</p>
        </div>
         Add more book cards here 
      </div>*/}
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
                    <Link key={book._id} to={`/book/${book._id}`}><button className="bg-emerald-600 font-semibold text-white py-2 rounded">Borrow Now</button></Link>
                  )
            }*/}
          <button className="bg-emerald-600 font-semibold text-white py-2 rounded">Borrow Now</button>
          </Card>
          )
        }
      </div>
    </div>
    </div>
  )
}

export default BrowseBooks
