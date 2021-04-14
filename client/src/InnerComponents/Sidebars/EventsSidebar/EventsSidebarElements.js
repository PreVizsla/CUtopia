import styled from 'styled-components'

export const SidebarEvents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: fit-content;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const SidebarEventsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 25px 30px 35px 30px;
`

export const SidebarEventsHeader = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    justify-content: space-evenly;
    margin-bottom: 22px;
`

export const SidebarEventsTitle = styled.h3`
    display: flex;
    font-size: 12px;
    margin-right: auto;
`

export const SidebarEventsListing = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SidebarEventsButton = styled.button`
    width: 100% !important;
    align-items: center !important;
    background-color: #DDA300 !important;
    color: white !important;
    cursor: pointer !important;
    border: none !important;
    border-radius: 4px !important;
    height: 32px !important;
    font-size: 12px !important;
    font-weight: 500 !important;

    &:hover {
        background-color: white;
        color: #DDA300;
        transition: 0.1s ease-in-out;
        border: 2px solid #DDA300;
    }
`