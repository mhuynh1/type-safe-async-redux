// 2 this is the response object for the GET
export interface Photos extends ApiResponse {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

// 1 declare return type of api response
export type ApiResponse = Record<string, any>;

// 3 Redux docs say: Usually, for any API request you'll want to dispatch at least three different kinds of actions
export const enum PhotosActionTypes {
    FETCH_PHOTOS_REQUEST = '@@photos_REQUEST',
    FETCH_PHOTOS_SUCCESS = '@@photos_SUCCESS',
    FETCH_PHOTOS_FAILURE = '@@photos_FAILURE',
}

// 4 declare state types with 'readonly' modifier for compile time immutability
export interface PhotosState {
    readonly isLoading: boolean
    readonly data: Photos[]
    readonly errors?: string
}