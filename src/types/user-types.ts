export type userType = {
    _id: string,
    name: string,
    email: string,
}

export type authType = {
    user: userType,
    token?: string
}