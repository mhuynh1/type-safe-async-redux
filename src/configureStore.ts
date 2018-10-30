import { Store, createStore } from 'redux';

import { StoreState, rootReducer } from './store';

export default function configureStore(x: any, initialState: StoreState): Store<StoreState>{
    const store = createStore(rootReducer, initialState)
    debugger
    return store
}