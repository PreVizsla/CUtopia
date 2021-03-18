
import './SignupSigninElements.css';
import React, { useState } from "react";
import VerificationSendForm from '../OuterComponents/VerificationSend'

import { CUtopia, ContainerBox} from './style';

import logo from '../assets/images/logo_cropped.png'
import CUTOPIA from '../assets/images/CUTOPIA.png'

import NavbarLogin from '../OuterComponents/NavbarLogin'

function VerificationSend() {
 
 
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
        <VerificationSendForm id="Verification"></VerificationSendForm>
      </ContainerBox> 
      </CUtopia>
      </>
  );
}

export default VerificationSend;
