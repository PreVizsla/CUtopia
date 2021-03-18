import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

export const SidebarMentor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: fit-content;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const SidebarMentorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* background-color: green; */
    padding: 25px 30px 35px 30px;
`

export const SidebarMentorHeader = styled.div`
    /* background-color: blue; */
    width: 100%;
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    justify-content: space-evenly;
    margin-bottom: 22px;
`

export const Suggestions = styled.h3`
    display: flex;
    font-size: 12px;
    margin-right: auto;

    & .mentor {
        color: #DDA300;
        margin-right: .5rem;
    }
`

export const SeeMore = styled.h3`
    font-size: 12px;
    align-items: right;
    /* background-color: red; */
    margin-left: auto;
    color: #11ADFF;
    cursor: pointer;
`

export const SidebarMentors = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* background-color: green; */
`

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
    width: 100%;
    /* background-color: yellow; */

    > h4 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: auto;
    }
    
    > p {
        font-size: 12px;
        font-weight: 400;
        margin-top: auto;
        margin-bottom: auto;
    }
`

export const CUniteMentor = styled.button`
    margin-top: 3px;
    cursor: pointer;
    background-color: white;
    border-radius: 70px;
    padding: 2px 8px;
    border: 2px solid #DDA300;
    color: #DDA300;
    font-size: 10px;

    &:hover {
        background-color: #DDA300;
        color: white;
        transition: 0.1s ease-in-out;
    }
`

export const SidebarMentorButton = styled.button`
    width: 100%;
    align-items: center;
    background-color: #DDA300;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    height: 32px;
    font-size: 12px;
    font-weight: 500;

    &:hover {
        background-color: white;
        color: #DDA300;
        transition: 0.1s ease-in-out;
        border: 2px solid #DDA300;
    }
`