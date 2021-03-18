import { Link as LinkR} from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
    background:  rgba(117, 15, 109, 0.8);
    //background: ${({scrollNav}) => (scrollNav ? 'rgba(117, 15, 109, 0.8);' : 'transaprent')}; 
    height: 85px;
    margin-top: 0px; 
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    display: flex;
    position: sticky;
    z-index: 10;
    top: 0;
    
    @media screen and (max-width: 950px) {
        transition: 0.8s all ease;
    }
`

export const WholeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
`


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

`

export const NavRouter = styled(LinkR)`
    border-radius: 30px;
    //background: #01bf71;
    //background: rgba(235, 152, 52);
    background: linear-gradient(to right, #ff105f, #ffad06);
    white-space: nowrap;
    padding: 15px 25px;
    
    color: white; //color: #010606;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: rgba(117, 15, 109);
    }
`