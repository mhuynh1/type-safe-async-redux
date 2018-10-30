import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Dispatch, Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history';

import './App.css';
import { StoreState } from './store/index'
import { Photos } from './store/placeholderJson/1types'
import { fetchPhotosRequest } from './store/placeholderJson/2actions'

import Routes from './routes'

// separate state props and dispatch props to their own interfaces
interface PropsFromState {
  isLoading: boolean
  data: Photos[],
  errors?: string
}

// map dispatch type to props
interface PropsFromDispatch {
  fetchPhotosRequest: typeof fetchPhotosRequest
}

// additional component props get their own interface
interface OwnProps {
  store: Store<StoreState>
  history: History
}

// combine component props and redux props into an intersection type
type AllProps = PropsFromDispatch & PropsFromState & OwnProps

class App extends Component<AllProps> {
  componentDidMount() {
    this.props.fetchPhotosRequest()
  }

  public render() {

    const { store, data, history } = this.props
    console.log(this.props)

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
            <Routes />
            {data.map(e => <div>hi, got some data</div>)}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = ({ photos }: StoreState) => {

  return {
    isLoading: photos.isLoading,
    errors: photos.errors,
    data: photos.data
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    fetchPhotosRequest: () => dispatch(fetchPhotosRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)