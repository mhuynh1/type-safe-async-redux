import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { StoreState, rootReducer, rootSaga } from './store';

export default function configureStore(x: any, initialState: StoreState): Store<StoreState> {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(rootSaga)
    return store
}