import React from 'react'
import CUTOPIA from "../../assets/images/CUTOPIA.png"
import logo from '../../assets/images/logo_cropped.png'
import { ElementContainer, FooterColor, Item, LogoContainer, MainContainer, SectionContainer } from './FooterElements'

const Footer = () => {

    return (
        <FooterColor>
            <MainContainer>
                <SectionContainer>
                    <ElementContainer>
                        <LogoContainer>
                            <img src={logo} width="90" alt="logo"/>
                            <img src={CUTOPIA} width="150" alt="CUTOPIA_word"/>
                        </LogoContainer>
                        <Item>
                            &copy; CUtopia 2021
                        </Item>
                    </ElementContainer>
                </SectionContainer>
            </MainContainer>
        </FooterColor>
    )
}

export default Footer
