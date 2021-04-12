import styled from 'styled-components'

export const Search = styled.div`
    background-color: white;
    border-radius: 5px;
    height: fit-content;
    margin-bottom: 30px;
    padding: 25px 30px 25px 30px;
`

export const SearchHeader = styled.div`
    /* background-color: blue; */
    width: 100%;
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    justify-content: space-evenly;
    margin-bottom: 22px;
`

export const SearchContent = styled.div`
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

export const FilterIcon = styled.div`
    color: lightgray;
    margin-left: 10px;
    
    &:hover {
        color: gray;
        cursor: pointer;
    }
`

export const SearchSubmit = styled.div`
    color: #DDA300;
    cursor: pointer;
    margin-left: 10px;
`

export const SearchTitle = styled.h3`
    display: flex;
    font-size: 12px;
    margin-right: auto;
`

