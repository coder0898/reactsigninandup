import React,{useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ViewContainer = styled.div`
  width:400px; 
  border:4px;
  border-style:dashed;
  padding:10px;
  align-items:center;
`;

const ViewHeader = styled.div`
  width:400px;
  padding:4px;
  margin-bottom:4px;
  background-color:green;
`;

const ViewHead = styled.h1`
  text-align:center;
  font-size:1.5rem;
  font-weight:500;
  color:#fff;
`;

const ViewRow = styled.div`
  display:flex;
  padding:2px;
`;

const ViewStrong = styled.strong`
  marign-right:2px;
  font-size:18px;
`;

const ViewDetail = styled.span`
  font-size:18px;
`;

const GoBack = styled.button`
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

const View = () => {

  const {id} = useParams();
  
  const [user, setUser] = useState([]);

 useEffect(() => {
   if(id){
      getSingleUser(id);
   }
 }, [id])
 
 const getSingleUser = async (id)=>{
  const response = await axios.get(`http://localhost:5000/users/${id}`);
  if(response.status === 200){
   setUser({ ...response.data[0]});
 }
 }

  return (
    <ViewContainer>
        <ViewHeader>
            <ViewHead>View User Details</ViewHead>
        </ViewHeader>
        <ViewRow>
            <ViewStrong>ID:</ViewStrong>
            <ViewDetail>{id}</ViewDetail>
        </ViewRow>
        <ViewRow>
            <ViewStrong>Name:</ViewStrong>
            <ViewDetail>{user && user.name}</ViewDetail>
        </ViewRow>
        <ViewRow>
            <ViewStrong>Email:</ViewStrong>
            <ViewDetail>{user && user.email}</ViewDetail>
        </ViewRow>
        <ViewRow>
            <ViewStrong>Contact:</ViewStrong>
            <ViewDetail>{user && user.contact}</ViewDetail>
        </ViewRow>
        <Link to="/home">
          <GoBack>Go Back</GoBack>
        </Link>
    </ViewContainer>
  )
}

export default View;