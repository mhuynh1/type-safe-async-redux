import React from "react";
import styled from "react-emotion";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <HeaderStyled>
    <H1>{title}</H1>

    <p>Super-good Pizza And Coffee</p>
    <nav>
      <StyledNavLink exact to="/">
        Home
      </StyledNavLink>
      <StyledNavLink to="/pizza">pizza</StyledNavLink>
      <StyledNavLink to="/coffee">coffee</StyledNavLink>
    </nav>
  </HeaderStyled>
);

const StyledNavLink = styled(NavLink)`
  margin: 0 1rem;
`;
const HeaderStyled = styled("header")`
  background-color: #060c2c;
  height: 150px;
  padding: 20px;
  color: white;
`;

const H1 = styled("h1")`
  margin-bottom: 0;
`;

export default Header;
