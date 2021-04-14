import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

export const Mentor = styled.div`
    width: 100%;
    height: fit-content;
    /* background-color: blue; */
    margin-bottom: 20px;
    display: flex;
`

export const SidebarMentorAvatar = styled(Avatar)`
    margin-top: auto;
    margin-bottom: auto;
    height: 60px !important;
    width: 60px !important;
    margin-right: 10px;
`

export const MentorInfo = styled.div`
    width: 200px;

    > h4 {

        font-size: 14px;
        font-weight: 700;
        margin-bottom: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    

    > p {
        background-image: linear-gradient(90deg,#000000 80%,rgba(0,0,0,0));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 12px;
        font-weight: 400;
        margin-top: auto;
        margin-bottom: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const CUniteMentor = styled.button`
    margin-top: 3px;
    cursor: pointer;
    background-color: white;
    border-radius: 70px;
    padding: 2px 8px;
    border: 1.5px solid #DDA300;
    color: #DDA300;
    font-size: 10px;

    &:hover {
        background-color: #DDA300;
        color: white;
        transition: 0.1s ease-in-out;
    }
`