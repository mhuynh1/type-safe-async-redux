import React, { Component, Fragment } from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router";

import Spinner from "../../components/Spinner";
import {
  fetchReviewsRequest,
  fetchBusinessesRequest,
  unsetReviews
} from "../../store/business/2actions";
import { StoreState, ConnectedReduxProps } from "../../store/index";
import { Business, Review } from "../../store/business/1types";

// separate state props and dispatch props to their own interfaces
interface PropsFromState {
  businesses: Business[];
  isLoading: boolean;
  reviews: Review[];
  errors?: string;
}

interface PropsFromDispatch {
  unsetReviews: typeof unsetReviews;
  fetchReviewsRequest: typeof fetchReviewsRequest;
  fetchBusinessesRequest: typeof fetchBusinessesRequest;
}

interface RouteParams {
  // name: string
  // id: number
  [key: string]: any;
}

// combine component props and redux props into an intersection type
type AllProps = PropsFromState &
  RouteComponentProps<RouteParams> &
  ConnectedReduxProps &
  PropsFromDispatch;

class Biz extends Component<AllProps> {
  componentDidMount() {
    const { businesses, match } = this.props;

    if (!businesses || businesses.length === 0) {
      this.props.fetchBusinessesRequest("coffee");
      this.props.fetchReviewsRequest(match.params.id);
    } else {
      this.props.fetchReviewsRequest(match.params.id);
    }
  }

  componentWillUnmount() {
    // clear reviews state
    this.props.unsetReviews();
  }

  public render() {
    const { businesses, match, reviews, isLoading } = this.props;

    const biz: Business | undefined = businesses.find(
      biz => biz.name === match.params.name
    );

    const reviewsList = reviews.map(r => (
      <Review className="review" key={r.id}>
        <p className="quote">{r.text}</p>
        <QuoteSection>
          <div className="name">- {r.user.name}</div>
          <UserImg
            className="user"
            style={{ backgroundImage: `url(${r.user.image_url})` }}
          />
        </QuoteSection>
      </Review>
    ));
    console.log(reviewsList);

    return (
      <Fragment>
        {isLoading && <Spinner />}
        {!isLoading && biz && (
          <Container>
            <BlurContainer>
              <BlurImage style={{ backgroundImage: `url(${biz.image_url})` }} />
            </BlurContainer>
            <WrapperBg className="wrapper">
              <WrapperInner>
                <Image style={{ backgroundImage: `url(${biz.image_url})` }} />
                <Address>
                  <Name className="name">{biz.name}</Name>
                  <div className="address">{biz.location.address1}</div>
                  <div className="city">
                    {`${biz.location.city} ${biz.location.state} ${
                      biz.location.zip_code
                    }`}
                  </div>
                </Address>
              </WrapperInner>
            </WrapperBg>
            <Section className="reviewsList">{reviewsList}</Section>
          </Container>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ businesses }: StoreState) => {
  const { isLoading, errors, reviews } = businesses;
  return {
    isLoading,
    errors,
    reviews,
    businesses: businesses.businesses
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    unsetReviews: () => dispatch(unsetReviews()),
    fetchReviewsRequest: (biz_id: number) =>
      dispatch(fetchReviewsRequest(biz_id)),
    fetchBusinessesRequest: () => dispatch(fetchBusinessesRequest("coffee"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Biz);

const Container = styled("div")`
  position: relative;
`;
const Name = styled("div")`
  color: #fff;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: url(http://ajsai.jp/wp-content/themes/ajsai-theme/images/non-thumbnail.jpg);
  animation: bgAnimation 10s linear infinite;
  -webkit-animation: bgAnimation 10s linear infinite;

  @keyframes bgAnimation {
    from {
      background-position: 0px center;
    }
    to {
      background-position: 1000px center;
    }
  }
  @-webkit-keyframes bgAnimation {
    from {
      background-position: 0px center;
    }
    to {
      background-position: 1000px center;
    }
  }
`;
const WrapperBg = styled("div")`
  position: absolute;
  top: 0;
  height: 300px;
  display: flex;
  background: linear-gradient(to bottom, #46e5c199 0%, #bd6ad291 100%);
  align-items: center;
  padding: 1rem;
  width: 100%;
  justify-content: center;
`;

const WrapperInner = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 32px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 32px;
  border-radius: 4px;
  width: 70%;
  min-width: 190px;
  height: 100%;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    height: 50%;
  }
`;
const Image = styled("div")`
  background-size: cover;
  background-position: center;
  width: 100%;
  min-width: 190px;
  height: 100%;
  margin: 0;

  @media (min-width: 640px) {
    width: 70%;
  }
`;

const Address = styled("div")`
  color: #fff;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #000;
  padding: 1rem;
  text-align: left;

  @media (min-width: 640px) {
    width: 30%;
  }
`;

// const QuickInfo = styled("div")`
//   flex: unset;
//   background-color: #000;
//   color: #fff;
//   font-size: 0.9rem;
//   padding: 3px;

//   @media (min-width: 640px) {
//     flex: unset;
//   }
// `;
const BlurContainer = styled("div")`
  margin: 0;
  overflow: hidden;
`;
const BlurImage = styled("div")`
  background-size: cover;
  background-position: center;
  margin: auto;
  height: 300px;
  width: 100%;
  position: relative;
  filter: blur(10px);
`;
const QuoteSection = styled("div")`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  justify-content: flex-end;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;
const UserImg = styled("div")`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  margin: auto;
  border-radius: 50%;
  margin-left: 15px;
`;
const Section = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  background-color: #241e43;
  color: #fff;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Review = styled("div")`
  font-size: 0.9rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  text-align: left;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;
