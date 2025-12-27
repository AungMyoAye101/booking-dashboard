export type userType = {
    _id: string,
    name: string,
    email: string,
    city: string,
    country: string,
    phone: string,
}

export type authType = {
    user: userType,
    token?: string
}