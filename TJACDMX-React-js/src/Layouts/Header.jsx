
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useConv from '../hooks/useConv';
import Modal from 'react-modal'
import SidebarResponsive from './SidebarResponsive';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


Modal.setAppElement('#root')

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  }

  const {modal,handleClickModal} = useConv()

  return (
    <header className=' bg-gray-300 py-3'>
      <div className='flex justify-between items-center container mx-auto'>
        <div>
          <img className=' size-20' src="../public/tjacdmximg.png" alt="Imagen TJACDMX" />
        </div>

        <nav className={'md:flex space-x-3 hidden'}>
          <NavLink
            to={'/login'}
            className={({isActive}) => 
              isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'
            }
          >
            Iniciar Sesion
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
          onClick={ () => handleClickModal() }
        >
          <Bars3Icon className='size-6'/>
        </button>

        <Modal isOpen={modal} style={customStyles}>
          <SidebarResponsive/>
        </Modal>
      </div>
    </header>
  )
}
