import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Dispatch, Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history';

import './App.css';
import { StoreState } from './store/index'
import { fetchBusinessesRequest } from './store/placeholderJson/2actions'

import Routes from './routes'
import Header from './components/Header'

// map dispatch type to props
interface PropsFromDispatch {
  [key: string]: any
}

// additional component props get their own interface
interface OwnProps {
  store: Store<StoreState>
  history: History
}

// combine component props and redux props into an intersection type
type AllProps = PropsFromDispatch & OwnProps

class App extends Component<AllProps> {
  public render() {
    const { store, history } = this.props
    console.log(this.props)

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header title="my header"/>
            <Routes />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    fetchBusinessesRequest: () => dispatch(fetchBusinessesRequest())
  }
}

export default connect(null, mapDispatchToProps)(App)