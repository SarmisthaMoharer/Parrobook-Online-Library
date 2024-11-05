import React from 'react'
import UserSidebar from './UserSidebar'
import { Outlet } from 'react-router-dom'

const UserDashboardLayout = () => {
  return (
    <div>
      <div className='flex gap-4 flex-col md:flex-row'>
        <UserSidebar/>
        <Outlet/>
    </div>
    </div>
  )
}

export default UserDashboardLayout
