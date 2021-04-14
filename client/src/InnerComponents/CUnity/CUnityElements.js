import styled from 'styled-components'

export const SidebarWrapper = styled.div`
    flex: 0.3;
    border-radius: 10px;
    height: fit-content;
    margin-right: 30px;
    position: sticky;
    top: 115px;

    @media screen and (max-width: 1040px) {
        display: none;
    }
`

export const CUnityWrapper = styled.div`
    flex: 0.7;
    width: 100%;

    @media screen and (max-width: 1040px) {
        flex: 1;
        margin: 0;
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

export const FindRandomWrapper = styled.div`
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 30px 25px 30px;
    margin-bottom: 30px;
`

export const RandomText = styled.h4`
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 420px;

    > p {
        margin-right: 15px;
        font-size: 40px;
        color: #11ADFF;
    }
`

export const RandomButton = styled.button`
    background-color: #DDA300 !important;
    border: 2px solid #DDA300 !important;
    color: white !important;
    width: 150px !important;
    border-radius: 5px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding: 12px 0 !important;
    
    &:hover {
        background-color: white !important;
        color: #DDA300 !important;
        cursor: pointer;
    }
`

export const ProfileGrid = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 38px;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`