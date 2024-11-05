import React from 'react'
import { MdOutlinePayments } from "react-icons/md";
const Notifications = () => {
  return (
    <div className='px-4 my-12'>
      <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-green-300 via-emerald-500 to-teal-700 bg-clip-text text-transparent mb-6">Notifications</h2>
      <div className="p-6 m-2 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Return Reminder</h3>
        <p className="text-gray-600">Please return "Advanced Algorithms" by Nov 10.</p>
      </div>
      <div className="p-6 m-2 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Due Payment</h3>
        <p className="text-gray-600">Please pay for 1 due book</p>
        <div className="flex items-center p-2 gap-2 " >
          <MdOutlinePayments size={20}  />
          <p className="bg-teal-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Pay Now</p>
        </div>
      </div>
      {/* Add more notifications here */}
    </div>
    </div>
  )
}

export default Notifications
