import styled from 'styled-components'
import { Avatar, Button } from '@material-ui/core'

export const Card = styled.div`
    background-color: white;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: scale(1.02);
        transition: all 0.1s ease-in;
        cursor: pointer;
    }
`

export const CardImageWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    height: fit-content;

    > img {
        height: 170px;
        width: 100%;
        object-fit: cover; 
        border-radius: 10px 10px 30px 30px;
    }
`

export const EventDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 22px;
`

export const EventInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    height: fit-content;
    align-items: center;
    margin-bottom: 15px;
`

export const EventAvatar = styled(Avatar)`
    margin-top: auto;
    margin-bottom: auto;
    height: 45px !important;
    width: 45px !important;
    margin-right: 10px;
`

export const EventName = styled.div`
    width: 100%;
    max-width: 200px; // nanti setel
    overflow: hidden;

    & .name {
        max-height: 50px;

        > h4 {
            font-size: 18px;
            font-weight: 600;

            &::after {
                content: '';
            }
        }
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


export const EventDescriptionWrapper = styled.div`
    height: 140px;
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    overflow-wrap: break-word;
    overflow: hidden;
    margin-bottom: 20px;
  
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const KnowMore = styled.button`
    background-color: #DDA300 !important;
    color: white !important;
    border: 2px solid #DDA300 !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding : 12px;
    border-radius : 5px;
    &:hover {
        background-color: white !important;
        color: #DDA300 !important;
        cursor: pointer;
    }
`