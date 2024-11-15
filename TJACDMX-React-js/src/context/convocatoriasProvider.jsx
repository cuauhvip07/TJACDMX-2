
import { createContext, useEffect, useState } from 'react';
import clienteAxios from '../config/axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const ConvocatoriasContext = createContext();

const ConvocatoriasProvider = ({ children }) => {

    
    const [modal, setModal] = useState(false);
    const [estatus,setEstatus] = useState([])

    const handleClickModal = () => {
        setModal(!modal);
    };


    const handleSubmitNuevaConvocatoria = async (formData) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            // Enviar la solicitud POST con FormData
            const { data } = await clienteAxios.post('/api/nueva_convocatoria', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success(data.message, {
                draggable: true
            });
            
        } catch (error) {
            console.error( error);
        }
    };


    const handleNuevoPuntoConvocatoria = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios.post('/api/punto_convocatoria',datos,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message,{
                droggable: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerEstatus = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            const {data} = await clienteAxios('/api/estatus-convocatoria',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setEstatus(data.data)
        } catch (error) {
            console.log(error)
        }
    };

    const handleSubmitNuevoIntegrante = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios.post('/api/integrantes',datos,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message,{
                droggable: true
            })

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitUpdateIntegrante = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {

            const {data} = await clienteAxios.put(`/api/integrantes/${datos.id}`,{
                nombre: datos.nombre,
                apellido_paterno: datos.apellido_paterno,
                apellido_materno: datos.apellido_materno,
                fecha_inicio:datos.fecha_inicio,
                fecha_fin: datos.fecha_fin
            }, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message,{
                droggable:true
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitUpdateConvocatoria = async (formData,id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            // Enviar la solicitud POST con FormData
            const { data } = await clienteAxios.post(`/api/nueva_convocatoria`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success(data.message, {
                draggable: true
            });
            
        } catch (error) {
            console.error( error);
        }

    }

    const handleDeleteConvocatoria = (datos) => {

        const token = localStorage.getItem('AUTH_TOKEN');

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mx-2",
                cancelButton: "bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mx-2"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: `¿Esta seguro de eliminar la convocatoria ${datos.numero_of}?`,
            text: "Esta acción no sera reversible",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
          }).then( async (result) => {
            if (result.isConfirmed) {


                try {
                    const {data} = await clienteAxios.delete(`/api/nueva_convocatoria/${datos.id}`,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })

                    toast.success(data.message,{
                        droggable:true
                    })
        
                } catch (error) {
                    console.log(error)
                }


              swalWithBootstrapButtons.fire({
                title: "Eliminado",
                text: "La convocatoria ha sido eliminada",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Acción cancelada",
                icon: "error"
              });
            }
        });

    }

    const handleDeleteIntegrate = (datos) => {

        const token = localStorage.getItem('AUTH_TOKEN');

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mx-2",
                cancelButton: "bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mx-2"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: `¿Esta seguro de eliminar al integrante?`,
            text: "Esta acción no sera reversible",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
          }).then( async (result) => {
            if (result.isConfirmed) {


                try {
                    const {data} = await clienteAxios.delete(`/api/integrantes/${datos.id}`,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })

                    toast.success(data.message,{
                        droggable:true
                    })
        
                } catch (error) {
                    console.log(error)
                }


              swalWithBootstrapButtons.fire({
                title: "Eliminado",
                text: "El integrante ha sido eliminada",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Acción cancelada",
                icon: "error"
              });
            }
        });

    }

    const handleSubmitVotacion = async (datos,voto_id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        const nuevoDatos = {...datos, voto_id}


       if(voto_id === null){
            try {
                const {data} = await clienteAxios.post('/api/votacion',nuevoDatos,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })

                toast.success(data.message,{
                    droggable:true
                })

            } catch (error) {
                console.log(error)
            }
       } else{
            try {
                const {data} = await clienteAxios.post(`/api/votacion?id=${voto_id}`,nuevoDatos,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })

                toast.success(data.message,{
                    droggable:true
                })

            } catch (error) {
                console.log(error)
            }
       }
    }

    const handleDeletePuntoConvocatoria = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN');

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mx-2",
                cancelButton: "bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mx-2"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: `¿Esta seguro de eliminar el punto de convocatoria?`,
            text: "Esta acción no sera reversible",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
          }).then( async (result) => {
            if (result.isConfirmed) {


                try {
                    const {data} = await clienteAxios.delete(`/api/punto_convocatoria/${id}`,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })

                    toast.success(data.message,{
                        droggable:true
                    })
        
                } catch (error) {
                    console.log(error)
                }


              swalWithBootstrapButtons.fire({
                title: "Eliminado",
                text: "El punto de convocatoria ha sido eliminado",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Acción cancelada",
                icon: "error"
              });
            }
        });
    }

    useEffect(() => {
        obtenerEstatus()
    },[])





    return (
        <ConvocatoriasContext.Provider
            value={{
                modal,
                handleClickModal,
                handleSubmitNuevaConvocatoria,
                estatus,
                handleNuevoPuntoConvocatoria,
                handleSubmitNuevoIntegrante,
                handleSubmitUpdateIntegrante,
                handleSubmitUpdateConvocatoria,
                handleDeleteConvocatoria,
                handleDeleteIntegrate,
                handleSubmitVotacion,
                handleDeletePuntoConvocatoria
            }}
        >
            {children}
        </ConvocatoriasContext.Provider>
    );
};

export { ConvocatoriasProvider };
export default ConvocatoriasContext;
