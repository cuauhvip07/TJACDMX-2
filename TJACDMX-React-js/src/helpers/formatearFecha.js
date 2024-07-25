

// Formateo de una fecha

export const formatearFecha = (fecha) => {


    const fechaCreada = new Date(fecha);
    const fechaFormateada = fechaCreada.toLocaleDateString('es-MX', {
    timeZone: 'UTC',
    });
    return fechaFormateada

}
