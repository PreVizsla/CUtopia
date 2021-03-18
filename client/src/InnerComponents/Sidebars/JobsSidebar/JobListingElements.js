import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

export const Job = styled.div`
    width: 100%;
    height: fit-content;
    /* background-color: blue; */
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export const JobHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    justify-content: space-between;

    > h4 {
        font-weight: 700;
        font-size: 14px;
    }

    > p {
        color: #DDA300;
        font-weight: 600;
        font-size: 10px;
    }
`

export const JobDetails = styled.div`
    width: 100%;
    height: 80px;
    /* background-color: green; */
    display: flex;
`

export const SidebarJobAvatar = styled(Avatar)`
    margin-top: auto;
    margin-bottom: auto;
    height: 60px !important;
    width: 60px !important;
    margin-right: 10px;
`

export const JobInfo = styled.div`
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    > p {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: auto;
    }
`

export const ApplyNow = styled.button`
    margin-top: 3px;
    cursor: pointer;
    background-color: white;
    border-radius: 4px;
    padding: 2px 8px;
    border: 1.5px solid #DDA300;
    color: #DDA300;
    width: 78px;
    font-size: 10px;
    margin-bottom: 10px;

    &:hover {
        background-color: #DDA300;
        color: white;
        transition: 0.1s ease-in-out;
    }
`