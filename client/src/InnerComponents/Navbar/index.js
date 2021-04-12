import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react'

import CUtopiaLogo from '../../assets/images/CUTPLogo.png'
import clement from '../../assets/frontend-temp/clement.jpg'
import { Menu, Nav, NavbarContainer, NavLeft, NavLogo, NavRight, NavSearch, ProfileIcon, ProfileIdentity, SearchBar, Exit, ProfileContainer } from './NavbarElements'
import NavOptions from './NavOptions';
import { useHistory } from "react-router-dom";
import {useState} from 'react';

const Navbar = () => {

    const history = useHistory();
    
    function ChangeToProfile (){
        history.push('/profile')
    }
    function ChangeToFeed (){
        history.push('/feed')
    }
    function ChangeToJobs (){
        history.push('/jobs')
    }
    function ChangeToEvents (){
        history.push('/events')
    }
    function ChangeToChat (){
        history.push('/chat')
    }
    function ChangeToCunity (){
        history.push('/cunity')
    }


    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* We break down navbar to 2 sides left and right, left consists of elements up until the search bar */}
                    {/* Left Side consisting: Logo, 5 Menu Options, Search Bar*/}
                    <NavLeft>
                        {/* Logo */}
                        <NavLogo>
                            <img src={CUtopiaLogo} alt="" />
                        </NavLogo>
                        {/* 5 Menu Options, broken down and made to be reusable components NavOptions*/}
                        <Menu>
                            <NavOptions action={ChangeToFeed} Icon={AppsSharpIcon} title='Feed'/>
                            <NavOptions action={ChangeToCunity} Icon={SupervisorAccountIcon} title='CUnity'/>
                            <NavOptions action={ChangeToJobs} Icon={WorkIcon} title='Jobs'/>
                            <NavOptions action={ChangeToEvents} Icon={EventIcon} title='Events'/>
                            <NavOptions action={ChangeToChat} Icon={MessageIcon} title='Chat'/>
                        </Menu>
                        {/* Search bar of Navbar */}
                        <NavSearch>
                            <SearchIcon style={{fill: "#11ADFF"}}/>
                            <SearchBar autoFocus={true} placeholder='Search' type='text'/>
                        </NavSearch>
                    </NavLeft>
                    {/* Right Side consisting: Profile Picture and Details, Log Out Button*/}
                    <NavRight>
                        {/* Profile Picture and Details */}
                        <ProfileContainer onClick={ChangeToProfile} >
                            <ProfileIcon src={clement}/>
                            <ProfileIdentity>
                                <h2>Clement Mihailescu</h2>
                                <p>CEO at AlgoExpert.io</p>
                            </ProfileIdentity>
                        </ProfileContainer>
                        {/* LogOut Button made using reused NavOptions component like the menu options on the left side */}
                        <Exit to='/'>
                            <NavOptions Icon={ExitToAppIcon} title='Log Out'/>
                        </Exit>
                    </NavRight>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
