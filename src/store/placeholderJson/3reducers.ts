import { Reducer } from 'redux';
import { BusinessState, BusinessActionTypes } from './1types';

// typing initialState as the BusinessState type to make it type-safe
const initialState: BusinessState = {
    data: [],
    isLoading: false,
    errors: ''
}

const reducer: Reducer<BusinessState> = (state = initialState, action) => {
    
    switch (action.type) {
        case BusinessActionTypes.FETCH_BUSINESSES_REQUEST: {
            
            return { ...state, isLoading: true }
        }

        case BusinessActionTypes.FETCH_BUSINESSES_SUCCESS: {
            return { ...state, isLoading: false, data: action.payload }
        }

        case BusinessActionTypes.FETCH_BUSINESSES_FAILURE: {
            return { ...state, isLoading: false, errors: action.payload }
        }
        default: {
            return state
        }

    }
}

// use named export to group the exports when you import them to index.js
export { reducer as businessReducer }

