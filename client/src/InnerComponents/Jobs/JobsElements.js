import styled from 'styled-components'
import {Button} from '@material-ui/core'

export const JobsWrapper = styled.div`
    flex: 0.7;
    width: 100%;

    /* Media screen when below pixel */
    @media screen and (max-width: 1040px) {
        flex: 1;
        margin: 0;
    }
`

export const SidebarWrapper = styled.div`
    flex: 0.3;
    border-radius: 10px;
    height: fit-content;
    margin-left: 30px;
    position: sticky;
    top: 115px;

    @media screen and (max-width: 1040px) {
        display: none;
    }
`

export const SubheadingWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    height: 7px;
    margin-bottom: 30px;
`

export const SubheadingText = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    background-color: #f3f2ef;
    margin-bottom: -5px;

    > h3 {
        font-size: 12px;
        color: black;
    }
`

export const NewJobButtonWrapper = styled.div`
    background-color: white;
    padding: 20px 30px;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 30px;
    height: fit-content;
`

export const NewJobButton = styled.button`
    background-color: #DDA300 !important;
    border: 2px solid #DDA300 !important;
    color: white !important;
    width: 100% !important;
    border-radius: 5px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding: 12px 0 !important;
    
    &:hover {
        background-color: white !important;
        color: #DDA300 !important;
    }
`