import { Avatar, Button } from '@material-ui/core'
import styled from 'styled-components'

export const Event = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`

export const EventHeader = styled.div`
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

export const EventDetails = styled.div`
    width: 100%;
    height: 75px;
    /* background-color: green; */
    display: flex;
`

export const SidebarEventAvatar = styled(Avatar)`
    margin-top: auto;
    margin-bottom: auto;
    height: 60px !important;
    width: 60px !important;
    margin-right: 10px;
`

export const EventInfo = styled.div`
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    
    > p {
        font-size: 12px;
        font-weight: 400;
    }
`

export const RegisterNow = styled.button`
    margin-top: 3px !important;
    cursor: pointer;
    background-color: white !important;
    border-radius: 4px !important;
    padding: 2px 8px !important;
    border: 1.5px solid #DDA300 !important;
    color: #DDA300 !important;
    width: 78px !important;
    font-size: 10px !important;

    &:hover {
        background-color: #DDA300 !important;
        color: white !important;
    }
`

export const EventImageWrapper = styled.div`
    width: 100%;
    max-width: 80px;
    /* background-color: blue; */
    align-items: center;
    margin: auto 0px;

    > img {
        margin: auto;
        height: auto;
        width: auto;
        max-width: 100%;
        border-radius: 5px;

    }
`