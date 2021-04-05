
import './SignupSigninElements.css';
import React, { useState } from "react";
import SignUpPageDetail from '../OuterComponents/SignUpPage/SignUpDetailForm.js'

import { CUtopia, BigContainerBox} from './style';

import logo from '../assets/images/logo_cropped.png'
import CUTOPIA from '../assets/images/CUTOPIA.png'

import NavbarLogin from '../OuterComponents/NavbarLogin'
import VerificationSendForm from '../OuterComponents/VerificationSend'


import { useHistory } from "react-router-dom";
function VerificationSend() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  //for router
  const history = useHistory();
  
  const [isSubmittedSignup, submitDetailSignup] = useState(false);
  function submitForm() {
    submitDetailSignup(true);
  }
  return (
    //background color is buggy so i hard code the height (vh for some reason is the screen height)
    <div style={{backgroundColor:"rgba(0,0,0,0.4)", height:"100vh"}}>
    
        <CUtopia>
        <img src={logo} width="300px" className="logo" alt="logo"/>       
        <img src={CUTOPIA} width="200px"className="logo" alt="CUTOPIA_word"/>
      <BigContainerBox>
      {!isSubmittedSignup ?(
        <SignUpPageDetail submitDetailSignup={submitForm}/>
      ):(
        <VerificationSendForm />
        // history.push('./next')
      )}
      </BigContainerBox> 
      </CUtopia>
    </div>
  );
}

export default VerificationSend;
