import styled from 'styled-components'

export const SidebarJobs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: fit-content;
    border-radius: 5px;
    margin-bottom: 30px;
`

export const SidebarJobsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* background-color: green; */
    padding: 25px 30px 35px 30px;
`

export const SidebarJobsHeader = styled.div`
    /* background-color: blue; */
    width: 100%;
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    justify-content: space-evenly;
    margin-bottom: 22px;
`

export const SidebarJobsTitle = styled.h3`
    display: flex;
    font-size: 12px;
    margin-right: auto;
`

export const SidebarJobListing = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* background-color: green; */
`

export const SidebarJobsButton = styled.button`
    width: 100%;
    align-items: center;
    background-color: #DDA300;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    height: 32px;
    font-size: 12px;
    font-weight: 500;

    &:hover {
        background-color: white;
        color: #DDA300;
        transition: 0.1s ease-in-out;
        border: 2px solid #DDA300;
    }
`