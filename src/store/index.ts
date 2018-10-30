import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { photosReducer } from './placeholderJson/3reducers';
import { PhotosState } from './placeholderJson/1types';
import photosSaga from './placeholderJson/4sagas';

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

// 3 use redux-saga to trigger async actions.
export function* rootSaga(){
    yield all([fork(photosSaga)])
}