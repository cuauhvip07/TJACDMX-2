import {  Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'
import {XMarkIcon} from '@heroicons/react/24/solid'

type SidebarResponsiveProps = {
    isOpen: boolean,
    toogleMenu: () => void
}


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};



export default function SidebarResponsive({isOpen,toogleMenu} : SidebarResponsiveProps) {

  return (
    
    <>
       

        <Modal
            isOpen={isOpen}
            style={customStyles}
        >
           <Sidebar>
                <div>
                    <div className=" flex justify-end">
                        <XMarkIcon onClick={toogleMenu} className=" size-6 cursor-pointer"/>
                    </div>
                    <Menu>
                        <MenuItem >
                            <NavLink 
                            to={'/'} 
                            className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'}
                            onClick={toogleMenu}
                            >
                                Inicio
                            </NavLink>

                        </MenuItem>

                        <MenuItem >
                           <NavLink 
                            to={'/registro'} 
                            className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'}
                            onClick={toogleMenu}
                            >
                                Registro
                            </NavLink>
                        </MenuItem>

                        <MenuItem >
                            <NavLink 
                                to={'/registro'} 
                                className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'}
                                onClick={toogleMenu}
                                >
                                    Registro
                            </NavLink>
                        </MenuItem>
                    </Menu>
                </div>
            </Sidebar>
        </Modal>
    </>

       
    
  )
}
