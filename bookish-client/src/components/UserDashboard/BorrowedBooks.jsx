import React from 'react'

const BorrowedBooks = () => {
  return (
    <div className='px-4 my-12'>
       <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-green-300 via-emerald-500 to-teal-700 bg-clip-text text-transparent mb-6">My Borrowed Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-700">Book Title 1</h3>
          <p className="text-gray-600">Due Date: Nov 10</p>
          <button className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Renew</button>
        </div>
        {/* Add more borrowed book cards here */}
      </div>
    </div>
    </div>
  )
}

export default BorrowedBooks
