import styled from 'styled-components'

export const FeedWrapper = styled.div`
    flex: 0.7;
    /* background-color: blue; */
    width: 100%;

    @media screen and (max-width: 1040px) {
        flex: 1;
    }
`

export const FeedWrite = styled.div`
    background-color: white;
    border-radius: 5px;
    height: fit-content;
    margin-bottom: 30px;
    padding: 25px 30px 25px 30px;
`

export const FeedWriteHeader = styled.div`
    /* background-color: blue; */
    width: 100%;
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    justify-content: space-evenly;
    margin-bottom: 22px;
`

export const FeedWriteContent = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    /* background-color: blue; */
`

export const ContentForm = styled.input`
    color: black;
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
`

export const AttachImage = styled.div`
    color: lightgray;
    margin-left: 10px;
    
    &:hover {
        color: gray;
        cursor: pointer;
    }
`

export const ContentFormSubmit = styled.div`
    color: #DDA300;
    cursor: pointer;
    margin-left: 10px;
`

export const FeedWriteTitle = styled.h3`
    display: flex;
    font-size: 12px;
    margin-right: auto;
`

export const SubheadingWrapper = styled.div`
    display: flex;
    width: 100%;
    /* background-color: blue; */
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
        color: #DDA300;
    }
`

export const SidebarWrapper = styled.div`
    flex: 0.3;
    border-radius: 10px;
    height: fit-content;
    margin-left: 30px;
    position: sticky;
    /* background-color: green; */
    top: 115px;

    @media screen and (max-width: 1040px) {
        display: none;
    }
`
