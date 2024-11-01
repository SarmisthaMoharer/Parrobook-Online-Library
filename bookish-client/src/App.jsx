
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MyFooter from "./components/MyFooter"

function App() {
 
    //console.log(process.env);
  return (
    <>
      <div>
        <Navbar/>
        <div className='min-h-screen'>
        <Outlet/>
        </div>
        <MyFooter/>
      </div>
     
    </>
  )
}

export default App
