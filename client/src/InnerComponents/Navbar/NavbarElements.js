import { Avatar } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: #292D3E;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    padding: 0 0 0 30px;
    width: 100%;

    /* @media screen and (max-width: 1040px) {
        display: none;
    } */
`

export const NavLeft = styled.div`
    display: flex;
`

export const NavLogo = styled.div`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;

    > img {
        margin: auto;
        height: auto;
        width: auto;
        max-height: 72px;
        max-width: 250px;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items:center;
    margin-left: 30px;
    margin-right: 30px;
`

export const NavSearch = styled.div`
    margin: auto;
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    height: 30px;
    color: gray;
    background-color: #384063;
`

export const SearchBar = styled.input`
    color: white;
    background: none;
    border: none;
    outline: none;
`

export const NavRight = styled.div`
    display: flex;
`

export const ProfileIcon = styled(Avatar)`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 30px;
    height: 42px !important;
    width: 42px !important;
`

export const ProfileIdentity = styled.div`
    margin-left: 15px;
    margin-right: 20px;
    margin-top: auto;
    margin-bottom: auto;
    width: 150px;

    > h2 {
        font-size: 14px;
        font-weight: 500;
        color: white;
    }

    > p {
        font-size: 12px;
        font-weight: lighter;
        color: lightgray;
    }
`

export const LogoutButton = styled(ExitToAppIcon)`
    margin: auto;
    margin-left: 50px;
    color: white;
    height: 40px !important;
    width: 40px !important;

    &:hover {
        color: #DDA300;
        transition: ease-in-out 0.2s;
    }
`

export const Exit = styled(LinkR)`
    width: fit-content;
    height: fit-content;
`

export const ProfileContainer = styled.div`
    display: flex;

    &:hover {
        cursor: pointer;
        background-color: grey;
        border-radius: 5px;
    }
`