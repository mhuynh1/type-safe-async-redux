import { combineReducers, Dispatch, Action, AnyAction } from 'redux';

import { photosReducer } from './placeholderJson/3reducers';
import { PhotosState } from './placeholderJson/1types';

// 1 this is the top level state object that will combine all of the states from every context
export interface StoreState {
    photos: PhotosState
}

// 2 typing the additional props for connected React components that are passed by default with 'connect()'
export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const rootReducer = combineReducers<StoreState>({
    photos: photosReducer
})