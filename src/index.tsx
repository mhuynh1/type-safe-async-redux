import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore'

const initialState: any = {}
debugger
const store = configureStore(window.history, initialState)

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
