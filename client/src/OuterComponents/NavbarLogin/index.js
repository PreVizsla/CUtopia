import React, { useEffect, useState } from 'react'

import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

import CUTOPIA from "../../assets/images/CUTOPIA.png"
import logo from '../../assets/images/logo_cropped.png'
import {  Nav, WholeContainer, NavBtn, NavRouter,  NavLogo, NavMenu } from './NavbarLoginElements'


const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 90) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <WholeContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        
                        <img src={logo} width="90" alt="logo"/>
                        <img src={CUTOPIA} width="150" alt="CUTOPIA_word"/>
                    </NavLogo>
  
                    <NavMenu>
                        <NavBtn>
                            <NavRouter to="/">Home</NavRouter>
                        </NavBtn>
                    </NavMenu>
                </WholeContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
