import styled from 'styled-components'
import { Avatar, Button } from '@material-ui/core'

export const ProfileCardWrapper = styled.div`
    width: 100%;
    height: fit-content;
    background-color: white;
    padding: 25px 30px 25px 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.1s ease-in;
        cursor: pointer;
    }
`

export const ProfileCardInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-overflow: hidden;
`

export const ProfileAvatar = styled(Avatar)`
    margin-top: auto;
    margin-bottom: auto;
    height: 45px !important;
    width: 45px !important;
    margin-right: 10px;
`

export const PersonInfo = styled.div`
    width: 100%;

    > h4 {
        font-size: 14px;
        font-weight: 700;
    }

    > p {
        font-size: 11px;
        font-weight: 400;
        margin-top: 3px;
    }
`

export const CUniteButton = styled.button`
    background-color: white !important;
    border-radius: 70px !important;
    padding: 1px 8px !important;
    height: 30px !important;
    border: 1.5px solid #DDA300 !important;
    color: #DDA300 !important;
    font-size: 10px !important;

    &:hover {
        background-color: #DDA300 !important;
        color: white !important;
        transition: 0.1s ease-in-out !important;
    }
`