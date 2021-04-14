import styled from 'styled-components'

export const SidebarWrapper = styled.div`
    flex: 0.27;
    flex-direction: column;
    width: 100%;
    height: 585px;
    // background-color: green;    
    margin-right: 30px;
    max-height: 100vh;
`

export const ActiveChatsSidebar = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const ActiveChats = styled.div`
    height: 70vh;
    /* background-color: yellow; */
    overflow-y: scroll;
    max-height: 425px;
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #DDA300;
        border-radius: 20px;
        border: 3px solid white;
    }
`

export const ActiveChatsSidebarHeader = styled.div`
    width: 100%;
    display: flex;
    padding: 18px 20px;
    border-bottom: 2px solid #f3f2ef;
    justify-content: flex-start;
    height: 60px;
    align-items: center;

    > h3 {
        font-size: 12px;
        margin-right: auto;
    }
`

export const FindMentorButtonWrapper = styled.div`
    background-color: white;
    padding: 20px 30px;
    align-items: center;
    border-radius: 5px;
`

export const FindMentorButton = styled.button`
    background-color: #02C596 !important;
    border: 2px solid #02C596 !important;
    color: white !important;
    width: 100% !important;
    border-radius: 5px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding: 9px 0;
    
    &:hover {
        background-color: white !important;
        color: #02C596 !important;
    }
`