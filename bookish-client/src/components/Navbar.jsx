//import { onAuthStateChanged } from 'firebase/auth';
import {useContext, useEffect, useState} from 'react'
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import bookLogo from '/src/assets/greenLogo.svg';

const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen]=useState(false);
    const [isSticky , setIsSticky] = useState(true);
    const {user} = useContext(AuthContext);
    console.log(user);
    


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const hadlesScroll = () => {
          if(window.scrollY > 100){
            setIsSticky(true);
          }else{
            setIsSticky(false);
          }
        }

        window.addEventListener('scroll', hadlesScroll);
        return () => {
          window.removeEventListener('scroll', hadlesScroll);
        }
    },[]);

    const navItems = [
      {link: 'Home',path:"/"},
      {link: 'About',path:"/about"},
      {link: 'Shop',path:"/shop"},
      {link: 'Sell Your Book',path:"/admin/dashboard"},
      {link: 'Blog',path:"/blog"},
      {link: 'Profile',path:"/user/dashboard"},
    ];
    return (
    <header className='w-full bg-gradient-to-b from-indigo-200 via-purple-300 to-fuchsia-200 fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky?"sticky top-0 left-0 right-0 bg-gradient-to-b from-indigo-200 to-violet-200":""}`}>
        <div className='flex justify-between items-center text-base'>
          {/*logo <img src={Logo} alt="" />*/}
         
          <Link to='/' className='flex font-bold text-green-700 space-x-6 text-center'>  <img src={bookLogo} alt=""  className=' w-16 h-16 rounded-full'/>  <span className='text-4xl bg-gradient-to-r from-teal-400 via-pink-500 to-emerald-500 bg-clip-text text-transparent'> ParroBook </span></Link>

          {/*md device*/}
          <ul className='md:flex space-x-14 hidden'>
            {
              navItems.map(({link,path})=> <Link key={path} to={path} className="block text-base tet-black uppercase cursor-pointer hover:text-green-700">{link}</Link>)
            }
          </ul>

          {/*lg device*/}
          <div className='lg:flex space-x-14 items-center hidden '>
              <button><FaBarsStaggered className='w-6 hover:text-green-700'/></button>
              
          </div>

            {/*Mobile */}
            <div className='md:hidden bg'>
              <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {
                  isMenuOpen? 
                  <FaXmark className='w-6 h-6 text-black'/>
                  :
                  <FaBarsStaggered className='w-6 h-6 text-black'/>
                }
              </button>
            </div>
            {/*Mobile Menu*/}
                <div className={`space-y-4 px-4 mt-16 py-7 text-white bg-emerald-800 ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
                  {
                navItems.map(({link,path})=> <Link key={path} to={path} className="block text-base tet-black uppercase cursor-pointer hover:text-green-100 ">{link}</Link>)
              }
                </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
