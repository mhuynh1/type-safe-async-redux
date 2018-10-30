import { action } from 'typesafe-actions';
import { Photos, PhotosActionTypes } from './1types';


// action helper from 'typesafe-actions' will help write type-safe Redux actions
export const fetchPhotosRequest = () => {
    debugger
    return action(PhotosActionTypes.FETCH_PHOTOS_REQUEST)
}

export const fetchPhotosSuccess = (data: Photos[]) => {
    debugger
    return action(PhotosActionTypes.FETCH_PHOTOS_SUCCESS, data)
}

export const fetchPhotosFailure = (err: string) => action(PhotosActionTypes.FETCH_PHOTOS_FAILURE, err)