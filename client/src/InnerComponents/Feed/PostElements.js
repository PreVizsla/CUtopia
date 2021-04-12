import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

export const FeedPost = styled.div`
    height: fit-content;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const FeedPostTop = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 30px 25px 30px;
`

export const FeedPostProfileInfo = styled.div`
    width: 100%;
    display: flex;
    height: fit-content;
    /* background-color: yellow; */
    align-items: center;
    margin-bottom: 15px;
`

export const PostAvatar = styled(Avatar)`
    margin-top: auto;
    margin-bottom: auto;
    height: 55px !important;
    width: 55px !important;
    margin-right: 10px;
`

export const PostAuthor = styled.div`
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

export const PostContent = styled.div`
    /* background-color: green; */
    height: fit-content;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
`

export const PostImageWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 15px;

    > img {
        margin: auto;
        height: auto;
        width: auto;
        max-width: 100%;
        border-radius: 5px;
    }
`

export const FeedPostBottom = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    /* background-color: blue; */
    border-top: 2px solid #f3f2ef;
`

export const PostBottomLeft = styled.div`
    display: flex;
`

export const ActionButton = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    

    ${({ left }) => left && `
        border-right: 2px solid #f3f2ef;
        width: 100px;
    ` || `
        border-left: 2px solid #f3f2ef;
        width: 120px;
    ` 
    }

    > h4 {
        margin-left: 0.5rem;
        font-weight: 600;
        font-size: 12px;
    }

    &:hover {
        background-color: lightgray;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const PostBottomRight = styled.div`
    
`

