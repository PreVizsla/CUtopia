
import './SignupSigninElements.css';
import React, { useState } from "react";
import ResetPasswordForm from '../OuterComponents/ResetPasswordForm'

import { CUtopia, ContainerBox} from './style';

import logo from '../assets/images/logo_cropped.png'
import CUTOPIA from '../assets/images/CUTOPIA.png'

import NavbarLogin from '../OuterComponents/NavbarLogin'

import { useHistory } from "react-router-dom";
function ResetPassword() {
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

export default ResetPassword;
