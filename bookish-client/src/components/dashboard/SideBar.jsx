import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
//import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, } from "react-icons/hi";
//import userImg from "/src/assets/profil.avif"
import { AuthContext } from '../../contexts/AuthProvider';

const SideBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" img={user?.photoURL} className='w-20 h-20 rounded'  >
        <p className='text-lime-600'>
        {
          user?.displayName || " Demo User"
        }
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/pending-users" icon={HiUser}>
            Overdue Users
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/borrow-request" icon={HiShoppingBag}>
            Borrow Request
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
       {/*} <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>*/}
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar
