


import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {


  return (
   <div className=' min-h-screen flex flex-col'>
    <Header/>
    <main className=' flex-grow'>
        <Outlet/>
    </main>
    <Footer/>
    <ToastContainer  draggable/>
   </div>
  )
}
