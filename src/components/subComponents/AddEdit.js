import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const FormContainer = styled.div`
  width:400px;
  border:4px;
  border-style:dashed;
  padding:10px;
`;

const HeaderBackground = styled.div`
  margin-bottom:4px;
  padding:4px;
  background-color:orange;
  width:400px;
`;

const Heading = styled.h1`
  text-align:center;
  font-size:1.5rem;
  font-weight:500;
  color:#fff;
`;

const FormContent = styled.div`
  display:flex;
  flex-direction:column;
`;

const FormLabel = styled.label`
  font-weight:400;
  marign-bottom:2px;
  font-size:16px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

const FormSubmit = styled.input`
  background-color:green;
  border:none;
  outline:none;
  padding:3px;
  text-align:center;
  color:#fff;
  font-weight:bold;

  &:hover{
    border: 2px solid green;
    color:green;
  }
`;

const AddEdit = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        contact: ""
    });

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id])

    const getSingleUser = async (id) => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        if (response.status === 200) {
            setState({ ...response.data[0] });
        }
    }

    const navigate = useNavigate();

    const addContactUser = async (userData) => {
        const response = await axios.post("http://localhost:5000/user", userData);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const { name, email, contact } = state;

    const updateContactUser = async (data, id) => {
        const response = await axios.put(`http://localhost:5000/users/${id}`, data);
        if (response.status === 200) {
            toast.success(response.data);
            setState(response.data);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Please add data !!!")
        } else {
            if (!id) {
                addContactUser(state);
            } else {
                updateContactUser(state, id);
            }
            navigate("/home");
        }
    }

    return (
        <FormContainer>
            <HeaderBackground>
                <Heading>Add User Details</Heading>
            </HeaderBackground>
            <FormContent onSubmit={handleSubmit}>
                <FormLabel htmlFor='name'>Name:</FormLabel>
                <FormInput type="text" id='name' name='name' placeholder=' Enter your Name...' onChange={handleInputChange} value={state.name} />
                <FormLabel htmlFor='email'>Email:</FormLabel>
                <FormInput type="email" id='email' name='email' placeholder=' Enter your Email...' onChange={handleInputChange} value={state.email} />
                <FormLabel htmlFor='contact'>Contact:</FormLabel>
                <FormInput type="number" id='contact' name='contact' placeholder=' Enter your Contact...' onChange={handleInputChange} value={state.contact} />

                <FormSubmit type="submit" value={id ? "Update" : "ADD"}></FormSubmit>
            </FormContent>
        </FormContainer>
    )
}

export default AddEdit;