import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

import { Business } from '../store/placeholderJson/1types';

interface ListingProps {
    business: Business
}

const BusinessListing: React.SFC<ListingProps> = ({ business }) => (
    <Section className="gridItem">
        <Image style={{ backgroundImage: `url(${business.image_url})` }}/>
        <Info>
            <Title>
                <LinkStyled to='/'>{business.name}</LinkStyled>
            </Title>
            <Address>
                <div className="address">
                    {business.location.address1}
                </div>
                <div className="city">
                    {`${business.location.city} ${business.location.state} ${business.location.zip_code}`}
                </div>
            </Address>
        </Info>
    </Section>
)

export default BusinessListing;

const Section = styled('section')`
padding: 20px;
border: 1px solid #ccc;
`
const Image = styled('div')`
width: 100%;
height: 10vw;
min-height: 100px;
background-size: cover;
background-position: center;
`
const Info = styled('div')`
flex: 1;
display: flex;
flex-direction: column;
text-align: left;
`
const Title = styled('div')`
font-weight: bold;
color: #a82d00;
font-size: 0.9rem;
margin: 10px 0;
`

const Address = styled('div')`
font-size: 0.9rem;
color: #7f7f7f;
`
const LinkStyled = styled(Link)`
text-decoration: none;
transition: color 0.35s ease;
&:hover{
    color: #000;
}
`