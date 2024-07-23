




import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useAuth } from '../hooks/useAuth'

export default function AuthLayout() {

    useAuth({middleware: 'auth'})

  return (
   <div className=' min-h-screen flex flex-col'>
    <Header/>
    <main className=' flex-grow'>
        <Outlet/>
    </main>
    <Footer/>
   </div>
  )
}
