// 2 this is the response object for the GET
export interface Business extends ApiResponse {
    name: string
    image_url: string
    id: string
    location: Location
    rating: number
    price: string
}

interface Location {
    address1: string | null
    address2: string | null
    address3: string | null
    city: string
    country: string
    state: string
    zip_code: string
}

// 1 declare return type of api response
export type ApiResponse = Record<string, any>;

// 3 Redux docs say: Usually, for any API request you'll want to dispatch at least three different kinds of actions
export const enum BusinessActionTypes {
    FETCH_BUSINESSES_REQUEST = '@@business_REQUEST',
    FETCH_BUSINESSES_SUCCESS = '@@business_SUCCESS',
    FETCH_BUSINESSES_FAILURE = '@@business_FAILURE',
}

// 4 declare state types with 'readonly' modifier for compile time immutability
export interface BusinessState {
    readonly isLoading: boolean
    readonly data: Business[]
    readonly errors?: string
}