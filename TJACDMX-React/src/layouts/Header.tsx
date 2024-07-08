
import {Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SidebarResponsive from './SidebarResponsive'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className=' bg-gray-300 py-3'>
      <div className='flex justify-between container mx-auto'>
        <div>
          Imagen TJACDMX
        </div>

        <nav className={'md:flex space-x-3 hidden'}>
          <NavLink
            to={'/'}
            className={({isActive}) => 
              isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to={'/registro'}
            className={({isActive}) =>
              isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'}
          >
            Registro
          </NavLink>
        </nav>

        <button
          className='md:hidden'
          onClick={ toogleMenu }
        >
          <Bars3Icon className='size-6'/>
        </button>

        {isOpen && 
          <SidebarResponsive 
          isOpen={isOpen}
          toogleMenu={toogleMenu}
        />}
      </div>
    </header>
  )
}
