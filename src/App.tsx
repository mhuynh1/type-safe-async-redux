import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history';

import './App.css';
import { StoreState } from './store/index'

import Routes from './routes'
import Header from './components/Header'

// additional component props get their own interface
interface OwnProps {
  store: Store<StoreState>
  history: History
}

// combine component props and redux props into an intersection type
type AllProps = OwnProps

class App extends Component<AllProps> {
  public render() {
    const { store, history } = this.props
    console.log(this.props)

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header title="my header" />
            <Routes />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App
// export default connect(null, null)(App)