import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Nav = styled.nav`

    //container style
    justify-content: center;
    display: flex;
    position: sticky;
    height: 85px;
    align-items: center;
    
    //position
    z-index: 10;
    top: 0;
    left:0;
    right:0;
    margin: -85px 0px 0px 0px;

    background:  rgba(117, 15, 109, 0.9); 
    font-size: 16px;
`

export const WholeContainer = styled.div`
    display: flex;
    z-index: 1;

    //dividing elements to right and left
    justify-content: space-between;

    height: 80px;
    padding: 0 24px;
    width: 100%;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
`

//the 3 bar
export const MobileIcon = styled.div`
    display: none;

    //only shows when the width of the screen is 770px
    @media screen and (max-width: 770px) {
        top: 0;
        right: 0;
        position: absolute;
        
        display: block;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
//groups of LI
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;

    @media screen and (max-width: 770px) {
        display: none;
    }
`
// size of the LI items
export const NavItem = styled.li`
    //height for the orange margin and hover effect
    height: 80px;
`
//scroll to go to specific ID
export const NavLinks = styled(LinkS)`
    //container style
    padding: 0 1rem;
    display: flex;
    height: 100%;
    align-items: center;

    color: #fff;
    cursor: pointer;
    text-decoration: none;

    &.active {
        border-bottom: 3px solid rgba(235, 152, 52);
    }
    
    &:hover {
        border-radius: 10px;
        transition: all 0.2s ease-in-out;
        color:rgba(117, 15, 109);
        background: #fff;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
//button to go to other page
export const NavRouter = styled(LinkR)`
    //router style
    border-radius: 50px;
    //background: #01bf71;
    //background: rgba(235, 152, 52);
    background: linear-gradient(to right, #ff105f, #ffad06);
    white-space: nowrap;
    padding: 10px 22px;
    
    //text style
    color: white; //color: #010606;
    font-size: 16px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: rgba(117, 15, 109);
    }
`