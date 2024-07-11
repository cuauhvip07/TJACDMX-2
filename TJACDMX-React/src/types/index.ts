

export type User = {
    id: string
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export type DraftUser = Omit<User, 'id'>