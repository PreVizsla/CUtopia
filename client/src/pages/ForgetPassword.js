import React, { useState } from "react";

import CUTOPIA from '../assets/images/CUTOPIA.png'
import logo from '../assets/images/logo_cropped.png'
import ForgetPasswordForm from '../OuterComponents/ForgetPassword'
import NavbarLogin from '../OuterComponents/NavbarLogin'
import { ContainerBox, CUtopia } from './style';

import './SignupSigninElements.css';

function ForgetPassword() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    
    <>
    
    <NavbarLogin toggle={toggle}/>
    <CUtopia>
        <img src={logo} width="300px" className="logo" alt="logo"/>       
        <img src={CUTOPIA} width="200px"className="logo" alt="CUTOPIA_word"/>
      <ContainerBox>
        <ForgetPasswordForm id="Forget"></ForgetPasswordForm>
      </ContainerBox> 
      </CUtopia>
      </>
  );
}

export default ForgetPassword;
