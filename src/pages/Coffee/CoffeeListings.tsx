import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link, RouteComponentProps } from "react-router-dom";

import { StoreState } from "../../store/index";
import { Business } from "../../store/business/1types";
import { fetchBusinessesRequest, selectBiz } from "../../store/business/2actions";

import BusinessListing from "../../components/BusinessListing";
import Container from "../../components/Container";

// separate state props and dispatch props to their own interfaces
interface PropsFromState {
  isLoading: boolean;
  businesses: Business[];
  errors?: string;
}

// map dispatch type to props
interface PropsFromDispatch {
  selectBiz: typeof selectBiz;
  fetchBusinessesRequest: typeof fetchBusinessesRequest;
}

// combine component props and redux props into an intersection type
type AllProps = PropsFromDispatch & PropsFromState & RouteComponentProps<{}>;

class CoffeeListings extends Component<AllProps> {
  componentDidMount() {
    this.props.fetchBusinessesRequest("coffee");
  }

  public render() {
    const { businesses, match } = this.props;

    return (
      <Fragment>
        <Link to="/next">go to next page</Link>
        <Container className="gridContainer">
          {businesses.map(bus => (
            <BusinessListing path={match.path} business={bus} key={bus.id} />
          ))}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ businesses }: StoreState) => {
  return {
    isLoading: businesses.isLoading,
    errors: businesses.errors,
    businesses: businesses.businesses
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchBusinessesRequest: () => dispatch(fetchBusinessesRequest("coffee"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeListings);
