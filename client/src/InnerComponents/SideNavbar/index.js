import React from 'react'

import { WholeContainer, ContentWrapper, CloseIcon, Icon,  Menu, SidebarRoute, Options, SideBtnWrap } from './SideNavbarElements'

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
                    <Options to="/Feed" >
                        Feed
                    </Options>
                    <Options to="/CUnity" >
                        CUnity
                    </Options>
                    <Options to="/Jobs" >
                        Jobs
                    </Options>
                    <Options to="/events">
                        Events
                    </Options>
                    <Options to="/Chat">
                        Chat
                    </Options>
                </Menu>
                {/* button wrapper */}
                <SideBtnWrap>
                    <SidebarRoute to="/">Sign Out</SidebarRoute>
                </SideBtnWrap>
            </ContentWrapper>
        </WholeContainer>
    )
}


export default Sidebar
