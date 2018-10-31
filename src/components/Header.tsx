import React from 'react';
import styled from 'react-emotion';

interface HeaderProps {
    title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
    <HeaderStyled>
        <h1>{title}</h1>
    </HeaderStyled>
)

const HeaderStyled = styled('header')`
background-color: #222;
height: 150px;
padding: 20px;
color: white;
`
export default Header;