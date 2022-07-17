import React, { useContext, useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';

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
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" name='email' placeholder="Email" onChange={(e) => getLoginDetails(e)} />
        <Input type="password" name='password' placeholder="Password" onChange={(e) => getLoginDetails(e)} />
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
