import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history"; // this is the history type
import { composeWithDevTools } from "redux-devtools-extension";
import { StoreState, rootReducer, rootSaga } from "./store";

export default function configureStore(
  history: History,
  initialState: StoreState
): Store<StoreState> {
  // Creates a Redux middleware and connects the Sagas to the Redux Store
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  ); // new root reducer with router state // for dispatching history actions

  sagaMiddleware.run(rootSaga);
  return store;
}
