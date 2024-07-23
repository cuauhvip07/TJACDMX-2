
import { XMarkIcon } from '@heroicons/react/24/solid'
import useConv from '../hooks/useConv'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function SidebarResponsive() {

    const {handleClickModal} = useConv()
    const {user} = useAuth({middleware: 'guest'})

  return (
    
    <div>
        <div>
            <div className='flex justify-end'>
                <XMarkIcon className="size-6 cursor-pointer" onClick={() => handleClickModal()} />
            </div>
            {user ? (
                <nav>
                    <Link>Hola</Link>
                </nav>
            ) : (
                <nav className=' flex flex-col space-y-3 mt-3'>
                   <NavLink
                        to={'/login'}
                        className={({isActive}) => 
                        isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'
                        }
                        onClick={() => handleClickModal()}
                    >
                        Log In
                    </NavLink>

                    <NavLink
                        to={'/registro'}
                        className={({isActive}) => 
                        isActive ? 'text-orange-500 uppercase font-bold' : 'uppercase font-bold'
                        }
                        onClick={() => handleClickModal()}
                    >
                        Registrarse
                    </NavLink>
                </nav>
            )}
        </div>
    </div>
    
  )
}
