import React from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import CUTOPIA from "../../assets/images/CUTOPIA.png"
import logo from '../../assets/images/logo_cropped.png'
import { WholeContainer, Nav,  NavBtn, NavRouter, NavItem, NavLinks, MobileIcon, NavLogo, NavMenu } from './NavbarElements'



const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <Nav>
            <WholeContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <img src={logo} width="90" alt="logo"/>
                    <img src={CUTOPIA} width="150" alt="CUTOPIA Word"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavRouter to="/signup_signin">Log In</NavRouter>
                    </NavBtn>
                </NavMenu>
            </WholeContainer>
        </Nav>
        </>
    )
}

export default Navbar
