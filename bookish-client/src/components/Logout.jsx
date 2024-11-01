import  { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import {  useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
      logout().then(() => {
        alert('Logged out successfully!!');
        navigate(from , {replace: true});
      }).catch((error) => {

      });
    }

  return (
    
    <div className='h-screen bg-white flex flex-col items-center justify-center'>
        <p className='text-black text-4xl font-bold my-6'>Click here to logout</p>
        <button className='bg-rose-500 px-8 py-2 text-white rounded ' onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default Logout
