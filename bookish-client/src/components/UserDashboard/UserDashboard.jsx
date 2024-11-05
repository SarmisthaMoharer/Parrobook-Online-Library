import React from 'react'

const UserDashboard = () => {
  return (
    <div className='px-4 my-12'>
      <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-green-300 via-emerald-500 to-teal-700 bg-clip-text text-transparent mb-6">User Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Current Borrowed Books</h3>
          <p className="text-gray-600">You have 3 books borrowed. 1 is due soon.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Recent Notifications</h3>
          <p className="text-gray-600">Reminder: Return "Advanced Algorithms" by Nov 10.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default UserDashboard
