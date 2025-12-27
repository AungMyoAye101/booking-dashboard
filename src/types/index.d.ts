export interface ApiResponse<T> {
    status: number,
    success: boolean,
    message: string,
    result: T
}

export type meta = {
    page: number,
    total: number,
    limit: number,
    currentPage: number,
    hasNext: boolean,
    hasPrev: boolean
}