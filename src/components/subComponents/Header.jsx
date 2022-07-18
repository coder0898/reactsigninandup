import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = styled.nav`
  width:100%;
  background-color: rgb(243,196,15);
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:5px;
`;

const LogoText = styled.h1`
  font-size:20px;
  font-weight:600;
  color:#fff;
  marign-left:10px;
`;

const NavTitle = styled.p`
  font-size:16px;
  font-weight:400;
  color:#fff;
  marign-right:30px;
`;

const Header = () => {

    return (
        <>
            <Navbar>
                <div style={{ display: "flex" }}>
                    <LogoText>UserManagementSystem</LogoText>
                    <LogoText>(USM)</LogoText>
                </div>
                <NavTitle>Login</NavTitle>
            </Navbar>
        </>
    )
}

export default Header;