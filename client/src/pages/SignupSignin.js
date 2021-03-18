
import './SignupSigninElements.css';
import React, { useState } from "react";
import SignUpForm from '../OuterComponents/SignUp/SignUpForm'
import LoginForm from '../OuterComponents/Login/LoginForm'

import { CUtopia, Buttons, ContainerBox, Slider, Toggle} from './style';

import logo from '../assets/images/logo_cropped.png'
import CUTOPIA from '../assets/images/CUTOPIA.png'

import NavbarLogin from '../OuterComponents/NavbarLogin'

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

  return (
    
    <>
    
    <NavbarLogin toggle={toggle}/>
    <CUtopia>
        <img src={logo} width="300px" className="logo" alt="logo"/>       
        <img src={CUTOPIA} width="200px"className="logo"alt="CTUPIA_word"/>
        
    <ContainerBox>
			<Buttons>
				<Slider id="Slider"></Slider>
        <Toggle onClick={login}>Log In</Toggle>
        <Toggle onClick={register}>Sign Up</Toggle>
			</Buttons>

      <LoginForm id="login"></LoginForm>
      <SignUpForm id="register"></SignUpForm>

      </ContainerBox> 
      </CUtopia>
      </>
  );
}

export default SignupSignin;
