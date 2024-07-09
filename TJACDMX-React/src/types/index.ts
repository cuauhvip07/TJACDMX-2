

export type User = {
    id: string
    name: string,
    email: string,
    password: string,
    current_password: string
}

export type DraftUser = Omit<User, 'id'>