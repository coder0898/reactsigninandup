import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Header from "./Header";

const HomeContainer = styled.div`
  width:100%;
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


const ButtonEdit = styled.button`
  border: none;
  color: white;
  padding: 5px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  background-color: yellow;
`;

const ButtonDelete = styled.button`
  border: none;
  color: white;
  padding: 5px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  background-color: #f44336;
`;

const ButtonView = styled.button`
  border: none;
  color: white;
  padding: 5px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  background-color: #96e9db;
`;

const Home = () => {

  const [getdata, setGetData] = useState([]);

  useEffect(() => {
    getUserData();
  }, [])

  const history = useNavigate();

  const getUserData = async () => {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response);
    if (response.status === 200) {
      setGetData(response.data);
      console.log(getdata);
    }
  }

  const userLogout = () => {
    history("/");
    toast.success("Log Out Successfully", {
      position: "top-center"
    });
  }
  const getUser = localStorage.getItem("auth");
  const userData = JSON.parse(getUser);
  console.log(userData[0].fname);
  const fname = userData[0].fname;

  return (
    <>
      <HomeContainer>
        <WelcomeText>Welcome to User Management System <HighlightedText>{fname}</HighlightedText>,Hope you will be satisfy by our service </WelcomeText>
        <LogOutButton onClick={userLogout}>LogOut</LogOutButton>
        <table className='style-table'>
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getdata &&
              getdata.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      {/* ${item.id} */}
                      <Link to={`/edit/:id`}>
                        <ButtonEdit>Edit</ButtonEdit>
                      </Link>
                      <ButtonDelete>Delete</ButtonDelete>
                      {/* ${item.id} */}
                      <Link to={`/view/:id`}>
                        <ButtonView>View</ButtonView>
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </HomeContainer>
    </>
  )
}

export default Home;