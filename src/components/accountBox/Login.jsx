import React, { useContext, useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = (props) => {

  const { switchToSignup } = useContext(AccountContext);
  const [logDetails, setLogDetails] = useState({
    email: "",
    password: ""
  })

  const getLoginDetails = (e) => {
    const { name, value } = e.target;
    // console.log(name + "" + value);
    setLogDetails({...logDetails,[name]:value});
  }
  
  
  const submitLoginDetails = (event)=>{
    event.preventDefault();
    console.log(logDetails);
    const getAuthentication = localStorage.getItem("auth");
    console.log(getAuthentication);
     if (getAuthentication && getAuthentication.length) {
         const userData = JSON.parse(getAuthentication);
         const loginData = userData.filter((el,k)=>{
          return el.email == logDetails.email && el.password == logDetails.password;
         });
         if (loginData.length == 0) {
            // alert("invalid details");
            toast.error("invalid details",{
              position:"top-center"
            });          
         } else {
           console.log("Log in data successfully");
           toast.success("Log in successfully",{
            position:"top-center"
           });
         }
     }
     setLogDetails({
      email: "",
      password: ""
    })
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" name='email' value={logDetails.email} placeholder="Email" onChange={(e) => getLoginDetails(e)} />
        <Input type="password" name='password' value={logDetails.password} placeholder="Password" onChange={(e) => getLoginDetails(e)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitLoginDetails}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
