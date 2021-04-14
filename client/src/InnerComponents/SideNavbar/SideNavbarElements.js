import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

export const WholeContainer = styled.aside`
    //make it large to be in front
    z-index: 100;    

    //size and position-style
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    display: grid;
    align-items: center;
    

    //making it a bit transparent (0.95 is too transparent for me)
    background: rgba(117, 15, 109, 0.96);
    
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
//icon close container
export const Icon = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 32px;
    cursor: pointer;
    outline: none;

`
//just to make it neat
export const ContentWrapper = styled.div`
    
`

export const Menu = styled.ul`

    text-align: center;

    //grid styles
    display: grid;
    grid-gap: 36px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 60px); 
    

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 40px);
    }
`

export const Options = styled(LinkR)`

    //diplay style
    display: flex;
    align-items: center;
    justify-content: center;

    //text style
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: rgba(
        235, 152, 52
        );
    cursor: pointer;

    list-style: none;
    transition: 0.2s ease-in-out;
    

    &:hover {
        //color: #01bf71;
        color:#fff;
        transition: 0.2s ease-in-out;
    }

`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top:35px;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: rgba(
        235, 152, 52
        );
    font-weight: bold;
    white-space: nowrap;
    padding: 16px 64px;
    color: rgba(70, 30, 133);;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`
