

export type User = {
    id: string
    name: string,
    email: string,
    password: string,
    password_repeat: string
}

export type DraftUser = Omit<User, 'id'>