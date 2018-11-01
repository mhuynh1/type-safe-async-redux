import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

import { fetchReviewsRequest, fetchBusinessesRequest, unsetReviews } from '../store/business/2actions';
import { StoreState, ConnectedReduxProps } from '../store/index';
import { Business, Review } from '../store/business/1types';

// separate state props and dispatch props to their own interfaces
interface PropsFromState {
    businesses: Business[]
    isLoading: boolean
    reviews: Review[]
    errors?: string
}


interface PropsFromDispatch {
    unsetReviews: typeof unsetReviews
    fetchReviewsRequest: typeof fetchReviewsRequest
    fetchBusinessesRequest: typeof fetchBusinessesRequest
}

interface RouteParams {
    // name: string
    // id: number
    [key: string]: any
}

// combine component props and redux props into an intersection type
type AllProps = PropsFromState & RouteComponentProps<RouteParams> &
    ConnectedReduxProps & PropsFromDispatch

class Biz extends Component<AllProps>{
    componentDidMount() {
        const { businesses, match } = this.props

        if (!businesses || businesses.length === 0) {
            this.props.fetchBusinessesRequest()
            this.props.fetchReviewsRequest(match.params.id)
        } else {
            this.props.fetchReviewsRequest(match.params.id)
        }
    }

    componentWillUnmount() {
        // clear reviews state
        this.props.unsetReviews()
    }

    public render() {
        const { businesses, match, reviews } = this.props

        const biz: Business | undefined = businesses.find(biz => biz.name === match.params.name)

        const reviewsList = reviews.map(r => (
            <Review className="review" key={r.id}>
                <p className="quote">{r.text}</p>
                <QuoteSection>
                    <UserImg className="user" style={{ backgroundImage: `url(${r.user.image_url})` }} />
                    <div className="name">- {r.user.name}</div>
                </QuoteSection>
            </Review>
        ))

        return (
            <Fragment>
                {
                    biz && (<div>
                        <BigImage style={{ backgroundImage: `url(${biz.image_url})` }}>
                            <Address className="address">
                                <Name className="name">{biz.name}</Name>
                                <div className="address">
                                    {biz.location.address1}
                                </div>
                                <div className="city">
                                    {`${biz.location.city} ${biz.location.state} ${biz.location.zip_code}`}
                                </div>
                            </Address>
                        </BigImage>
                        <Section className="reviewsList">
                            {reviewsList}
                        </Section>
                    </div>
                    )
                }
            </Fragment >
        )
    }
}

const mapStateToProps = ({ businesses }: StoreState) => {
    const { isLoading, errors, reviews } = businesses
    return {
        isLoading,
        errors,
        reviews,
        businesses: businesses.businesses,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        unsetReviews: () => dispatch(unsetReviews()),
        fetchReviewsRequest: (biz_id: number) => dispatch(fetchReviewsRequest(biz_id)),
        fetchBusinessesRequest: () => dispatch(fetchBusinessesRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Biz);

const Name = styled('div')`
font-size: 2rem;
color: #fff;
font-family: serif;
letter-spacing: 0.1em;
font-size: 100px;
font-weight: bold;
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
`
const Address = styled('div')`
position: absolute;
width: 100%;
height: 100%;
top: 0;
background: linear-gradient( to bottom,#46e5c199 0%,#bd6ad291 100% );
color: #fff;
font-weight: bolder;
display: flex;
flex-direction: column;
justify-content: center;
`
const BigImage = styled('div')`
background-size: cover;
background-position: center;
margin: auto;
height: 300px;
width: 100%;
position: relative;
`
const QuoteSection = styled('div')`
display: flex;
align-items: center;
font-size: 0.9rem;
`
const UserImg = styled('div')`
width: 40px;
height: 40px;
background-size: cover;
background-position: center;
margin: auto;
border-radius: 50%;
margin-right: 15px;
`
const Section = styled('section')`
display: flex;
flex-direction: column;
padding: 2rem 0;
background-color: #241e43;
color: #fff;
@media(min-width:768px){
    flex-direction: row;
}
`

const Review = styled('div')`
font-size: .9rem;
flex:1;
display: flex;
flex-direction: column;
padding: 1rem 3rem;
text-align: left;

@media(min-width:768px){
    padding: 1rem;
}
`