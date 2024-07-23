




import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useAuth } from '../hooks/useAuth'
import HeaderAuth from './HeaderAuth'
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal'

export default function AuthLayout() {

  useAuth({middleware: 'auth'})
  Modal.setAppElement('#root');

  return (
   <div className=' min-h-screen flex flex-col'>
    <HeaderAuth/>
    <main className=' flex-grow'>
        <Outlet/>
    </main>
    <Footer/>

    <ToastContainer draggable />
   </div>
  )
}
