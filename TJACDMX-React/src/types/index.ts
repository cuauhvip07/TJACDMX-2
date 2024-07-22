

export type User = {
    id: string
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export type DraftUser = Omit<User, 'id'>


export type Convocatoria = {
    numero_conv: number
    numero_of: string
    fecha: Date
    archivo: FileList
    hora_inicio_real: string
    hora_fin_real: string
    status: number
}