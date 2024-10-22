
import './SignupSigninElements.css';
import React, { useState } from "react";
import SignUpForm from '../OuterComponents/SignUp/SignUpForm'
import LoginForm from '../OuterComponents/Login/LoginForm'

import { CUtopia, Buttons, ContainerBox, Slider, Toggle} from './style';

import logo from '../assets/images/logo_cropped.png'
import CUTOPIA from '../assets/images/CUTOPIA.png'

import NavbarLogin from '../OuterComponents/NavbarLogin'

import { useHistory } from "react-router-dom";


function SignupSignin() {
 
  //to move the forms from left to right and so on
  function register(){
    document.getElementById("login").style.left="-400px";
    document.getElementById("register").style.left="50px";
    document.getElementById("Slider").style.left="110px";
  }
  function login(){
    document.getElementById("login").style.left="50px";
    document.getElementById("register").style.left="450px";
    document.getElementById("Slider").style.left="0px";
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  //check if it is submitted or not
  const [isSubmittedLogin, LoginIsSubmitted] = useState(false);
  function submitFormLogin() {
    LoginIsSubmitted(true);
  }

  const [isSubmittedSignup, SignUpIsSubmitted] = useState(false);
  function submitFormSignup() {
    SignUpIsSubmitted(true);
  }
  const history = useHistory();

  return (
    
    <>
    <div style={{backgroundColor:"rgba(0,0,0,0.4)", height:"100vh", top:0, left:0 }}>
    
    {/* <NavbarLogin toggle={toggle}/> */}
    <CUtopia>
      <img src={logo} width="300px" className="logo" alt="logo"/>       
      <img src={CUTOPIA} width="200px"className="logo"alt="CTUPIA_word"/>
        
    <ContainerBox>
			<Buttons>
				<Slider id="Slider"></Slider>
        <Toggle onClick={login}>Log In</Toggle>
        <Toggle onClick={register}>Sign Up</Toggle>
			</Buttons>
      
      {!isSubmittedLogin ? (
      <LoginForm id="login" submitFormLogin={submitFormLogin}/>
      ):(
        history.push('./Feed')
      )}

      {!isSubmittedSignup ?(
      <SignUpForm id="register" submitFormSignup={submitFormSignup} ></SignUpForm>
      ) : (
        history.push('./next')
      )}
      </ContainerBox> 
      </CUtopia>
      </div>
      </>
  );
}

export default SignupSignin;
