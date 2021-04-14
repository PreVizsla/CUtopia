import './SignupSigninElements.css';
import React, { useState } from "react";
import SignUpPageDetail from '../OuterComponents/SignUpPage/SignUpDetailForm.js'

import { CUtopia, BigContainerBox} from './style';

import logo from '../assets/images/logo_cropped.png'
import CUTOPIA from '../assets/images/CUTOPIA.png'

import VerificationSendForm from '../OuterComponents/VerificationSend'
function VerificationSend() {

  const [isSubmittedSignup, submitDetailSignup] = useState(false);
  function submitForm() {
    submitDetailSignup(true);
  }
  return (
    <div style={{backgroundColor:"rgba(0,0,0,0.4)", height:"100%", top:0, left:0 }}>
    
        <CUtopia>
        <img src={logo} width="300px" className="logo" alt="logo"/>       
        <img src={CUTOPIA} width="200px"className="logo" alt="CUTOPIA_word"/>
      <BigContainerBox>
      {!isSubmittedSignup ?(
        <SignUpPageDetail submitDetailSignup={submitForm}/>
      ):(
        <VerificationSendForm />
      )}
      </BigContainerBox> 
      </CUtopia>
    </div>
  );
}

export default VerificationSend;
