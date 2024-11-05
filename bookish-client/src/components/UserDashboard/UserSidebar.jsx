
import{ useContext } from 'react'
import { Sidebar } from "flowbite-react";
//import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiTable,  } from "react-icons/hi";
//import userImg from "/src/assets/profil.avif"
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { GoBrowser } from "react-icons/go";

import { AuthContext } from '../../contexts/AuthProvider';
const UserSidebar = () => {
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
            <Sidebar.Item href="/user/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/user/dashboard/browse-books" icon={ GoBrowser}>
              Browse Books
            </Sidebar.Item>
            <Sidebar.Item href="/user/dashboard/borrowed-books" icon={IoLibrary}>
              Borrowed Books
            </Sidebar.Item>
            <Sidebar.Item href="/user/dashboard/profile" icon={CgProfile}>
              Profile
            </Sidebar.Item>
            <Sidebar.Item href="/user/dashboard/notifications" icon={ IoIosNotifications}>
              Notifications
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

export default UserSidebar
