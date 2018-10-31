import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';


import { StoreState } from '../store/index';
import { Business } from '../store/placeholderJson/1types';
import { fetchBusinessesRequest } from '../store/placeholderJson/2actions';

import BusinessListing from '../components/BusinessListing';
import Container from '../components/Container';

// separate state props and dispatch props to their own interfaces
interface PropsFromState {
    isLoading: boolean
    data: Business[]
    errors?: string
}

// map dispatch type to props
interface PropsFromDispatch {
    fetchBusinessesRequest: typeof fetchBusinessesRequest
}

// interface OwnProps {
//     business: Business
// }

// combine component props and redux props into an intersection type
type AllProps = PropsFromDispatch & PropsFromState

class HomePage extends Component<AllProps> {
    componentDidMount() {
        this.props.fetchBusinessesRequest()
    }

    public render() {

        const { data } = this.props
        return (
            <Fragment>
                <Link to='/next'>go to next page</Link>
                <Container className="gridContainer">
                    {data.map(bus => <BusinessListing business={bus} key={bus.id} />)}
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ businesses }: StoreState) => {
    return {
        isLoading: businesses.isLoading,
        errors: businesses.errors,
        data: businesses.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        fetchBusinessesRequest: () => dispatch(fetchBusinessesRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)