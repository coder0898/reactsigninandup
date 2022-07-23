import React, { useContext,useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const NoteText = styled.p`
   marign-top:10px;
   marign-bottom:0px;
   color:red;
   font-size:10px;
   font-weight:600;
   text-decoration:underline;
`;

export const Signup = (props) => {

    const { switchToSignin } = useContext(AccountContext);

    const [signDetails, setSignDetails] = useState({
       fname:"",
       email:"",
       password:"",
       confirmPassword:""
    })

    const [data,setData] = useState([]);

    
    const getSignupDetails = (e) => {
      const { name, value } = e.target;
      // console.log(name + "" + value);
      setSignDetails({...signDetails,[name]:value});
    } 

   const submitSignupDetails = (e)=>{
    e.preventDefault();
    if (signDetails.password.length < 6) {
      toast.warning("Please length should be min 6.",{
        position:"top-center"
      });
    }else{
      if (signDetails.password == signDetails.confirmPassword) {
          console.log(signDetails);
          localStorage.setItem("auth",JSON.stringify([...data,signDetails]));
          axios.post("http://localhost:5000/signup",signDetails).
          then((response)=>{
            console.log(response);
            toast.success(response.message,{
             position:"top-center"
            });  
          }).catch((err)=>{
            console.log(err);
          });
          setSignDetails({
            fname:"",
            email:"",
            password:"",
            confirmPassword:""
         });   
      } else {
        // alert("your confirm password mismatch");
        toast.error("your password mismatch confirm password!",{
          position:"top-center"
        });
        setSignDetails({
          fname:'',
          email:'',
          password:'',
          confirmPassword:''
       });
      }
    }
   }

    return (
        <BoxContainer>
          <FormContainer>
            <Input type="text" name="fname" value={signDetails.fname} placeholder="Full Name" onChange={(e)=>getSignupDetails(e)} />
            <Input type="email" name='email' value={signDetails.email} placeholder="Email" onChange={(e)=>getSignupDetails(e)} />
            <Input type="password" name='password' value={signDetails.password} placeholder="Password(Min 8 charater)" onChange={(e)=>getSignupDetails(e)} />
            <Input type="password" name='confirmPassword' value={signDetails.confirmPassword} placeholder="Confirm Password" onChange={(e)=>getSignupDetails(e)} />
          </FormContainer>
          <Marginer direction="vertical" margin={10} />
          <SubmitButton type="submit" onClick={submitSignupDetails}>Signup</SubmitButton>
          <Marginer direction="vertical" margin="1em" />
          <MutedLink href="#">
            Already have an account?
            <BoldLink href="#" onClick={switchToSignin}>
              Signin
            </BoldLink>
          </MutedLink>
          <NoteText>Note:password should contains Capital, special charater and number along with length.</NoteText>
        </BoxContainer>
      );
}
