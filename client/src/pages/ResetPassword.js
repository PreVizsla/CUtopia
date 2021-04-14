import React, { useState } from "react";

import CUTOPIA from '../assets/images/CUTOPIA.png'
import logo from '../assets/images/logo_cropped.png'
import ResetPasswordForm from '../OuterComponents/ResetPasswordForm'
import NavbarLogin from '../OuterComponents/NavbarLogin'
import { ContainerBox, CUtopia } from './style';

import './SignupSigninElements.css';
import { useHistory } from "react-router-dom";


function ForgetPassword() {
  const [isSubmitFormForget, ForgetIsSubmitted] = useState(false);
  function submitFormForget() {
    ForgetIsSubmitted(true);
  }
 
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  const history = useHistory();

  return (
    <>
    
    <NavbarLogin toggle={toggle}/>
    <CUtopia>
        <img src={logo} width="300px" className="logo" alt="logo"/>       
        <img src={CUTOPIA} width="200px"className="logo" alt="CUTOPIA_word"/>
      <ContainerBox>
        {!isSubmitFormForget ?(
          <ResetPasswordForm id="Forget" submitFormForget={submitFormForget}></ResetPasswordForm>
        ):(
          history.push('./passwordchanged')
      
        )}
      </ContainerBox> 
      </CUtopia>
      </>
  );
}

export default ForgetPassword;
