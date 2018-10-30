import { Reducer } from 'redux';
import { PhotosState, PhotosActionTypes } from './1types';

// typing initialState as the PhotosState type to make it type-safe
const initialState: PhotosState = {
    data: [],
    isLoading: false,
    errors: ''
}

const reducer: Reducer<PhotosState> = (state = initialState, action) => {
    
    switch (action.type) {
        case PhotosActionTypes.FETCH_PHOTOS_REQUEST: {
            
            return { ...state, isLoading: true }
        }

        case PhotosActionTypes.FETCH_PHOTOS_SUCCESS: {
            return { ...state, isLoading: false, data: action.payload }
        }

        case PhotosActionTypes.FETCH_PHOTOS_FAILURE: {
            return { ...state, isLoading: false, errors: action.payload }
        }
        default: {
            return state
        }

    }
}

// use named export to group the exports when you import them to index.js
export { reducer as photosReducer }

