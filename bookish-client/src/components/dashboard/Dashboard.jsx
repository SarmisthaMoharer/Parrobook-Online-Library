import React from 'react'

const Dashboard = () => {
  return (
    <div className='px-4 my-12'>
      <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Admin Dashboard</h1>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">Total Books</h2>
          <p className="text-gray-600 text-lg mt-2">1,250</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">Active Users</h2>
          <p className="text-gray-600 text-lg mt-2">450</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">Books Borrowed</h2>
          <p className="text-gray-600 text-lg mt-2">320</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700">Overdue Books</h2>
          <p className="text-gray-600 text-lg mt-2">12</p>
        </div>
      </div>

      
      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Recent Activity</h2>
        <ul className="space-y-4 text-gray-700">
          <li>User <strong>John Doe</strong> borrowed "<em>JavaScript Essentials</em>"</li>
          <li>Book "<em>Python for Data Science</em>" returned</li>
          <li>User <strong>Anna Smith</strong> registered</li>
          {/* Add more activity items as needed */}
        </ul>
      </div>

      {/* Notifications or Alerts */}
      <div className="mt-8 bg-red-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">Notifications</h2>
        <ul className="space-y-4 text-red-700">
          <li><strong>Alert:</strong> 3 overdue books need immediate attention.</li>
          <li><strong>Reminder:</strong> Monthly inventory check due on 15th.</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
