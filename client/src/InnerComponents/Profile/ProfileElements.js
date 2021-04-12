import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
export const ProfileData = styled.div`
    flex: 0.7;
    /* background-color: blue; */
    width: 100%;

    @media screen and (max-width: 1040px) {
        flex: 1;
    }
`
export const InformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    width:100%;
    //background-color: green;
    //height: fit-content;
`
export const Section = styled.div`
    background-color: white;
    border-radius: 5px;
    height: fit-content;
    margin-bottom: 30px;
    padding: 25px 35px 25px 30px;
`

export const SectionHeader = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 10px;
`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    display: flex;
`

export const Description = styled.p`
    color: black;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
`

export const Header = styled.h3`
    color: black;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-weight: bold;
    font-size: 16px;
`
export const AttachImage = styled.div`
    color: lightgray;
    margin-left: 10px;
    
    &:hover {
        color: gray;
        cursor: pointer;
    }
`

export const ContentFormSubmit = styled.div`
    color: #DDA300;
    cursor: pointer;
    margin-left: 10px;
`

export const SectionTitle = styled.h2`
    display: flex;
    font-size: 20px;
    margin-right: auto;
`

export const SubheadingText = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    background-color: #f3f2ef;
    margin-bottom: -5px;

    > h3 {
        font-size: 12px;
        color: #DDA300;
    }
`

export const SidebarWrapper = styled.div`
    flex: 0.3;
    border-radius: 10px;
    height: fit-content;
    margin-left: 30px;
    position: sticky;
    /* background-color: green; */
    top: 115px;

    @media screen and (max-width: 1040px) {
        display: none;
    }
`

export const Logo = styled.img`
    margin-bottom: 15px;
    margin-top: 15px;
    margin-left: 25px;
    margin-right: 25px;
    height: 60px ;
    width: 60px ;
`

export const InfoSection = styled.div`
    margin-bottom: 15px;
    margin-top: 10px;
    width:500px;
`
export const RemoveContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`
export const RemoveItem = styled.button`
    border:none;
    background-color: white;
    cursor: pointer;
    color:red;
    outline:none;
    &:hover {
        color: grey;
        transition: 0.1s ease-in-out;
        outline:none;
    }
    &:active{
        outline:none;
        border:none;
    }
`
export const AddItem = styled.button`
    border:none;
    background-color: white;
    cursor: pointer;
    color:black;
    outline:none;
    &:hover {
        color: blue;
        transition: 0.1s ease-in-out;
        outline:none;
    }
    &:active{
        outline:none;
        border:none;
    }
`


