import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const JobPostContainer = styled.div`
    height: fit-content;
    background-color: white;
    border-radius: 5px;
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
    padding: 25px 30px 25px 30px;
`

export const JobPostDetails = styled.div`
    min-height: 70px;
    display: flex;
    width: 100%;
`

export const MoreJobButton = styled.button`
    height: 32px !important;
    width: 100%;
    max-width: 90px;
    margin-top: 20px !important; //adjust later
    background-color: #DDA300 !important;
    border: 2px solid #DDA300 !important;
    color: white !important;
    border-radius: 5px !important;
    font-size: 12px !important;
    font-weight: 500 !important;

    &:hover {
        background-color: white !important;
        color: #DDA300 !important;
    }
`

export const JobAvatar = styled(Avatar)`
    height: 55px !important;
    width: 55px !important;
    margin-right: 15px;
`

export const JobInformation = styled.div`
    width: 100%;
    /* background-color: blue; */
`

export const JobPos = styled.div`
    width: 100%;

    > h4 {
        font-size: 14px;
        font-weight: 700;
    }

    & .details {
        display: flex;
        margin-top: 3px;

        > h1 {
            font-size: 11px;
            font-weight: 500;
        }

        > p {
            font-size: 11px;
            font-weight: 400;
            margin-left: 1.5rem;
        }
    }
`

export const JobDesc = styled.div`
    margin-top: 8px;
    /* background-color: green; */
    max-width: 400px;
    font-weight: 400;
    font-size: 14px;
`

export const CloseBtn = styled.button`
    border:none;
    background-color: white;
    cursor: pointer;
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