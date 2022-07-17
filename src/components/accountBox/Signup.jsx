import React, { useContext,useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';

export const Signup = (props) => {

    const { switchToSignin } = useContext(AccountContext);

    const [signDetails, setSignDetails] = useState({
       fname:"",
       email:"",
       password:"",
       confirmPassword:""
    })

    const getSignupDetails = (e) => {
      const { name, value } = e.target;
      // console.log(name + "" + value);
      setSignDetails({...signDetails,[name]:value});
    } 

   const submitSignupDetails = (e)=>{
    e.preventDefault();
    if (signDetails.password == signDetails.confirmPassword) {
        console.log(signDetails);
        setSignDetails({
          fname:"",
          email:"",
          password:"",
          confirmPassword:""
       });      
    } else {
      alert("your confirm password mismatch");
      setSignDetails({
        fname:'',
        email:'',
        password:'',
        confirmPassword:''
     });
    }
   }

    return (
        <BoxContainer>
          <FormContainer>
            <Input type="text" name="fname" value={signDetails.fname} placeholder="Full Name" onChange={(e)=>getSignupDetails(e)} />
            <Input type="email" name='email' value={signDetails.email} placeholder="Email" onChange={(e)=>getSignupDetails(e)} />
            <Input type="password" name='password' value={signDetails.password} placeholder="Password" onChange={(e)=>getSignupDetails(e)} />
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
        </BoxContainer>
      );
}
