import React from 'react'

import { WholeContainer, ContentWrapper, CloseIcon, Icon,  Menu, SidebarRoute, Options, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        // whole container is for containing the whole components
        <WholeContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            {/* wrap menu and button */}
            <ContentWrapper>
                {/* wrap menu */}
                <Menu>
                    <Options to="about" onClick={toggle}>
                        About
                    </Options>
                    <Options to="services" onClick={toggle}>
                        Services
                    </Options>
                    <Options to="signup" onClick={toggle}>
                        Sign Up
                    </Options>
                </Menu>
                {/* button wrapper */}
                <SideBtnWrap>
                    <SidebarRoute to="/Signup_signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </ContentWrapper>
        </WholeContainer>
    )
}


export default Sidebar
