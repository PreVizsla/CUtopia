import QuestionIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import React from 'react'

import footerLogo from '../../assets/images/logoBottom.PNG'
import { FooterAccess, FooterContainer, FooterLinks, FooterLinksContainer, FooterLinksWrapper, FooterWrapper, QuestionButton, SettingsButton } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                {/* Footer contains 4 elements: Logo with Writing, Useful links for navigation, other useful links, and Fast Access buttons */}
                <FooterWrapper>
                    {/* Logo with Writing */}
                    <img src={footerLogo} alt=''/>
                    {/* FooterLinksContainer holds both navigation and other links */}
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            {/* Navigation Links */}
                            <FooterLinks>
                                <h1>Navigation</h1>
                                <h4>Feed</h4>
                                <h4>CUnity</h4>
                                <h4>Jobs</h4>
                                <h4>Events</h4>
                                <h4>Chat</h4>
                            </FooterLinks>
                            {/* Others Links */}
                            <FooterLinks>
                                <h1>Others</h1>
                                <h4>About</h4>
                                <h4>Community Guidelines</h4>
                                <h4>Privacy & Terms</h4>
                            </FooterLinks>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    {/* Fast Access containing 2 buttons */}
                    <FooterAccess>
                        <h1>Fast Access</h1>
                        {/* QUESTIONS? button */}
                        <QuestionButton>
                            <h3>QUESTIONS?</h3>
                            <QuestionIcon fontSize="small"/>
                        </QuestionButton>
                        {/* SETTINGS button */}
                        <SettingsButton>
                            <h3>SETTINGS</h3>
                            <SettingsIcon fontSize="small"/>
                        </SettingsButton>
                    </FooterAccess> 
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
