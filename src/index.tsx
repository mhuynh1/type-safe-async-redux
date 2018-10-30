import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore'

const initialState: any = {}
const history = createBrowserHistory();

const store = configureStore(history, initialState)

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
