
import { Bars3Icon } from '@heroicons/react/24/solid';
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


export default function HeaderAuth() {

  const {modal,handleClickModal} = useConv()


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
            Dashboard
          </NavLink>

          <NavLink
            to={'/convocatorias'}
            className={({isActive}) =>
              isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'}
          >
            Convocatorias
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
