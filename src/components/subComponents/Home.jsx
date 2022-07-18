import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width:400px;
  height:300px;
  background-color:#fff;
  box-shadow:0 0 4px rgba(200, 200, 200, 0.5);
  display:flex
  flex-direction:column;
  jsutify-content:center;
`;

const WelcomeText = styled.h2`
  font-size:30px;
  font:weight:500;
`;

const HighlightedText = styled.span`
  color:rgb(15,131,243);
`;

const LogOutButton = styled.button`
width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(42,243,15);
  background: linear-gradient(270deg, rgba(42,243,15,1) 20%, rgba(18,243,36,0.9640231092436975) 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;

const Home = () => {

    const history = useNavigate();
    const userLogout = ()=>{
        history("/");
        toast.success("Log Out Successfully",{
          position:"top-center"
        });
    }
    const getUser = localStorage.getItem("auth");
    const userData = JSON.parse(getUser);
    console.log(userData[0].fname);
    const fname = userData[0].fname;
    
  return (
    <HomeContainer>
        <WelcomeText>Welcome to User Management System <HighlightedText>{fname}</HighlightedText>,Hope you will be satisfy by our service </WelcomeText>
        <LogOutButton onClick={userLogout}>LogOut</LogOutButton>
    </HomeContainer>
  )
}

export default Home;