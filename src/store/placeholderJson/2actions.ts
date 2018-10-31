import { action } from 'typesafe-actions';
import { Business, BusinessActionTypes } from './1types';


// action helper from 'typesafe-actions' will help write type-safe Redux actions
export const fetchBusinessesRequest = () => {
    
    return action(BusinessActionTypes.FETCH_BUSINESSES_REQUEST)
}

export const fetchBusinessesSuccess = (data: Business[]) => {
    
    return action(BusinessActionTypes.FETCH_BUSINESSES_SUCCESS, data)
}

export const fetchBusinessesFailure = (err: string) => action(BusinessActionTypes.FETCH_BUSINESSES_FAILURE, err)