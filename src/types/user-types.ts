export type userType = {
    _id: string,
    name: string,
    email: string,
    phone: string,
    city: string,
    country: string,
    createdAt: Date

}

export type authType = {
    user: userType,
    token?: string
}