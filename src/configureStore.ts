import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history'; // this is the history type

import { StoreState, rootReducer, rootSaga } from './store';

export default function configureStore(history: History, initialState: StoreState): Store<StoreState> {

    // Creates a Redux middleware and connects the Sagas to the Redux Store
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        connectRouter(history)(rootReducer), // new root reducer with router state
        initialState,
        applyMiddleware(
            routerMiddleware(history) // for dispatching history actions
            , sagaMiddleware)
    )

    sagaMiddleware.run(rootSaga)
    return store
}